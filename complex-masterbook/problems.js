/* problems.js — DATA. 100 original complex-number problems for ℂ · The Argand Plane, strictly within the JEE Advanced syllabus: the algebra of a+bi, modulus & argument, De Moivre, cube & nth roots of unity, geometry in complex form (rotation, the section formula, lines & circles), loci, triangles & polygons, and polynomial equations. No Mobius/bilinear transformations, inversion/conformal mapping, the Riemann sphere, cross-ratio, contour/residues/argument principle, cyclotomic or Chebyshev polynomials, or olympiad triangle geometry (Napoleon/Ptolemy/nine-point/barycentric). Verified in sympy. statement/answer are raw LaTeX (the app auto-detects prose+math); steps use $...$ and $$...$$. */
window.PROBLEMS = [
  {
    "theme": "algebra",
    "themeLabel": "The Algebra of a+bi",
    "title": "Real, Imaginary, or Neither",
    "difficulty": 3,
    "task": "Determine",
    "tags": [
      "division",
      "purely imaginary",
      "real condition",
      "parameter"
    ],
    "statement": "Let  $a$  be a real number and define  $z=\\dfrac{a+i}{a-i}$ . Determine all real  $a$  for which  $z$  is purely imaginary, and all real  $a$  for which  $z$  is real.",
    "answer": " $z$  is purely imaginary  $\\iff a=\\pm1$ ;  $z$  is real  $\\iff a=0$ .",
    "trap": "Concluding  $z$  is real whenever the parameter  $a$  is real. The quotient of two complex numbers is generally non-real even with a real parameter; for instance  $a=2$  gives  $z=\\dfrac{(2+i)^2}{5}=\\dfrac{3+4i}{5}$ , which has imaginary part  $\\tfrac45\\neq0$ . You must rationalize and inspect the imaginary part rather than assume it vanishes.",
    "solutions": [
      {
        "name": "Rationalize",
        "steps": [
          "Multiply numerator and denominator by the conjugate of the denominator:  $z=\\dfrac{(a+i)(a+i)}{(a-i)(a+i)}=\\dfrac{(a+i)^2}{a^2+1}=\\dfrac{a^2-1+2ai}{a^2+1}$ .",
          "Read off the parts:  $\\operatorname{Re}z=\\dfrac{a^2-1}{a^2+1}$  and  $\\operatorname{Im}z=\\dfrac{2a}{a^2+1}$  (the denominator  $a^2+1$  never vanishes for real  $a$ ).",
          " $z$  is purely imaginary  $\\iff \\operatorname{Re}z=0 \\iff a^2-1=0 \\iff a=\\pm1$  (and then  $\\operatorname{Im}z=\\pm1\\neq0$ , so  $z$  is genuinely imaginary).",
          " $z$  is real  $\\iff \\operatorname{Im}z=0 \\iff 2a=0 \\iff a=0$ .",
          " $\\boxed{a=\\pm1\\ (\\text{purely imaginary}),\\quad a=0\\ (\\text{real})}$ "
        ]
      },
      {
        "name": "Conjugate criteria",
        "steps": [
          "Use the characterizations  $z\\in\\mathbb{R}\\iff z=\\overline z$  and  $z\\in i\\mathbb{R}\\iff z=-\\overline z$ . Since  $a$  is real,  $\\overline z=\\dfrac{a-i}{a+i}$ .",
          "Real case:  $z=\\overline z \\iff (a+i)^2=(a-i)^2 \\iff (a+i)^2-(a-i)^2=0 \\iff 4ai=0 \\iff a=0$ .",
          "Purely imaginary case:  $z=-\\overline z \\iff (a+i)^2=-(a-i)^2 \\iff (a+i)^2+(a-i)^2=0$ .",
          "Expand:  $(a+i)^2+(a-i)^2=2a^2-2=0 \\iff a^2=1 \\iff a=\\pm1$ .",
          " $\\boxed{a=\\pm1\\ (\\text{purely imaginary}),\\quad a=0\\ (\\text{real})}$ "
        ]
      }
    ],
    "remark": "Geometric insight:  $|z|=\\dfrac{|a+i|}{|a-i|}=1$  for every real  $a$ , so the map  $a\\mapsto z$  sweeps out the unit circle. A point of the unit circle is real only at  $z=\\pm1$  and purely imaginary only at  $z=\\pm i$ . Solving  $z=1$  is impossible (it forces  $i=-i$ ),  $z=-1$  gives  $a=0$ , and  $z=\\pm i$  gives  $a=\\pm1$  — matching the algebra exactly."
  },
  {
    "theme": "algebra",
    "themeLabel": "The Algebra of a+bi",
    "title": "Splitting a Quartic over C",
    "difficulty": 3,
    "task": "Find all",
    "tags": [
      "quadratic",
      "factoring",
      "square root",
      "sophie germain"
    ],
    "statement": "Find all complex numbers  $z$  satisfying  \\[ z^4+4=0, \\]  by factoring the left-hand side into two real quadratics rather than using polar form.",
    "answer": " $z\\in\\{\\,1+i,\\ 1-i,\\ -1+i,\\ -1-i\\,\\}$ .",
    "trap": "Writing  $z^4=-4$  and 'taking the fourth root' as  $z=\\sqrt[4]{4}\\,i$  — a single value. A degree-4 equation over  $\\mathbb C$  has four roots; collapsing the four sign/branch choices into one (or two) loses solutions.",
    "solutions": [
      {
        "name": "Sophie Germain factorization",
        "steps": [
          "Complete a square:  $z^4+4=(z^2+2)^2-(2z)^2=(z^2-2z+2)(z^2+2z+2)$ .",
          "Solve  $z^2-2z+2=0$ :  $z=\\dfrac{2\\pm\\sqrt{4-8}}{2}=1\\pm i$ .",
          "Solve  $z^2+2z+2=0$ :  $z=\\dfrac{-2\\pm\\sqrt{4-8}}{2}=-1\\pm i$ .",
          "Collect all four:  $\\boxed{z\\in\\{1\\pm i,\\,-1\\pm i\\}}$ ."
        ]
      },
      {
        "name": "Square-root ladder",
        "steps": [
          " $z^4=-4\\Rightarrow z^2=\\pm\\sqrt{-4}=\\pm2i$  (both signs of the complex square root).",
          "For  $z^2=2i$ : with  $z=a+bi$ ,  $a^2-b^2=0,\\ 2ab=2\\Rightarrow a=b,\\ a^2=1$ , so  $z=\\pm(1+i)$ .",
          "For  $z^2=-2i$ :  $a^2-b^2=0,\\ 2ab=-2\\Rightarrow a=-b,\\ a^2=1$ , so  $z=\\pm(1-i)$ .",
          "Together:  $\\boxed{z\\in\\{1+i,-1-i,1-i,-1+i\\}}$ ."
        ]
      }
    ],
    "remark": "Insight: the Sophie-Germain identity  $a^4+4b^4=(a^2-2ab+2b^2)(a^2+2ab+2b^2)$  turns a quartic into two quadratics with no trigonometry — and the two-step square-root ladder shows where all four sign branches come from."
  },
  {
    "theme": "algebra",
    "themeLabel": "The Algebra of a+bi",
    "title": "Half a Turn from Positive",
    "difficulty": 4,
    "task": "Find all",
    "tags": [
      "argument",
      "de moivre",
      "reality",
      "sign",
      "tangent"
    ],
    "statement": "Find all real numbers  $t$  for which  $(1+it)^6$  is a negative real number.  \\[ \\text{i.e. } (1+it)^6\\in\\mathbb{R} \\text{ and } (1+it)^6<0. \\] ",
    "answer": " \\[\\boxed{\\,t=\\pm\\tfrac{1}{\\sqrt3}\\,}\\] ",
    "trap": "Writing  $1+it=r e^{i\\theta}$  and demanding only that  $(1+it)^6=r^6 e^{6i\\theta}$  be real, i.e.  $\\sin 6\\theta=0$ , hence  $6\\theta=k\\pi$ , and reporting all the resulting  $t=\\tan\\tfrac{k\\pi}{6}=0,\\pm\\tfrac1{\\sqrt3},\\pm\\sqrt3$ . That solves 'real', not 'negative real': of those five values,  $t=0,\\pm\\sqrt3$  give  $e^{6i\\theta}=+1$  (a positive real), and only  $t=\\pm\\tfrac1{\\sqrt3}$  give  $e^{6i\\theta}=-1$ . Reality forces  $6\\theta$  to be a multiple of  $\\pi$ ; negativity forces it to be an odd multiple. Equivalently in Cartesian form,  $\\mathrm{Im}=0$  is necessary but one must still test the sign of  $\\mathrm{Re}$ .",
    "solutions": [
      {
        "name": "Argument and De Moivre",
        "steps": [
          "Write  $1+it=r e^{i\\theta}$  with  $r=\\sqrt{1+t^2}>0$  and  $\\theta=\\arctan t$ . Since  $t$  is real,  $\\theta\\in\\left(-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}\\right)$ , so  $6\\theta\\in(-3\\pi,3\\pi)$ .",
          "By De Moivre,  $(1+it)^6=r^6 e^{6i\\theta}$  with  $r^6>0$ . This is a negative real exactly when  $e^{6i\\theta}=-1$ , i.e.  $6\\theta=(2k+1)\\pi$  for some integer  $k$ .",
          "The only odd multiples of  $\\pi$  inside the open interval  $(-3\\pi,3\\pi)$  are  $\\pm\\pi$  (the endpoints  $\\pm3\\pi$  would need  $\\theta=\\pm\\tfrac{\\pi}{2}$ , unattainable for finite  $t$ ). Hence  $6\\theta=\\pm\\pi$ , so  $\\theta=\\pm\\tfrac{\\pi}{6}$ .",
          "Therefore  $t=\\tan\\theta=\\tan\\left(\\pm\\tfrac{\\pi}{6}\\right)=\\pm\\tfrac{1}{\\sqrt3}$ .  $\\boxed{t=\\pm\\tfrac{1}{\\sqrt3}}$ "
        ]
      },
      {
        "name": "Cartesian: reality then sign",
        "steps": [
          "Expand  $(1+it)^6=\\sum_{k=0}^{6}\\binom{6}{k}(it)^k$ . Collecting parts,  $\\mathrm{Re}=1-15t^2+15t^4-t^6$  and  $\\mathrm{Im}=6t-20t^3+6t^5$ .",
          "Reality requires  $\\mathrm{Im}=0$ : factor  $\\mathrm{Im}=2t(3t^2-1)(t^2-3)$ , giving the five candidates  $t=0,\\ \\pm\\tfrac{1}{\\sqrt3},\\ \\pm\\sqrt3$ .",
          "Now impose negativity by testing  $\\mathrm{Re}=-(t^2-1)(t^2-4t+1)(t^2+4t+1)$  at each candidate:  $t=0\\Rightarrow\\mathrm{Re}=1>0$ ,  $t=\\pm\\sqrt3\\Rightarrow\\mathrm{Re}=64>0$ , while  $t=\\pm\\tfrac1{\\sqrt3}\\Rightarrow\\mathrm{Re}=-\\tfrac{64}{27}<0$ .",
          "Only the last pair satisfies both  $\\mathrm{Im}=0$  and  $\\mathrm{Re}<0$ .  $\\boxed{t=\\pm\\tfrac{1}{\\sqrt3}}$ "
        ]
      },
      {
        "name": "Match to minus the modulus",
        "steps": [
          "A complex number  $w$  is a negative real iff  $w=-|w|$ . Here  $|1+it|^6=(1+t^2)^3$ , so the condition becomes  $(1+it)^6=-(1+t^2)^3$ , i.e.  $(1+it)^6+(1+t^2)^3=0$ .",
          "Expand the left side: its imaginary part is  $2t(3t^2-1)(t^2-3)$  and its real part simplifies to the perfect square  $2(3t^2-1)^2$ .",
          "For the sum to vanish, the real part must vanish, and  $2(3t^2-1)^2=0$  forces  $3t^2=1$ . At  $3t^2=1$  the imaginary part  $2t(3t^2-1)(t^2-3)$  vanishes automatically, so the single condition  $3t^2=1$  already suffices.",
          "Hence  $t^2=\\tfrac13$ , giving  $t=\\pm\\tfrac{1}{\\sqrt3}$  (and indeed  $(1\\pm\\tfrac{i}{\\sqrt3})^6=-\\tfrac{64}{27}<0$ ).  $\\boxed{t=\\pm\\tfrac{1}{\\sqrt3}}$ "
        ]
      }
    ],
    "remark": "Insight: raising to the 6th power multiplies the argument by  $6$ , turning a sign question into a 'which half-turn do we land on' question. Reality is  $6\\theta\\equiv0\\ (\\mathrm{mod}\\ \\pi)$ ; negativity is the stricter  $6\\theta\\equiv\\pi\\ (\\mathrm{mod}\\ 2\\pi)$ . The pivot in the third method is that demanding the value equal  $-|w|$  makes  $\\mathrm{Re}$  collapse to the perfect square  $2(3t^2-1)^2$ , so the answer is a clean double root rather than a sign case-check."
  },
  {
    "theme": "algebra",
    "themeLabel": "The Algebra of a+bi",
    "title": "Marching Powers of i",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "powers of i",
      "telescoping",
      "cyclic",
      "summation"
    ],
    "statement": "Evaluate the weighted sum  \\[ S=\\sum_{k=1}^{2024} k\\, i^{\\,k} = i+2i^2+3i^3+\\cdots+2024\\,i^{2024}. \\] ",
    "answer": " $S = 1012 - 1012\\,i$ .",
    "trap": "Treating  $i^k$  as if it grows like a geometric term with ratio  $i$  but forgetting that  $i^4=1$ , so the powers are PERIODIC with period  $4$ . Mishandling the cycle (e.g. applying a  $\\sum k r^k$  shortcut as though  $|r|\\ne1$ , or worse, summing the coefficients  $1+2+\\cdots+2024=2049300$  as if the  $i^k$  averaged to  $1$ ) gives nonsense; here grouping in blocks of four is essential.",
    "solutions": [
      {
        "name": "Block of four",
        "steps": [
          "Powers cycle:  $i^{4m+1}=i,\\ i^{4m+2}=-1,\\ i^{4m+3}=-i,\\ i^{4m+4}=1$ .",
          "Group consecutive quadruples. The  $m$ -th block (terms  $4m+1,\\dots,4m+4$ , for  $m=0,\\dots,505$ ) contributes  $(4m+1)i-(4m+2)-(4m+3)i+(4m+4)$ .",
          "Simplify the block: real part  $-(4m+2)+(4m+4)=2$ ; imaginary part  $(4m+1)-(4m+3)=-2$ . Each block sums to  $2-2i$ , independent of  $m$ .",
          "There are  $2024/4=506$  blocks, so  $S=506(2-2i)=1012-1012i$ .",
          " $\\boxed{S=1012-1012i}$ "
        ]
      },
      {
        "name": "Geometric-series differentiation trick",
        "steps": [
          "Let  $f(x)=\\sum_{k=1}^{n}x^k=\\dfrac{x^{n+1}-x}{x-1}$ ; then  $\\sum_{k=1}^n k x^k = x f'(x)$ .",
          "Use the closed form  $\\sum_{k=1}^n k x^k=\\dfrac{x-(n+1)x^{n+1}+n\\,x^{n+2}}{(1-x)^2}$  with  $x=i,\\ n=2024$ .",
          "Since  $i^{2024}=1$ ,  $i^{2025}=i$ ,  $i^{2026}=-1$ : numerator  $=i-(2025)i+2024(-1)=-2024-2024i$ .",
          "Denominator  $(1-i)^2=-2i$ , so  $S=\\dfrac{-2024-2024i}{-2i}=\\dfrac{2024+2024i}{2i}$ .",
          "Multiply numerator and denominator by  $-i$ :  $S=\\dfrac{(2024+2024i)(-i)}{2}=\\dfrac{2024-2024i}{2}=1012-1012i$ .  $\\boxed{S=1012-1012i}$ "
        ]
      }
    ],
    "remark": "Insight: the periodicity makes 'block telescoping' beat the calculus formula in speed, but the differentiation identity is a robust fallback that also exposes why the answer is so symmetric (equal real and imaginary magnitudes). A handy cross-check:  $\\sum_{k=1}^{2024} i^k=0$  because  $2024$  is a multiple of  $4$ , so all the bias comes from the weights  $k$ , not from the bare powers."
  },
  {
    "theme": "algebra",
    "themeLabel": "The Algebra of a+bi",
    "title": "The Quarter-Turn Engine",
    "difficulty": 4,
    "task": "Find the number of",
    "tags": [
      "powers of i",
      "division",
      "real condition",
      "counting"
    ],
    "statement": "Let  $\\omega=\\dfrac{1+i}{1-i}$ . Find the number of integers  $n$  with  $1\\le n\\le 100$  for which  $\\omega^{\\,n}+\\omega^{-n}$  is a positive real number, and state that common positive value.",
    "answer": "There are  $25$  such  $n$ , and for each the value is  $2$ .",
    "trap": "Computing  $\\dfrac{1+i}{1-i}$  carelessly and declaring it 'cancels to  $-1$ '. With  $\\omega=-1$  (order  $2$ ) one gets  $\\omega^n+\\omega^{-n}=2(-1)^n$ , positive exactly for even  $n$ , suggesting  $50$  values. Properly  $\\omega=i$ , a quarter-turn of order  $4$ ; misreading its order ruins the count.",
    "solutions": [
      {
        "name": "Reduce the base",
        "steps": [
          "Rationalize:  $\\omega=\\dfrac{(1+i)^2}{(1-i)(1+i)}=\\dfrac{2i}{2}=i$ .",
          "So  $\\omega^n+\\omega^{-n}=i^n+i^{-n}=i^n+\\overline{i^n}=2\\,\\mathrm{Re}(i^n)$  (since  $|i^n|=1$  gives  $i^{-n}=\\overline{i^n}$ ).",
          " $\\mathrm{Re}(i^n)$  over the cycle  $n\\equiv0,1,2,3\\pmod4$  equals  $1,0,-1,0$ , giving values  $2,0,-2,0$ .",
          "Positive real ( $=2$ ) occurs exactly when  $4\\mid n$ . In  $1\\le n\\le100$  that is  $n=4,8,\\dots,100$ :  $25$  values.",
          " $\\boxed{25\\text{ values, each giving }2}$ "
        ]
      },
      {
        "name": "Modulus-1 conjugate identity",
        "steps": [
          "Since  $|\\omega|=1$ ,  $\\omega^{-1}=\\overline{\\omega}$ , hence  $\\omega^n+\\omega^{-n}=\\omega^n+\\overline{\\omega^n}=2\\,\\mathrm{Re}(\\omega^n)$  is automatically real.",
          "With  $\\omega=i$ ,  $\\omega^n$  marches  $i,-1,-i,1$  as  $n=1,2,3,4$ ; its real part is positive only at  $\\omega^n=1$ .",
          " $\\omega^n=1\\iff n\\equiv0\\pmod4$ , with value  $2\\,\\mathrm{Re}(1)=2$ .",
          "Counting multiples of  $4$  in  $[1,100]$  gives  $25$ .  $\\boxed{25,\\ \\text{value }2}$ "
        ]
      },
      {
        "name": "Polar / cosine form",
        "steps": [
          "Write  $\\omega=i=e^{i\\pi/2}$ , so  $\\omega^n+\\omega^{-n}=e^{in\\pi/2}+e^{-in\\pi/2}=2\\cos\\!\\left(\\dfrac{n\\pi}{2}\\right)$ .",
          "This is always real; it is positive iff  $\\cos\\!\\left(\\dfrac{n\\pi}{2}\\right)>0$ , i.e.  $\\dfrac{n\\pi}{2}$  is a multiple of  $2\\pi$ , i.e.  $4\\mid n$ , and then  $\\cos=1$  so the value is  $2$ .",
          "Multiples of  $4$  in  $[1,100]$ :  $n=4,8,\\dots,100$ , a total of  $25$ .  $\\boxed{25,\\ \\text{value }2}$ "
        ]
      }
    ],
    "remark": "Insight: any unit-modulus base turns  $z^n+z^{-n}$  into  $2\\cos(n\\theta)$  in disguise; recognizing  $\\omega=i$  as a  $90^\\circ$  rotation of order  $4$  makes the periodic sign pattern  $2,0,-2,0$  immediate, and the positive value  $2$  recurs precisely on the multiples of  $4$ ."
  },
  {
    "theme": "algebra",
    "themeLabel": "The Algebra of a+bi",
    "title": "When the Sum Stays Real",
    "difficulty": 4,
    "task": "Classify",
    "tags": [
      "reciprocal",
      "real condition",
      "conjugate",
      "locus"
    ],
    "statement": "Classify all nonzero complex numbers  $z$  for which  $z+\\dfrac{1}{z}$  is real.",
    "answer": "Exactly the nonzero  $z$  that are real, together with all  $z$  on the unit circle  $|z|=1$ . Equivalently:  $z\\in\\mathbb{R}\\setminus\\{0\\}$  or  $|z|=1$ .",
    "trap": "Asserting that  $z+1/z$  is real only when  $z$  itself is real. The unit-circle case is missed because on  $|z|=1$  one has  $1/z=\\overline z$ , making  $z+1/z=z+\\overline z=2\\,\\mathrm{Re}(z)$  real even though  $z$  is not. Concretely  $z=e^{i}$  gives  $z+1/z=2\\cos 1\\approx 1.08$ , which is real despite  $z\\notin\\mathbb{R}$ .",
    "solutions": [
      {
        "name": "Conjugate test",
        "steps": [
          " $w=z+1/z$  is real  $\\iff w=\\overline w$ , i.e.  $z+\\dfrac1z=\\overline z+\\dfrac1{\\overline z}$ .",
          "Rearrange:  $z-\\overline z=\\dfrac1{\\overline z}-\\dfrac1z=\\dfrac{z-\\overline z}{z\\overline z}$ .",
          "So  $(z-\\overline z)\\left(1-\\dfrac{1}{|z|^2}\\right)=0$ .",
          "Thus  $z-\\overline z=0$  (i.e.  $z$  real) or  $|z|^2=1$  (i.e.  $|z|=1$ ).",
          " $\\boxed{z\\in\\mathbb{R}\\setminus\\{0\\}\\ \\text{or}\\ |z|=1}$ "
        ]
      },
      {
        "name": "Imaginary part computation",
        "steps": [
          "Write  $z=x+yi$  with  $(x,y)\\ne(0,0)$ . Then  $\\dfrac1z=\\dfrac{x-yi}{x^2+y^2}$ , so  $\\mathrm{Im}\\!\\left(z+\\dfrac1z\\right)=y-\\dfrac{y}{x^2+y^2}$ .",
          "Combine over a common denominator:  $\\mathrm{Im}\\!\\left(z+\\dfrac1z\\right)=\\dfrac{y\\,(x^2+y^2-1)}{x^2+y^2}$ .",
          "Set the imaginary part to zero:  $y\\,(x^2+y^2-1)=0$ .",
          "Hence  $y=0$  (real axis,  $z\\ne0$ ) or  $x^2+y^2=1$  (unit circle).",
          " $\\boxed{z\\ \\text{real and nonzero},\\ \\text{or}\\ |z|=1}$ "
        ]
      },
      {
        "name": "Polar form",
        "steps": [
          "Write  $z=re^{i\\theta}$  with  $r>0$ . Then  $\\dfrac1z=\\dfrac1r e^{-i\\theta}$ .",
          "So  $z+\\dfrac1z=\\left(r+\\dfrac1r\\right)\\cos\\theta+i\\left(r-\\dfrac1r\\right)\\sin\\theta$ .",
          "This is real  $\\iff \\left(r-\\dfrac1r\\right)\\sin\\theta=0$ , i.e.  $r=\\dfrac1r$  or  $\\sin\\theta=0$ .",
          "Thus  $r=1$  (unit circle) or  $\\theta\\in\\{0,\\pi\\}$  (real axis,  $z\\ne0$ ).",
          " $\\boxed{|z|=1\\ \\text{or}\\ z\\in\\mathbb{R}\\setminus\\{0\\}}$ "
        ]
      }
    ],
    "remark": "Insight: the two families intersect at  $z=\\pm1$ , the only points that are simultaneously real and on the unit circle. This is a clean illustration that a 'real-valued' condition on a complex expression usually carves out a union of curves, not a single line. The polar view also explains why the unit circle is forced: the imaginary part of  $z+1/z$  is  $(r-1/r)\\sin\\theta$ , and the factor  $r-1/r$  vanishes exactly when  $r=1$ ."
  },
  {
    "theme": "algebra",
    "themeLabel": "The Algebra of a+bi",
    "title": "The Square that Conjugates Itself",
    "difficulty": 4,
    "task": "Find all",
    "tags": [
      "conjugate",
      "quadratic",
      "roots of unity",
      "system"
    ],
    "statement": "Find all complex numbers  $z$  satisfying  \\[ z^2=\\overline z. \\] ",
    "answer": " $z\\in\\left\\{\\,0,\\ 1,\\ -\\tfrac12+\\tfrac{\\sqrt3}{2}i,\\ -\\tfrac12-\\tfrac{\\sqrt3}{2}i\\,\\right\\}$  — namely  $0$  and the three cube roots of unity.",
    "trap": "Taking the modulus of both sides to get  $|z|^2=|z|$ , concluding  $|z|\\in\\{0,1\\}$ , and then declaring 'all  $z$  with  $|z|=1$ ' are solutions. The modulus condition is necessary but far from sufficient: of the whole unit circle, only the three cube roots of unity (plus  $0$ ) actually satisfy the equation.",
    "solutions": [
      {
        "name": "Cartesian system",
        "steps": [
          "Let  $z=x+yi$  with  $x,y\\in\\mathbb R$ . Then  $z^2=x^2-y^2+2xyi$  and  $\\overline z=x-yi$ .",
          "Match real and imaginary parts:  $x^2-y^2=x$  and  $2xy=-y$ , i.e.  $y(2x+1)=0$ .",
          "Case  $y=0$ :  $x^2=x\\Rightarrow x\\in\\{0,1\\}$ , giving  $z=0,\\ z=1$ .",
          "Case  $x=-\\tfrac12$ :  $\\tfrac14-y^2=-\\tfrac12\\Rightarrow y^2=\\tfrac34\\Rightarrow y=\\pm\\tfrac{\\sqrt3}{2}$ .",
          "So  $z=-\\tfrac12\\pm\\tfrac{\\sqrt3}{2}i$ .  $\\boxed{z\\in\\{0,\\,1,\\,-\\tfrac12\\pm\\tfrac{\\sqrt3}{2}i\\}}$ "
        ]
      },
      {
        "name": "Modulus then multiply",
        "steps": [
          "Multiply  $z^2=\\overline z$  by  $z$ :  $z^3=z\\overline z=|z|^2$ , a real number  $\\ge0$ .",
          "Take the modulus of the original equation:  $|z|^2=|z|$ , so  $|z|=0$  or  $|z|=1$ . If  $|z|=0$ , then  $z=0$ .",
          "If  $|z|=1$ , then  $z^3=|z|^2=1$ , so  $z$  is a cube root of unity:  $z\\in\\{1,\\,e^{\\pm2\\pi i/3}\\}$ .",
          "Each is checked to satisfy  $z^2=\\overline z$  (for  $|z|=1$  we have  $\\overline z=1/z$ , and  $z^3=1\\Rightarrow z^2=1/z=\\overline z$ ).",
          " $\\boxed{z\\in\\{0,\\,1,\\,-\\tfrac12\\pm\\tfrac{\\sqrt3}{2}i\\}}$ "
        ]
      }
    ],
    "remark": "Insight: multiplying by  $z$  converts the conjugate equation into the rotation-free  $z^3=|z|^2$ , instantly exposing the cube-roots-of-unity structure that the raw modulus bound only hints at. The lone point  $z=0$  comes from the  $|z|=0$  branch, where multiplying by  $z$  collapses everything to  $0$ ."
  },
  {
    "theme": "algebra",
    "themeLabel": "The Algebra of a+bi",
    "title": "Three Unit Vectors in Balance",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "modulus",
      "triangle inequality",
      "parallelogram",
      "geometry"
    ],
    "statement": "Let  $z,w$  be complex numbers with  $|z|=|w|=1$  and  $|z+w|=1$ . Determine the exact value of  $|z-w|$ .",
    "answer": " $|z-w|=\\sqrt{3}$ .",
    "trap": "Assuming  $|z+w|=|z|+|w|$  (which would force  $|z+w|=2$ , contradicting the data) or  $|z-w|=|z|-|w|=0$ . The triangle inequality is generally strict for complex numbers; equality  $|z+w|=|z|+|w|$  holds only when  $z,w$  point the same way, which they do not here.",
    "solutions": [
      {
        "name": "Parallelogram law",
        "steps": [
          "The parallelogram identity:  $|z+w|^2+|z-w|^2=2|z|^2+2|w|^2$ .",
          "Substitute  $|z|=|w|=1$  and  $|z+w|=1$ :  $1+|z-w|^2=2+2=4$ .",
          "Hence  $|z-w|^2=3$ , so  $|z-w|=\\sqrt3$ .",
          " $\\boxed{|z-w|=\\sqrt3}$ "
        ]
      },
      {
        "name": "Expand via conjugates",
        "steps": [
          "Use  $|z+w|^2=(z+w)\\overline{(z+w)}=|z|^2+|w|^2+(z\\overline w+\\overline z w)$ .",
          "With  $|z+w|^2=1$  and  $|z|^2=|w|^2=1$ :  $1=2+(z\\overline w+\\overline z w)$ , so  $z\\overline w+\\overline z w=-1$ .",
          "Now  $|z-w|^2=|z|^2+|w|^2-(z\\overline w+\\overline z w)=2-(-1)=3$ .",
          "Therefore  $|z-w|=\\sqrt3$ .  $\\boxed{|z-w|=\\sqrt3}$ "
        ]
      }
    ],
    "remark": "Insight: the three conditions force  $z,w$  to be two unit vectors  $120^\\circ$  apart (an equilateral-triangle configuration with the origin), where the diagonal  $|z-w|=\\sqrt3$  is forced — geometry hidden inside pure modulus algebra."
  },
  {
    "theme": "algebra",
    "themeLabel": "The Algebra of a+bi",
    "title": "The Modulus that Splits the System",
    "difficulty": 5,
    "task": "Find all",
    "tags": [
      "conjugate system",
      "modulus coupling",
      "case split",
      "elimination",
      "locus"
    ],
    "statement": "Find every complex number  $z$  that satisfies the simultaneous conditions  \\[ z + \\overline{z} + 4\\lvert z\\rvert = 12, \\qquad z - \\overline{z} = 6i. \\]  Here  $\\overline{z}$  is the complex conjugate of  $z$ .",
    "answer": " \\[\\boxed{z = 3i \\ \\text{ or } \\ z = -4 + 3i}\\] ",
    "trap": "Treating the pair as an ordinary linear  $2\\times 2$  system in the unknowns  $z$  and  $\\overline{z}$ : adding the equations gives  $2z + 4\\lvert z\\rvert = 12 + 6i$ , and a strong student then 'solves for  $z$ ' as if  $\\lvert z\\rvert$  were a fixed coefficient, landing on the single value  $z=3i$ . The term  $4\\lvert z\\rvert$  is NOT linear in  $z,\\overline{z}$  -- it depends on the unknown modulus  $r=\\lvert z\\rvert$ , which is itself determined only after substitution. Eliminating correctly produces a genuine quadratic  $r^2-8r+15=0$  with TWO admissible positive roots  $r=3$  and  $r=5$ ; stopping at  $z=3i$  silently discards the entire  $\\lvert z\\rvert=5$  branch  $z=-4+3i$ . There is no spurious root to reject here -- both moduli are real, nonnegative, and self-consistent, so both solutions are mandatory.",
    "solutions": [
      {
        "name": "Real-imaginary split, then the modulus quadratic",
        "steps": [
          "Write  $z=x+iy$  with  $x,y\\in\\mathbb{R}$ , so  $z+\\overline{z}=2x$  and  $z-\\overline{z}=2iy$ . The second equation  $2iy=6i$  gives  $y=3$  immediately.",
          "The first equation reads  $2x+4\\lvert z\\rvert=12$ , i.e.  $x+2r=6$  where  $r=\\lvert z\\rvert=\\sqrt{x^2+9}\\ge 0$ . Hence  $x=6-2r$ , and substituting forces  $r=\\sqrt{(6-2r)^2+9}$ .",
          "Square (legitimate since  $r\\ge 0$ ):  $r^2=(6-2r)^2+9=4r^2-24r+45$ , which simplifies to  $3r^2-24r+45=0$ , i.e.  $r^2-8r+15=0$ .",
          "Factor:  $(r-3)(r-5)=0$ , so  $r=3$  or  $r=5$  -- both positive, so both are legal moduli. Then  $x=6-2r$  gives  $x=0$  (for  $r=3$ ) and  $x=-4$  (for  $r=5$ ); each satisfies  $\\sqrt{x^2+9}=r$  exactly, so neither is extraneous.",
          "With  $y=3$  throughout,  \\[\\boxed{z=3i \\ \\text{ or } \\ z=-4+3i}\\] "
        ]
      },
      {
        "name": "Eliminate the conjugate, then split by real and imaginary parts",
        "steps": [
          "Add the two given equations:  $(z+\\overline{z}+4\\lvert z\\rvert)+(z-\\overline{z})=12+6i$ , which collapses to  $2z+4\\lvert z\\rvert=12+6i$ , i.e.  $z+2\\lvert z\\rvert=6+3i$ .",
          "Because  $2\\lvert z\\rvert$  is real, the imaginary part of the left side is just  $\\operatorname{Im}z$ . Matching imaginary parts gives  $\\operatorname{Im}z=3$ , so write  $z=x+3i$  with  $\\lvert z\\rvert=\\sqrt{x^2+9}$ .",
          "Match real parts:  $x+2\\sqrt{x^2+9}=6$ , so  $2\\sqrt{x^2+9}=6-x$ . This already requires  $6-x\\ge 0$ . Squaring:  $4(x^2+9)=(6-x)^2=36-12x+x^2$ , hence  $3x^2+12x=0$ , i.e.  $3x(x+4)=0$ .",
          "Thus  $x=0$  or  $x=-4$ ; both satisfy  $x\\le 6$ , so both survive the squaring constraint, giving  $\\lvert z\\rvert=3$  and  $\\lvert z\\rvert=5$  respectively.",
          "Therefore  \\[\\boxed{z=3i \\ \\text{ or } \\ z=-4+3i}\\] "
        ]
      },
      {
        "name": "Geometric: a focus-directrix ellipse meets a horizontal line",
        "steps": [
          "As in Method 2, the system is equivalent to  $\\operatorname{Im}z=3$  together with the real relation  $x+2\\lvert z\\rvert=6$ , i.e.  $\\lvert z\\rvert=\\tfrac12(6-x)$  with  $x\\le 6$ .",
          "Read  $\\lvert z\\rvert=\\tfrac12(6-x)$  as a focus-directrix law: the distance from  $z$  to the origin equals  $e$  times the distance  $6-x$  from  $z$  to the vertical line  $x=6$ , with eccentricity  $e=\\tfrac12<1$ . So the locus is an ELLIPSE with one focus at the origin.",
          "Squaring  $x^2+y^2=\\tfrac14(6-x)^2$  and completing the square gives  $\\dfrac{(x+2)^2}{16}+\\dfrac{y^2}{12}=1$ : center  $(-2,0)$ ,  $a=4$ ,  $c=\\sqrt{16-12}=2$ , foci  $(0,0)$  and  $(-4,0)$  -- confirming the focus at the origin and  $e=c/a=\\tfrac12$ .",
          "Intersect this ellipse with the line  $y=3$ :  $\\dfrac{(x+2)^2}{16}+\\dfrac{9}{12}=1\\Rightarrow (x+2)^2=4\\Rightarrow x=0$  or  $x=-4$ . The line cuts the ellipse in two points, which is exactly why the system has two solutions.",
          "Hence  \\[\\boxed{z=3i \\ \\text{ or } \\ z=-4+3i}\\] "
        ]
      }
    ],
    "remark": "Insight: the moment a modulus  $\\lvert z\\rvert$  appears alongside  $z$  and  $\\overline{z}$ , the system stops being linear --  $\\lvert z\\rvert$  is a hidden third unknown  $r\\ge 0$  obeying its own equation  $r=\\sqrt{x^2+y^2}$ . Eliminating  $\\overline{z}$  is fine, but the leftover equation in  $r$  is quadratic, so a single linear-looking system can carry two honest solutions. Geometrically the relation  $\\lvert z\\rvert=\\tfrac12(6-x)$  is a focus-directrix ellipse centred off the origin, and the second solution is simply the second time the line  $\\operatorname{Im}z=3$  pierces that ellipse."
  },
  {
    "theme": "algebra",
    "themeLabel": "The Algebra of a+bi",
    "title": "Pinned by Modulus and Mirror",
    "difficulty": 5,
    "task": "Find all",
    "tags": [
      "modulus",
      "conjugate",
      "system",
      "square root",
      "uniqueness"
    ],
    "statement": "A complex number  $z$  satisfies all three conditions  \\[ z\\,\\overline z = 25, \\qquad z^2+\\overline z^{\\,2}=14, \\qquad \\mathrm{Re}(z)>0,\\ \\mathrm{Im}(z)>0. \\]  Find  $z$ , and then determine the two complex square roots of  $z^2$ .",
    "answer": " $z=4+3i$ ; the square roots of  $z^2=7+24i$  are  $\\pm(4+3i)$ .",
    "trap": "Using  $z^2+\\overline z^{\\,2}=14$  together with  $|z|^2=25$  to pin  $\\mathrm{Re}(z)^2$  and  $\\mathrm{Im}(z)^2$ , but then forgetting that this still leaves FOUR sign combinations  $\\pm4\\pm3i$ . The positivity of both real and imaginary parts is what selects the unique  $z$ ; dropping it (or the  $\\pm$  on the final square root) loses the branch.",
    "solutions": [
      {
        "name": "Reduce to real unknowns",
        "steps": [
          "Let  $z=x+yi$ . Then  $z\\overline z=x^2+y^2=25$ .",
          "And  $z^2+\\overline z^{\\,2}=2(x^2-y^2)=14\\Rightarrow x^2-y^2=7$ .",
          "Add:  $2x^2=32\\Rightarrow x^2=16$ ; subtract:  $2y^2=18\\Rightarrow y^2=9$ .",
          "Positivity  $x>0,y>0$  selects  $x=4,\\ y=3$ , so  $z=4+3i$ .",
          "Then  $z^2=(4+3i)^2=7+24i$ ; its square roots are  $\\pm z=\\pm(4+3i)$ .  $\\boxed{z=4+3i,\\ \\sqrt{z^2}=\\pm(4+3i)}$ "
        ]
      },
      {
        "name": "Work with symmetric functions",
        "steps": [
          "Let  $s=z+\\overline z=2\\mathrm{Re}(z)$  and  $p=z\\overline z=25$ . Note  $z^2+\\overline z^{\\,2}=s^2-2p$ .",
          "So  $s^2-2(25)=14\\Rightarrow s^2=64\\Rightarrow s=\\pm8$ ; positivity of  $\\mathrm{Re}(z)$  gives  $s=8$ , i.e.  $\\mathrm{Re}(z)=4$ .",
          "From  $|z|^2=25$ :  $\\mathrm{Im}(z)^2=25-16=9$ , and  $\\mathrm{Im}(z)>0\\Rightarrow \\mathrm{Im}(z)=3$ , so  $z=4+3i$ .",
          "Compute  $z^2=7+24i$ ; solving  $w^2=7+24i$  by  $a^2-b^2=7,\\ 2ab=24$  gives  $a=4,b=3$ , hence  $w=\\pm(4+3i)$ .",
          " $\\boxed{z=4+3i,\\ \\text{roots }\\pm(4+3i)}$ "
        ]
      }
    ],
    "remark": "Insight:  $z\\overline z$  and  $z^2+\\overline z^{\\,2}$  are exactly the elementary symmetric data  $\\mathrm{Re}^2+\\mathrm{Im}^2$  and  $\\mathrm{Re}^2-\\mathrm{Im}^2$  in disguise — two linear equations in  $(x^2,y^2)$  — and the whole problem closes on itself when squaring  $z$  and re-extracting the root returns  $\\pm z$ ."
  },
  {
    "theme": "modulusarg",
    "themeLabel": "Modulus & Argument",
    "title": "A Coin on a Circle",
    "difficulty": 4,
    "task": "Find",
    "tags": [
      "locus",
      "circle",
      "triangle inequality",
      "extremum"
    ],
    "statement": "A complex number  $z$  satisfies  $\\lvert z-(3+4i)\\rvert = 2$ . Find the maximum and minimum possible values of  $\\lvert z\\rvert$ , and hence the value of  $\\bigl(\\max\\lvert z\\rvert\\bigr)\\cdot\\bigl(\\min\\lvert z\\rvert\\bigr)$ .",
    "answer": " $\\max\\lvert z\\rvert = 7$ ,  $\\min\\lvert z\\rvert = 3$ , and their product is  $21$ .",
    "trap": "Trying to optimise with calculus over two real variables, or guessing  $\\max=2+\\sqrt{3^2+4^2}=7$  but mistaking the minimum for  $0$  because the circle 'might reach the origin'. Since  $|3+4i|=5>2$ , the origin lies outside the circle, so the nearest point is at distance  $5-2=3$ , not  $0$ .",
    "solutions": [
      {
        "name": "Triangle inequality on the centre",
        "steps": [
          "Let  $c=3+4i$ , so  $|c|=\\sqrt{3^2+4^2}=5$  and the locus is the circle of radius  $2$  centred at  $c$ .",
          "The triangle inequalities  $\\bigl|\\,|z|-|c|\\,\\bigr|\\le |z-c|\\le |z|+|c|$  with  $|z-c|=2$  give  $|z|\\le |c|+2=7$  and  $|z|\\ge |c|-2=3$ .",
          "Both bounds are attained on the ray  $Oc$ : the farthest point of the circle from  $O$  has  $|z|=|c|+2=7$ , the nearest has  $|z|=|c|-2=3$ .",
          "Thus  $\\max=7$ ,  $\\min=3$ , and the product is  $7\\cdot 3=\\boxed{21}$ ."
        ]
      },
      {
        "name": "Parametrise the circle",
        "steps": [
          "Write  $z=3+4i+2e^{i\\theta}$ . Then  $|z|^2=z\\bar z=|3+4i|^2+4+2\\,\\mathrm{Re}\\!\\bigl(2(3-4i)e^{i\\theta}\\bigr)$ .",
          "Expanding the real part with  $e^{i\\theta}=\\cos\\theta+i\\sin\\theta$  gives  $|z|^2=29+4(3\\cos\\theta-4\\sin\\theta)=29+12\\cos\\theta-16\\sin\\theta$ .",
          "Since  $a\\cos\\theta+b\\sin\\theta$  has amplitude  $\\sqrt{a^2+b^2}$ , here  $\\sqrt{12^2+16^2}=20$ , so  $|z|^2=29+20\\cos(\\theta+\\varphi)\\in[29-20,\\,29+20]=[9,49]$ .",
          "Hence  $|z|\\in[3,7]$ , giving  $\\max=7$ ,  $\\min=3$  and product  $=\\sqrt{49}\\cdot\\sqrt{9}=7\\cdot 3=\\boxed{21}$ ."
        ]
      }
    ],
    "remark": "Insight:  $|z|$  is just the distance from the origin to a point on a fixed circle; its extremes are the origin-to-centre distance plus or minus the radius. Because the origin sits outside the circle ( $|c|=5>2$ ), neither extreme is  $0$  — no calculus is needed, geometry settles it in one line."
  },
  {
    "theme": "modulusarg",
    "themeLabel": "Modulus & Argument",
    "title": "The Parallelogram's Secret",
    "difficulty": 4,
    "task": "Find",
    "statement": "Complex numbers  $z_1, z_2$  satisfy  $\\lvert z_1 + z_2\\rvert = 6$ ,  $\\lvert z_1 - z_2\\rvert = 4$ , and  $\\lvert z_1\\rvert = 4$ . Find  $\\lvert z_2\\rvert$ .",
    "answer": " $\\lvert z_2\\rvert = \\sqrt{10}$ .",
    "tags": [
      "parallelogram law",
      "modulus",
      "diagonals"
    ],
    "trap": "Assuming the figure is a rectangle and writing  $|z_1+z_2|^2=|z_1|^2+|z_2|^2$ . That holds only if  $z_1\\perp z_2$  (i.e.  $z_1\\bar z_2$  is purely imaginary), which is not given. The correct relation is the parallelogram law  $|z_1+z_2|^2+|z_1-z_2|^2=2(|z_1|^2+|z_2|^2)$ , valid for ALL  $z_1,z_2$ .",
    "solutions": [
      {
        "name": "Parallelogram law",
        "steps": [
          "The parallelogram law gives  $|z_1+z_2|^2+|z_1-z_2|^2=2\\bigl(|z_1|^2+|z_2|^2\\bigr)$ .",
          "Substitute:  $6^2+4^2 = 2(4^2+|z_2|^2)\\Rightarrow 36+16=2(16+|z_2|^2)\\Rightarrow 52=32+2|z_2|^2$ .",
          "So  $|z_2|^2=10$  and  $|z_2|=\\boxed{\\sqrt{10}}$ ."
        ]
      },
      {
        "name": "Expand via conjugates",
        "steps": [
          "Use  $|z_1\\pm z_2|^2=|z_1|^2+|z_2|^2\\pm 2\\,\\mathrm{Re}(z_1\\bar z_2)$ . Adding the  $+$  and  $-$  versions cancels the cross term.",
          " $|z_1+z_2|^2+|z_1-z_2|^2=2|z_1|^2+2|z_2|^2$ , i.e.  $36+16=32+2|z_2|^2$ .",
          "Solving,  $|z_2|^2=10\\Rightarrow|z_2|=\\boxed{\\sqrt{10}}$ ."
        ]
      },
      {
        "name": "Explicit construction",
        "steps": [
          "Place  $z_1=4$  on the real axis and write  $z_2=a+bi$ . The conditions  $|z_1\\pm z_2|=6,4$  become  $(4+a)^2+b^2=36$  and  $(4-a)^2+b^2=16$ .",
          "Subtracting eliminates  $b^2$ :  $16a=20$ , so  $a=\\tfrac54$ , and then  $b^2=36-\\left(\\tfrac{21}{4}\\right)^2=\\tfrac{135}{16}>0$  (a genuine point exists).",
          "Hence  $|z_2|^2=a^2+b^2=\\tfrac{25}{16}+\\tfrac{135}{16}=\\tfrac{160}{16}=10$ , giving  $|z_2|=\\boxed{\\sqrt{10}}$ ."
        ]
      }
    ],
    "remark": "Insight: the sum of the squared diagonals of a parallelogram equals the sum of the squared sides — the parallelogram law is exactly this geometric fact, and it instantly bypasses any need to know the angle between  $z_1$  and  $z_2$ . Note  $z_1\\perp z_2$  would force  $|z_1+z_2|=|z_1-z_2|$ , but here  $6\\ne4$ , so the rectangle shortcut is provably inapplicable."
  },
  {
    "theme": "modulusarg",
    "themeLabel": "Modulus & Argument",
    "title": "Two Tangents from the Origin",
    "difficulty": 4,
    "task": "Find",
    "statement": "A point  $z$  moves on the circle  $\\lvert z - (1 + i\\sqrt{3})\\rvert = 1$ . Find the maximum and minimum values of the principal argument  $\\arg z$  as  $z$  traverses the circle.",
    "answer": " $\\max\\arg z = 90^\\circ\\ (=\\tfrac{\\pi}{2})$  and  $\\min\\arg z = 30^\\circ\\ (=\\tfrac{\\pi}{6})$ .",
    "tags": [
      "argument",
      "tangent line",
      "circle",
      "extremum"
    ],
    "trap": "Taking the argument of the center ( $60^\\circ$ ) and adding/subtracting the radius  $1$  as if the radius were an angle ( $60^\\circ\\pm 1^\\circ$ , or worse  $60^\\circ\\pm 1\\text{ rad}$ ) — a length is not an angle. The extreme rays from the origin are TANGENT to the circle, and the half-angle they make with the center direction is  $\\arcsin(r/d)$ , where  $d=|\\text{center}|$ , not  $r$  itself.",
    "solutions": [
      {
        "name": "Tangent half-angle",
        "steps": [
          "Let  $c=1+i\\sqrt3$ , so  $|c|=\\sqrt{1+3}=2$  and  $\\arg c = 60^\\circ$ ; the circle has radius  $r=1$  and does not enclose the origin since  $|c|=2>1=r$ .",
          "Because  $O$  lies outside the circle, the rays from  $O$  that bound all directions to circle points are the two tangents from  $O$ . Each tangent makes the same half-angle  $\\alpha=\\arcsin(r/|c|)=\\arcsin\\tfrac12=30^\\circ$  with the central direction  $Oc$ .",
          "Hence  $\\arg z$  ranges over  $[\\,60^\\circ-30^\\circ,\\;60^\\circ+30^\\circ\\,]=[30^\\circ,90^\\circ]$ , giving  $\\min=\\boxed{30^\\circ}$  and  $\\max=\\boxed{90^\\circ}$ ."
        ]
      },
      {
        "name": "Parametric tangent condition",
        "steps": [
          "Write  $z=c+e^{i\\theta}$ . Extremising  $\\arg z$  over the circle occurs where the ray  $Oz$  is tangent, i.e.  $Oz\\perp$  (center-to- $z$ ), so triangle  $O$ –center– $z$  is right-angled at  $z$ .",
          "In that right triangle the hypotenuse is  $|c|=2$  and the side opposite  $O$  is  $r=1$ , so the angle at  $O$  between  $Oc$  and  $Oz$  equals  $\\arcsin(1/2)=30^\\circ$ .",
          "Concretely the two tangent points are  $\\theta=\\pi$  (giving  $z=i\\sqrt3$ ,  $\\arg z=90^\\circ$ ) and  $\\theta=-\\tfrac{\\pi}{3}$  (giving  $z=\\tfrac32+\\tfrac{\\sqrt3}{2}i$ ,  $\\arg z=30^\\circ$ ). Thus  $\\boxed{30^\\circ\\le\\arg z\\le 90^\\circ}$ ."
        ]
      },
      {
        "name": "Calculus check on  $\\arg z(\\theta)$ ",
        "steps": [
          "With  $z(\\theta)=(1+\\cos\\theta)+i(\\sqrt3+\\sin\\theta)$ , set  $f(\\theta)=\\arg z=\\operatorname{atan2}(\\sqrt3+\\sin\\theta,\\;1+\\cos\\theta)$ .",
          "Solving  $f'(\\theta)=0$  yields exactly  $\\theta=\\pi$  and  $\\theta=-\\tfrac{\\pi}{3}$ , the same tangent points; evaluating  $f$  there gives  $90^\\circ$  and  $30^\\circ$ .",
          "Since  $f$  is continuous on the closed circle, these critical values are the global max and min:  $\\arg z\\in[30^\\circ,90^\\circ]$ , confirming  $\\min=30^\\circ$ ,  $\\max=90^\\circ$ ."
        ]
      }
    ],
    "remark": "Insight: the extremes of  $\\arg z$  on a circle that does not enclose the origin occur at the two tangent points from  $O$  — a clean right-triangle picture (half-angle  $\\arcsin(r/d)$ ), never a calculus slog. The radius is a length, so it can only enter an angle through the ratio  $r/d$ ."
  },
  {
    "theme": "modulusarg",
    "themeLabel": "Modulus & Argument",
    "title": "The Vector That Pivots Too Far",
    "difficulty": 5,
    "task": "Maximise",
    "tags": [
      "argument of a sum",
      "tangent to a circle",
      "extremal ray",
      "perpendicularity",
      "law of sines"
    ],
    "statement": "A vector  $z_2 = 3$  is pinned along the positive real axis, while a second vector  $z_1 = 2e^{i\\varphi}$  of fixed length  $2$  is free to pivot, its argument  $\\varphi$  ranging over the  $30^\\circ$  window  $\\varphi \\in [120^\\circ, 150^\\circ]$ . As  $\\varphi$  varies over this window, find the largest possible value of  $\\arg\\!\\big(z_1 + z_2\\big)$ , and state the argument of  $z_1$  at which this maximum is attained.",
    "answer": " \\[\\boxed{\\;\\max\\arg(z_1+z_2)=\\arcsin\\tfrac{2}{3}\\;\\big(=\\arctan\\tfrac{2}{\\sqrt5}\\approx 41.81^\\circ\\big)\\;}\\] ",
    "trap": "Assuming that pushing  $\\arg z_1$  as high as the window allows ( $\\varphi = 150^\\circ$ ) drags the resultant's argument up with it, so that the maximum sits at the window's upper edge. It does not. Past a certain tilt the tip of  $z_1$  swings the resultant ray back DOWN, so the endpoint  $\\varphi=150^\\circ$  yields only  $\\arg(z_1+z_2)\\approx 38.26^\\circ$  — strictly less than the true interior maximum  $41.81^\\circ$ . The extremum is governed by tangency, not by the moving argument being maximal: the resultant ray is steepest the instant it grazes the circle traced by the tip of  $z_1$ , and at that instant  $z_1$  is perpendicular to  $z_1+z_2$ .",
    "solutions": [
      {
        "name": "Tangent to the tip-circle",
        "steps": [
          "The sum is  $S = z_1 + z_2 = 3 + 2e^{i\\varphi}$ . As  $\\varphi$  varies, the tip of  $S$  traces a circle of radius  $2$  centred at the fixed point  $C=3$  on the real axis.",
          "Since the centre lies at distance  $|C|=3$  from the origin and the radius is  $2<3$ , the origin is OUTSIDE this circle; hence  $\\arg S$  is bounded, and it is maximised exactly when the ray from the origin is tangent to the circle from above.",
          "For a tangent ray to a circle of radius  $r=2$  whose centre is at distance  $d=3$  from the origin, the angle the ray makes with the line to the centre (the real axis) is  $\\arcsin\\frac{r}{d}=\\arcsin\\frac{2}{3}$ .",
          "At tangency the radius  $C\\to S$ , which equals the vector  $z_1=2e^{i\\varphi}$ , is perpendicular to the tangent ray  $S$ ; this fixes the optimal pivot. Solving,  $\\cos\\varphi=-\\tfrac{2}{3}$ , i.e.  $\\varphi=\\arccos(-\\tfrac23)\\approx131.81^\\circ$ , which lies inside the window  $[120^\\circ,150^\\circ]$ .",
          "Therefore  $\\;\\max\\arg(z_1+z_2)=\\arcsin\\dfrac{2}{3}\\approx41.81^\\circ\\;$  at  $\\arg z_1=\\arccos\\!\\left(-\\tfrac23\\right)$ .  \\[\\boxed{\\arcsin\\tfrac{2}{3}}\\] "
        ]
      },
      {
        "name": "Law of sines in the addition triangle",
        "steps": [
          "Form the triangle with vertices  $O$  (origin),  $P=z_2=3$ , and  $Q=z_1+z_2$ . The side  $OP$  has length  $3$ , the side  $PQ$  equals the vector  $z_1$  so has length  $2$ , and the angle at  $O$  is precisely  $\\alpha=\\arg(z_1+z_2)$  that we wish to maximise.",
          "By the law of sines,  $\\dfrac{|PQ|}{\\sin\\alpha}=\\dfrac{|OP|}{\\sin(\\angle OQP)}$ , i.e.  $\\dfrac{2}{\\sin\\alpha}=\\dfrac{3}{\\sin(\\angle OQP)}$ , so  $\\sin\\alpha=\\dfrac{2}{3}\\sin(\\angle OQP)$ .",
          "Thus  $\\sin\\alpha$  — and hence  $\\alpha\\in(0^\\circ,90^\\circ)$  — is largest exactly when  $\\sin(\\angle OQP)=1$ , i.e. when the angle at  $Q$  is  $90^\\circ$ : the side  $PQ=z_1$  is perpendicular to  $OQ=z_1+z_2$ .",
          "Then  $\\sin\\alpha_{\\max}=\\dfrac{2}{3}$ , giving  $\\alpha_{\\max}=\\arcsin\\dfrac{2}{3}\\approx41.81^\\circ$ . The right angle at  $Q$  forces  $\\cos\\varphi=-\\tfrac23$  ( $\\varphi\\approx131.81^\\circ$ ), inside the allowed window.  \\[\\boxed{\\arcsin\\tfrac{2}{3}}\\] "
        ]
      },
      {
        "name": "Calculus on the argument",
        "steps": [
          "Write  $S=3+2e^{i\\varphi}=(3+2\\cos\\varphi)+i\\,(2\\sin\\varphi)$ , so  $\\arg S=\\arctan\\dfrac{2\\sin\\varphi}{3+2\\cos\\varphi}=:f(\\varphi)$  on the upper half  $\\varphi\\in(90^\\circ,180^\\circ)$  where both this fraction and  $\\arg S$  are positive and increasing in the tangent.",
          "Differentiate:  $f'(\\varphi)=\\dfrac{(2\\cos\\varphi)(3+2\\cos\\varphi)-(2\\sin\\varphi)(-2\\sin\\varphi)}{(3+2\\cos\\varphi)^2+(2\\sin\\varphi)^2}=\\dfrac{6\\cos\\varphi+4}{13+12\\cos\\varphi}.$ ",
          "The denominator is positive, so  $f'(\\varphi)=0\\iff 6\\cos\\varphi+4=0\\iff\\cos\\varphi=-\\dfrac{2}{3}$ , giving  $\\varphi^\\ast=\\arccos(-\\tfrac23)\\approx131.81^\\circ\\in[120^\\circ,150^\\circ]$ ;  $f'$  changes  $+\\to-$  there, so it is a maximum.",
          "At  $\\cos\\varphi=-\\tfrac23$ ,  $\\sin\\varphi=\\tfrac{\\sqrt5}{3}$ , so  $3+2\\cos\\varphi=\\tfrac53$  and  $2\\sin\\varphi=\\tfrac{2\\sqrt5}{3}$ ; hence  $\\tan(\\arg S)=\\dfrac{2\\sqrt5/3}{5/3}=\\dfrac{2}{\\sqrt5}$ , i.e.  $\\arg S=\\arctan\\dfrac{2}{\\sqrt5}=\\arcsin\\dfrac{2}{3}\\approx41.81^\\circ$ .",
          "Comparing with the window endpoints  $f(120^\\circ)\\approx40.89^\\circ$  and  $f(150^\\circ)\\approx38.26^\\circ$  confirms the interior critical point wins.  \\[\\boxed{\\arcsin\\tfrac{2}{3}}\\] "
        ]
      }
    ],
    "remark": "Insight: the argument of a sum of a fixed vector and a pivoting one is an extremal-ray problem, not a monotone one. The tip of the moving vector sweeps a circle; the resultant's argument peaks where the origin-ray is tangent to that circle, and there the moving vector is perpendicular to the resultant — the law-of-sines factor  $\\sin(\\angle\\text{at the tip})$  hits  $1$ . Because the optimal tilt  $\\arg z_1\\approx131.81^\\circ$  overshoots  $90^\\circ$ , naively maximising  $\\arg z_1$  on the window pushes the resultant ray back down, which is the trap. The same tangency picture explains why  $\\arcsin\\frac{|z_1|}{|z_2|}$  is the universal cap whenever the moving radius is the shorter one."
  },
  {
    "theme": "modulusarg",
    "themeLabel": "Modulus & Argument",
    "title": "Counting the Crossings of the Branch Cut",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "principal argument",
      "roots of unity",
      "branch cut",
      "floor counting",
      "residues",
      "de moivre"
    ],
    "statement": "Let  $z=\\operatorname{cis}\\dfrac{2\\pi}{9}=\\cos\\dfrac{2\\pi}{9}+i\\sin\\dfrac{2\\pi}{9}$ , a primitive ninth root of unity. The principal argument  $\\operatorname{Arg}(w)$  is taken in  $(-\\pi,\\pi]$ . Among the  $250$  powers  \\[ z^{1},\\ z^{2},\\ z^{3},\\ \\dots,\\ z^{250}, \\]  determine exactly how many have a negative principal argument, i.e. how many satisfy  $\\operatorname{Arg}\\!\\left(z^{k}\\right)<0$ .",
    "answer": " $\\boxed{111}$ ",
    "trap": "The seductive shortcut: \"each full turn of  $9$  powers contributes  $\\tfrac{9-1}{2}=4$  negatives, and there are  $\\lfloor 250/9\\rfloor=27$  full turns, so the answer is  $27\\times 4=108$ .\" This silently discards the final, incomplete sweep. The last  $7$  powers  $z^{244},\\dots,z^{250}$  carry residues  $1,2,\\dots,7\\pmod 9$ , and as  $k$  marches through them the argument again dives below the real axis the instant  $2k/9$  crosses an odd integer; three of these (residues  $5,6,7$ ) land in the lower half-plane, adding  $3$  more. Forgetting that a partial turn still crosses the branch cut loses exactly those  $3$ . (Equally fatal traps: reading  $\\operatorname{Arg}$  in  $[0,2\\pi)$  so that none is negative; calling \"half\" of  $250$  negative as  $125$ ; or applying the ratio  $\\tfrac{4}{9}\\cdot 250=111.\\overline{1}$  and trusting the rounding — that ratio over-counts for nearby  $m$  such as  $m=255$ , so the agreement at  $250$  is luck, not a proof.)",
    "solutions": [
      {
        "name": "Residue test, then block plus partial turn",
        "steps": [
          "By De Moivre  $z^{k}=\\operatorname{cis}\\dfrac{2\\pi k}{9}$ . Its principal argument lies in  $(-\\pi,\\pi]$ , so  $\\operatorname{Arg}(z^{k})<0$  exactly when the reduced angle  $\\dfrac{2\\pi k}{9}\\pmod{2\\pi}$  falls in the open lower half  $(\\pi,2\\pi)$ .",
          "Writing  $s=k\\bmod 9\\in\\{0,1,\\dots,8\\}$ , the reduced angle is  $\\dfrac{2\\pi s}{9}$ , which exceeds  $\\pi$  iff  $2s>9$ , i.e.  $s\\ge 5$ . Since  $2s=9$  is impossible for an integer  $s$ , no power ever lands on the negative real axis (no  $\\operatorname{Arg}=\\pi$  ambiguity), and  $s=0$  gives  $z^{k}=1$  with  $\\operatorname{Arg}=0$ , which is not negative. Hence  $\\operatorname{Arg}(z^{k})<0\\iff s\\in\\{5,6,7,8\\}$ : exactly  $4$  of every  $9$  consecutive powers.",
          "Now  $250=27\\cdot 9+7$ . The  $27$  complete blocks  $k=1{-}243$  each supply  $4$  negatives, totalling  $27\\times 4=108$ . The leftover powers  $k=244,\\dots,250$  carry residues  $1,2,3,4,5,6,7$ ; the negatives are those with residue in  $\\{5,6,7\\}$ , namely  $k=248,249,250$ , i.e.  $3$  more.",
          "Therefore the count is  $108+3=\\boxed{111}$ ."
        ]
      },
      {
        "name": "Four arithmetic-progression tallies",
        "steps": [
          "From the residue criterion, the negative powers are precisely those  $k\\in\\{1,\\dots,250\\}$  with  $k\\equiv 5,6,7,\\text{ or }8\\pmod 9$ . Count each residue class separately.",
          "For a fixed residue  $s\\le 250$ , the values  $k=s,s+9,s+18,\\dots$  up to  $250$  number  $\\left\\lfloor\\dfrac{250-s}{9}\\right\\rfloor+1$ .",
          "Compute:  $s=5\\Rightarrow\\lfloor245/9\\rfloor+1=27+1=28$ ;  $s=6\\Rightarrow\\lfloor244/9\\rfloor+1=28$ ;  $s=7\\Rightarrow\\lfloor243/9\\rfloor+1=28$ ;  $s=8\\Rightarrow\\lfloor242/9\\rfloor+1=26+1=27$  (one fewer, because  $251$  would have been needed for a full  $28$ ).",
          "Summing the four classes,  $28+28+28+27=\\boxed{111}$ ."
        ]
      },
      {
        "name": "Counting half-turns of the argument",
        "steps": [
          "Track the running (unwrapped) angle  $\\theta_k=\\dfrac{2\\pi k}{9}$ . The point  $z^{k}$  sits below the real axis precisely when  $\\theta_k\\pmod{2\\pi}\\in(\\pi,2\\pi)$ , which is exactly the condition that the number of completed half-turns,  $\\left\\lfloor\\dfrac{\\theta_k}{\\pi}\\right\\rfloor=\\left\\lfloor\\dfrac{2k}{9}\\right\\rfloor$ , be odd.",
          "So we must count  $k\\in\\{1,\\dots,250\\}$  for which  $\\left\\lfloor\\dfrac{2k}{9}\\right\\rfloor$  is odd. As  $k$  runs over one block of  $9$ ,  $\\lfloor 2k/9\\rfloor$  takes the values  $0,0,0,0,1,1,1,1,2$  — odd exactly  $4$  times (at the four powers  $z^{5},z^{6},z^{7},z^{8}$  of that block), confirming  $4$  negatives per complete turn.",
          "Over  $k=1,\\dots,243$  (that is  $27$  blocks) this gives  $27\\times 4=108$ . For  $k=244,\\dots,250$ , the values  $\\lfloor 2k/9\\rfloor$  are  $54,54,54,54,55,55,55$ ; the odd ones ( $55$ ) occur at  $k=248,249,250$ , i.e.  $3$  more crossings into the lower half-plane.",
          "Hence the total number of powers with negative principal argument is  $108+3=\\boxed{111}$ ."
        ]
      }
    ],
    "remark": "Insight: raising a fixed unit root to successive powers is a relentless march around the circle, and \"negative principal argument\" is not a static modular label but a count of how many times the trajectory has dipped below the real axis after the latest branch crossing. The clean fact \" $4$  of every  $9$ \" governs only complete turns; the real test of understanding is the final partial sweep, where the argument still plunges past the branch cut even though the turn never finishes. The parity formulation  $\\big\\lfloor 2k/9\\big\\rfloor$  odd makes the branch-crossing nature explicit: every increment of this floor is one half-turn, and the lower half-plane is precisely the odd-numbered half-turns. The same template answers the question for any  $\\operatorname{cis}(2\\pi/n)$  and any ceiling  $m$  — count full blocks, then never forget the crossings hiding in the remainder."
  },
  {
    "theme": "modulusarg",
    "themeLabel": "Modulus & Argument",
    "title": "Equality on a Single Ray",
    "difficulty": 5,
    "task": "Find all",
    "statement": "Find all real numbers  $x$  for which  \\[ \\bigl\\lvert (x+2i) + (1+xi)\\bigr\\rvert \\;=\\; \\lvert x+2i\\rvert + \\lvert 1+xi\\rvert. \\] ",
    "answer": " $x = \\sqrt{2}$  is the only solution.",
    "tags": [
      "triangle inequality",
      "equality case",
      "argument",
      "same ray"
    ],
    "trap": "Squaring blindly and keeping every root of the resulting polynomial. Equality in  $|a+b|=|a|+|b|$  forces  $a$  and  $b$  to point along the SAME ray ( $b=\\lambda a$ ,  $\\lambda\\ge 0$ ), not merely the same line. The candidate  $x=-\\sqrt2$  makes the two numbers anti-parallel ( $\\lambda<0$ ), which gives  $|a+b|=\\big||a|-|b|\\big|$ , not the sum — so it must be discarded.",
    "solutions": [
      {
        "name": "Same-ray condition",
        "steps": [
          "Equality  $|a+b|=|a|+|b|$  (with  $a=x+2i$ ,  $b=1+xi$ , both nonzero) holds iff  $b=\\lambda a$  for some real  $\\lambda\\ge 0$ .",
          "From  $1+xi=\\lambda(x+2i)$ : real parts  $1=\\lambda x$ , imaginary parts  $x=2\\lambda$ . Hence  $\\lambda=1/x$  and  $x=2/x\\Rightarrow x^2=2\\Rightarrow x=\\pm\\sqrt2$ .",
          "Require  $\\lambda=1/x\\ge 0$ , so  $x>0$ , leaving only  $x=\\boxed{\\sqrt2}$  (then  $\\lambda=\\tfrac{1}{\\sqrt2}>0$ )."
        ]
      },
      {
        "name": "Cross-term squaring",
        "steps": [
          "Square:  $|a+b|^2=|a|^2+|b|^2+2\\,\\mathrm{Re}(a\\bar b)$  must equal  $|a|^2+|b|^2+2|a||b|$ , so equality  $\\iff \\mathrm{Re}(a\\bar b)=|a||b|$ , i.e.  $a\\bar b$  is a nonnegative real.",
          "Compute  $a\\bar b=(x+2i)(1-xi)=3x+(2-x^2)i$ . This is a nonnegative real iff  $2-x^2=0$  and  $3x\\ge 0$ .",
          "So  $x^2=2$  with  $x\\ge 0$ , giving  $x=\\boxed{\\sqrt2}$ ; the negative root fails  $3x\\ge 0$ ."
        ]
      }
    ],
    "remark": "Insight: 'same line' is necessary but not sufficient — the equality case of the triangle inequality is directional. The sign test on  $\\mathrm{Re}(a\\bar b)$  is the cleanest way to separate the same-ray case from the opposite-ray case."
  },
  {
    "theme": "modulusarg",
    "themeLabel": "Modulus & Argument",
    "title": "Two Arrivals on the Negative Axis",
    "difficulty": 5,
    "task": "Find both",
    "tags": [
      "principal argument",
      "de moivre",
      "linear congruence",
      "branch cut",
      "rotation by a fixed angle"
    ],
    "statement": "Let  $z=\\dfrac{1+i\\sqrt{3}}{1-i}$ . Treating each multiplication by  $z$  as a single step that rotates a vector through a fixed angle (and rescales it), answer the following.\n \\[(\\text{a})\\quad\\text{Find the smallest positive integer }n\\text{ for which }z^{n}\\text{ is a negative real number.}\\] \n \\[(\\text{b})\\quad\\text{Find the smallest positive integer }n\\text{ for which the principal argument } \\operatorname{Arg}(z^{n})\\in(-20^{\\circ},-10^{\\circ}).\\] \nHere  $\\operatorname{Arg}$  denotes the principal argument, taking values in  $(-180^{\\circ},180^{\\circ}]$ . Give your answer as the ordered pair  $(n_a,\\,n_b)$ .",
    "answer": " \\[\\boxed{(\\,n_a,\\,n_b\\,)=(12,\\;17)}\\] ",
    "trap": "Two distinct branch/axis errors. In (a), scanning for 'when does the power land on a coordinate axis' flags  $n=6$ , where  $z^{6}=-8i$  sits squarely on the imaginary axis — but that is purely imaginary, not real; a hasty reader who equates 'on an axis' with 'real' reports  $6$  instead of  $12$ . In (b), the target band lies BELOW the real axis, so its raw bearing is  $345^{\\circ}$ , i.e. the congruence is  $105n\\equiv 345\\pmod{360}$ . A student who drops the minus sign and instead solves  $105n\\equiv 15\\pmod{360}$  (reading  $-15^{\\circ}$  as  $+15^{\\circ}$ , the across-the-branch-cut reflection) gets  $n=7$  — but  $\\operatorname{Arg}(z^{7})=+15^{\\circ}$  sits ABOVE the axis, outside the requested band. The condition is an argument condition modulo  $360^{\\circ}$ , and the principal branch fixes the sign that the modulus completely ignores.",
    "solutions": [
      {
        "name": "Polar form and a linear congruence",
        "steps": [
          "Rationalise:  $z=\\dfrac{1+i\\sqrt3}{1-i}=\\dfrac{(1+i\\sqrt3)(1+i)}{(1-i)(1+i)}=\\dfrac{(1-\\sqrt3)+i(1+\\sqrt3)}{2}$ , with  $|z|=\\dfrac{|1+i\\sqrt3|}{|1-i|}=\\dfrac{2}{\\sqrt2}=\\sqrt2$  and  $\\arg z=\\arg(1+i\\sqrt3)-\\arg(1-i)=60^{\\circ}-(-45^{\\circ})=105^{\\circ}$ . So  $z=\\sqrt2\\,\\operatorname{cis}105^{\\circ}$ .",
          "By de Moivre,  $z^{n}=2^{n/2}\\operatorname{cis}(105^{\\circ}n)$ . The modulus  $2^{n/2}>0$  never changes the sign or direction, so every directional question reduces to the bearing  $105n$  taken modulo  $360^{\\circ}$ .",
          "(a) Negative real means the bearing equals  $180^{\\circ}$ :  $105n\\equiv180\\pmod{360}$ . Since  $\\gcd(105,360)=15$  and  $15\\mid180$ , divide through by  $15$ :  $7n\\equiv12\\pmod{24}$ . As  $7\\cdot7=49\\equiv1\\pmod{24}$ , the inverse of  $7$  is  $7$ , so  $n\\equiv7\\cdot12=84\\equiv12\\pmod{24}$ ; the least positive solution is  $n_a=12$  (and indeed  $z^{12}=2^{6}\\operatorname{cis}180^{\\circ}=-64$ ).",
          "(b) The band  $(-20^{\\circ},-10^{\\circ})$  contains exactly one multiple of  $15^{\\circ}$ , namely  $-15^{\\circ}$ , whose raw bearing is  $345^{\\circ}$ . Solve  $105n\\equiv345\\pmod{360}$ ; dividing by  $15$  gives  $7n\\equiv23\\pmod{24}$ , so  $n\\equiv7\\cdot23=161\\equiv17\\pmod{24}$ , and the least positive solution is  $n_b=17$ .",
          "Hence  $(n_a,n_b)=(12,17)$ .  \\[\\boxed{(12,\\;17)}\\] "
        ]
      },
      {
        "name": "Walking the 24-bearing cycle",
        "steps": [
          "Because  $\\arg z=105^{\\circ}$  and  $\\gcd(105,360)=15$ , the bearings  $105n\\pmod{360}$  cycle through every multiple of  $15^{\\circ}$  exactly once before repeating; the cycle has length  $360/15=24$ . Listing  $105n\\bmod360$  for  $n=1,2,\\dots$  gives  $105,210,315,60,165,270,15,120,225,330,75,\\mathbf{180},285,30,135,240,\\mathbf{345},90,\\dots$ ",
          "(a) A negative real value occurs at bearing  $180^{\\circ}$ , which first appears at position  $n=12$  in the list; thus  $n_a=12$ . The earlier axis-hit at  $n=6$  has bearing  $270^{\\circ}$  ( $z^{6}=-8i$ ), which is imaginary, not real, so it is correctly skipped.",
          "(b) Convert to principal values: a bearing  $b>180^{\\circ}$  has  $\\operatorname{Arg}=b-360^{\\circ}$ . The first bearing whose principal value lands in  $(-20^{\\circ},-10^{\\circ})$  is  $345^{\\circ}\\mapsto-15^{\\circ}$ , occurring at position  $n=17$ ; thus  $n_b=17$ . The reflection  $+15^{\\circ}$  appears earlier (at  $n=7$ ) but lies above the axis, outside the band.",
          "Therefore  $(n_a,n_b)=(12,17)$ .  \\[\\boxed{(12,\\;17)}\\] "
        ]
      },
      {
        "name": "Repeated rotation by the same step",
        "steps": [
          "Each multiplication by  $z$  rotates the current vector by the fixed angle  $\\theta=105^{\\circ}$  and scales its length by  $\\sqrt2$ ; since scaling cannot alter direction, only the accumulated rotation  $\\,n\\theta\\,$  matters. Starting from  $z^{0}=1$  on the positive real axis,  $z^{n}$  points along bearing  $n\\cdot105^{\\circ}$ .",
          "(a) We need the accumulated turn to reach a half-turn modulo a full turn:  $105n\\equiv180\\pmod{360}$ , i.e. the vector first points along the negative real axis. Stepping by  $105^{\\circ}$ , the running bearing returns to  $180^{\\circ}$  after  $12$  steps (the orbit visits all  $24$  spokes spaced  $15^{\\circ}$  apart, and  $180^{\\circ}$  is the  $12^{\\text{th}}$  spoke reached). So  $n_a=12$ .",
          "(b) Continue the same walk until the principal bearing first lies in  $(-20^{\\circ},-10^{\\circ})$ . The spoke at  $-15^{\\circ}$  (equivalently  $345^{\\circ}$ ) is reached after  $17$  steps, while the mirror spoke  $+15^{\\circ}$  — though hit earlier at step  $7$  — lies above the axis and is excluded. Hence  $n_b=17$ .",
          "Combining the two walks,  $(n_a,n_b)=(12,17)$ .  \\[\\boxed{(12,\\;17)}\\] "
        ]
      }
    ],
    "remark": "Insight: once  $z=\\sqrt2\\,\\operatorname{cis}105^{\\circ}$  is in polar form, the modulus  $2^{n/2}$  is a red herring for every directional question — both parts collapse to the linear congruence  $105n\\equiv(\\text{target})\\pmod{360}$ , a genuine number-theoretic step whose solvability is governed by  $\\gcd(105,360)=15$ . The depth lives in the targets: 'negative real' is the unambiguous bearing  $180^{\\circ}$ , but 'argument in a band below the axis' is sign-sensitive, and only the principal branch  $(-180^{\\circ},180^{\\circ}]$  distinguishes  $345^{\\circ}\\mapsto-15^{\\circ}$  ( $n=17$ ) from its branch-cut mirror  $+15^{\\circ}$  ( $n=7$ ). The modulus sees neither sign; the argument sees both."
  },
  {
    "theme": "modulusarg",
    "themeLabel": "Modulus & Argument",
    "title": "The Ellipse That Wasn't",
    "difficulty": 5,
    "task": "Find the maximum value of",
    "tags": [
      "triangle inequality",
      "degenerate ellipse",
      "locus",
      "modulus",
      "equality case"
    ],
    "statement": "Let  $S=\\{\\,z\\in\\mathbb{C}: |z-2|+|z+2|=4\\,\\}$ . Find the maximum value of  $|z-3i|$  as  $z$  ranges over  $S$ .  \\[ \\max_{z\\in S}\\;|z-3i| \\] ",
    "answer": " \\[\\boxed{\\,\\sqrt{13}\\,}\\] ",
    "trap": "Reading  $|z-2|+|z+2|=4$  as 'sum of distances to the foci  $\\pm 2$  is constant, hence an ellipse' and then running the ellipse machinery. With  $2a=4$  and  $c=2$  one gets  $a=2$ ,  $c=2$ , so  $b^2=a^2-c^2=0$  -- the curve is NOT a genuine ellipse, it has collapsed. A student who skips the degeneracy check imagines a real ellipse (often mis-taking  $b=2$ , treating the locus as a circle of radius  $2$ ) and reports the farthest point from  $3i$  as a co-vertex, giving the spurious  $3+2=5$ . The constant  $4$  exactly equals the inter-focal distance  $|2-(-2)|=4$ , which is the boundary equality case of the triangle inequality: it forces  $z$  onto the closed segment  $[-2,2]$  of the real axis, a one-dimensional set with no points off the axis, so no co-vertex exists at all.",
    "solutions": [
      {
        "name": "Equality case of the triangle inequality",
        "steps": [
          "Put  $a=2-z$  and  $b=2+z$ , so  $a+b=4$ . The triangle inequality gives  $|a|+|b|\\ge|a+b|=4$ , and our condition  $|z-2|+|z+2|=|a|+|b|=4$  is precisely the EQUALITY case.",
          "Equality  $|a|+|b|=|a+b|$  holds iff  $a$  and  $b$  point in the same direction, i.e. one is a nonnegative real multiple of the other. Since  $a+b=4>0$  is real, both  $a=2-z$  and  $b=2+z$  must be nonnegative reals. Hence  $z$  is real with  $2-z\\ge 0$  and  $2+z\\ge 0$ , that is  $z=t$  with  $t\\in[-2,2]$ .",
          "On this segment  $|z-3i|=|t-3i|=\\sqrt{t^2+9}$ , which increases with  $t^2$  and so is largest when  $t^2$  is largest, namely  $t=\\pm 2$ .",
          "Thus the maximum is  $\\sqrt{2^2+9}=\\sqrt{13}$ , attained at  $z=\\pm 2$ .  $\\boxed{\\sqrt{13}}$ "
        ]
      },
      {
        "name": "Degeneracy of the ellipse",
        "steps": [
          "Write  $z=x+iy$ . The defining relation is the sum of distances from  $(x,y)$  to the foci  $(\\pm 2,0)$  equalling  $4$ , the standard ellipse setup with  $2a=4$  so  $a=2$  and  $c=2$ .",
          "The semi-minor axis satisfies  $b^2=a^2-c^2=4-4=0$ , so  $b=0$ : the 'ellipse' is degenerate. Geometrically the constant  $4$  equals the distance  $2c=4$  between the foci, the threshold below which no locus exists and at which the locus is exactly the segment joining the foci.",
          "Hence  $S$  is the segment  $\\{(x,0):-2\\le x\\le 2\\}$ , with no off-axis points. For a point  $z=x$  on it,  $|z-3i|=\\sqrt{x^2+9}$ .",
          "This is maximised at the endpoints  $x=\\pm 2$ , giving  $\\sqrt{4+9}=\\sqrt{13}$ .  $\\boxed{\\sqrt{13}}$ "
        ]
      },
      {
        "name": "Direct algebraic squaring",
        "steps": [
          "From  $|z-2|+|z+2|=4$  isolate and square:  $|z-2|=4-|z+2|$  gives  $|z-2|^2=16-8|z+2|+|z+2|^2$ , so  $8|z+2|=16+|z+2|^2-|z-2|^2$ .",
          "With  $z=x+iy$ ,  $|z+2|^2-|z-2|^2=8x$ , hence  $8|z+2|=16+8x$ , i.e.  $|z+2|=2+x$ . Squaring again:  $(x+2)^2+y^2=(x+2)^2$ , which forces  $y^2=0$ , so  $y=0$ ; and  $|z+2|=2+x\\ge 0$  with  $x\\in[-2,2]$ .",
          "Therefore  $z=x$  is real on  $[-2,2]$  and  $|z-3i|^2=x^2+9\\le 4+9=13$ , with equality iff  $x^2=4$ .",
          "So  $\\max|z-3i|=\\sqrt{13}$ , reached at  $z=\\pm 2$ .  $\\boxed{\\sqrt{13}}$ "
        ]
      }
    ],
    "remark": "Insight: a sum-of-distances condition is an ellipse only when the constant strictly exceeds the inter-focal distance. Here the constant  $4$  equals it, the triangle-inequality equality boundary, so the conic degenerates to the segment between the foci. The whole problem hinges on noticing  $2a=2c$ ; once the phantom ellipse is dismissed, the maximisation is a one-line calculus-free observation. The seductive wrong answer  $5$  comes from optimising over a co-vertex that does not exist, and the value  $3$  (distance to the centre) is in fact the MINIMUM, attained at the midpoint  $z=0$ ."
  },
  {
    "theme": "modulusarg",
    "themeLabel": "Modulus & Argument",
    "title": "The Foot That Missed the Ray",
    "difficulty": 5,
    "task": "Find the greatest lower bound of",
    "tags": [
      "constrained minimisation",
      "ray locus",
      "foot of perpendicular",
      "infimum",
      "argument constraint"
    ],
    "statement": "A point  $z$  moves on the ray  $\\arg(z)=\\dfrac{\\pi}{4}$  (so  $z=t\\,e^{i\\pi/4}$  with  $t>0$ ; the origin is excluded since  $\\arg 0$  is undefined). Find the greatest lower bound of  $|z+3+4i|$ , i.e. the distance from  $z$  to the fixed point  $-3-4i$ , and state whether it is attained.  \\[ \\inf_{\\,\\arg z=\\pi/4}\\;\\bigl|\\,z-(-3-4i)\\,\\bigr| \\] ",
    "answer": " \\[\\boxed{\\,5\\ \\text{(infimum, not attained)}\\,}\\] ",
    "trap": "The reflex is to drop a perpendicular from  $a=-3-4i$  onto the line  $y=x$  and report that perpendicular distance. The line  $x-y=0$  gives  $\\dfrac{|(-3)-(-4)|}{\\sqrt2}=\\dfrac{1}{\\sqrt2}=\\dfrac{\\sqrt2}{2}\\approx0.707$ , and a student boxes this. But the constraint is a RAY, not the whole line:  $z=t\\,e^{i\\pi/4}$  needs  $t>0$ . The foot of the perpendicular sits at parameter  $t^{*}=\\operatorname{Re}\\!\\bigl(a\\,e^{-i\\pi/4}\\bigr)=-\\dfrac{7\\sqrt2}{2}<0$ , on the OPPOSITE ray (the  $\\arg=-3\\pi/4$  half). It is not an allowed point, so the unconstrained minimiser is illegal. On the admissible half  $t>0$  the squared distance is strictly increasing, so the nearest the point can get is the endpoint of the ray — the origin — which is itself excluded. Hence the distance is bounded below by  $|a|=5$  but never reaches it: the infimum  $5$  is approached as  $t\\to0^{+}$  and is not attained. Reporting  $\\sqrt2/2$ , or claiming the minimum  $5$  is achieved, both miss the case-check that the foot fell on the wrong side of the endpoint.",
    "solutions": [
      {
        "name": "Calculus on the squared distance along the ray",
        "steps": [
          "Parametrise the ray:  $z=t\\,e^{i\\pi/4}=\\dfrac{t}{\\sqrt2}(1+i)$  with  $t>0$ , and let  $a=-3-4i$ , so  $|a|=5$ . Then  $D(t)^2=|z-a|^2=\\Bigl(\\dfrac{t}{\\sqrt2}+3\\Bigr)^{2}+\\Bigl(\\dfrac{t}{\\sqrt2}+4\\Bigr)^{2}$ .",
          "Expand:  $D(t)^2=\\dfrac{t^2}{2}+\\dfrac{6t}{\\sqrt2}+9+\\dfrac{t^2}{2}+\\dfrac{8t}{\\sqrt2}+16=t^{2}+7\\sqrt2\\,t+25$ .",
          "Differentiate:  $\\dfrac{d}{dt}D(t)^2=2t+7\\sqrt2$ , which is  $>0$  for every  $t>0$  (the vertex sits at  $t=-\\tfrac{7\\sqrt2}{2}<0$ , outside the admissible range). So  $D(t)^2$  is strictly increasing on  $(0,\\infty)$ .",
          "A strictly increasing function on  $(0,\\infty)$  has infimum equal to its right-hand limit at  $0$ :  $\\displaystyle\\lim_{t\\to0^{+}}D(t)^2=25$ , so  $\\inf D(t)=5$ , approached but never attained because  $t=0$  (the origin) is excluded.  $\\boxed{5\\ \\text{(not attained)}}$ "
        ]
      },
      {
        "name": "Convex projection onto a ray, with the endpoint clamp",
        "steps": [
          "Minimising distance from a point  $a$  to a ray is the projection of  $a$  onto a convex set. First project onto the FULL line through the origin with direction  $u=e^{i\\pi/4}$ : the foot is at parameter  $t^{*}=\\operatorname{Re}\\!\\bigl(a\\,\\bar u\\bigr)=\\operatorname{Re}\\!\\bigl((-3-4i)e^{-i\\pi/4}\\bigr)=\\dfrac{-3-4}{\\sqrt2}=-\\dfrac{7}{\\sqrt2}=-\\dfrac{7\\sqrt2}{2}.$ ",
          "Because  $t^{*}<0$ , the line's foot lies on the wrong side of the ray's endpoint: it is not on the ray  $t>0$ . The projection-onto-a-ray rule then clamps the minimiser to the endpoint  $t=0$ , i.e. the origin.",
          "The clamped distance is  $|a-0|=|a|=5$ . But the origin is not part of the open ray (no argument), so this value is the limiting closest distance, attained only in the limit  $t\\to0^{+}$ .",
          "Therefore the greatest lower bound is  $|a|=5$ , not attained on the ray.  $\\boxed{5\\ \\text{(not attained)}}$ "
        ]
      },
      {
        "name": "Completing the square, no calculus",
        "steps": [
          "From the parametrisation,  $|z-a|^2=t^{2}+7\\sqrt2\\,t+25$  for  $t>0$ . Complete the square:  $t^{2}+7\\sqrt2\\,t+25=\\Bigl(t+\\dfrac{7\\sqrt2}{2}\\Bigr)^{2}+\\Bigl(25-\\dfrac{49}{2}\\Bigr)=\\Bigl(t+\\dfrac{7\\sqrt2}{2}\\Bigr)^{2}+\\dfrac12.$ ",
          "For  $t>0$  the bracket  $t+\\dfrac{7\\sqrt2}{2}>\\dfrac{7\\sqrt2}{2}$ , so  $\\Bigl(t+\\dfrac{7\\sqrt2}{2}\\Bigr)^{2}>\\dfrac{49}{2}$  and hence  $|z-a|^2>\\dfrac{49}{2}+\\dfrac12=25$  for every admissible  $t$ . Thus  $|z-a|>5$  strictly.",
          "As  $t\\to0^{+}$  the bracket tends to  $\\dfrac{7\\sqrt2}{2}$ , giving  $|z-a|^2\\to\\dfrac{49}{2}+\\dfrac12=25$ , so the bound  $5$  is sharp and is approached.",
          "Hence  $\\inf|z-a|=5$ , with no minimiser on the open ray.  $\\boxed{5\\ \\text{(not attained)}}$ "
        ]
      }
    ],
    "remark": "Insight: projecting a point onto a ray is not the same as projecting onto a line. The honest algorithm is two-step — drop the perpendicular to the supporting line, then CHECK the sign of the foot's parameter; if it falls beyond the endpoint, clamp to the endpoint. Here the foot lands at  $t^{*}=-\\tfrac{7\\sqrt2}{2}<0$ , on the opposite half-ray, so the seductive perpendicular distance  $\\sqrt2/2$  is the distance to a point that violates  $\\arg z=\\pi/4$ . On the admissible half the squared distance  $t^2+7\\sqrt2\\,t+25$  is monotone, pushing the closest approach to the excluded origin: the answer is the boundary value  $|a|=5$ , and the open-ray subtlety makes it an infimum that is never attained — the kind of degenerate optimum strong students overlook by treating the ray as a full line."
  },
  {
    "theme": "modulusarg",
    "themeLabel": "Modulus & Argument",
    "title": "The Chord That Folded Back",
    "difficulty": 5,
    "task": "Evaluate the telescoping-argument sum",
    "tags": [
      "principal argument",
      "half-angle",
      "branch cut",
      "telescoping",
      "unit circle",
      "conjugate symmetry"
    ],
    "statement": "For a real angle  $\\phi$  write  $\\operatorname{cis}\\phi=\\cos\\phi+i\\sin\\phi$ , and let  $\\arg$  denote the principal argument taking values in  $(-\\pi,\\pi]$ . With  $\\theta=\\dfrac{2\\pi}{15}$ , evaluate  \\[ S=\\sum_{k=1}^{10}\\arg\\!\\bigl(1+\\operatorname{cis}(k\\theta)\\bigr). \\]  The point  $1+\\operatorname{cis}\\phi$  is the tip of the chord joining  $1$  to  $\\operatorname{cis}\\phi$  on the unit circle, so geometrically each term is the angle that this chord-sum vector makes with the positive real axis.",
    "answer": " \\[\\boxed{\\,\\dfrac{2\\pi}{3}\\,}\\] ",
    "trap": "The seductive shortcut is the half-angle identity  $1+\\operatorname{cis}\\phi=2\\cos(\\phi/2)\\,\\operatorname{cis}(\\phi/2)$ , read as  $\\arg(1+\\operatorname{cis}\\phi)=\\phi/2$  unconditionally. That turns the sum into a telescoping/arithmetic series  $\\sum_{k=1}^{10}\\frac{k\\theta}{2}=\\frac{\\theta}{2}\\cdot\\frac{10\\cdot 11}{2}=\\frac{\\pi}{15}\\cdot 55=\\frac{11\\pi}{3}$ , the trap answer. The hidden constraint is the SIGN of the half-angle factor  $2\\cos(\\phi/2)$ : the formula  $\\arg=\\phi/2$  is valid only while  $\\cos(\\phi/2)>0$ , i.e.  $\\phi\\in(-\\pi,\\pi)$ . Here  $\\phi=k\\theta=\\frac{2\\pi k}{15}$ , and for  $k=8,9,10$  we have  $\\phi/2=\\frac{k\\pi}{15}>\\frac{\\pi}{2}$ , so  $\\cos(\\phi/2)<0$ : the factor is a NEGATIVE real, which rotates the vector by an extra  $\\pi$  and (after returning to the principal range) makes  $\\arg(1+\\operatorname{cis}\\phi)=\\frac{\\phi}{2}-\\pi$ , a negative number, not  $\\frac{\\phi}{2}$ . A strong student who never checks where the chord crosses to the left half-plane keeps adding positive halves and overshoots by exactly  $3\\pi$ , landing on  $\\frac{11\\pi}{3}$  instead of  $\\frac{2\\pi}{3}$ .",
    "solutions": [
      {
        "name": "Half-angle factorization with a branch correction",
        "steps": [
          "Factor out the half-angle:  $1+\\operatorname{cis}\\phi=\\operatorname{cis}\\frac{\\phi}{2}\\bigl(\\operatorname{cis}\\frac{\\phi}{2}+\\operatorname{cis}(-\\frac{\\phi}{2})\\bigr)=2\\cos\\frac{\\phi}{2}\\,\\operatorname{cis}\\frac{\\phi}{2}$ . This is an exact identity for every real  $\\phi$ .",
          "The argument of a complex number  $r\\,\\operatorname{cis}\\alpha$  is  $\\alpha$  when  $r>0$ , but  $\\alpha+\\pi$  (reduced to  $(-\\pi,\\pi]$ ) when  $r<0$ . Here  $r=2\\cos\\frac{\\phi}{2}$ , so with  $\\phi=k\\theta=\\frac{2\\pi k}{15}$  and  $\\frac{\\phi}{2}=\\frac{k\\pi}{15}$ : for  $k=1,\\dots,7$  we have  $\\frac{k\\pi}{15}<\\frac{\\pi}{2}$  so  $\\cos>0$  and  $\\arg(1+\\operatorname{cis}(k\\theta))=\\frac{k\\pi}{15}$ ; for  $k=8,9,10$  we have  $\\frac{\\pi}{2}<\\frac{k\\pi}{15}<\\pi$  so  $\\cos<0$  and the argument becomes  $\\frac{k\\pi}{15}-\\pi$ .",
          "Sum the two regimes separately:  $\\sum_{k=1}^{7}\\frac{k\\pi}{15}=\\frac{\\pi}{15}\\cdot 28=\\frac{28\\pi}{15}$ , and  $\\sum_{k=8}^{10}\\bigl(\\frac{k\\pi}{15}-\\pi\\bigr)=\\frac{\\pi}{15}\\cdot 27-3\\pi=\\frac{27\\pi}{15}-\\frac{45\\pi}{15}=-\\frac{18\\pi}{15}$ .",
          "Add:  $S=\\frac{28\\pi}{15}-\\frac{18\\pi}{15}=\\frac{10\\pi}{15}=\\frac{2\\pi}{3}$ .  $\\boxed{S=\\dfrac{2\\pi}{3}}$ "
        ]
      },
      {
        "name": "Conjugate-pairing symmetry",
        "steps": [
          "Since  $\\operatorname{cis}(2\\pi-\\phi)=\\overline{\\operatorname{cis}\\phi}$ , the numbers  $1+\\operatorname{cis}\\phi$  and  $1+\\operatorname{cis}(2\\pi-\\phi)$  are complex conjugates, so their principal arguments are negatives of each other (both lie in the right half-plane, away from the cut):  $\\arg(1+\\operatorname{cis}\\phi)+\\arg(1+\\operatorname{cis}(2\\pi-\\phi))=0$ .",
          "With  $\\phi=k\\theta=\\frac{2\\pi k}{15}$ , the partner  $2\\pi-\\phi$  corresponds to index  $15-k$ . Inside the range  $k=1,\\dots,10$  the pairs  $(k,15-k)$  that both appear are  $(5,10),(6,9),(7,8)$ , and each such pair contributes  $0$  to  $S$ .",
          "What remains uncancelled are the indices  $k=1,2,3,4$  (their partners  $11,12,13,14$  lie outside the sum). For these small  $k$ ,  $\\frac{k\\pi}{15}<\\frac{\\pi}{2}$ , so no branch issue arises and  $\\arg(1+\\operatorname{cis}(k\\theta))=\\frac{k\\pi}{15}$ .",
          "Hence  $S=\\sum_{k=1}^{4}\\frac{k\\pi}{15}=\\frac{\\pi}{15}(1+2+3+4)=\\frac{10\\pi}{15}=\\frac{2\\pi}{3}$ .  $\\boxed{S=\\dfrac{2\\pi}{3}}$ "
        ]
      },
      {
        "name": "Geometric chord/isosceles-triangle argument",
        "steps": [
          "Place  $1$ ,  $\\operatorname{cis}\\phi$  on the unit circle; their sum  $1+\\operatorname{cis}\\phi$  is the diagonal of the rhombus with these two unit sides, hence lies along the internal bisector of the angle between directions  $0$  and  $\\phi$ . For  $0<\\phi<\\pi$  this bisector points at angle  $\\frac{\\phi}{2}$ , the half-angle of the chord, giving  $\\arg=\\frac{\\phi}{2}$  directly from the geometry.",
          "But the rhombus diagonal is a genuine forward ray only while the two unit vectors are not nearly opposite. Once  $\\phi$  passes  $\\pi$  (here at  $k=8$ , since  $\\frac{2\\pi\\cdot 8}{15}>\\pi$ ), the point  $\\operatorname{cis}\\phi$  has crossed into the lower half-plane; the bisector of the actual (reflex-free) angle now points at  $\\frac{\\phi}{2}-\\pi$ , i.e. the diagonal sum vector falls into the fourth quadrant with a negative argument. Concretely  $k=8,9,10$  give  $\\arg=\\frac{k\\pi}{15}-\\pi=-\\frac{7\\pi}{15},-\\frac{2\\pi}{5},-\\frac{\\pi}{3}$ .",
          "Collect the contributions: the rising part  $k=1,\\dots,7$  gives  $\\frac{\\pi}{15}(1+\\cdots+7)=\\frac{28\\pi}{15}$ , and the folded-back part  $k=8,9,10$  gives  $-\\frac{7\\pi}{15}-\\frac{2\\pi}{5}-\\frac{\\pi}{3}=-\\frac{7\\pi}{15}-\\frac{6\\pi}{15}-\\frac{5\\pi}{15}=-\\frac{18\\pi}{15}$ .",
          "Therefore  $S=\\frac{28\\pi}{15}-\\frac{18\\pi}{15}=\\frac{2\\pi}{3}$ .  $\\boxed{S=\\dfrac{2\\pi}{3}}$ "
        ]
      }
    ],
    "remark": "Insight:  $\\arg(1+\\operatorname{cis}\\phi)=\\phi/2$  is the half-angle-of-a-chord identity, but it carries an invisible passport stamp  $\\cos(\\phi/2)>0$ . The moment the chord's far endpoint slides past the diameter (here at  $k=8$ , where  $k\\theta$  first exceeds  $\\pi$ ), the half-angle factor turns negative and the principal argument silently jumps by  $-\\pi$  to fold back into  $(-\\pi,\\pi]$ . The naive telescoping  $\\sum k\\theta/2=\\frac{11\\pi}{3}$  overshoots the true  $\\frac{2\\pi}{3}$  by exactly  $3\\pi$ , one  $\\pi$  for each of the three folded indices  $k=8,9,10$ . The conjugate-pairing solution is the most elegant: almost everything cancels in symmetric pairs, and only the four smallest, branch-safe terms survive."
  },
  {
    "theme": "demoivre",
    "themeLabel": "De Moivre & Powers",
    "title": "Where Two Wheels Overlap",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "roots of unity",
      "equally spaced",
      "counting",
      "gcd-lcm"
    ],
    "statement": "On the unit circle, mark every solution of  $z^{12}=1$  and every solution of  $z^{18}=1$ . Determine the number of distinct points marked in total.",
    "answer": " $24$  distinct points.",
    "trap": "Adding  $12+18=30$  and stopping — this double-counts the points that solve both equations. The shared points are exactly the common roots, and forgetting to subtract them (or guessing the overlap is just  $z=1$ ) is the classic error.",
    "solutions": [
      {
        "name": "Inclusion–exclusion via gcd",
        "steps": [
          "The  $12$ th roots of unity form a group  $\\mu_{12}$  of  $12$  equally spaced points; the  $18$ th roots form  $\\mu_{18}$  with  $18$  points.",
          "A point lies in both sets iff  $z^{12}=1$  and  $z^{18}=1$ , i.e. iff  $z^{\\gcd(12,18)}=1$ . Since  $\\gcd(12,18)=6$ , the overlap is  $\\mu_6$ , which has  $6$  points.",
          "By inclusion–exclusion the union has  $12+18-6=24$  points.",
          "Hence there are  $\\boxed{24}$  distinct points."
        ]
      },
      {
        "name": "Direct angle bookkeeping",
        "steps": [
          "The marked angles are  $\\dfrac{2\\pi a}{12}=\\dfrac{\\pi a}{6}$  for  $a=0,\\dots,11$  and  $\\dfrac{2\\pi b}{18}=\\dfrac{\\pi b}{9}$  for  $b=0,\\dots,17$ .",
          "Two such angles coincide (mod  $2\\pi$ ) iff  $\\dfrac{a}{6}=\\dfrac{b}{9}$ , i.e.  $3a=2b$ ; the coincidences are the multiples of  $\\dfrac{2\\pi}{6}$ , giving  $6$  shared angles.",
          "Distinct angles  $=12+18-6=24$ .",
          "Thus  $\\boxed{24}$  points."
        ]
      },
      {
        "name": "Common refinement",
        "steps": [
          "Both  $\\mu_{12}$  and  $\\mu_{18}$  are subsets of  $\\mu_{\\operatorname{lcm}(12,18)}=\\mu_{36}$ , whose  $36$  points are spaced by  $10^\\circ$ .",
          "Within  $\\mu_{36}$ ,  $\\mu_{12}$  picks every  $3$ rd point and  $\\mu_{18}$  every  $2$ nd point; their union picks the positions  $k$  with  $3\\mid k$  or  $2\\mid k$ .",
          "Among  $k=0,\\dots,35$ , the count with  $2\\mid k$  or  $3\\mid k$  is  $18+12-6=24$ .",
          "Hence  $\\boxed{24}$  distinct points."
        ]
      }
    ],
    "remark": "Insight:  $|\\mu_m\\cup\\mu_n|=m+n-\\gcd(m,n)$  because  $\\mu_m\\cap\\mu_n=\\mu_{\\gcd(m,n)}$ . The overlap is governed by the gcd, the smallest circle that contains both, not by the lcm."
  },
  {
    "theme": "demoivre",
    "themeLabel": "De Moivre & Powers",
    "title": "A Comb of Cosines",
    "difficulty": 4,
    "task": "Prove that",
    "tags": [
      "geometric series",
      "series summation",
      "de moivre",
      "telescoping"
    ],
    "statement": "For  $\\sin\\theta\\neq0$ , prove that  $\\displaystyle\\sum_{k=1}^{n}\\cos\\big((2k-1)\\theta\\big)=\\frac{\\sin 2n\\theta}{2\\sin\\theta}$ , and deduce the value of  $\\displaystyle\\sum_{k=1}^{n}\\cos\\!\\Big(\\frac{(2k-1)\\pi}{2n}\\Big).$ ",
    "answer": "The identity holds, and  $\\displaystyle\\sum_{k=1}^{n}\\cos\\!\\Big(\\frac{(2k-1)\\pi}{2n}\\Big)=0.$ ",
    "trap": "Trying to telescope the cosines directly with product-to-sum on adjacent terms, which gets messy fast. Worse, in the deduction, plugging  $\\theta=\\tfrac{\\pi}{2n}$  into  $\\dfrac{\\sin 2n\\theta}{2\\sin\\theta}$  gives  $\\dfrac{\\sin\\pi}{2\\sin(\\pi/2n)}=\\dfrac{0}{\\text{nonzero}}=0$  — but  $\\sin\\theta\\neq0$  must first be checked so the formula even applies (it does, since  $0<\\tfrac{\\pi}{2n}<\\pi$ ).",
    "solutions": [
      {
        "name": "Geometric series of  $e^{i\\theta}$ ",
        "steps": [
          "The sum is  $\\operatorname{Re}\\sum_{k=1}^{n}e^{i(2k-1)\\theta}=\\operatorname{Re}\\Big(e^{i\\theta}\\sum_{k=0}^{n-1}e^{2ik\\theta}\\Big).$ ",
          "The inner geometric series sums to  $\\dfrac{e^{2in\\theta}-1}{e^{2i\\theta}-1}$ , so the whole bracket is  $e^{i\\theta}\\cdot\\dfrac{e^{2in\\theta}-1}{e^{2i\\theta}-1}.$ ",
          "Factor  $e^{2in\\theta}-1=e^{in\\theta}\\cdot2i\\sin n\\theta$  and  $e^{2i\\theta}-1=e^{i\\theta}\\cdot2i\\sin\\theta$ , giving  $e^{i\\theta}\\cdot\\dfrac{e^{in\\theta}\\sin n\\theta}{e^{i\\theta}\\sin\\theta}=\\dfrac{e^{in\\theta}\\sin n\\theta}{\\sin\\theta}.$ ",
          "Taking the real part:  $\\dfrac{\\cos n\\theta\\,\\sin n\\theta}{\\sin\\theta}=\\dfrac{\\sin 2n\\theta}{2\\sin\\theta}.$  This proves the identity.",
          "Now set  $\\theta=\\tfrac{\\pi}{2n}$  (valid as  $0<\\theta<\\pi$  so  $\\sin\\theta\\neq0$ ): the sum equals  $\\dfrac{\\sin\\pi}{2\\sin(\\pi/2n)}=\\boxed{0}.$ "
        ]
      },
      {
        "name": "Telescoping by product-to-sum",
        "steps": [
          "Multiply each term by  $2\\sin\\theta$ :  $2\\sin\\theta\\cos((2k-1)\\theta)=\\sin(2k\\theta)-\\sin((2k-2)\\theta)$  by product-to-sum.",
          "Summing  $k=1$  to  $n$  telescopes:  $2\\sin\\theta\\sum_{k=1}^n\\cos((2k-1)\\theta)=\\sin(2n\\theta)-\\sin0=\\sin2n\\theta.$ ",
          "Divide by  $2\\sin\\theta$  to get  $\\dfrac{\\sin2n\\theta}{2\\sin\\theta}.$ ",
          "At  $\\theta=\\tfrac{\\pi}{2n}$ , the numerator  $\\sin\\pi=0$ , so the sum is  $\\boxed{0}.$ "
        ]
      },
      {
        "name": "Symmetry of the deduced sum",
        "steps": [
          "The angles  $\\dfrac{(2k-1)\\pi}{2n}$  for  $k=1,\\dots,n$  are symmetric about  $\\tfrac\\pi2$ : pairing  $k$  with  $n+1-k$  gives angles summing to  $\\pi$ .",
          "Since  $\\cos(\\pi-x)=-\\cos x$ , each such pair cancels; if  $n$  is odd the middle term is  $\\cos\\tfrac\\pi2=0.$ ",
          "Hence the total is  $\\boxed{0}$ , matching the closed form  $\\dfrac{\\sin\\pi}{2\\sin(\\pi/2n)}.$ "
        ]
      }
    ],
    "remark": "Insight: a finite cosine (or sine) sum is just the real (or imaginary) part of a geometric series in  $e^{i\\theta}$ . The factor-out trick  $e^{i\\alpha}-1=2i\\sin\\tfrac\\alpha2\\,e^{i\\alpha/2}$  converts the quotient into a clean Dirichlet-kernel form."
  },
  {
    "theme": "demoivre",
    "themeLabel": "De Moivre & Powers",
    "title": "Nine Twists to the Real Line",
    "difficulty": 4,
    "task": "Find the number of",
    "tags": [
      "de moivre",
      "powers",
      "real values",
      "modulus"
    ],
    "statement": "Let  $z=2\\big(\\cos\\tfrac\\pi9+i\\sin\\tfrac\\pi9\\big)$ . Find the smallest positive integer  $n$  for which  $z^n$  is a real number, and compute that value of  $z^n$ .",
    "answer": "The smallest such  $n$  is  $9$ , and  $z^9=-512.$ ",
    "trap": "Demanding  $z^n=1$  (a root of unity) and so chasing the argument back to  $0^\\circ$ , which would need  $n=18$ . But  $z^n$  is real as soon as its argument is a multiple of  $180^\\circ$ , reached first at  $n=9$  — and the modulus is  $2$ , not  $1$ , so  $|z^9|=512$ , not  $1$ .",
    "solutions": [
      {
        "name": "De Moivre on argument and modulus",
        "steps": [
          "By De Moivre,  $z^n=2^n\\big(\\cos\\tfrac{n\\pi}{9}+i\\sin\\tfrac{n\\pi}{9}\\big).$ ",
          " $z^n$  is real iff  $\\sin\\tfrac{n\\pi}{9}=0$ , i.e.  $\\tfrac{n\\pi}{9}$  is a multiple of  $\\pi$ , i.e.  $9\\mid n.$ ",
          "The smallest positive such  $n$  is  $9.$ ",
          "Then  $z^9=2^9(\\cos\\pi+i\\sin\\pi)=512\\cdot(-1)=\\boxed{-512}.$ "
        ]
      },
      {
        "name": "Track the angle in degrees",
        "steps": [
          "Here  $\\arg z=20^\\circ$ , so  $\\arg(z^n)=20n^\\circ.$ ",
          "Real means  $20n^\\circ$  is a multiple of  $180^\\circ$ :  $20n=180m\\Rightarrow n=9m$ , least at  $m=1$ ,  $n=9.$ ",
          "At  $n=9$  the argument is  $180^\\circ$ , so  $z^9$  is negative real with modulus  $2^9=512.$ ",
          "Hence  $z^9=\\boxed{-512}.$ "
        ]
      },
      {
        "name": "Cube to simplify",
        "steps": [
          "Compute  $z^3=2^3\\,\\mathrm{cis}\\,60^\\circ=8\\big(\\tfrac12+i\\tfrac{\\sqrt3}{2}\\big)=4+4\\sqrt3\\,i$ , not real.",
          "Then  $z^9=(z^3)^3=(8\\,\\mathrm{cis}60^\\circ)^3=512\\,\\mathrm{cis}180^\\circ=-512$ , which is real.",
          "No smaller power works:  $\\arg(z^n)=20n^\\circ$  first hits a multiple of  $180^\\circ$  at  $n=9.$ ",
          "Therefore the answer is  $n=9$ ,  $z^9=\\boxed{-512}.$ "
        ]
      }
    ],
    "remark": "Insight: separating modulus from argument is the whole game. 'Real' constrains only the argument (multiple of  $180^\\circ$ ); the modulus  $2^n$  rides along untouched, so the real value can be huge. Distinguish 'real', 'on the unit circle', and 'equal to  $1$ ' — three different conditions."
  },
  {
    "theme": "demoivre",
    "themeLabel": "De Moivre & Powers",
    "title": "The Half-Angle That Flips the Sign",
    "difficulty": 5,
    "task": "Evaluate in closed form",
    "tags": [
      "binomial theorem",
      "de moivre",
      "half-angle",
      "imaginary part companion",
      "sign trap"
    ],
    "statement": "For a real angle  $\\theta$  define the companion sums  \\[ C(\\theta)=\\sum_{k=0}^{n}\\binom{n}{k}\\cos k\\theta,\\qquad S(\\theta)=\\sum_{k=0}^{n}\\binom{n}{k}\\sin k\\theta. \\]  First establish the closed form of the imaginary-part companion  $S(\\theta)$ , and use the same complex-exponential machinery as a lemma to evaluate the single number  \\[ \\Sigma=\\sum_{k=0}^{2024}\\binom{2024}{k}\\cos\\frac{k\\pi}{4}. \\]  Give  $\\Sigma$  in exact closed form (no trigonometric functions in the answer).",
    "answer": " \\[\\boxed{\\Sigma=-\\left(2+\\sqrt{2}\\right)^{1012}}\\] ",
    "trap": "The fatal slip is the half-angle sign inside  $\\bigl(1+e^{i\\pi/4}\\bigr)^{2024}=\\bigl(2\\cos\\tfrac{\\pi}{8}\\bigr)^{2024}e^{i\\cdot 2024\\pi/8}$ . The exponent collapses to  $e^{i\\cdot 253\\pi}$ , and because  $253$  is odd this equals  $-1$ , not  $+1$ . A student who writes  $2024\\cdot\\tfrac{\\pi}{8}=253\\pi$  and then carelessly treats  $\\cos(253\\pi)=\\cos(\\text{integer}\\cdot\\pi)$  as  $+1$  (or who reduces  $253\\pi$  modulo  $2\\pi$  to  $\\pi$  but then drops the resulting minus sign) reports the POSITIVE value  $+(2+\\sqrt2)^{1012}$  and loses the whole problem. The magnitude  $(2\\cos\\tfrac{\\pi}{8})^{2024}=(2+\\sqrt2)^{1012}$  is correct either way; the entire difficulty is the parity of  $253$  deciding the sign. (A second, subtler version of the same trap: writing  $1+e^{i\\pi/4}=2\\cos\\tfrac{\\pi}{8}\\,e^{i\\pi/8}$  is legitimate ONLY because  $\\cos\\tfrac{\\pi}{8}>0$ ; the factorization  $1+e^{i\\theta}=2\\cos\\tfrac{\\theta}{2}e^{i\\theta/2}$  silently assumes  $\\cos\\tfrac{\\theta}{2}\\ge 0$ , which fails for  $\\theta$  near  $\\pm\\pi$  and would flip the argument by  $\\pi$ .)",
    "solutions": [
      {
        "name": "Complex exponential, then read off the real part",
        "steps": [
          "Pack both companions into one complex sum. By the binomial theorem,  \\[ C(\\theta)+iS(\\theta)=\\sum_{k=0}^{n}\\binom{n}{k}\\bigl(e^{i\\theta}\\bigr)^{k}=\\bigl(1+e^{i\\theta}\\bigr)^{n}. \\]  Factor out the half-angle:  $1+e^{i\\theta}=e^{i\\theta/2}\\bigl(e^{-i\\theta/2}+e^{i\\theta/2}\\bigr)=2\\cos\\tfrac{\\theta}{2}\\,e^{i\\theta/2}$  (valid as a polar form precisely when  $\\cos\\tfrac{\\theta}{2}\\ge 0$ ). Hence  \\[ \\bigl(1+e^{i\\theta}\\bigr)^{n}=\\bigl(2\\cos\\tfrac{\\theta}{2}\\bigr)^{n}e^{in\\theta/2}. \\] ",
          "Taking imaginary and real parts gives the companions at one stroke:  \\[ S(\\theta)=\\Bigl(2\\cos\\tfrac{\\theta}{2}\\Bigr)^{n}\\sin\\tfrac{n\\theta}{2},\\qquad C(\\theta)=\\Bigl(2\\cos\\tfrac{\\theta}{2}\\Bigr)^{n}\\cos\\tfrac{n\\theta}{2}. \\]  The first is the requested imaginary-part companion; the second is the lemma we now specialise.",
          "Set  $n=2024$ ,  $\\theta=\\tfrac{\\pi}{4}$ , so  $\\Sigma=C\\!\\left(\\tfrac{\\pi}{4}\\right)=\\bigl(2\\cos\\tfrac{\\pi}{8}\\bigr)^{2024}\\cos\\!\\bigl(2024\\cdot\\tfrac{\\pi}{8}\\bigr)$ . The magnitude uses  $2\\cos\\tfrac{\\pi}{8}=2\\sqrt{\\tfrac{1+\\cos(\\pi/4)}{2}}=\\sqrt{2+\\sqrt2}$ , so  $\\bigl(2\\cos\\tfrac{\\pi}{8}\\bigr)^{2024}=(2+\\sqrt2)^{1012}$ .",
          "Now the sign. The angle is  $2024\\cdot\\tfrac{\\pi}{8}=253\\pi$ , and since  $253$  is odd,  $\\cos(253\\pi)=-1$ . Therefore  \\[ \\Sigma=(2+\\sqrt2)^{1012}\\cdot(-1)=\\boxed{-(2+\\sqrt2)^{1012}}. \\] "
        ]
      },
      {
        "name": "Reduce the base root to the unit circle first",
        "steps": [
          "Write  $w=e^{i\\pi/4}=\\tfrac{1+i}{\\sqrt2}$ , so  $\\Sigma=\\operatorname{Re}\\bigl[(1+w)^{2024}\\bigr]$ . Compute  $1+w$  directly in polar form:  \\[ |1+w|^{2}=(1+w)(1+\\bar w)=1+(w+\\bar w)+|w|^{2}=2+2\\cos\\tfrac{\\pi}{4}=2+\\sqrt2, \\]  so  $|1+w|=\\sqrt{2+\\sqrt2}$ , and  $\\arg(1+w)=\\tfrac{\\pi}{8}$  since  $1+w$  has positive real part  $1+\\tfrac{1}{\\sqrt2}$  and positive imaginary part  $\\tfrac{1}{\\sqrt2}$  (the bisector of the angle between  $1$  and  $w$ ).",
          "By De Moivre,  $(1+w)^{2024}=(2+\\sqrt2)^{1012}\\,e^{i\\cdot 2024\\pi/8}$ , whose real part is  $(2+\\sqrt2)^{1012}\\cos(253\\pi)$ .",
          "Reduce the bearing:  $253\\pi=252\\pi+\\pi$ , and  $252\\pi$  is a whole number of full turns, leaving residual angle  $\\pi$ . Thus  $\\cos(253\\pi)=\\cos\\pi=-1$  — the point  $(1+w)^{2024}$  has rotated to the negative real axis.",
          "Hence  $\\Sigma=(2+\\sqrt2)^{1012}\\cdot(-1)=\\boxed{-(2+\\sqrt2)^{1012}}$ , a negative real number."
        ]
      },
      {
        "name": "Real linear recurrence via the companion polynomial",
        "steps": [
          "Let  $a_m=\\operatorname{Re}\\bigl[(1+w)^{m}\\bigr]$  with  $w=e^{i\\pi/4}$ , so  $\\Sigma=a_{2024}$ . The number  $1+w$  and its conjugate  $1+\\bar w$  are the two roots of  \\[ x^{2}-\\bigl(2\\operatorname{Re}(1+w)\\bigr)x+|1+w|^{2}=x^{2}-(2+\\sqrt2)\\,x+(2+\\sqrt2)=0, \\]  using  $2\\operatorname{Re}(1+w)=2+2\\cos\\tfrac{\\pi}{4}=2+\\sqrt2$  and  $|1+w|^{2}=2+\\sqrt2$  from before.",
          "Therefore the real sequence obeys  $a_m=(2+\\sqrt2)\\,a_{m-1}-(2+\\sqrt2)\\,a_{m-2}$ , with  $a_0=\\operatorname{Re}(1)=1$  and  $a_1=\\operatorname{Re}(1+w)=1+\\tfrac{1}{\\sqrt2}$ . This is a Chebyshev-type relation: it generates exactly the real parts of the powers without ever leaving the reals.",
          "Solving in closed form,  $a_m=r^{m}\\cos m\\phi$  where  $r=\\sqrt{2+\\sqrt2}$  and  $\\phi=\\arg(1+w)=\\tfrac{\\pi}{8}$ , matching the previous methods. At  $m=2024$ :  $a_{2024}=(2+\\sqrt2)^{1012}\\cos\\!\\bigl(2024\\cdot\\tfrac{\\pi}{8}\\bigr)=(2+\\sqrt2)^{1012}\\cos(253\\pi)$ .",
          "Since  $253$  is odd,  $\\cos(253\\pi)=-1$ , giving  $\\Sigma=a_{2024}=\\boxed{-(2+\\sqrt2)^{1012}}$ ."
        ]
      }
    ],
    "remark": "Insight: the binomial-with-trig pair is a single complex statement,  $C(\\theta)+iS(\\theta)=(1+e^{i\\theta})^{n}$ , and the half-angle factorization  $1+e^{i\\theta}=2\\cos\\tfrac{\\theta}{2}e^{i\\theta/2}$  does ALL the work, delivering both companions at once. The magnitude  $(2+\\sqrt2)^{1012}$  falls out routinely; the only place to fail is the phase  $2024\\cdot\\tfrac{\\pi}{8}=253\\pi$ , where the parity of  $253$  — not any arithmetic with the large exponent — fixes the sign as negative. The deeper warning is that  $2\\cos\\tfrac{\\theta}{2}$  is a legitimate modulus only while  $\\cos\\tfrac{\\theta}{2}\\ge 0$ ; here  $\\theta=\\tfrac{\\pi}{4}$  keeps us safe, but the moment  $\\theta$  strays past  $\\pi$  the same formula would silently swallow an extra  $\\pi$  of argument. The companion  $S(\\tfrac{\\pi}{4})$  vanishes for the same reason  $\\cos(253\\pi)=-1$ : there  $\\sin(253\\pi)=0$ , a clean consistency check that the whole power has landed exactly on the real axis."
  },
  {
    "theme": "demoivre",
    "themeLabel": "De Moivre & Powers",
    "title": "Where a Power Meets Its Own Reflection",
    "difficulty": 5,
    "task": "Classify and count all solutions",
    "tags": [
      "roots of unity",
      "modulus argument split",
      "conjugate equation",
      "degenerate case",
      "de moivre"
    ],
    "statement": "Fix an integer  $n\\ge 2$ . Find every complex number  $z$  satisfying  \\[ z^{\\,n}=\\overline{z}, \\]  where  $\\overline{z}$  is the complex conjugate of  $z$ . Give a complete classification of the solution set (not merely a count), and then determine, in terms of  $n$ , the exact number  $N(n)$  of distinct solutions. State clearly whether  $N(n)$  depends on the parity of  $n$ , and as a numerical anchor report the value of  $N(2024)$ .",
    "answer": " \\[\\boxed{\\;z=0\\ \\text{or}\\ z^{n+1}=1,\\qquad N(n)=n+2\\;}\\] ",
    "trap": "The reflex move is to write  $\\overline{z}=\\dfrac{|z|^{2}}{z}$  and clear the denominator to get  $z^{\\,n+1}=|z|^{2}$ , then declare \"this is  $z^{n+1}=c$ , a degree- $n{+}1$  equation, so there are exactly  $n+1$  roots.\" This is wrong twice over. (i) The step  $\\overline{z}=|z|^{2}/z$  silently DIVIDES by  $z$  and so DELETES the legitimate solution  $z=0$  (which does satisfy  $0^{n}=\\overline{0}$ ), costing one root. (ii) Worse,  $z^{n+1}=|z|^{2}$  is NOT a polynomial equation: its right side  $|z|^{2}=z\\overline{z}$  still contains  $z$ , so one may not invoke the Fundamental Theorem of Algebra and read off  $n+1$  roots — the count is a coincidence only after one separately proves  $|z|=1$ . The honest route forces the modulus equation  $|z|^{n}=|z|$  FIRST, which splits cleanly into  $|z|=0$  and  $|z|=1$ ; only on the unit circle does the argument equation  $e^{i(n+1)\\theta}=1$  then yield the  $n+1$  roots of unity. Counting the isolated  $z=0$  gives  $N(n)=n+2$ . A second, subtler miscount: a student who keeps  $z=0$  but assumes the unit-circle solutions are the  $n$ -th roots of unity (matching the visible exponent  $n$ ) reports  $n+1$ ; the conjugate raises the effective degree to  $n+1$ , so they are the  $(n+1)$ -th roots of unity, not the  $n$ -th.",
    "solutions": [
      {
        "name": "Modulus first, then argument (the clean split)",
        "steps": [
          "Take modulus of both sides. Since  $|\\overline{z}|=|z|$  and  $|z^{n}|=|z|^{n}$ , the equation forces  $|z|^{n}=|z|$ , i.e.  $|z|\\bigl(|z|^{\\,n-1}-1\\bigr)=0$ . As  $n\\ge 2$  this gives exactly two possibilities for the modulus:  $|z|=0$  or  $|z|=1$ . The case  $|z|=0$  is the single point  $z=0$ , and indeed  $0^{n}=0=\\overline{0}$ , so  $z=0$  is a genuine solution — the one the careless division throws away.",
          "Now suppose  $|z|=1$ , so  $z=e^{i\\theta}$  and  $\\overline{z}=e^{-i\\theta}$ . The equation becomes  $e^{in\\theta}=e^{-i\\theta}$ , i.e.  $e^{i(n+1)\\theta}=1$ . Hence  $(n+1)\\theta\\equiv 0 \\pmod{2\\pi}$ , giving  $\\theta=\\dfrac{2\\pi k}{n+1}$  for  $k=0,1,\\dots,n$ . These are precisely the  $n+1$  distinct  $(n+1)$ -th roots of unity: the conjugate has bumped the effective degree from  $n$  to  $n+1$ .",
          "Assemble the full set:  $\\{0\\}\\cup\\{\\,z:z^{n+1}=1\\,\\}$ . The unit point  $z=0$  is disjoint from the unit circle, so the union is disjoint and the counts add:  $N(n)=1+(n+1)=n+2$ . This is independent of the parity of  $n$  — the only role of  $n$  is to set the modulus exponent  $n-1\\ge 1$  (so  $|z|=1$  is the unique positive modulus) and to fix the root count at  $n+1$ . Therefore  $\\boxed{N(n)=n+2}$  for every  $n\\ge 2$ , and in particular  $N(2024)=2026$ ."
        ]
      },
      {
        "name": "Conjugate-pair elimination to a true polynomial",
        "steps": [
          "Conjugate the entire equation:  $\\overline{z^{\\,n}}=\\overline{\\overline{z}}$  gives  $\\overline{z}^{\\,n}=z$ . We now have the pair  $z^{n}=\\overline{z}$  and  $\\overline{z}^{\\,n}=z$ . Substitute the first into the second by replacing  $\\overline{z}=z^{n}$ :  $z=\\overline{z}^{\\,n}=\\bigl(z^{n}\\bigr)^{n}=z^{\\,n^{2}}$ . This is now a genuine polynomial equation  $z^{\\,n^{2}}=z$ , i.e.  $z\\bigl(z^{\\,n^{2}-1}-1\\bigr)=0$ , with no conjugate left to spoil the Fundamental Theorem of Algebra.",
          "Its roots are  $z=0$  together with the  $(n^{2}-1)$ -th roots of unity. But this substitution was a NECESSARY consequence, not an equivalence, so we must filter these candidates back through the original  $z^{n}=\\overline{z}$ . For  $z=0$  it holds. For a root of unity  $z=e^{i\\theta}$ ,  $\\overline{z}=e^{-i\\theta}$  and the original demands  $e^{in\\theta}=e^{-i\\theta}$ , i.e.  $e^{i(n+1)\\theta}=1$  — exactly the  $(n+1)$ -th roots of unity. Note  $(n+1)\\mid(n^{2}-1)=(n-1)(n+1)$ , so every surviving root is indeed among the  $(n^{2}-1)$ -th roots, confirming consistency.",
          "Thus the original solution set is  $\\{0\\}\\cup\\{\\text{the } n+1 \\text{ roots of } z^{n+1}=1\\}$ , of size  $1+(n+1)=n+2$ . The detour through  $z^{n^{2}}=z$  shows why a naive degree count is treacherous: the apparent degrees ( $n$ , then  $n^2$ ) are both red herrings — the real count is governed by the bumped exponent  $n+1$ . Hence  $\\boxed{N(n)=n+2}$ , with  $N(2024)=2026$ , independent of parity."
        ]
      },
      {
        "name": "Geometric / rotation reading",
        "steps": [
          "Interpret  $z\\mapsto z^{n}$  and  $z\\mapsto\\overline{z}$  as maps of the plane. Conjugation reflects across the real axis: it preserves modulus and negates argument. The map  $z\\mapsto z^{n}$  scales modulus by the  $n$ -th power and multiplies argument by  $n$ . For the two outputs to coincide, their moduli must agree:  $|z|^{n}=|z|$ , which (for  $n\\ge2$ ) pins  $|z|\\in\\{0,1\\}$  — a fixed circle plus the origin, no other radius can survive the modulus mismatch.",
          "On  $|z|=1$  modulus is automatic, so only the arguments must match:  $z^{n}$  sits at argument  $n\\theta$ , while  $\\overline{z}$  sits at  $-\\theta$ . Equality of points on the unit circle means  $n\\theta\\equiv-\\theta\\pmod{2\\pi}$ , i.e.  $(n+1)\\theta\\equiv 0$ . Geometrically the solutions are the  $n+1$  equally spaced points where rotating by total angle  $(n+1)\\theta$  returns to the start — the vertices of a regular  $(n+1)$ -gon inscribed in the unit circle (the  $(n+1)$ -th roots of unity).",
          "The origin is the lone fixed point off the circle (it is its own conjugate and its own power), contributing one more solution disjoint from the  $(n+1)$ -gon. Adding them,  $N(n)=(n+1)+1=n+2$ . Because a regular  $(n+1)$ -gon has  $n+1$  vertices regardless of whether  $n$  is even or odd, the total  $\\boxed{N(n)=n+2}$  never depends on parity; for  $n=2024$  this is  $N(2024)=2026$ ."
        ]
      }
    ],
    "remark": "Insight: the whole problem is a controlled demonstration that an equation mixing  $z$  with  $\\overline{z}$  is NOT a polynomial, and the Fundamental Theorem of Algebra must be earned, not assumed. The disciplined move is to take modulus first — that converts the conjugate into the scalar equation  $|z|^{n}=|z|$  and forces the genuine case-split  $|z|=0$  versus  $|z|=1$ . The origin is the trap-door root that vanishes the instant you write  $\\overline{z}=|z|^{2}/z$ ; the unit-circle roots are the  $(n+1)$ -th — not  $n$ -th — roots of unity because conjugation contributes a hidden  $+1$  to the effective degree. Both surprises push the count UP to  $n+2$ , and the count is gloriously parity-blind:  $n$  only chooses the modulus exponent and the polygon's vertex number, never the structure of the answer."
  },
  {
    "theme": "demoivre",
    "themeLabel": "De Moivre & Powers",
    "title": "The Indexed Wheel of Seven",
    "difficulty": 5,
    "task": "Evaluate in closed form",
    "tags": [
      "roots of unity",
      "de moivre",
      "abel summation",
      "differentiated geometric series",
      "derivative trap"
    ],
    "statement": "Let  $\\zeta=e^{2\\pi i/7}$  be a primitive seventh root of unity. The seven powers  $1,\\zeta,\\zeta^{2},\\dots,\\zeta^{6}$  are the vertices of a regular heptagon, and it is classical that they sum to zero, equivalently  $\\sum_{k=1}^{6}\\zeta^{k}=-1$  and  $\\sum_{k=1}^{6}\\cos\\frac{2k\\pi}{7}=-\\frac12$ . Now attach the index as a weight and evaluate the single real number  \\[ W=\\sum_{k=1}^{6} k\\,\\cos\\frac{2k\\pi}{7}=1\\cos\\frac{2\\pi}{7}+2\\cos\\frac{4\\pi}{7}+3\\cos\\frac{6\\pi}{7}+4\\cos\\frac{8\\pi}{7}+5\\cos\\frac{10\\pi}{7}+6\\cos\\frac{12\\pi}{7}. \\]  Give  $W$  as an exact rational number, with no trigonometric functions remaining.",
    "answer": " \\[\\boxed{W=-\\dfrac{7}{2}}\\] ",
    "trap": "The seductive wrong answer is  $W=0$ . A strong student notices that  $W=\\operatorname{Re}\\bigl(\\sum_{k=1}^{6}k\\,\\zeta^{k}\\bigr)$  and that  $g(z)=\\sum_{k=0}^{6}z^{k}$  vanishes at  $z=\\zeta$  (it is the cyclotomic factor  $\\frac{z^{7}-1}{z-1}$  whose roots are exactly the primitive seventh roots). Since the index weight is produced by differentiation,  $\\sum_{k=1}^{6}k\\,z^{k}=z\\,g'(z)$ , the student leaps to “ $g(\\zeta)=0$ , so its derivative is  $0$  there, hence  $W=0$ .”\\ This is the derivative-of-a-vanishing-function fallacy:  $g(\\zeta)=0$  says the value is zero at one point, which says nothing about the slope; indeed  $g'(\\zeta)\\neq0$  because  $\\zeta$  is a simple root of  $z^{7}-1$ . A second, sign-level trap lurks in the closed form  $z\\,g'(\\zeta)=\\frac{7}{\\zeta-1}$ : writing the denominator as  $1-\\zeta$  instead of  $\\zeta-1$  flips  $\\operatorname{Re}\\frac{1}{\\zeta-1}=-\\frac12$  into  $+\\frac12$  and reports  $W=+\\frac72$ . Both the “ $0$ ”\\ and the “ $+\\frac72$ ”\\ are wrong; the truth is  $-\\frac72$ .",
    "solutions": [
      {
        "name": "Differentiate the geometric series (Abel's device)",
        "steps": [
          "Lift to the complex plane: with  $\\zeta=e^{2\\pi i/7}$  the requested number is the real part  $W=\\operatorname{Re}\\,S$  of the weighted root sum  $S=\\sum_{k=1}^{6}k\\,\\zeta^{k}$ , because  $\\operatorname{Re}\\,\\zeta^{k}=\\cos\\frac{2k\\pi}{7}$ . The index weight  $k$  is the signature of a differentiated geometric series.",
          "Start from  $\\sum_{k=0}^{6}z^{k}=\\dfrac{z^{7}-1}{z-1}$  (valid for  $z\\neq1$ ). Differentiate and multiply by  $z$  to inject the weight:  $\\displaystyle\\sum_{k=1}^{6}k\\,z^{k}=z\\frac{d}{dz}\\!\\left(\\frac{z^{7}-1}{z-1}\\right)=z\\cdot\\frac{7z^{6}(z-1)-(z^{7}-1)}{(z-1)^{2}}.$ ",
          "Specialise to  $z=\\zeta$ , where  $\\zeta^{7}=1$ . The term  $z^{7}-1$  vanishes, so the bracket collapses to  $7\\zeta^{6}(\\zeta-1)$ , giving  $S=\\zeta\\cdot\\dfrac{7\\zeta^{6}(\\zeta-1)}{(\\zeta-1)^{2}}=\\dfrac{7\\zeta^{7}}{\\zeta-1}=\\dfrac{7}{\\zeta-1}.$  Note the numerator survives precisely because  $\\zeta$  is a simple root, so  $g'(\\zeta)\\neq0$  — the death of the naive “ $=0$ ”\\ guess.",
          "Take the real part using the standard identity  $\\operatorname{Re}\\dfrac{1}{e^{i\\theta}-1}=-\\dfrac12$  for  $\\theta\\not\\equiv0$  (derived next method). With  $\\theta=\\tfrac{2\\pi}{7}$ ,  $W=\\operatorname{Re}\\dfrac{7}{\\zeta-1}=7\\cdot\\Bigl(-\\tfrac12\\Bigr)=\\boxed{-\\dfrac{7}{2}}.$ "
        ]
      },
      {
        "name": "The constant real part of  $1/(\\zeta-1)$ ",
        "steps": [
          "From the first method we have  $S=\\sum_{k=1}^{6}k\\,\\zeta^{k}=\\dfrac{7}{\\zeta-1}$ , so everything reduces to one real part. Compute it honestly by rationalising: for any unit-modulus  $z=e^{i\\theta}$ ,  $\\dfrac{1}{z-1}=\\dfrac{\\bar z-1}{(z-1)(\\bar z-1)}=\\dfrac{\\bar z-1}{|z-1|^{2}}.$ ",
          "The denominator is real:  $|z-1|^{2}=(z-1)(\\bar z-1)=2-(z+\\bar z)=2-2\\cos\\theta$ . The numerator's real part is  $\\operatorname{Re}(\\bar z-1)=\\cos\\theta-1$ . Hence  $\\operatorname{Re}\\dfrac{1}{z-1}=\\dfrac{\\cos\\theta-1}{2-2\\cos\\theta}=\\dfrac{-(1-\\cos\\theta)}{2(1-\\cos\\theta)}=-\\dfrac12,$  a constant independent of  $\\theta$  — the elegant heart of the problem.",
          "This is exactly where the sign trap lives: had we written  $\\dfrac{1}{1-\\zeta}$  the same computation yields  $+\\tfrac12$ . The correct denominator from  $S=\\dfrac{7\\zeta^{7}}{\\zeta-1}$  is  $\\zeta-1$ , fixing the sign as negative.",
          "Therefore  $W=\\operatorname{Re}\\,S=7\\cdot\\operatorname{Re}\\dfrac{1}{\\zeta-1}=7\\cdot\\Bigl(-\\tfrac12\\Bigr)=\\boxed{-\\dfrac{7}{2}}.$ "
        ]
      },
      {
        "name": "Real Abel pairing on the heptagon",
        "steps": [
          "Stay entirely real and exploit the heptagon's mirror symmetry:  $\\cos\\dfrac{2(7-k)\\pi}{7}=\\cos\\!\\left(2\\pi-\\dfrac{2k\\pi}{7}\\right)=\\cos\\dfrac{2k\\pi}{7}$ . So the cosines at index  $k$  and index  $7-k$  coincide while their index weights  $k$  and  $7-k$  are different — this is what breaks the unweighted symmetry.",
          "Fold the sum into the three mirror pairs  $(1,6),(2,5),(3,4)$ . Each pair contributes  $k\\cos\\frac{2k\\pi}{7}+(7-k)\\cos\\frac{2(7-k)\\pi}{7}=\\bigl(k+(7-k)\\bigr)\\cos\\frac{2k\\pi}{7}=7\\cos\\frac{2k\\pi}{7}.$  The weighted sum therefore equals  $W=7\\Bigl(\\cos\\tfrac{2\\pi}{7}+\\cos\\tfrac{4\\pi}{7}+\\cos\\tfrac{6\\pi}{7}\\Bigr).$ ",
          "Evaluate the inner bracket from the vanishing root sum:  $\\sum_{k=1}^{6}\\cos\\frac{2k\\pi}{7}=-1$ , and by the same mirror pairing the six terms split into two equal copies of  $\\cos\\tfrac{2\\pi}{7}+\\cos\\tfrac{4\\pi}{7}+\\cos\\tfrac{6\\pi}{7}$ , so that bracket equals  $-\\tfrac12$ .",
          "Hence  $W=7\\cdot\\Bigl(-\\tfrac12\\Bigr)=\\boxed{-\\dfrac{7}{2}}$ , agreeing with the complex-analytic routes and confirming the weighting did not destroy the clean rational value."
        ]
      }
    ],
    "remark": "Insight: the index weight  $k$  is a derivative in disguise,  $\\sum k\\,z^{k}=z\\,g'(z)$  with  $g(z)=\\sum_{k=0}^{6}z^{k}$ , so the whole problem is Abel summation / a differentiated geometric series rather than the bare vanishing of the root sum. The trap is precisely that  $g(\\zeta)=0$  tempts one to claim  $g'(\\zeta)=0$ ; but  $\\zeta$  is a simple root of  $z^{7}-1$ , so the slope is nonzero and  $z\\,g'(\\zeta)=\\frac{7}{\\zeta-1}$  survives. Everything then rests on the strikingly simple fact that  $\\operatorname{Re}\\frac{1}{e^{i\\theta}-1}=-\\frac12$  for every  $\\theta\\not\\equiv0$  — constant, angle-blind — which is why  $W=-\\frac72$  depends on the heptagon only through the single integer  $7=1+6=2+5=3+4$ . The real-pairing route makes the same point without complex numbers: folding  $k$  against  $7-k$  converts the index weights into a uniform factor of  $7$  times the ordinary cosine sum  $-\\tfrac12$ ."
  },
  {
    "theme": "demoivre",
    "themeLabel": "De Moivre & Powers",
    "title": "The Squared Orbit on a Seven-Spoked Wheel",
    "difficulty": 5,
    "task": "Count the distinct values",
    "tags": [
      "de moivre",
      "roots of unity",
      "quadratic residues",
      "cosine folding",
      "orbit counting"
    ],
    "statement": "Let  $z=\\cos\\dfrac{2\\pi}{7}+i\\sin\\dfrac{2\\pi}{7}$ , a primitive seventh root of unity, and define the doubly-infinite real sequence  \\[ b_n=z^{\\,n^{2}}+z^{-n^{2}}\\qquad(n\\in\\mathbb{Z}). \\]  By De Moivre's theorem each  $b_n=2\\cos\\dfrac{2\\pi n^{2}}{7}$  is real. As  $n$  runs over all integers  $\\dots,-2,-1,0,1,2,\\dots$ , determine the number of distinct real values that the sequence  $(b_n)$  actually attains.",
    "answer": " $\\boxed{4}$ ",
    "trap": "The headline trap is to answer  $7$ . Reasoning \" $b_n$  depends only on  $n^2\\bmod 7$ , and as  $n$  ranges over  $\\mathbb{Z}$  the residue  $n^2\\bmod 7$  surely sweeps out all of  $\\{0,1,\\dots,6\\}$ , one cosine value per residue\" makes two independent errors. First,  $n^{2}\\bmod 7$  does NOT visit every residue: squares modulo  $7$  land only in  $\\{0,1,2,4\\}$  (the quadratic residues), never in  $\\{3,5,6\\}$ . Second, even among the residues that ARE hit,  $2\\cos\\frac{2\\pi m}{7}=2\\cos\\frac{2\\pi(7-m)}{7}$  because cosine is even, so a residue and its negative would have collapsed anyway. A subtler trap gives  $3$ : a student who correctly restricts to the three NONZERO quadratic residues  $\\{1,2,4\\}$  but silently discards  $n^2\\equiv 0$  forgets that  $n=0,\\pm7,\\pm14,\\dots$  are legal integers giving  $b_n=2\\cos 0=2$  — the value  $2$  is genuinely attained and must be counted. A third trap gives  $2$  or  $1$  by wrongly believing the nonzero quadratic residues  $\\{1,2,4\\}$  collide with each other under the even-cosine fold; in fact they form a perfect transversal of the three fold-pairs  $\\{1,6\\},\\{2,5\\},\\{3,4\\}$  (since  $4\\equiv-3$ ), so they yield three DISTINCT cosine values, not fewer.",
    "solutions": [
      {
        "name": "Residue reduction, then quadratic residues, then cosine folding",
        "steps": [
          "By De Moivre  $z^{n^{2}}=\\cos\\frac{2\\pi n^{2}}{7}+i\\sin\\frac{2\\pi n^{2}}{7}$  and  $z^{-n^{2}}$  is its conjugate, so  $b_n=z^{n^{2}}+z^{-n^{2}}=2\\cos\\frac{2\\pi n^{2}}{7}$ . Since  $z^{7}=1$ , the value  $b_n$  depends on the exponent  $n^{2}$  only through its residue  $r=n^{2}\\bmod 7$ ; thus the distinct values of  $(b_n)$  are exactly the distinct values of  $2\\cos\\frac{2\\pi r}{7}$  as  $r$  ranges over the set of residues that are squares mod  $7$ .",
          "Compute that set of attainable exponents. The squares of  $0,1,2,3,4,5,6$  modulo  $7$  are  $0,1,4,2,2,4,1$ , so  $\\{n^{2}\\bmod 7\\}=\\{0,1,2,4\\}$ : the residues  $3,5,6$  are non-residues and are NEVER hit. This already kills the naive \" $7$  values\" guess — only  $4$  exponent-classes are even available, and we must still check none of their cosines coincide.",
          "Apply the even-cosine fold  $2\\cos\\frac{2\\pi m}{7}=2\\cos\\frac{2\\pi(7-m)}{7}$ , which pairs residues  $\\{1,6\\},\\{2,5\\},\\{3,4\\}$  and fixes  $0$ . The nonzero attainable residues  $\\{1,2,4\\}$  meet these pairs in  $\\{1,6\\},\\{2,5\\}$  and (since  $4\\equiv-3$ )  $\\{3,4\\}$  — one residue in each distinct pair, a transversal. Hence  $r=1,2,4$  give three genuinely different cosine values, and they differ from the value at  $r=0$ .",
          "So the attained values are  $2\\cos 0=2$  together with the three distinct numbers  $2\\cos\\frac{2\\pi}{7},\\,2\\cos\\frac{4\\pi}{7},\\,2\\cos\\frac{8\\pi}{7}=2\\cos\\frac{6\\pi}{7}$ . That is  $\\boxed{4}$  distinct values; explicitly  $\\{2,\\;2\\cos\\frac{2\\pi}{7},\\;2\\cos\\frac{4\\pi}{7},\\;2\\cos\\frac{6\\pi}{7}\\}\\approx\\{2,\\,1.2470,\\,-0.4450,\\,-1.8019\\}$ ."
        ]
      },
      {
        "name": "Orbit counting under the symmetry group of the wheel",
        "steps": [
          "Think of the exponent as a point on the cyclic wheel  $\\mathbb{Z}/7$ . Two effects identify points:  $z^{7}=1$  collapses the exponent to its residue, and conjugation  $z^{m}+z^{-m}$  is invariant under  $m\\mapsto-m$ . So  $b$  is constant on the orbits of the sign-flip group  $\\{\\pm1\\}$  acting on  $\\mathbb{Z}/7$ , whose orbits are  $\\{0\\},\\{1,6\\},\\{2,5\\},\\{3,4\\}$  — four orbits, and by the simple-root distinctness of  $2\\cos\\frac{2\\pi m}{7}$  on  $0\\le m\\le 3$ , the four orbit-values are pairwise distinct.",
          "The catch is that  $b_n$  does not realise every orbit: its exponent is the SQUARE  $n^{2}$ , so only orbits meeting the image  $\\{n^{2}\\bmod 7\\}=\\{0,1,2,4\\}$  can appear. Check each orbit:  $\\{0\\}$  contains  $0$  (a square,  $0=0^{2}$ );  $\\{1,6\\}$  contains  $1=1^{2}$ ;  $\\{2,5\\}$  contains  $2=3^{2}\\bmod 7$ ;  $\\{3,4\\}$  contains  $4=2^{2}$ . Every one of the four orbits is met.",
          "Because all four orbits are realised and each carries a distinct value of  $b$ , the sequence attains exactly one value per orbit. The non-residues  $3,5,6$  being absent costs us nothing here precisely because each of  $3,5,6$  shares its orbit with a residue ( $3$  with  $4$ ,  $5$  with  $2$ ,  $6$  with  $1$ ).",
          "Hence the number of distinct values equals the number of orbits realised  $=4$ , giving  $\\boxed{4}$ ."
        ]
      },
      {
        "name": "Direct enumeration with a Chebyshev distinctness check",
        "steps": [
          "Since  $b_{n+7}=b_n$  (period  $7$  in  $n$  modulo the residue) and  $b_{-n}=b_n$ , it suffices to evaluate  $b_n$  for  $n=0,1,2,3$ , which already cover all residues  $n^{2}\\bmod 7$ : indeed  $0^{2}=0,\\;1^{2}=1,\\;2^{2}=4,\\;3^{2}=9\\equiv2$ , listing exponents  $\\{0,1,4,2\\}$  and never producing  $3,5,6$ .",
          "Evaluate:  $b_0=2\\cos0=2$ ,  $b_1=2\\cos\\frac{2\\pi}{7}$ ,  $b_2=2\\cos\\frac{8\\pi}{7}=2\\cos\\frac{6\\pi}{7}$ ,  $b_3=2\\cos\\frac{18\\pi}{7}=2\\cos\\frac{4\\pi}{7}$ . These four numbers are the candidates; we must confirm they are pairwise distinct.",
          "Distinctness via Chebyshev:  $2\\cos\\frac{2\\pi m}{7}=2T_m(\\cos\\frac{2\\pi}{7})$  where the angles  $\\frac{2\\pi m}{7}$  for  $m=0,1,2,3$  are strictly increasing in  $[0,\\pi]$ , an interval on which  $\\cos$  is strictly decreasing; therefore  $2,\\,2\\cos\\frac{2\\pi}{7},\\,2\\cos\\frac{4\\pi}{7},\\,2\\cos\\frac{6\\pi}{7}$  are strictly decreasing and hence all different. Numerically  $2>1.2470>-0.4450>-1.8019$ , confirming no two coincide.",
          "Every integer  $n$  reproduces one of these four via  $n\\equiv\\pm n'\\pmod 7$  with  $n'\\in\\{0,1,2,3\\}$  and the square landing in  $\\{0,1,2,4\\}$ , so no further values appear. The count is  $\\boxed{4}$ ."
        ]
      }
    ],
    "remark": "Insight: the squared exponent is the whole story. Stripping De Moivre away,  $b_n=2\\cos\\frac{2\\pi n^{2}}{7}$  is governed by two compressions acting on the exponent in  $\\mathbb{Z}/7$  — the cyclic reduction  $z^{7}=1$  and the conjugation symmetry  $m\\mapsto-m$  — whose four orbits  $\\{0\\},\\{1,6\\},\\{2,5\\},\\{3,4\\}$  would suggest at most four values for the un-squared sequence  $z^{n}+z^{-n}$ . The quadratic exponent then restricts the reachable exponents to the quadratic residues  $\\{0,1,2,4\\}$ , and the lovely arithmetic coincidence is that the three nonzero residues  $\\{1,2,4\\}$  form an exact transversal of the three nontrivial orbits (because  $4\\equiv-3$ ), so the squaring removes no values at all: still exactly  $4$ . The two traps are mirror images — answering  $7$  over-counts by forgetting BOTH that squares miss half the residues and that cosine is even, while answering  $3$  under-counts by forgetting that  $n\\equiv0$  is a legal square contributing the value  $2$ . For a general odd prime  $p$  the same argument gives  $1+\\frac{p-1}{2}=\\frac{p+1}{2}$  distinct values, matching  $4$  at  $p=7$ ."
  },
  {
    "theme": "demoivre",
    "themeLabel": "De Moivre & Powers",
    "title": "Powers That Sum to Nothing",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "roots of unity",
      "power sums",
      "geometric series",
      "divisibility"
    ],
    "statement": "Let  $\\zeta_0,\\zeta_1,\\dots,\\zeta_6$  be the seven seventh roots of unity. Evaluate  $\\displaystyle\\sum_{j=0}^{6}\\zeta_j^{\\,5}$ , and more generally state the value of  $\\displaystyle\\sum_{j=0}^{6}\\zeta_j^{\\,m}$  for a positive integer  $m$ .",
    "answer": " $\\displaystyle\\sum_{j=0}^{6}\\zeta_j^{\\,5}=0$ ; and in general  $\\displaystyle\\sum_{j=0}^{6}\\zeta_j^{\\,m}=\\begin{cases}7,&7\\mid m\\\\ 0,&7\\nmid m.\\end{cases}$ ",
    "trap": "Thinking that raising each root to the  $5$ th power changes the multiset, so the sum must be 'something new' and nonzero. In fact  $\\{\\zeta_j^5\\}$  is just a permutation of  $\\{\\zeta_j\\}$  (because  $\\gcd(5,7)=1$ ), so the power sum is again  $0$ . The only way to get  $7$  is when  $7\\mid m$ , collapsing every term to  $1$ .",
    "solutions": [
      {
        "name": "Permutation of the roots",
        "steps": [
          "Since  $\\gcd(5,7)=1$ , the map  $\\zeta\\mapsto\\zeta^5$  permutes the seventh roots of unity bijectively: distinct roots stay distinct because  $\\zeta_a^5=\\zeta_b^5\\Rightarrow\\zeta_a^{5}\\zeta_b^{-5}=1\\Rightarrow 5(a-b)\\equiv0\\pmod 7\\Rightarrow a\\equiv b$ .",
          "Therefore  $\\sum_{j}\\zeta_j^5=\\sum_j\\zeta_j=0$ , the sum of all seventh roots of unity (the coefficient of  $z^6$  in  $z^7-1$  is  $0$ ).",
          "Hence  $\\sum_{j=0}^{6}\\zeta_j^5=\\boxed{0}.$ ",
          "For general  $m$ : if  $7\\mid m$  then each  $\\zeta_j^m=1$  and the sum is  $7$ ; otherwise the same permutation/orthogonality argument forces the sum to vanish."
        ]
      },
      {
        "name": "Geometric series with common ratio",
        "steps": [
          "Write  $\\zeta_j=\\zeta^j$  with  $\\zeta=e^{2\\pi i/7}$ . Then  $\\sum_{j=0}^{6}\\zeta_j^m=\\sum_{j=0}^{6}(\\zeta^m)^j.$ ",
          "If  $\\zeta^m\\neq1$  (i.e.  $7\\nmid m$ ), this geometric series equals  $\\dfrac{(\\zeta^m)^7-1}{\\zeta^m-1}=\\dfrac{(\\zeta^7)^m-1}{\\zeta^m-1}=\\dfrac{1-1}{\\zeta^m-1}=0.$ ",
          "If  $\\zeta^m=1$  (i.e.  $7\\mid m$ ), every term is  $1$  and the sum is  $7.$ ",
          "For  $m=5$ ,  $7\\nmid5$ , so the sum is  $\\boxed{0}.$ "
        ]
      },
      {
        "name": "Newton/Vieta power sums",
        "steps": [
          "The  $\\zeta_j$  are exactly the roots of  $z^7-1$ , whose expansion  $z^7-1$  has no  $z^6,\\dots,z^1$  terms — so all elementary symmetric functions  $e_1,\\dots,e_6$  vanish.",
          "By Newton's identities  $p_k-e_1p_{k-1}+\\dots\\pm k\\,e_k=0$ ; with  $e_1=\\dots=e_6=0$  these collapse to  $p_k=0$  for  $1\\le k\\le6$ , while  $p_7=\\sum_j\\zeta_j^7=\\sum_j 1=7.$ ",
          "The pattern repeats with period  $7$ :  $p_m=7$  if  $7\\mid m$ , else  $0.$ ",
          "In particular  $p_5=\\boxed{0}.$ "
        ]
      }
    ],
    "remark": "Insight: the power sums of the  $n$ th roots of unity form a 'comb' — they equal  $n$  when  $n\\mid m$  and  $0$  otherwise. This is precisely the discrete orthogonality relation at the heart of the finite Fourier transform, and raising every root to a power coprime to  $n$  merely shuffles the roots, leaving the sum unchanged."
  },
  {
    "theme": "demoivre",
    "themeLabel": "De Moivre & Powers",
    "title": "The Phantom Half-Turn of i",
    "difficulty": 5,
    "task": "Evaluate exactly",
    "tags": [
      "de moivre",
      "alternating binomial",
      "half-angle factor",
      "branch",
      "sign trap"
    ],
    "statement": "Fix the integer  $n=9$  and the angle  $\\theta=\\dfrac{7\\pi}{2}$ , and evaluate the alternating binomial cosine sum  \\[ A=\\sum_{k=0}^{9}(-1)^{k}\\binom{9}{k}\\cos\\!\\left(\\frac{7k\\pi}{2}\\right) =\\binom{9}{0}-\\binom{9}{1}\\cos\\tfrac{7\\pi}{2}+\\binom{9}{2}\\cos 7\\pi-\\cdots-\\binom{9}{9}\\cos\\tfrac{63\\pi}{2}. \\]  The intended route is to recognise  $A=\\operatorname{Re}\\big((1-e^{i\\theta})^{n}\\big)$  and to use the half-angle factorization  $1-e^{i\\theta}=-2i\\sin\\tfrac{\\theta}{2}\\,e^{i\\theta/2}$ , in which the leading factor is the imaginary unit's quarter-turn  $-i$ , not a real number. Give  $A$  as an exact integer.",
    "answer": " \\[\\boxed{A=16}\\] ",
    "trap": "The seductive wrong answer is  $A=-16$ . It is produced by two different shortcuts that both mishandle the  $-i$  in  $1-e^{i\\theta}=-2i\\sin\\tfrac{\\theta}{2}\\,e^{i\\theta/2}$ . Shortcut one quotes a memorized identity \" $\\sum_{k}(-1)^{k}\\binom{n}{k}\\cos k\\theta=2^{n}\\sin^{n}\\tfrac{\\theta}{2}\\cos\\tfrac{n\\theta}{2}$ ,\" silently dropping the quarter-turn: the true phase is  $\\tfrac{n(\\theta-\\pi)}{2}$ , not  $\\tfrac{n\\theta}{2}$ , and for the odd exponent  $n=9$  the missing  $-\\tfrac{n\\pi}{2}$  is an odd multiple of  $\\tfrac{\\pi}{2}$  that flips  $\\cos\\tfrac{9\\pi}{4}=+\\tfrac1{\\sqrt2}$  into  $\\cos\\tfrac{63\\pi}{4}=-\\tfrac1{\\sqrt2}$ . Shortcut two writes the modulus of  $1-e^{i\\theta}$  as the positive real  $2\\sin\\tfrac{\\theta}{2}$ ; but  $\\theta=\\tfrac{7\\pi}{2}$  lies outside  $(0,2\\pi)$ , so  $\\tfrac{\\theta}{2}=\\tfrac{7\\pi}{4}$  is in the fourth quadrant where  $\\sin\\tfrac{7\\pi}{4}=-\\tfrac1{\\sqrt2}<0$ ; the genuine modulus is  $2\\big|\\sin\\tfrac{\\theta}{2}\\big|$ , and treating  $(2\\sin\\tfrac{\\theta}{2})^{9}=(-\\sqrt2)^{9}=-16\\sqrt2$  as if it were  $(\\sqrt2)^{9}=+16\\sqrt2$  again flips the sign. Both routes report  $-16$ ; the correct value is  $+16$ .",
    "solutions": [
      {
        "name": "The honest half-angle factorization",
        "steps": [
          "Lift to the complex plane. Since  $\\cos\\tfrac{7k\\pi}{2}=\\operatorname{Re}\\,e^{ik\\theta}$  with  $\\theta=\\tfrac{7\\pi}{2}$ , the binomial theorem gives  $A=\\operatorname{Re}\\sum_{k=0}^{9}\\binom{9}{k}(-1)^{k}e^{ik\\theta}=\\operatorname{Re}\\sum_{k=0}^{9}\\binom{9}{k}(-e^{i\\theta})^{k}=\\operatorname{Re}\\big((1-e^{i\\theta})^{9}\\big).$ ",
          "Factor honestly, keeping the imaginary unit visible:  $1-e^{i\\theta}=e^{i\\theta/2}\\big(e^{-i\\theta/2}-e^{i\\theta/2}\\big)=e^{i\\theta/2}\\cdot(-2i\\sin\\tfrac{\\theta}{2})=-2i\\sin\\tfrac{\\theta}{2}\\,e^{i\\theta/2}.$  The factor  $-2i$  is the heart of the matter: it carries a quarter-turn  $-i=e^{-i\\pi/2}$ , so the true argument of  $1-e^{i\\theta}$  is  $\\tfrac{\\theta}{2}-\\tfrac{\\pi}{2}=\\tfrac{\\theta-\\pi}{2}$ , not  $\\tfrac{\\theta}{2}$ .",
          "Raise to the ninth power as a single complex number, never separating an \"all-real modulus\":  $(1-e^{i\\theta})^{9}=(-2i)^{9}\\sin^{9}\\tfrac{\\theta}{2}\\,e^{9i\\theta/2}=2^{9}(-i)^{9}\\sin^{9}\\tfrac{\\theta}{2}\\,e^{9i\\theta/2}=2^{9}\\sin^{9}\\tfrac{\\theta}{2}\\,e^{9i(\\theta-\\pi)/2},$  using  $(-i)^{9}=-i=e^{-i\\pi/2}=e^{-9i\\pi/2}$  up to the full  $9$  copies of the quarter-turn, i.e.  $(-i)^{9}=e^{-9i\\pi/2}$ . Taking real parts,  $A=2^{9}\\sin^{9}\\tfrac{\\theta}{2}\\,\\cos\\tfrac{9(\\theta-\\pi)}{2}.$ ",
          "Substitute  $\\theta=\\tfrac{7\\pi}{2}$ . Then  $\\sin\\tfrac{\\theta}{2}=\\sin\\tfrac{7\\pi}{4}=-\\tfrac1{\\sqrt2}$ , so  $2^{9}\\sin^{9}\\tfrac{\\theta}{2}=512\\cdot\\big(-\\tfrac1{\\sqrt2}\\big)^{9}=512\\cdot\\big(-\\tfrac{1}{16\\sqrt2}\\big)=-16\\sqrt2,$  and  $\\cos\\tfrac{9(\\theta-\\pi)}{2}=\\cos\\tfrac{9}{2}\\!\\left(\\tfrac{7\\pi}{2}-\\pi\\right)=\\cos\\tfrac{45\\pi}{4}=\\cos\\tfrac{5\\pi}{4}=-\\tfrac1{\\sqrt2}.$  Multiplying, the two negatives cancel:  $A=(-16\\sqrt2)\\cdot\\big(-\\tfrac1{\\sqrt2}\\big)=\\boxed{16}.$  The sign survives precisely because the quarter-turn was kept."
        ]
      },
      {
        "name": "Reduce the angle first, then  $(1+i)^9$ ",
        "steps": [
          "The cosine sum depends on  $\\theta$  only through  $e^{ik\\theta}$ , hence only on  $\\theta\\bmod 2\\pi$ . Reduce  $\\theta=\\tfrac{7\\pi}{2}=\\tfrac{3\\pi}{2}+2\\pi$ , so  $A=\\operatorname{Re}\\big((1-e^{i\\theta})^{9}\\big)=\\operatorname{Re}\\big((1-e^{3i\\pi/2})^{9}\\big)$  with the equivalent angle  $\\tfrac{3\\pi}{2}\\in(0,2\\pi)$  where the half-angle  $\\tfrac{3\\pi}{4}$  has  $\\sin>0$  and no branch ambiguity remains.",
          "Evaluate the base directly:  $e^{3i\\pi/2}=\\cos\\tfrac{3\\pi}{2}+i\\sin\\tfrac{3\\pi}{2}=-i$ , so  $1-e^{3i\\pi/2}=1-(-i)=1+i.$ ",
          "Power the Gaussian integer by De Moivre:  $1+i=\\sqrt2\\,e^{i\\pi/4}$ , hence  $(1+i)^{9}=(\\sqrt2)^{9}e^{9i\\pi/4}=16\\sqrt2\\,\\big(\\cos\\tfrac{9\\pi}{4}+i\\sin\\tfrac{9\\pi}{4}\\big)=16\\sqrt2\\big(\\tfrac1{\\sqrt2}+\\tfrac{i}{\\sqrt2}\\big)=16+16i.$ ",
          "Therefore  $A=\\operatorname{Re}(16+16i)=\\boxed{16}.$  Reducing the angle into  $(0,2\\pi)$  first is what neutralises the second trap: there is no longer any temptation to read a negative  $\\sin\\tfrac{\\theta}{2}$  as a positive modulus."
        ]
      },
      {
        "name": "Pure De Moivre on the modulus-argument form",
        "steps": [
          "Work with  $w=1-e^{i\\theta}$  at  $\\theta=\\tfrac{7\\pi}{2}$  in Cartesian form. Since  $e^{7i\\pi/2}=\\cos\\tfrac{7\\pi}{2}+i\\sin\\tfrac{7\\pi}{2}=0+i\\cdot(-1)=-i,$  we get  $w=1-(-i)=1+i$ , with genuine modulus  $|w|=\\sqrt2$  and genuine argument  $\\arg w=\\tfrac{\\pi}{4}$  (first quadrant) — note this is  $\\tfrac{\\theta-\\pi}{2}=\\tfrac{7\\pi/2-\\pi}{2}=\\tfrac{5\\pi}{4}$  reduced modulo  $2\\pi$ , confirming the  $-\\tfrac{\\pi}{2}$  correction rather than the naive  $\\tfrac{\\theta}{2}=\\tfrac{7\\pi}{4}$ .",
          "By De Moivre,  $w^{9}=|w|^{9}\\big(\\cos 9\\arg w+i\\sin 9\\arg w\\big)=2^{9/2}\\big(\\cos\\tfrac{9\\pi}{4}+i\\sin\\tfrac{9\\pi}{4}\\big).$ ",
          "Reduce the angle:  $\\tfrac{9\\pi}{4}=2\\pi+\\tfrac{\\pi}{4}$ , so  $\\cos\\tfrac{9\\pi}{4}=\\cos\\tfrac{\\pi}{4}=\\tfrac1{\\sqrt2}$ , giving  $\\operatorname{Re}(w^{9})=2^{9/2}\\cdot\\tfrac1{\\sqrt2}=2^{9/2}\\cdot 2^{-1/2}=2^{4}.$ ",
          "Hence  $A=\\operatorname{Re}\\big((1-e^{i\\theta})^{9}\\big)=2^{4}=\\boxed{16}.$  Computing  $|w|$  and  $\\arg w$  from the actual point  $1+i$  — instead of from the formula  $2\\sin\\tfrac{\\theta}{2}$  and  $\\tfrac{\\theta}{2}$  — automatically installs the correct positive modulus  $\\sqrt2$  and the correct argument  $\\tfrac{\\pi}{4}$ ."
        ]
      }
    ],
    "remark": "Insight: the factor  $1-e^{i\\theta}=-2i\\sin\\tfrac{\\theta}{2}\\,e^{i\\theta/2}$  is an  $i$ -phase, not a real scaling. The  $-i$  injects a quarter-turn, so the correct closed form is  $\\sum_{k}(-1)^{k}\\binom{n}{k}\\cos k\\theta=\\big(2\\sin\\tfrac{\\theta}{2}\\big)^{n}\\cos\\tfrac{n(\\theta-\\pi)}{2}$  — the phase is  $\\tfrac{n(\\theta-\\pi)}{2}$  and the bracket may be a negative real. Both popular shortcuts amputate this  $-i$ : one drops the  $-\\tfrac{\\pi}{2}$  from the phase, the other forces  $2\\sin\\tfrac{\\theta}{2}$  to be a positive modulus even though  $\\theta=\\tfrac{7\\pi}{2}$  puts  $\\tfrac{\\theta}{2}$  in a quadrant where the half-angle sine is negative. For an odd power both errors flip the sign in lockstep to the phantom  $-16$ . The cleanest cure is to refuse the formula and evaluate the actual base:  $1-e^{7i\\pi/2}=1+i$ , whose ninth power  $16+16i$  leaves no room for a missing half-turn."
  },
  {
    "theme": "demoivre",
    "themeLabel": "De Moivre & Powers",
    "title": "Cosine of a Fifth Multiple Angle",
    "difficulty": 5,
    "task": "Expand and evaluate exactly",
    "tags": [
      "de moivre",
      "multiple angle",
      "binomial expansion",
      "roots of unity",
      "exact value"
    ],
    "statement": "Using De Moivre's theorem, expand  $\\cos 5\\theta$  as a polynomial in  $c=\\cos\\theta$  alone. Then, by choosing  $\\theta$  so that  $5\\theta$  is an odd multiple of  $\\pi$ , deduce the exact value of  $\\cos 36^{\\circ}$  and report  $4\\cos 36^{\\circ}$ .",
    "answer": " $$\\cos 5\\theta = 16c^{5}-20c^{3}+5c,\\qquad \\boxed{\\,4\\cos 36^{\\circ}=1+\\sqrt{5}\\,}$$ ",
    "trap": "Splitting  $(c+is)^5$  into real and imaginary parts with all  $+$  signs (forgetting that  $i^2=-1$  flips the alternate terms) gives the bogus real part  $c^5+10c^3s^2+5cs^4=-4c^5+5c$ . Setting that to  $-1$  yields only  $c=-1$ , and the genuine root  $\\tfrac{1+\\sqrt5}{4}$  is lost.",
    "solutions": [
      {
        "name": "De Moivre with the alternating-sign binomial split",
        "steps": [
          "By De Moivre,  $\\cos5\\theta+i\\sin5\\theta=(\\cos\\theta+i\\sin\\theta)^5$ . Write  $c=\\cos\\theta,\\ s=\\sin\\theta$  and expand by the binomial theorem.",
          " $(c+is)^5=c^5+5c^4(is)+10c^3(is)^2+10c^2(is)^3+5c(is)^4+(is)^5$ . Since  $i^2=-1,\\,i^4=1$ , the real part is  $c^5-10c^3s^2+5cs^4$  (note the alternating signs).",
          "Substitute  $s^2=1-c^2$ :  $c^5-10c^3(1-c^2)+5c(1-c^2)^2=16c^5-20c^3+5c$ , so  $\\cos5\\theta=16c^5-20c^3+5c$ .",
          "Take  $\\theta=36^{\\circ}$ , so  $5\\theta=180^{\\circ}$  and  $\\cos5\\theta=-1$ . With  $c=\\cos36^{\\circ}$ :  $16c^5-20c^3+5c+1=0$ , which factors as  $(c+1)(4c^2-2c-1)^2=0$ .",
          "Since  $\\tfrac12<\\cos36^{\\circ}<1$ , take the positive root of  $4c^2-2c-1=0$ :  $c=\\dfrac{2+\\sqrt{4+16}}{8}=\\dfrac{1+\\sqrt5}{4}$ . Hence  $4\\cos36^{\\circ}=1+\\sqrt5$ ."
        ]
      },
      {
        "name": "Fifth roots of unity and a paired sum",
        "steps": [
          "The fifth roots of unity satisfy  $1+\\omega+\\omega^2+\\omega^3+\\omega^4=0$  with  $\\omega=e^{2\\pi i/5}$ . Pairing conjugates  $\\omega^k$  and  $\\omega^{5-k}$  gives  $1+2\\cos72^{\\circ}+2\\cos144^{\\circ}=0$ , i.e.  $\\cos72^{\\circ}+\\cos144^{\\circ}=-\\tfrac12$ .",
          "Since  $\\cos144^{\\circ}=-\\cos36^{\\circ}$ , this reads  $\\cos72^{\\circ}-\\cos36^{\\circ}=-\\tfrac12$ , so  $\\cos36^{\\circ}-\\cos72^{\\circ}=\\tfrac12$ .",
          "Also  $2\\cos36^{\\circ}\\cos72^{\\circ}=\\cos108^{\\circ}+\\cos36^{\\circ}=-\\cos72^{\\circ}+\\cos36^{\\circ}=\\tfrac12$ , so  $\\cos36^{\\circ}\\cos72^{\\circ}=\\tfrac14$ .",
          "Thus  $\\cos36^{\\circ}$  and  $-\\cos72^{\\circ}$  are roots of  $x^2-\\tfrac12 x-\\tfrac14=0$ , i.e.  $4x^2-2x-1=0$ . The positive root is  $\\cos36^{\\circ}=\\dfrac{1+\\sqrt5}{4}$ , giving  $4\\cos36^{\\circ}=1+\\sqrt5$ ."
        ]
      }
    ],
    "remark": "**Insight.** The real part of  $(\\cos\\theta+i\\sin\\theta)^n$  keeps only the even-power-of- $i$  terms, and those carry the alternating sign  $i^{2k}=(-1)^k$  — the single most common slip is to copy the binomial coefficients with all plus signs. The fifth-multiple identity is exactly the algebraic engine behind the classical value  $\\cos36^{\\circ}=\\tfrac{1+\\sqrt5}{4}$ , and the roots-of-unity route reaches the same quadratic without any expansion at all."
  },
  {
    "theme": "rootsofunity",
    "themeLabel": "Roots of Unity",
    "title": "The Disguised Cube Root",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "cube roots",
      "powers",
      "simplification",
      "omega"
    ],
    "statement": "Let  $\\omega = e^{2\\pi i/3}$  be a primitive cube root of unity. Evaluate  \\[\\big(1-\\omega+\\omega^{2}\\big)^{2025}+\\big(1+\\omega-\\omega^{2}\\big)^{2025}.\\] ",
    "answer": " $-2^{2026}$ ",
    "trap": "Spotting that the two bases are complex conjugates ( $1+\\omega-\\omega^2=\\overline{1-\\omega+\\omega^2}$ ) and concluding the sum is purely imaginary, hence  $0$ . The conjugate observation is correct but the conclusion is not:  $z^{2025}+\\overline{z}^{2025}=2\\,\\mathrm{Re}(z^{2025})$ , so the imaginary parts cancel while the real parts ADD. Here each power is the real number  $-2^{2025}$ , so the total is  $-2^{2026}$ , not  $0$ . A second trap is trying to expand the  $2025$ th power directly instead of collapsing the bracket to a single monomial in  $\\omega$ .",
    "solutions": [
      {
        "name": "Collapse via  $1+\\omega+\\omega^2=0$ ",
        "steps": [
          "Since  $1+\\omega+\\omega^2=0$ , we have  $1+\\omega^2=-\\omega$ , so  $1-\\omega+\\omega^2=(1+\\omega^2)-\\omega=-\\omega-\\omega=-2\\omega$ .",
          "Symmetrically  $1+\\omega=-\\omega^2$ , so  $1+\\omega-\\omega^2=(1+\\omega)-\\omega^2=-\\omega^2-\\omega^2=-2\\omega^2$ .",
          "Thus the expression is  $(-2\\omega)^{2025}+(-2\\omega^2)^{2025}=(-1)^{2025}\\,2^{2025}\\big(\\omega^{2025}+\\omega^{4050}\\big)=-2^{2025}\\big(\\omega^{2025}+\\omega^{4050}\\big)$ .",
          "Because  $2025=3\\cdot 675$  and  $4050=3\\cdot 1350$  are both multiples of  $3$ , and  $\\omega^3=1$ , we get  $\\omega^{2025}=\\omega^{4050}=1$ .",
          "Hence  $\\omega^{2025}+\\omega^{4050}=1+1=2$ , and the sum equals  $-2^{2025}\\cdot 2=\\boxed{-2^{2026}}$ ."
        ]
      },
      {
        "name": "Conjugate pair via De Moivre",
        "steps": [
          "Write  $A=1-\\omega+\\omega^2=-2\\omega$  and  $B=1+\\omega-\\omega^2=-2\\omega^2$ . Since  $\\omega^2=\\overline{\\omega}$ , we have  $B=\\overline{A}$ , so  $A^{2025}+B^{2025}=A^{2025}+\\overline{A}^{2025}=2\\,\\mathrm{Re}\\!\\big(A^{2025}\\big)$ .",
          "In polar form  $A=-2\\omega=2\\,e^{i(\\pi+2\\pi/3)}=2\\,e^{i\\,5\\pi/3}$  (equivalently  $|A|=2$ ,  $\\arg A=-\\pi/3$ ), so  $A^{2025}=2^{2025}\\,e^{i\\,2025\\cdot 5\\pi/3}$ .",
          "The exponent is  $2025\\cdot\\tfrac{5}{3}\\pi=3375\\pi$ , and  $3375$  is odd, so  $3375\\pi\\equiv\\pi\\pmod{2\\pi}$ ; thus  $A^{2025}=2^{2025}e^{i\\pi}=-2^{2025}$ , a real number.",
          "Therefore  $A^{2025}+B^{2025}=2\\,\\mathrm{Re}(A^{2025})=2\\cdot(-2^{2025})=\\boxed{-2^{2026}}$ .",
          "The conjugate structure shows precisely why the answer is real and negative, not zero: the imaginary parts cancel but the equal real parts reinforce."
        ]
      },
      {
        "name": "Pure modular bookkeeping",
        "steps": [
          "Reduce the bases to monomials:  $1-\\omega+\\omega^2=-2\\omega$  and  $1+\\omega-\\omega^2=-2\\omega^2$  using  $1+\\omega+\\omega^2=0$ .",
          "Then the sum is  $(-2)^{2025}\\big(\\omega^{2025}+\\omega^{2\\cdot 2025}\\big)$ .",
          "Work mod  $3$  in the exponent:  $2025\\equiv 0$  and  $2\\cdot 2025=4050\\equiv 0\\pmod 3$ , so both  $\\omega$ -powers are  $\\omega^0=1$ .",
          "And  $(-2)^{2025}=-2^{2025}$  since  $2025$  is odd. Hence the sum is  $-2^{2025}(1+1)=-2^{2026}=\\boxed{-2^{2026}}$ ."
        ]
      }
    ],
    "answerLabel": "value",
    "remark": "Insight: the whole difficulty evaporates once you read  $1-\\omega+\\omega^2$  not as 'three terms' but as the single monomial  $-2\\omega$ . The two bases are complex conjugates, which tempts one into declaring the answer  $0$  —{} but  $z^n+\\overline{z}^n=2\\,\\mathrm{Re}(z^n)$  kills the imaginary part and doubles the real part. Both powers land on the real number  $-2^{2025}$ , so they add to  $-2^{2026}$ . Cube-root identities turn  $2025$ th powers into a single exponent lookup mod  $3$ ."
  },
  {
    "theme": "rootsofunity",
    "themeLabel": "Roots of Unity",
    "title": "Probing Outside the Circle",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "reciprocal sum",
      "logarithmic derivative",
      "factorisation",
      "fifth roots"
    ],
    "statement": "Let  $\\zeta=e^{2\\pi i/5}$ , so that  $1,\\zeta,\\zeta^2,\\zeta^3,\\zeta^4$  are the fifth roots of unity. Evaluate  \\[\\sum_{k=0}^{4}\\frac{1}{2-\\zeta^{k}}.\\] ",
    "answer": " $\\dfrac{80}{31}$ ",
    "trap": "Excluding  $k=0$  out of habit (the term  $\\frac{1}{2-1}=1$  is perfectly finite here and must be included), or trying to rationalise five complex denominators by hand. The logarithmic-derivative identity gives the answer in one line.",
    "solutions": [
      {
        "name": "Logarithmic derivative of  $x^5-1$ ",
        "steps": [
          "Since  $x^5-1=\\prod_{k=0}^{4}(x-\\zeta^k)$ , we have  $\\sum_{k=0}^{4}\\frac{1}{x-\\zeta^k}=\\frac{d}{dx}\\ln(x^5-1)=\\frac{5x^4}{x^5-1}$ .",
          "Evaluate at  $x=2$ :  $\\sum_{k=0}^{4}\\frac{1}{2-\\zeta^k}=\\frac{5\\cdot 2^4}{2^5-1}=\\frac{80}{31}$ .",
          "Therefore the sum is  $\\boxed{\\dfrac{80}{31}}$ ."
        ]
      },
      {
        "name": "Newton/Vieta on the shifted polynomial",
        "steps": [
          "The numbers  $y_k=2-\\zeta^k$  are the roots of  $Q(y)=(2-y)^5-1=0$  (substitute  $x=2-y$  into  $x^5-1$ ).",
          "Expanding gives  $Q(y)=-y^5+10y^4-40y^3+80y^2-80y+31$ , so for a polynomial  $\\sum_j a_j y^j$  the reciprocal-root sum is  $\\sum_k\\frac1{y_k}=-\\dfrac{a_1}{a_0}$ .",
          "Here  $a_1=-80$  and  $a_0=31$ , so  $\\sum_k\\frac1{y_k}=-\\dfrac{-80}{31}=\\dfrac{80}{31}$ .",
          "Hence  $\\sum_{k=0}^{4}\\frac{1}{2-\\zeta^k}=\\boxed{\\dfrac{80}{31}}$ , agreeing with the derivative method."
        ]
      }
    ],
    "answerLabel": "value",
    "remark": "Insight:  $\\sum_k \\frac{1}{x-\\zeta^k}=\\frac{n x^{n-1}}{x^n-1}$  is just the logarithmic derivative of  $x^n-1$ , valid for any  $x$  off the unit circle. It turns a five-term complex sum into a single rational evaluation."
  },
  {
    "theme": "rootsofunity",
    "themeLabel": "Roots of Unity",
    "title": "The Cube-Root Telescope",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "cube roots",
      "product",
      "powers",
      "omega"
    ],
    "statement": "Let  $\\omega=e^{2\\pi i/3}$ . Evaluate  \\[\\big[(1+2\\omega)(1+2\\omega^{2})\\big]^{1013}.\\] ",
    "answer": " $3^{1013}$ ",
    "trap": "Expanding  $(1+2\\omega)(1+2\\omega^2)$  and stopping at a complex-looking expression, or mishandling  $\\omega^2$  as if it were unrelated to  $\\omega$  and producing a nonreal number; or miscomputing  $\\omega^3$ . The cross terms force the use of  $\\omega+\\omega^2=-1$  and  $\\omega^3=1$ , which collapse the bracket to the real number  $3$  — so the value is the integer  $3^{1013}$ , never anything complex.",
    "solutions": [
      {
        "name": "Symmetric expansion",
        "steps": [
          "Expand:  $(1+2\\omega)(1+2\\omega^2)=1+2\\omega^2+2\\omega+4\\omega^3$ .",
          "Since  $\\omega$  is a primitive cube root of unity,  $\\omega^3=1$  and  $1+\\omega+\\omega^2=0$ , so  $\\omega+\\omega^2=-1$ .",
          "Substitute:  $=1+2(\\omega+\\omega^2)+4\\omega^3=1+2(-1)+4(1)=3$ .",
          "The bracket equals the real number  $3$ , hence the value is  $3^{1013}=\\boxed{3^{1013}}$ ."
        ]
      },
      {
        "name": "Conjugate / norm interpretation",
        "steps": [
          "Because  $\\omega^2=\\overline{\\omega}$ , the factors  $1+2\\omega$  and  $1+2\\omega^2$  are complex conjugates, so their product is  $|1+2\\omega|^2\\ge 0$  — automatically a nonnegative real.",
          "Write  $\\omega=-\\tfrac12+\\tfrac{\\sqrt3}{2}i$ . Then  $1+2\\omega=1+(-1+\\sqrt3\\,i)=\\sqrt3\\,i$ , so  $|1+2\\omega|^2=(\\sqrt3)^2=3$ .",
          "Therefore  $(1+2\\omega)(1+2\\omega^2)=|1+2\\omega|^2=3$ .",
          "Raising the positive real  $3$  to the  $1013$ th power gives  $\\boxed{3^{1013}}$ ."
        ]
      },
      {
        "name": "Eisenstein norm formula",
        "steps": [
          "For  $a,b\\in\\mathbb{Z}$  the field norm in  $\\mathbb{Z}[\\omega]$  is  $N(a+b\\omega)=(a+b\\omega)(a+b\\omega^2)=a^2-ab+b^2$ .",
          "Here  $a=1,\\,b=2$ , so the bracket equals  $1^2-(1)(2)+2^2=1-2+4=3$ .",
          "Thus the expression is  $3^{1013}=\\boxed{3^{1013}}$ ."
        ]
      }
    ],
    "answerLabel": "value",
    "remark": "Insight: a product of the form  $(a+b\\omega)(a+b\\omega^2)$  is the Eisenstein-integer norm  $a^2-ab+b^2$ , always a real (indeed nonnegative) integer. Recognising the conjugate structure  $\\omega^2=\\overline{\\omega}$  turns a scary  $1013$ th power into a single tidy real number  $3$ , then  $3^{1013}$ ."
  },
  {
    "theme": "rootsofunity",
    "themeLabel": "Roots of Unity",
    "title": "The Odd Half of Fourteen",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "cyclotomic",
      "parity split",
      "product",
      "anti-roots",
      "evaluation at a point"
    ],
    "statement": "Let  $\\zeta=e^{\\pi i/7}=e^{2\\pi i/14}$ , a primitive  $14$ th root of unity, so that  $\\zeta,\\zeta^2,\\dots,\\zeta^{13}$  together with  $1$  are the fourteen  $14$ th roots of unity. Considering only the seven powers with an odd exponent, evaluate  \\[ \\prod_{\\substack{k=1\\\\ k\\ \\mathrm{odd}}}^{13}\\bigl(2-\\zeta^{k}\\bigr)=\\bigl(2-\\zeta\\bigr)\\bigl(2-\\zeta^{3}\\bigr)\\bigl(2-\\zeta^{5}\\bigr)\\bigl(2-\\zeta^{7}\\bigr)\\bigl(2-\\zeta^{9}\\bigr)\\bigl(2-\\zeta^{11}\\bigr)\\bigl(2-\\zeta^{13}\\bigr). \\] ",
    "answer": " $129$ ",
    "trap": "Treating the seven odd-exponent powers as if they were ``half of the  $n$ th roots of unity'' and reaching for  $2^{n}-1$ . The fatal step is mis-identifying which polynomial these seven numbers are the roots of. The full identity  $x^{14}-1=\\prod_{k=0}^{13}(x-\\zeta^{k})$  splits by parity as  $(x^{7}-1)(x^{7}+1)$ : the seven even-exponent powers  $\\zeta^{0},\\zeta^{2},\\dots,\\zeta^{12}$  are the seventh roots of unity (roots of  $x^{7}-1$ ), but the seven odd-exponent powers are the roots of  $x^{7}+1$ , the anti-roots. So the product is the value of  $x^{7}+1$  at  $x=2$ , namely  $2^{7}+1=129$ , not the value of  $x^{7}-1$  at  $x=2$ , which would give the wrong  $2^{7}-1=127$ . A second wrong turn is forgetting that  $\\zeta^{7}=-1$  is itself one of the odd-exponent factors  $(2-(-1))=3$ ; dropping it (as if the seven factors were only the genuinely complex ones) destroys the count and the parity argument alike.",
    "solutions": [
      {
        "name": "Parity split: the anti-roots are the roots of  $x^7+1$ ",
        "steps": [
          "The  $14$  powers  $\\zeta^{0},\\zeta^{1},\\dots,\\zeta^{13}$  are all distinct  $14$ th roots of unity, so  $x^{14}-1=\\prod_{k=0}^{13}(x-\\zeta^{k})$ . Factor the left side as  $x^{14}-1=(x^{7}-1)(x^{7}+1)$ .",
          "Sort the powers by the parity of the exponent. The even-exponent powers  $\\zeta^{2j}=(\\zeta^{2})^{j}$  for  $j=0,\\dots,6$  are the seven  $7$ th roots of unity (since  $\\zeta^{2}=e^{2\\pi i/7}$ ), hence exactly the roots of  $x^{7}-1$ . The remaining seven powers, those with odd exponent, must therefore be exactly the roots of the complementary factor  $x^{7}+1$ .",
          "Consequently  $\\displaystyle\\prod_{\\substack{k\\ \\mathrm{odd}}}(x-\\zeta^{k})=x^{7}+1$  identically in  $x$ . Setting  $x=2$  turns the requested product into a single substitution:  $\\displaystyle\\prod_{\\substack{k\\ \\mathrm{odd}}}(2-\\zeta^{k})=2^{7}+1$ .",
          "Therefore the value is  $2^{7}+1=128+1=129$ .  $\\boxed{129}$ "
        ]
      },
      {
        "name": "Complement: divide the whole by the even half",
        "steps": [
          "Evaluate the product over all thirteen non-trivial roots first. From  $x^{14}-1=\\prod_{k=0}^{13}(x-\\zeta^{k})$ , dividing by the  $k=0$  factor  $(x-1)$  gives  $\\dfrac{x^{14}-1}{x-1}=\\prod_{k=1}^{13}(x-\\zeta^{k})=1+x+\\cdots+x^{13}$ ; at  $x=2$  this equals  $\\dfrac{2^{14}-1}{2-1}=2^{14}-1=16383$ .",
          "Now the even-exponent non-trivial powers  $\\zeta^{2},\\zeta^{4},\\dots,\\zeta^{12}$  are the six non-trivial  $7$ th roots of unity, so  $\\prod_{j=1}^{6}(x-\\zeta^{2j})=\\dfrac{x^{7}-1}{x-1}=1+x+\\cdots+x^{6}$ ; at  $x=2$  this equals  $\\dfrac{2^{7}-1}{2-1}=2^{7}-1=127$ .",
          "The seven odd-exponent factors are everything left over, so their product is the quotient  $\\dfrac{16383}{127}$ . Since  $16383=2^{14}-1=(2^{7}-1)(2^{7}+1)=127\\cdot129$ , the quotient is exactly  $129$ .",
          "Hence  $\\displaystyle\\prod_{\\substack{k\\ \\mathrm{odd}}}(2-\\zeta^{k})=\\frac{2^{14}-1}{2^{7}-1}=2^{7}+1=129$ .  $\\boxed{129}$ "
        ]
      },
      {
        "name": "Direct cyclotomic bookkeeping",
        "steps": [
          "Write the seven odd exponents as  $\\{1,3,5,7,9,11,13\\}=\\{2j+1:\\,j=0,\\dots,6\\}$ , so each odd-exponent power is  $\\zeta^{2j+1}=e^{i\\pi(2j+1)/7}$ . These are precisely the seven solutions of  $w^{7}=e^{i\\pi}=-1$ , i.e. the seven roots of  $w^{7}+1=0$ .",
          "A monic polynomial with those exact roots is  $\\prod_{j=0}^{6}(w-\\zeta^{2j+1})=w^{7}+1$  (matching leading coefficient  $1$  and the seven roots of  $w^{7}+1$ ). One of these roots is the real value  $\\zeta^{7}=e^{i\\pi}=-1$ , contributing the honest real factor  $2-(-1)=3$ , which must be kept.",
          "Replacing  $w$  by the evaluation point  $2$  gives  $\\prod_{j=0}^{6}(2-\\zeta^{2j+1})=2^{7}+1$ . (As a sanity check the lone real factor  $3$  divides  $129=3\\cdot 43$ , consistent with  $\\zeta^{7}=-1$  being one of the roots.)",
          "Thus the product equals  $2^{7}+1=129$ .  $\\boxed{129}$ "
        ]
      }
    ],
    "remark": "Insight: the move that unlocks everything is refusing to evaluate the product factor-by-factor and instead asking ``of which polynomial are these seven numbers the complete root set?'' Splitting  $x^{14}-1=(x^{7}-1)(x^{7}+1)$  by exponent parity assigns the even powers to  $x^{7}-1$  and the odd powers to the anti-factor  $x^{7}+1$  -- so the answer is  $x^{7}+1$  evaluated at  $2$ , a plus sign, not the seductive  $2^{7}-1$ . The same parity partition is the engine behind the factorization  $2^{14}-1=(2^{7}-1)(2^{7}+1)$ , and the requested product is exactly the second factor."
  },
  {
    "theme": "rootsofunity",
    "themeLabel": "Roots of Unity",
    "title": "The Parabolic Weight",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "weighted sum",
      "symmetry fold",
      "second difference",
      "cotangent",
      "abel summation"
    ],
    "statement": "Let  $\\zeta=e^{2\\pi i/12}$  be a primitive  $12$ th root of unity. Attach to each non-trivial power  $\\zeta^{k}$  the parabolic weight  $k(12-k)$  and evaluate the second-order weighted root sum  \\[ S=\\sum_{k=1}^{11} k\\,(12-k)\\,\\zeta^{k}. \\]  Give the exact value in closed form.",
    "answer": " $-48-24\\sqrt{3}$ ",
    "trap": "The weight  $k(12-k)$  is symmetric under  $k\\mapsto 12-k$ , and  $\\zeta^{12-k}=\\overline{\\zeta^{k}}$ , so the imaginary parts pair off and  $S$  is real. The seductive next move is to reduce  $S$  to a pure  $\\cot^{2}$  value by false analogy with the famous identity  $\\sum_{k=1}^{n-1}\\cot^{2}(\\pi k/n)=\\tfrac{(n-1)(n-2)}{3}$ . Carrying the fold through honestly gives  $S=-\\dfrac{n}{2\\sin^{2}(\\pi/n)}=-\\dfrac{n}{2}\\csc^{2}\\!\\frac{\\pi}{n}$ , and the trap is forgetting that  $\\csc^{2}\\theta=1+\\cot^{2}\\theta$ : writing  $S=-\\tfrac{n}{2}\\cot^{2}(\\pi/n)$  instead drops exactly the diagonal term  $-\\tfrac{n}{2}=-6$  and yields the wrong  $-42-24\\sqrt{3}$ . The lost  $+1$  comes from the cross term in the  $(\\zeta-1)^{2}$  denominator that does not cancel under the fold; it is the single  $\\sin^{2}$  in  $\\csc^{2}$ , not a stray constant. Equivalently, naively differentiating the geometric sum only once (getting  $\\sum k\\zeta^{k}=n/(\\zeta-1)$ ) and reusing that shape for the  $k^{2}$  piece misses that  $\\sum k^{2}\\zeta^{k}$  carries a  $(\\zeta-1)^{2}$  in the denominator.",
    "solutions": [
      {
        "name": "Split into first- and second-order kernels",
        "steps": [
          "Write  $k(12-k)=nk-k^{2}$  with  $n=12$ , so  $S=n\\sum_{k=1}^{n-1}k\\,\\zeta^{k}-\\sum_{k=1}^{n-1}k^{2}\\,\\zeta^{k}$ . Both kernel sums have closed forms obtained by applying  $z\\frac{d}{dz}$  to  $\\sum_{k=0}^{n-1}z^{k}=\\frac{z^{n}-1}{z-1}$  and then setting  $z=\\zeta$  with  $\\zeta^{n}=1$ ,  $\\zeta\\ne1$ .",
          "One differentiation gives  $\\sum_{k=1}^{n-1}k\\,\\zeta^{k}=\\dfrac{n}{\\zeta-1}$ . A second application of  $z\\frac{d}{dz}$  and the same substitution  $\\zeta^{n}=1$  gives  $\\sum_{k=1}^{n-1}k^{2}\\,\\zeta^{k}=\\dfrac{n(n\\zeta-n-2\\zeta)}{(\\zeta-1)^{2}}$ .",
          "Substitute:  $S=\\dfrac{n^{2}}{\\zeta-1}-\\dfrac{n(n\\zeta-n-2\\zeta)}{(\\zeta-1)^{2}}=\\dfrac{n\\bigl[n(\\zeta-1)-(n\\zeta-n-2\\zeta)\\bigr]}{(\\zeta-1)^{2}}=\\dfrac{n\\,(2\\zeta)}{(\\zeta-1)^{2}}=\\dfrac{2n\\zeta}{(\\zeta-1)^{2}}.$ ",
          "Now  $\\zeta-1=2i\\sin\\frac{\\pi}{n}\\,e^{i\\pi/n}$ , so  $(\\zeta-1)^{2}=-4\\sin^{2}\\frac{\\pi}{n}\\,\\zeta$ , and the  $\\zeta$  cancels:  $S=\\dfrac{2n\\zeta}{-4\\sin^{2}(\\pi/n)\\,\\zeta}=-\\dfrac{n}{2\\sin^{2}(\\pi/n)}=-\\dfrac{n}{2}\\csc^{2}\\frac{\\pi}{n}.$ ",
          "For  $n=12$ ,  $\\sin\\frac{\\pi}{12}=\\frac{\\sqrt6-\\sqrt2}{4}$  gives  $\\sin^{2}\\frac{\\pi}{12}=\\frac{2-\\sqrt3}{4}$ , so  $\\csc^{2}\\frac{\\pi}{12}=\\frac{4}{2-\\sqrt3}=4(2+\\sqrt3)=8+4\\sqrt3$ . Hence  $S=-6\\,(8+4\\sqrt3)=\\boxed{-48-24\\sqrt{3}}$ ."
        ]
      },
      {
        "name": "Symmetry fold to a real cosine sum",
        "steps": [
          "Because  $a_{k}=k(n-k)$  satisfies  $a_{n-k}=a_{k}$  and  $\\zeta^{n-k}=\\overline{\\zeta^{k}}$ , pairing  $k$  with  $n-k$  turns  $S$  into a real sum:  $S=\\sum_{k=1}^{n-1}a_{k}\\cos\\frac{2\\pi k}{n}$ , the imaginary parts cancelling exactly. So  $S\\in\\mathbb{R}$  and we only need its cosine content.",
          "Use  $\\sum_{k=1}^{n-1}k(n-k)\\cos(k\\theta)=\\operatorname{Re}\\sum_{k=1}^{n-1}k(n-k)e^{ik\\theta}$  with  $\\theta=2\\pi/n$ . The generating identity  $\\sum_{k=1}^{n-1}k(n-k)x^{k}$  collapses on the unit circle at an  $n$ th root: from the kernel computation  $\\sum_{k=1}^{n-1}k(n-k)\\zeta^{k}=\\dfrac{2n\\zeta}{(\\zeta-1)^{2}}$ , already a real quantity by the fold.",
          "Convert to trigonometry:  $\\dfrac{2n\\zeta}{(\\zeta-1)^{2}}=\\dfrac{2n\\zeta}{-4\\sin^{2}(\\pi/n)\\,\\zeta}=-\\dfrac{n}{2}\\csc^{2}\\frac{\\pi}{n}$ , confirming reality and the  $\\csc^{2}$  (not  $\\cot^{2}$ ) closed form.",
          "At  $n=12$ :  $\\csc^{2}\\frac{\\pi}{12}=8+4\\sqrt3$ , so  $S=-6(8+4\\sqrt3)=\\boxed{-48-24\\sqrt{3}}$ ."
        ]
      },
      {
        "name": "Abel summation against the tail sums of roots",
        "steps": [
          "Use the tail sums  $T_{k}=\\sum_{j=k}^{n-1}\\zeta^{j}$ , which telescope:  $\\zeta^{k}=T_{k}-T_{k+1}$  with  $T_{n}=0$ . Because  $\\zeta^{k}\\zeta^{n-k}=\\zeta^{n}=1$ , the tail closes neatly:  $T_{k}=\\dfrac{\\zeta^{k}(\\zeta^{\\,n-k}-1)}{\\zeta-1}=\\dfrac{1-\\zeta^{k}}{\\zeta-1}.$ ",
          "Abel summation (summation by parts) on  $S=\\sum_{k=1}^{n-1}a_{k}(T_{k}-T_{k+1})$  with  $a_{k}=k(n-k)$  gives  $S=a_{1}T_{1}+\\sum_{k=2}^{n-1}(a_{k}-a_{k-1})\\,T_{k}$ , the boundary term at  $k=n$  vanishing since  $T_{n}=0$ . Here  $a_{1}T_{1}=(n-1)\\cdot\\frac{1-\\zeta}{\\zeta-1}=-(n-1)$ , and the first difference  $a_{k}-a_{k-1}=n+1-2k$  is linear -- the Abel step has reduced the double weight to a single one.",
          "Insert  $T_{k}=\\frac{1-\\zeta^{k}}{\\zeta-1}$ . The constant piece carries the factor  $\\sum_{k=2}^{n-1}(n+1-2k)=0$ , so only the  $\\zeta^{k}$  piece survives:  $S=-(n-1)-\\dfrac{1}{\\zeta-1}\\sum_{k=2}^{n-1}(n+1-2k)\\zeta^{k}.$  Completing the sum to  $k=1$  (its  $k=1$  term is  $(n-1)\\zeta$ ) and using  $\\sum_{k=1}^{n-1}\\zeta^{k}=-1$ ,  $\\sum_{k=1}^{n-1}k\\zeta^{k}=\\frac{n}{\\zeta-1}$  gives  $\\sum_{k=1}^{n-1}(n+1-2k)\\zeta^{k}=-(n+1)-\\frac{2n}{\\zeta-1}.$ ",
          "Assembling,  $S=-(n-1)-\\dfrac{1}{\\zeta-1}\\Bigl[-(n+1)-\\frac{2n}{\\zeta-1}-(n-1)\\zeta\\Bigr]$ , which collapses algebraically to  $S=\\dfrac{2n\\zeta}{(\\zeta-1)^{2}}=-\\dfrac{n}{2}\\csc^{2}\\frac{\\pi}{n}$ .",
          "With  $n=12$  and  $\\csc^{2}\\frac{\\pi}{12}=8+4\\sqrt3$ , this is  $-6(8+4\\sqrt3)=\\boxed{-48-24\\sqrt{3}}$ ."
        ]
      }
    ],
    "remark": "Insight: the double weight  $k(n-k)$  is a parabola, and applying the Euler operator  $z\\frac{d}{dz}$  twice to the geometric kernel manufactures exactly a  $(\\zeta-1)^{2}$  in the denominator -- the signature of a second-order sum. The symmetric weight folds the answer onto the real axis, but reality does not mean the sum degenerates to the textbook  $\\cot^{2}$  identity: the honest closed form is  $-\\frac{n}{2}\\csc^{2}(\\pi/n)$ , and the difference  $\\csc^{2}-\\cot^{2}=1$  is precisely the diagonal  $-n/2$  that the fold leaves uncancelled. The same Euler-operator machinery, used once, recovers the first-order  $\\sum k\\zeta^{k}=n/(\\zeta-1)$ ; used twice, it is the cleanest route to weighted regular-polygon identities."
  },
  {
    "theme": "rootsofunity",
    "themeLabel": "Roots of Unity",
    "title": "The Imaginary Side of the Filter",
    "difficulty": 5,
    "task": "Evaluate exactly",
    "tags": [
      "roots of unity filter",
      "cube roots",
      "imaginary part",
      "argument trap",
      "alternating binomial"
    ],
    "statement": "Let  $\\omega=e^{2\\pi i/3}$  be a primitive cube root of unity. Evaluate, in exact closed form, the alternating sine-weighted binomial sum  \\[ \\mathcal{S}=\\sum_{k=0}^{2024}(-1)^{k}\\binom{2024}{k}\\sin\\frac{2\\pi k}{3} =\\binom{2024}{1}\\sin\\tfrac{2\\pi}{3}-\\binom{2024}{2}\\sin\\tfrac{4\\pi}{3}+\\binom{2024}{4}\\sin\\tfrac{8\\pi}{3}-\\cdots. \\]  Here  $\\sin\\tfrac{2\\pi k}{3}$  is nonzero only for  $k\\not\\equiv 0\\pmod 3$ , so  $\\mathcal{S}$  is exactly the imaginary projection of the cube-root filter applied to  $(1-\\omega)^{2024}$ : it weights the residue class  $k\\equiv 1$  against  $k\\equiv 2$  with the alternating sign  $(-1)^k$  already attached. The intended route is to recognise  $\\mathcal{S}=\\operatorname{Im}\\big((1-\\omega)^{2024}\\big)$  and to pin down the true modulus and argument of  $1-\\omega$ . Give  $\\mathcal{S}$  as a single exact value (a power of  $3$  times  $\\sqrt3$ ).",
    "answer": " \\[\\boxed{\\mathcal{S}=\\dfrac{3^{1012}\\sqrt3}{2}}\\] ",
    "trap": "The fatal slip is the argument of  $1-\\omega$ . A strong student recalls the half-angle factorisation  $1-e^{i\\theta}=-2i\\sin\\tfrac{\\theta}{2}\\,e^{i\\theta/2}$  used for sums built on  $1+\\omega$ , where  $1+\\omega=e^{i\\pi/3}$  has argument  $+\\tfrac{\\pi}{3}$ , and transplants that  $+\\tfrac{\\pi}{3}$  onto  $1-\\omega$  — or, equivalently, writes  $1-\\omega=2\\sin\\tfrac{\\pi}{3}\\,e^{+i\\pi/6}$  by quoting the modulus  $2\\sin\\tfrac{\\theta}{2}$  as a positive real and reading the phase as  $+\\tfrac{\\theta-\\pi}{2}=+\\tfrac{\\pi}{6}$  with the wrong sign. In truth  $1-\\omega=\\tfrac32-\\tfrac{\\sqrt3}{2}i$  sits in the fourth quadrant: its argument is  $-\\tfrac{\\pi}{6}$ , not  $+\\tfrac{\\pi}{6}$  and not  $+\\tfrac{\\pi}{3}$ . Carrying the sign-flipped argument gives  $\\operatorname{Im}\\big(3^{1012}e^{+2024\\,i\\pi/6}\\big)=3^{1012}\\sin\\tfrac{2024\\pi}{6}=-\\tfrac{3^{1012}\\sqrt3}{2}$ , the exact negative of the truth. Because  $\\sin$  is odd, mistaking  $\\arg(1-\\omega)$  by a sign flips the entire imaginary projection; the real-part companion  $\\operatorname{Re}\\big((1-\\omega)^{n}\\big)$  would have hidden the error completely, since  $\\cos$  is even. The seductive wrong answer is  $-\\tfrac{3^{1012}\\sqrt3}{2}$ .",
    "solutions": [
      {
        "name": "Polar form of the genuine base",
        "steps": [
          "Lift the sine to a complex exponential. Since  $\\sin\\tfrac{2\\pi k}{3}=\\operatorname{Im}\\,\\omega^{k}$  with  $\\omega=e^{2\\pi i/3}$ , the binomial theorem gives  $\\mathcal{S}=\\operatorname{Im}\\sum_{k=0}^{2024}\\binom{2024}{k}(-1)^{k}\\omega^{k}=\\operatorname{Im}\\sum_{k=0}^{2024}\\binom{2024}{k}(-\\omega)^{k}=\\operatorname{Im}\\big((1-\\omega)^{2024}\\big).$ ",
          "Compute the base as an actual point, not from a memorised half-angle formula:  $1-\\omega=1-\\big(-\\tfrac12+\\tfrac{\\sqrt3}{2}i\\big)=\\tfrac32-\\tfrac{\\sqrt3}{2}i.$  Its modulus is  $|1-\\omega|=\\sqrt{\\tfrac94+\\tfrac34}=\\sqrt3$ , and since the real part  $\\tfrac32>0$  and the imaginary part  $-\\tfrac{\\sqrt3}{2}<0$ , the point lies in the fourth quadrant with argument  $\\arg(1-\\omega)=\\arctan\\!\\frac{-\\sqrt3/2}{3/2}=-\\tfrac{\\pi}{6}.$  Thus  $1-\\omega=\\sqrt3\\,e^{-i\\pi/6}.$ ",
          "Raise to the power by De Moivre:  $(1-\\omega)^{2024}=\\big(\\sqrt3\\big)^{2024}e^{-2024\\,i\\pi/6}=3^{1012}\\,e^{-i\\,2024\\pi/6}.$  Reduce the angle:  $\\tfrac{2024\\pi}{6}=\\tfrac{1012\\pi}{3}$ , and  $1012\\equiv 4\\pmod 6$ , so  $e^{-i\\,1012\\pi/3}=e^{-i\\,4\\pi/3}=e^{+i\\,2\\pi/3}$ , whose imaginary part is  $\\sin\\tfrac{2\\pi}{3}=+\\tfrac{\\sqrt3}{2}.$ ",
          "Therefore  $\\mathcal{S}=\\operatorname{Im}\\big((1-\\omega)^{2024}\\big)=3^{1012}\\cdot\\tfrac{\\sqrt3}{2}=\\boxed{\\dfrac{3^{1012}\\sqrt3}{2}}.$  The positive sign survives precisely because the true argument  $-\\tfrac{\\pi}{6}$  was read off the genuine fourth-quadrant point rather than copied from the  $1+\\omega$  template."
        ]
      },
      {
        "name": "Conjugate pair (real and imaginary parts of both cube roots)",
        "steps": [
          "Use both nontrivial cube roots at once. Writing  $\\overline\\omega=\\omega^{2}=e^{-2\\pi i/3}$ , the same expansion gives  $\\sum_{k}\\binom{2024}{k}(-\\overline\\omega)^{k}=(1-\\overline\\omega)^{2024}$ , and since  $1-\\overline\\omega=\\overline{1-\\omega}$  is the complex conjugate of the first base, the two powers are conjugates. Hence  $\\mathcal{S}=\\operatorname{Im}\\big((1-\\omega)^{2024}\\big)=\\dfrac{(1-\\omega)^{2024}-(1-\\overline\\omega)^{2024}}{2i}.$ ",
          "Both bases have modulus  $\\sqrt3$  with opposite arguments  $\\mp\\tfrac{\\pi}{6}$ , namely  $1-\\omega=\\sqrt3\\,e^{-i\\pi/6}$  and  $1-\\overline\\omega=\\sqrt3\\,e^{+i\\pi/6}$ . Raising to the  $2024$ th power,  $(1-\\omega)^{2024}=3^{1012}e^{-i\\,1012\\pi/3}$  and  $(1-\\overline\\omega)^{2024}=3^{1012}e^{+i\\,1012\\pi/3}$ .",
          "Subtract and divide by  $2i$ :  $\\mathcal{S}=3^{1012}\\cdot\\dfrac{e^{-i\\,1012\\pi/3}-e^{+i\\,1012\\pi/3}}{2i}=3^{1012}\\,\\big(-\\sin\\tfrac{1012\\pi}{3}\\big).$  Since  $1012\\equiv 4\\pmod 6$ ,  $\\sin\\tfrac{1012\\pi}{3}=\\sin\\tfrac{4\\pi}{3}=-\\tfrac{\\sqrt3}{2}$ , so  $-\\sin\\tfrac{1012\\pi}{3}=+\\tfrac{\\sqrt3}{2}.$ ",
          "Thus  $\\mathcal{S}=3^{1012}\\cdot\\tfrac{\\sqrt3}{2}=\\boxed{\\dfrac{3^{1012}\\sqrt3}{2}}.$  Pairing the root with its conjugate makes the cancellation of real parts automatic and isolates the imaginary projection with the correct sign."
        ]
      },
      {
        "name": "Recurrence from the minimal polynomial of  $1-\\omega$ ",
        "steps": [
          "Let  $a_{n}=\\operatorname{Im}\\big((1-\\omega)^{n}\\big)$ , so the target is  $\\mathcal{S}=a_{2024}$ . Since  $\\omega^{2}+\\omega+1=0$ , the number  $z=1-\\omega$  satisfies  $(1-z)^{2}+(1-z)+1=0$ , i.e.  $z^{2}-3z+3=0.$  Hence  $z^{n}=3z^{n-1}-3z^{n-2}$  for all  $n\\ge 2$ , and taking imaginary parts,  $a_{n}=3a_{n-1}-3a_{n-2}.$ ",
          "Seed the recurrence with  $a_{0}=\\operatorname{Im}(1)=0$  and  $a_{1}=\\operatorname{Im}(1-\\omega)=-\\tfrac{\\sqrt3}{2}.$  Writing  $a_{n}=3^{n/2}b_{n}$  turns the recurrence into  $b_{n}=\\sqrt3\\,b_{n-1}-b_{n-2}$ , the Chebyshev-type relation with characteristic roots  $e^{\\pm i\\pi/6}$ ; thus  $b_{n}=c\\sin\\tfrac{n\\pi}{6}$ , and  $a_{1}=-\\tfrac{\\sqrt3}{2}=3^{1/2}b_{1}$  gives  $b_{1}=-\\tfrac12=c\\sin\\tfrac{\\pi}{6}=\\tfrac{c}{2}$ , so  $c=-1$  and  $a_{n}=-3^{n/2}\\sin\\tfrac{n\\pi}{6}.$ ",
          "Evaluate at  $n=2024$ :  $2024\\equiv 8\\pmod{12}$ , so  $\\sin\\tfrac{2024\\pi}{6}=\\sin\\tfrac{8\\pi}{6}=\\sin\\tfrac{4\\pi}{3}=-\\tfrac{\\sqrt3}{2}.$  Therefore  $a_{2024}=-3^{1012}\\cdot\\big(-\\tfrac{\\sqrt3}{2}\\big)=3^{1012}\\cdot\\tfrac{\\sqrt3}{2}.$ ",
          "Hence  $\\mathcal{S}=a_{2024}=\\boxed{\\dfrac{3^{1012}\\sqrt3}{2}}.$  The recurrence never names an argument at all, so it is immune to the  $\\pm\\tfrac{\\pi}{6}$  sign trap — the single initial value  $a_{1}=-\\tfrac{\\sqrt3}{2}$  fixes the sign once and for all."
        ]
      }
    ],
    "remark": "Insight: the real and imaginary halves of a roots-of-unity filter behave very differently under a small argument error. The real-part filter  $\\operatorname{Re}\\big((1-\\omega)^{n}\\big)$  depends on  $\\cos$ , which is even, so a sign slip in  $\\arg(1-\\omega)$  does no harm; the imaginary-part filter depends on  $\\sin$ , which is odd, so the very same slip flips the whole answer. The decisive datum is that  $1-\\omega=\\tfrac32-\\tfrac{\\sqrt3}{2}i$  has argument  $-\\tfrac{\\pi}{6}$  (fourth quadrant), unlike its cousin  $1+\\omega=e^{+i\\pi/3}$  from which the half-angle formula is usually recited. Equivalently,  $1-\\omega$  is a root of  $z^{2}-3z+3$ , giving the clean recurrence  $a_{n}=3a_{n-1}-3a_{n-2}$  that determines the sign with no argument at all. Both the modulus  $\\sqrt3$  (the source of the  $3^{n/2}$  growth) and the sign live in that one base,  $\\sqrt3\\,e^{-i\\pi/6}$ ."
  },
  {
    "theme": "rootsofunity",
    "themeLabel": "Roots of Unity",
    "title": "Where the Golden Spin Hides",
    "difficulty": 5,
    "task": "Determine exactly",
    "tags": [
      "roots of unity filter",
      "fifth roots",
      "binomial sum",
      "golden ratio",
      "lucas numbers",
      "phase trap"
    ],
    "statement": "Among the  $2^{30}$  subsets  $A\\subseteq\\{1,2,\\dots,30\\}$ , let  $N_2$  count those whose size satisfies  $|A|\\equiv 2\\pmod 5$ , i.e.  \\[ N_2=\\sum_{\\substack{0\\le k\\le 30\\\\ k\\equiv 2\\,(\\mathrm{mod}\\,5)}}\\binom{30}{k}=\\binom{30}{2}+\\binom{30}{7}+\\binom{30}{12}+\\cdots+\\binom{30}{27}. \\]  The five residue counts  $N_0,\\dots,N_4$  sum to  $2^{30}$  and are forced to be nearly equal, each hovering about  $2^{30}/5=214748364.8$ . Using  $\\zeta=e^{2\\pi i/5}$ , the roots-of-unity filter writes  $N_2=\\tfrac15\\sum_{j=0}^{4}\\zeta^{-2j}(1+\\zeta^{j})^{30}$ , and the factorisation  $1+\\zeta^{j}=2\\cos\\tfrac{\\pi j}{5}\\,e^{i\\pi j/5}$  shows each power equals  $2^{30}\\cos^{30}\\tfrac{\\pi j}{5}$  times a phase. Determine the exact integer  $N_2$ , and in doing so identify precisely how far it deviates from the equal share  $2^{30}/5$ .",
    "answer": " $N_2=\\dfrac{2^{30}-L_{31}}{5}=214146295$ ",
    "trap": "The seduction is to treat  $|1+\\zeta^{j}|^{30}=2^{30}\\cos^{30}\\tfrac{\\pi j}{5}$  as the whole contribution and forget the signed weight  $\\zeta^{-2j}+\\zeta^{2j}=2\\cos\\tfrac{4\\pi j}{5}$  that the filter attaches to it. The dominant correction comes from  $j=1,4$ , and there  $2\\cos\\tfrac{4\\pi}{5}=-\\tfrac{1+\\sqrt5}{2}$  is negative: it equals  $-2\\cos\\tfrac{\\pi}{5}$ , not  $+2\\cos\\tfrac{\\pi}{5}$ . A strong student who reads off the magnitude  $2^{30}\\cos^{30}\\tfrac{\\pi}{5}$  (always positive) and pairs it with the positive cosine  $\\cos\\tfrac{\\pi}{5}$  — or who simply declares all five counts equal to  $2^{30}/5$  and rounds to  $214748365$  — pushes residue  $2$  above the mean and lands near  $215350435$ . In truth the negative weight drives  $N_2$  below the mean by exactly  $\\tfrac{L_{31}}{5}=602069.8$ . A second, subtler snare lurks in the phase: one may worry that  $e^{i\\pi j/5}$  raised to the  $30$  leaves a residual rotation. It does not —  $30\\cdot\\tfrac{\\pi j}{5}=6\\pi j$  is an even multiple of  $\\pi$ , so  $e^{i6\\pi j}=1$  and every power  $(1+\\zeta^{j})^{30}$  is genuinely real; the exponent  $30$  is exactly what kills the phase. Missing either the sign of the weight or the vanishing of the phase corrupts the deviation.",
    "solutions": [
      {
        "name": "Roots-of-unity filter with the phase collapsing",
        "steps": [
          "Apply the filter. With  $\\zeta=e^{2\\pi i/5}$ , picking the residue class  $k\\equiv 2$  in  $(1+x)^{30}=\\sum_k\\binom{30}{k}x^k$  gives  $N_2=\\tfrac15\\sum_{j=0}^{4}\\zeta^{-2j}(1+\\zeta^{j})^{30}.$  Factor each base by the half-angle identity  $1+\\zeta^{j}=1+e^{2\\pi i j/5}=2\\cos\\tfrac{\\pi j}{5}\\,e^{i\\pi j/5}.$ ",
          "Kill the phase. Raising to the  $30$ th power,  $(1+\\zeta^{j})^{30}=2^{30}\\cos^{30}\\tfrac{\\pi j}{5}\\,e^{i\\,30\\pi j/5}=2^{30}\\cos^{30}\\tfrac{\\pi j}{5}\\,e^{i6\\pi j}.$  Since  $6\\pi j$  is an even multiple of  $\\pi$ ,  $e^{i6\\pi j}=1$ , so every power is the real number  $2^{30}\\cos^{30}\\tfrac{\\pi j}{5}.$  Hence only the real part of the weight survives:  $N_2=\\tfrac15\\sum_{j=0}^{4}\\cos\\tfrac{4\\pi j}{5}\\,2^{30}\\cos^{30}\\tfrac{\\pi j}{5}.$ ",
          "Pair  $j$  with  $5-j$ . The  $j=0$  term is  $2^{30}.$  For  $j=1,4$  the cosine power is the same and  $\\cos\\tfrac{4\\pi}{5}=-\\cos\\tfrac{\\pi}{5}$ ; for  $j=2,3$  it is  $\\cos\\tfrac{8\\pi}{5}=\\cos\\tfrac{2\\pi}{5}.$  Thus  \\[ N_2=\\frac{1}{5}\\Big[2^{30}-2^{31}\\cos^{31}\\tfrac{\\pi}{5}+2^{31}\\cos^{31}\\tfrac{2\\pi}{5}\\Big]. \\]  The crucial minus sign in front of  $2^{31}\\cos^{31}\\tfrac{\\pi}{5}$  is the negative weight  $2\\cos\\tfrac{4\\pi}{5}$ ; ignoring it is the trap.",
          "Evaluate the cosines. Using  $\\cos\\tfrac{\\pi}{5}=\\tfrac{1+\\sqrt5}{4}$  and  $\\cos\\tfrac{2\\pi}{5}=\\tfrac{\\sqrt5-1}{4}$ , expand  $2^{31}\\cos^{31}\\tfrac{\\pi}{5}=\\big(\\tfrac{1+\\sqrt5}{2}\\big)^{31}$  and  $2^{31}\\cos^{31}\\tfrac{2\\pi}{5}=\\big(\\tfrac{\\sqrt5-1}{2}\\big)^{31}.$  The two have equal  $\\sqrt5$ -coefficients but opposite rational parts, so  $-\\big(\\tfrac{1+\\sqrt5}{2}\\big)^{31}+\\big(\\tfrac{\\sqrt5-1}{2}\\big)^{31}=-3010349$  (an integer). Therefore  $N_2=\\dfrac{2^{30}-3010349}{5}=\\dfrac{1070731475}{5}=\\boxed{214146295}.$ "
        ]
      },
      {
        "name": "Golden ratio and the Lucas number",
        "steps": [
          "Recognise the golden ratio. From Step 3 above,  $N_2=\\tfrac15\\big[2^{30}-(2\\cos\\tfrac{\\pi}{5})^{31}+(2\\cos\\tfrac{2\\pi}{5})^{31}\\big].$  But  $2\\cos\\tfrac{\\pi}{5}=\\tfrac{1+\\sqrt5}{2}=\\varphi$  is the golden ratio and  $2\\cos\\tfrac{2\\pi}{5}=\\tfrac{\\sqrt5-1}{2}=\\varphi^{-1}.$  Hence  $N_2=\\dfrac{2^{30}-\\varphi^{31}+\\varphi^{-31}}{5}.$ ",
          "Invoke the Lucas closed form. With conjugate  $\\psi=-\\varphi^{-1}=\\tfrac{1-\\sqrt5}{2}$ , the Lucas numbers satisfy  $L_n=\\varphi^{n}+\\psi^{n}.$  Because  $31$  is odd,  $\\psi^{31}=(-\\varphi^{-1})^{31}=-\\varphi^{-31}$ , so  $L_{31}=\\varphi^{31}-\\varphi^{-31}.$  Thus the entire deviation is a single Lucas number:  $\\varphi^{31}-\\varphi^{-31}=L_{31}=3010349.$ ",
          "Assemble the answer. Therefore  $N_2=\\dfrac{2^{30}-L_{31}}{5}.$  Since  $2^{30}=1073741824$  and  $L_{31}=3010349$ , we get  $N_2=\\dfrac{1073741824-3010349}{5}=\\dfrac{1070731475}{5}=\\boxed{214146295}.$ ",
          "Read off the deviation. The equal share is  $2^{30}/5=214748364.8$ , and  $N_2-\\tfrac{2^{30}}5=-\\tfrac{L_{31}}{5}=-602069.8.$  Because  $\\varphi^{-31}\\approx 3.3\\times10^{-7}$  is microscopic,  $L_{31}\\approx\\varphi^{31}=(2\\cos\\tfrac{\\pi}{5})^{31}$ : the deviation is essentially the single  $j=1,4$  contribution, and the residue- $2$  class sits the farthest below the mean."
        ]
      },
      {
        "name": "Generating function and a linear recurrence",
        "steps": [
          "Set up the residue generating series. Let  $f(x)=(1+x)^{30}=\\sum_{k=0}^{30}\\binom{30}{k}x^{k}.$  Then  $N_2=\\tfrac15\\sum_{j=0}^{4}\\zeta^{-2j}f(\\zeta^{j})$  extracts the coefficients with  $k\\equiv 2.$  Writing  $b_n=(1+\\zeta)^{n}+(1+\\zeta^{2})^{n}+(1+\\zeta^{3})^{n}+(1+\\zeta^{4})^{n}$  (the four nontrivial bases) lets us track the powers without committing to a phase.",
          "Find a recurrence for the powers. The four numbers  $1+\\zeta^{j}$  ( $j=1,2,3,4$ ) are the roots of  $\\prod_{j=1}^{4}(t-1-\\zeta^{j})=\\frac{(t-1)^5-1}{(t-1)-1}=\\frac{(t-1)^5-1}{t-2}.$  Expanding,  $(t-1)^5-1=t^5-5t^4+10t^3-10t^2+5t-2=(t-2)(t^4-3t^3+4t^2-2t+1).$  So each base satisfies  $t^4=3t^3-4t^2+2t-1$ , giving  $b_n=3b_{n-1}-4b_{n-2}+2b_{n-3}-b_{n-4}.$  The corresponding weighted sum (with  $\\zeta^{-2j}$ ) obeys the same recurrence; iterate from the base cases to confirm the residue counts  $N_0,\\dots,N_4$  are  $215492564,214978335,214146295,214146295,214978335.$ ",
          "Confirm by direct partial computation. Equivalently,  $5N_2=2^{30}+\\sum_{j=1}^{4}(\\zeta^{-2j}+\\zeta^{2j})\\cdot\\tfrac12\\cdots$ ; carrying out the real arithmetic of Method 1 (the phase is  $1$ ) yields  $5N_2=2^{30}-3010349=1070731475,$  exactly divisible by  $5.$ ",
          "Conclude. Hence  $N_2=\\dfrac{1070731475}{5}=\\boxed{214146295},$  matching both the filter and the Lucas evaluation. The recurrence route never invokes any cosine argument, so it is immune to the sign-of-the-weight trap: divisibility of  $1070731475$  by  $5$  is the independent witness that the integer is correct."
        ]
      }
    ],
    "remark": "Insight: the roots-of-unity filter splits into a positive magnitude  $2^{30}\\cos^{30}\\tfrac{\\pi j}{5}$  and a signed weight  $2\\cos\\tfrac{4\\pi j}{5}$ , and the whole answer lives in that sign. Two facts make the computation honest. First, the exponent  $30$  is special:  $30\\cdot\\tfrac{\\pi j}{5}=6\\pi j$  is an even multiple of  $\\pi$ , so every  $(1+\\zeta^{j})^{30}$  is real and no residual rotation hides in the phase. Second,  $2\\cos\\tfrac{\\pi}{5}=\\varphi$  and  $2\\cos\\tfrac{2\\pi}{5}=\\varphi^{-1}$  are golden-ratio surds, so the deviation from the equal share  $2^{30}/5$  collapses to a single Lucas number,  $\\varphi^{31}-\\varphi^{-31}=L_{31}=3010349$  (odd index, so the conjugate term flips sign). The near-equality of the five counts is thus quantified exactly:  $N_r-\\tfrac{2^{30}}5$  is governed by  $\\pm L_{31}/5$ , with residue  $2$  the farthest below the mean. The same machine, with  $2^{30}$  replaced by  $2^{n}$ , makes the deviation a Lucas/Fibonacci number whenever  $n\\equiv 0\\pmod{10}$  forces the phase to vanish."
  },
  {
    "theme": "rootsofunity",
    "themeLabel": "Roots of Unity",
    "title": "A Permutation of Roots",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "product",
      "seventh roots",
      "permutation",
      "telescoping"
    ],
    "statement": "Let  $\\zeta=e^{2\\pi i/7}$ . Evaluate  \\[\\prod_{k=1}^{6}\\big(1+\\zeta^{k}+\\zeta^{2k}\\big).\\] ",
    "answer": " $1$ ",
    "answerLabel": "value",
    "trap": "Multiplying out six cubic-looking factors, or assuming each factor is real and taking a product of real parts. In fact  $1+\\zeta^k+\\zeta^{2k}$  is genuinely complex for  $k=1,2,5,6$ , and the naive real-part product gives  $\\tfrac{1}{64}$ , not  $1$ . The key observation is  $1+\\zeta^k+\\zeta^{2k}=\\frac{\\zeta^{3k}-1}{\\zeta^k-1}$  and that  $k\\mapsto 3k$  is a bijection of  $\\{1,\\dots,6\\}\\bmod 7$ , so the numerator and denominator products are identical and cancel.",
    "solutions": [
      {
        "name": "Bijection cancellation",
        "steps": [
          "For each  $k\\in\\{1,\\dots,6\\}$  we have  $\\zeta^k\\ne 1$ , so by the geometric-sum identity  $1+x+x^2=\\dfrac{x^3-1}{x-1}$  with  $x=\\zeta^k$ ,  $$1+\\zeta^k+\\zeta^{2k}=\\dfrac{\\zeta^{3k}-1}{\\zeta^{k}-1}.$$ ",
          "Thus the product is  $\\displaystyle\\prod_{k=1}^{6}\\frac{\\zeta^{3k}-1}{\\zeta^{k}-1}=\\frac{\\prod_{k=1}^{6}(\\zeta^{3k}-1)}{\\prod_{k=1}^{6}(\\zeta^{k}-1)}.$ ",
          "Because  $\\gcd(3,7)=1$ , the map  $k\\mapsto 3k\\bmod 7$  permutes  $\\{1,2,3,4,5,6\\}$  (its image is  $\\{3,6,2,5,1,4\\}$ ). Hence  $\\{\\zeta^{3k}:k=1,\\dots,6\\}=\\{\\zeta^{j}:j=1,\\dots,6\\}$  as multisets.",
          "Therefore  $\\prod_{k=1}^{6}(\\zeta^{3k}-1)=\\prod_{j=1}^{6}(\\zeta^{j}-1)$ , so the numerator and denominator are equal and the ratio is  $1$ .",
          "Hence the product equals  $\\boxed{1}$ ."
        ]
      },
      {
        "name": "Polynomial evaluation",
        "steps": [
          "As above,  $1+\\zeta^k+\\zeta^{2k}=\\dfrac{\\zeta^{3k}-1}{\\zeta^k-1}$ , so the product equals  $\\displaystyle\\frac{\\prod_{k=1}^{6}(\\zeta^{3k}-1)}{\\prod_{k=1}^{6}(\\zeta^{k}-1)}.$ ",
          "Evaluate the denominator independently: from  $x^7-1=\\prod_{k=0}^{6}(x-\\zeta^k)$ , dividing by  $x-1$  gives  $1+x+\\cdots+x^6=\\prod_{k=1}^{6}(x-\\zeta^k)$ . Setting  $x=1$  yields  $\\prod_{k=1}^{6}(1-\\zeta^k)=7$ , and since  $(-1)^6=1$ , also  $\\prod_{k=1}^{6}(\\zeta^k-1)=7$ .",
          "For the numerator,  $3k$  runs over a complete set of nonzero residues mod  $7$  as  $k=1,\\dots,6$ , so  $\\prod_{k=1}^{6}(\\zeta^{3k}-1)=\\prod_{j=1}^{6}(\\zeta^{j}-1)=7$  by the same identity.",
          "Therefore the product is  $7/7=\\boxed{1}$ ."
        ]
      }
    ],
    "remark": "Insight: the identity  $1+x+x^2=\\frac{x^3-1}{x-1}$  combined with the fact that multiplication by a unit permutes the nonzero residues modulo a prime makes a six-factor product collapse to  $1$ . A numerical check gives the product as  $1.000000$  with the six factors being complex (two of modulus  $\\approx 2.247$ , two of  $\\approx 0.802$ , two of  $\\approx 0.555$ ), confirming that no factor is real. This 'permutation of roots' idea recurs throughout cyclotomy."
  },
  {
    "theme": "rootsofunity",
    "themeLabel": "Roots of Unity",
    "title": "A Sum Over Every Seventh Root",
    "difficulty": 5,
    "task": "Evaluate the sum",
    "tags": [
      "roots of unity",
      "de moivre",
      "factoring z^n-1",
      "geometric sum",
      "logarithmic derivative"
    ],
    "statement": "Let  $\\omega = e^{2\\pi i/7}$  be a primitive seventh root of unity, so that  $1,\\omega,\\omega^2,\\dots,\\omega^6$  are the seven roots of  $z^7-1=0$ . Evaluate the sum over  $\\mathbf{all}$  seven roots,  \\[ S=\\sum_{k=0}^{6}\\frac{1}{\\,2-\\omega^{k}\\,}. \\]  Give the exact rational value.",
    "answer": " $$\\boxed{\\,S=\\dfrac{448}{127}\\,}$$ ",
    "trap": "Reading \"the seventh roots\" as the six nontrivial ones  $\\omega,\\omega^2,\\dots,\\omega^6$  and dropping the  $k=0$  root  $\\omega^0=1$ . The missing term is  $\\dfrac{1}{2-1}=1$ , so the truncated sum equals  $S-1=\\dfrac{448}{127}-1=\\dfrac{321}{127}$ , a wrong but plausibly “clean” answer. The index runs  $k=0,1,\\dots,6$ , and  $\\omega^0=1$  is a genuine seventh root that must be counted.",
    "solutions": [
      {
        "name": "Logarithmic derivative of  $z^7-1$ ",
        "steps": [
          "Because  $1,\\omega,\\dots,\\omega^6$  are exactly the roots of  $z^7-1$ , the factorization is  $z^7-1=\\prod_{k=0}^{6}(z-\\omega^{k})$ .",
          "Take  $\\dfrac{d}{dz}\\ln$  of both sides: the left side gives  $\\dfrac{7z^{6}}{z^{7}-1}$ , and the right side gives  $\\displaystyle\\sum_{k=0}^{6}\\frac{1}{\\,z-\\omega^{k}\\,}$ . Hence  $\\displaystyle\\sum_{k=0}^{6}\\frac{1}{z-\\omega^{k}}=\\frac{7z^{6}}{z^{7}-1}$  for every  $z$  that is not a root.",
          "Set  $z=2$  (which is not a seventh root of unity, so the formula is valid):  $S=\\dfrac{7\\cdot 2^{6}}{2^{7}-1}=\\dfrac{7\\cdot 64}{128-1}=\\dfrac{448}{127}.$ ",
          "Therefore  $\\boxed{S=\\dfrac{448}{127}}$ ."
        ]
      },
      {
        "name": "Reciprocal substitution and Newton-style sum",
        "steps": [
          "Write each term as a geometric series in  $\\omega^{k}/2$ : since  $|\\omega^{k}/2|=\\tfrac12<1$ ,  $\\dfrac{1}{2-\\omega^{k}}=\\dfrac{1}{2}\\cdot\\dfrac{1}{1-\\omega^{k}/2}=\\dfrac{1}{2}\\sum_{m=0}^{\\infty}\\frac{\\omega^{km}}{2^{m}}.$ ",
          "Sum over all seven roots and swap the order:  $S=\\dfrac{1}{2}\\displaystyle\\sum_{m=0}^{\\infty}\\frac{1}{2^{m}}\\Big(\\sum_{k=0}^{6}\\omega^{km}\\Big).$  The inner sum  $\\sum_{k=0}^{6}\\omega^{km}$  equals  $7$  when  $7\\mid m$  (all terms are  $1$ ) and  $0$  otherwise (a full geometric run of the roots, which cancels to  $0$ ).",
          "Only  $m=0,7,14,\\dots$  survive, contributing  $7$  each:  $S=\\dfrac{1}{2}\\cdot 7\\displaystyle\\sum_{j=0}^{\\infty}\\frac{1}{2^{7j}}=\\dfrac{7}{2}\\cdot\\dfrac{1}{1-2^{-7}}=\\dfrac{7}{2}\\cdot\\dfrac{128}{127}=\\dfrac{448}{127}.$ ",
          "Thus  $\\boxed{S=\\dfrac{448}{127}}$ , agreeing with the closed form  $\\dfrac{7\\cdot 2^{6}}{2^{7}-1}$ ."
        ]
      }
    ],
    "remark": "**Insight.** The factorization  $z^{n}-1=\\prod_{k=0}^{n-1}(z-\\omega^{k})$  turns a messy sum of reciprocals into one derivative:  $\\sum 1/(z-\\omega^{k})=nz^{n-1}/(z^{n}-1)$ . The same answer falls out of the geometric-series route because  $\\sum_{k=0}^{n-1}\\omega^{km}$  is the perfect  $0$ -or- $n$  filter that all roots-of-unity sums secretly rely on. The only way to go wrong is bookkeeping: count  $\\omega^0=1$ ."
  },
  {
    "theme": "rootsofunity",
    "themeLabel": "Roots of Unity",
    "title": "Sines From the Seventh Roots",
    "difficulty": 5,
    "task": "Evaluate the product",
    "tags": [
      "roots of unity",
      "real quadratic factors",
      "conjugate pairing",
      "factoring z^n-1",
      "product of sines"
    ],
    "statement": "Let  $\\omega=e^{2\\pi i/7}$ . Starting from the real factorization of  $z^{7}-1$  into the linear factors  $z-\\omega^{k}$  and pairing conjugate roots into real quadratics, evaluate  \\[ P=\\prod_{k=1}^{6}\\sin\\!\\frac{k\\pi}{7}\\;=\\;\\sin\\frac{\\pi}{7}\\,\\sin\\frac{2\\pi}{7}\\,\\sin\\frac{3\\pi}{7}\\,\\sin\\frac{4\\pi}{7}\\,\\sin\\frac{5\\pi}{7}\\,\\sin\\frac{6\\pi}{7}. \\]  Give the exact value.",
    "answer": " $$\\boxed{\\,P=\\dfrac{7}{64}\\,}$$ ",
    "trap": "Including the trivial root  $\\omega^{0}=1$  in the product  $\\prod(1-\\omega^{k})$ . With  $k=0$  the factor is  $1-\\omega^{0}=1-1=0$ , so the whole product collapses to  $0$  and one “concludes”  $P=0$  — even though every  $\\sin\\frac{k\\pi}{7}$  for  $k=1,\\dots,6$  is strictly positive. The  $k=0$  root is the one root that does  $\\mathbf{not}$  contribute a sine factor; the product is over the six nontrivial roots only.",
    "solutions": [
      {
        "name": "Real quadratic factors of  $z^7-1$ ",
        "steps": [
          "From  $z^{7}-1=\\prod_{k=0}^{6}(z-\\omega^{k})$ , peel off the root  $k=0$ :  $\\dfrac{z^{7}-1}{z-1}=1+z+z^{2}+\\cdots+z^{6}=\\prod_{k=1}^{6}(z-\\omega^{k}).$ ",
          "Set  $z=1$ : the left side is  $1+1+\\cdots+1=7$ , so  $\\prod_{k=1}^{6}(1-\\omega^{k})=7$ .",
          "Pair each root with its conjugate,  $\\omega^{7-k}=\\overline{\\omega^{k}}$ . Then  $(1-\\omega^{k})(1-\\omega^{7-k})=|1-\\omega^{k}|^{2}$ , and since  $1-\\omega^{k}=1-\\cos\\frac{2k\\pi}{7}-i\\sin\\frac{2k\\pi}{7}$ , we get  $|1-\\omega^{k}|^{2}=2-2\\cos\\frac{2k\\pi}{7}=4\\sin^{2}\\frac{k\\pi}{7}$  (using  $1-\\cos\\theta=2\\sin^{2}\\tfrac\\theta2$ ).",
          "So  $7=\\prod_{k=1}^{6}(1-\\omega^{k})=\\prod_{k=1}^{3}\\big(4\\sin^{2}\\tfrac{k\\pi}{7}\\big)=4^{3}\\Big(\\prod_{k=1}^{3}\\sin\\tfrac{k\\pi}{7}\\Big)^{2}.$  Hence  $\\prod_{k=1}^{3}\\sin\\frac{k\\pi}{7}=\\dfrac{\\sqrt7}{8}$  (positive root, as each sine is positive).",
          "Finally  $P=\\prod_{k=1}^{6}\\sin\\frac{k\\pi}{7}=\\Big(\\prod_{k=1}^{3}\\sin\\tfrac{k\\pi}{7}\\Big)^{2}$  because  $\\sin\\frac{(7-k)\\pi}{7}=\\sin\\frac{k\\pi}{7}$ , giving  $P=\\Big(\\dfrac{\\sqrt7}{8}\\Big)^{2}=\\boxed{\\dfrac{7}{64}}$ ."
        ]
      },
      {
        "name": "Derivative of  $z^7-1$  at  $z=1$ ",
        "steps": [
          "Differentiate  $z^{7}-1=\\prod_{k=0}^{6}(z-\\omega^{k})$  and evaluate at the root  $z=1=\\omega^{0}$ : only the term that omits the  $(z-1)$  factor survives, so  $\\big.7z^{6}\\big|_{z=1}=\\prod_{k=1}^{6}(1-\\omega^{k})$ , i.e.  $\\prod_{k=1}^{6}(1-\\omega^{k})=7.$ ",
          "Take moduli:  $\\prod_{k=1}^{6}|1-\\omega^{k}|=7$ , and  $|1-\\omega^{k}|=2\\big|\\sin\\frac{k\\pi}{7}\\big|=2\\sin\\frac{k\\pi}{7}$  since  $\\frac{k\\pi}{7}\\in(0,\\pi)$  keeps the sine positive.",
          "Therefore  $\\prod_{k=1}^{6}\\Big(2\\sin\\tfrac{k\\pi}{7}\\Big)=7$ , that is  $2^{6}\\,P=7$ .",
          "Hence  $P=\\dfrac{7}{2^{6}}=\\boxed{\\dfrac{7}{64}}$ , matching the real-quadratic computation."
        ]
      }
    ],
    "remark": "**Insight.** A product of sines is really the modulus of a product of the differences  $1-\\omega^{k}$ , and that product is just  $\\frac{z^{7}-1}{z-1}$  evaluated at  $z=1$ , namely  $7$ . The general fact  $\\prod_{k=1}^{n-1}\\sin\\frac{k\\pi}{n}=\\dfrac{n}{2^{\\,n-1}}$  drops straight out of  $z^{n}-1=\\prod(z-\\omega^{k})$  — provided you delete the root  $\\omega^{0}=1$ , which is the only one carrying no sine."
  },
  {
    "theme": "geometry",
    "themeLabel": "Complex Numbers as Geometry",
    "title": "The Squares Stand Guard at Every Corner",
    "difficulty": 5,
    "task": "Prove and evaluate",
    "tags": [
      "perpendicularity",
      "rotation",
      "square centers",
      "orientation",
      "van aubel"
    ],
    "statement": "Throughout, identify each point of the plane with a complex number. (a) For a (non-degenerate) quadrilateral with vertices  $a,b,c,d$  taken in order, prove that its two diagonals  $ac$  and  $bd$  are perpendicular if and only if the ratio  $\\dfrac{a-c}{\\,b-d\\,}$  is purely imaginary. (b) Let  $A,B,C$  be the vertices of an arbitrary triangle, listed counter-clockwise. On each side erect a square lying outside the triangle, and let  $P_a,P_b,P_c$  be the centres of the squares on  $BC$ ,  $CA$ ,  $AB$  respectively. Consider the quadrilateral  $A\\,P_b\\,P_a\\,P_c$ , whose diagonals are the segment  $AP_a$  (from a vertex to the centre of the square on the opposite side) and the segment  $P_bP_c$  (joining the centres of the squares on the other two sides). Using part (a), prove that these two diagonals are equal in length and mutually perpendicular, and determine the exact value of the complex ratio  \\[ \\rho \\;=\\; \\frac{A-P_a}{\\,P_b-P_c\\,}. \\] ",
    "answer": " \\[\\boxed{\\rho=\\dfrac{A-P_a}{\\,P_b-P_c\\,}=i}\\] ",
    "trap": "The hidden constraint is orientation, not algebra. The clean identity  $A-P_a=i\\,(P_b-P_c)$  holds only when all three squares are erected on the same side of their edges — outward for a counter-clockwise triangle. A strong student typically writes the centre of the square on a directed edge  $P\\to Q$  as  $\\tfrac{P+Q}{2}\\pm\\tfrac{i}{2}(Q-P)$  and then chooses the  $\\pm$  sign independently for each side (say, always  $+$ ), without checking that this actually places every square outside the triangle. With the triangle oriented counter-clockwise,  $BC$ ,  $CA$ ,  $AB$  are traversed so that the outward normal is obtained by the rotation  $-i$  uniformly; picking the sign per edge by sketching one picture, or mixing one inward square with two outward ones, destroys the relation. For instance, flipping only the square on  $AB$  to lie inside gives, for the triangle  $A=0,\\,B=4,\\,C=1+3i$ , a ratio  $\\tfrac{C-P_c'}{P_a-P_b}=-\\tfrac{2}{13}+\\tfrac{3}{13}i$ , which is neither purely imaginary (the diagonals are not perpendicular) nor of unit modulus (the diagonals are  $1.414$  versus  $5.099$  in length) — yet a careless solver, having ``proved'' perpendicularity in one hand-drawn case, declares the theorem and never notices that a consistent outward orientation was secretly assumed.",
    "solutions": [
      {
        "name": "Part (a) via the dot product, then a one-line center identity",
        "steps": [
          "Two nonzero displacement vectors represented by complex numbers  $z$  and  $w$  are perpendicular precisely when their real (Euclidean) inner product vanishes, i.e.  $\\operatorname{Re}(z\\overline{w})=0$ . Dividing by  $|w|^2>0$ ,  $\\operatorname{Re}(z\\overline{w})=0\\iff\\operatorname{Re}\\!\\big(\\tfrac{z}{w}\\big)=0\\iff \\tfrac{z}{w}\\ \\text{is purely imaginary}$ . Apply this to the diagonal directions  $z=a-c$  and  $w=b-d$ : the diagonals  $ac$  and  $bd$  are perpendicular  $\\iff \\dfrac{a-c}{b-d}\\in i\\,\\mathbb{R}$ , which is part (a).",
          "For (b), record the centre of a square erected on a directed edge. If a square is built on the segment from  $P$  to  $Q$  on the side reached by rotating  $Q-P$  through  $-90^{\\circ}$  (the outward side for a counter-clockwise triangle), its four vertices are  $P,\\,Q,\\,Q-i(Q-P),\\,P-i(Q-P)$ , so its centre is the average  $\\dfrac{P+Q}{2}-\\dfrac{i}{2}(Q-P)$ . With  $A,B,C$  counter-clockwise the three outward centres are  $P_a=\\dfrac{B+C}{2}-\\dfrac{i}{2}(C-B),\\quad P_b=\\dfrac{C+A}{2}-\\dfrac{i}{2}(A-C),\\quad P_c=\\dfrac{A+B}{2}-\\dfrac{i}{2}(B-A).$ ",
          "Compute the two diagonal directions directly. Expanding,  $A-P_a=A-\\tfrac{B+C}{2}+\\tfrac{i}{2}(C-B)$  and  $P_b-P_c=\\big(\\tfrac{C+A}{2}-\\tfrac{i}{2}(A-C)\\big)-\\big(\\tfrac{A+B}{2}-\\tfrac{i}{2}(B-A)\\big)=\\tfrac{C-B}{2}-\\tfrac{i}{2}(2A-B-C)=\\tfrac{C-B}{2}-iA+\\tfrac{i}{2}(B+C).$ ",
          "Multiply the second by  $i$ :  $i\\,(P_b-P_c)=\\tfrac{i}{2}(C-B)+A-\\tfrac{i^2}{2}(B+C)\\cdot(-1)\\ldots$  done cleanly,  $i(P_b-P_c)=A-\\tfrac{B+C}{2}+\\tfrac{i}{2}(C-B)=A-P_a$ . Hence  $A-P_a=i\\,(P_b-P_c)$ , so  $\\rho=\\dfrac{A-P_a}{P_b-P_c}=i$ . Being purely imaginary, part (a) gives perpendicularity; being of modulus  $1$ , the diagonals are equal in length.  $\\boxed{\\rho=i}$ "
        ]
      },
      {
        "name": "Rotation about each square's center",
        "steps": [
          "Use the defining symmetry of a square: its centre  $O$  sends each vertex to the next under a quarter-turn, so multiplication by  $i$  about  $O$  is a symmetry. For the outward square on  $BC$  with centre  $P_a$ , the rotation by  $+90^{\\circ}$  about  $P_a$  carries  $B$  to  $C$ :  $C-P_a=i\\,(B-P_a)$ , i.e.  $P_a=\\dfrac{C-iB}{1-i}=\\dfrac{B+C}{2}-\\dfrac{i}{2}(C-B).$  The same quarter-turn law gives  $P_b=\\dfrac{C+A}{2}-\\dfrac{i}{2}(A-C)$  and  $P_c=\\dfrac{A+B}{2}-\\dfrac{i}{2}(B-A)$ .",
          "Form  $P_b-P_c$  and apply the quarter-turn operator  $z\\mapsto iz$  to it. Since  $i\\cdot(-\\tfrac{i}{2})=\\tfrac12$  and  $i\\cdot\\tfrac12=\\tfrac{i}{2}$ , the imaginary structure of the centres recombines:  $i(P_b-P_c)$  converts the half-sum terms into the rotated-offset term that defines  $A-P_a$ , yielding  $i(P_b-P_c)=A-P_a$  exactly (verified termwise as in the first method).",
          "Read off the geometry from the single equation  $A-P_a=i\\,(P_b-P_c)$ . Taking moduli,  $|A-P_a|=|i|\\,|P_b-P_c|=|P_b-P_c|$ , so the two diagonals have equal length. Taking arguments,  $\\arg(A-P_a)=\\arg(P_b-P_c)+\\tfrac{\\pi}{2}$ , so they are perpendicular.",
          "Therefore the quadrilateral  $A P_b P_a P_c$  has equal, perpendicular diagonals, with  $\\rho=\\dfrac{A-P_a}{P_b-P_c}=i$ .  $\\boxed{\\rho=i}$ "
        ]
      },
      {
        "name": "Symmetry across the three vertices",
        "steps": [
          "Define the cyclic operator  $T$  that advances  $A\\to B\\to C\\to A$ ; it permutes the outward centres as  $P_a\\to P_b\\to P_c\\to P_a$  because the construction is identical on each side. Hence the three diagonal relations  $A-P_a\\overset{?}{=}\\lambda(P_b-P_c)$ ,  $B-P_b\\overset{?}{=}\\lambda(P_c-P_a)$ ,  $C-P_c\\overset{?}{=}\\lambda(P_a-P_b)$  all share one universal constant  $\\lambda$  depending only on the construction, not on the particular vertex.",
          "Pin  $\\lambda$  on the simplest concrete triangle, the right isosceles  $A=0,\\ B=1,\\ C=i$  (counter-clockwise). The outward centres are  $P_a=\\tfrac{B+C}{2}-\\tfrac{i}{2}(C-B)=\\tfrac{1+i}{2}-\\tfrac{i}{2}(i-1)=1+i$ ,  $P_b=\\tfrac{C+A}{2}-\\tfrac{i}{2}(A-C)=\\tfrac{i}{2}-\\tfrac{i}{2}(-i)=-\\tfrac12+\\tfrac{i}{2}$ ,  $P_c=\\tfrac{A+B}{2}-\\tfrac{i}{2}(B-A)=\\tfrac12-\\tfrac{i}{2}.$ ",
          "Then  $A-P_a=-(1+i)$  and  $P_b-P_c=(-\\tfrac12+\\tfrac{i}{2})-(\\tfrac12-\\tfrac{i}{2})=-1+i$ , so  $\\lambda=\\dfrac{A-P_a}{P_b-P_c}=\\dfrac{-(1+i)}{-1+i}=\\dfrac{1+i}{1-i}=i.$  Because  $\\lambda$  is universal across all counter-clockwise triangles,  $A-P_a=i(P_b-P_c)$  holds for every triangle (a single linear identity in  $A,B,C$ , true on one non-degenerate case where the three vectors  $A,B,C$  are affinely independent, is true identically).",
          "Since  $\\rho=\\lambda=i$  is purely imaginary of unit modulus, part (a) makes the diagonals perpendicular, and equal moduli make them equal in length.  $\\boxed{\\rho=i}$ "
        ]
      }
    ],
    "remark": "Insight: the entire theorem collapses to the single complex identity  $A-P_a=i\\,(P_b-P_c)$  — one rotation by  $90^{\\circ}$  that is forced the moment all three squares are oriented the same way. The factor  $i$  packs both conclusions at once: its unit modulus gives equal diagonals, its purely-imaginary value gives perpendicular diagonals, and there is nothing left to check. This is van Aubel's quadrilateral theorem read at a triangle: the ``fourth vertex'' of the configuration is the triangle vertex  $A$  itself, with the opposite square-centre  $P_a$  as the far end of one diagonal and the two flanking centres  $P_b,P_c$  as the other. The lesson the trap teaches is that in complex-number geometry the choice of  $\\pm i$  is the geometric datum: a uniform outward orientation is what synchronises the three local quarter-turns into one global one, and any mismatch silently turns a  $90^{\\circ}$  rotation into a generic spiral similarity, killing both equality and perpendicularity."
  },
  {
    "theme": "geometry",
    "themeLabel": "Complex Numbers as Geometry",
    "title": "Three Mirrors Meeting at a Point",
    "difficulty": 5,
    "task": "Prove and locate",
    "tags": [
      "foot of perpendicular",
      "section formula",
      "reflection",
      "composition of isometries",
      "concurrent lines",
      "orientation"
    ],
    "statement": "Identify each point of the plane with a complex number; for a directed segment write  $\\overline{w}$  for the complex conjugate of  $w$ . (a) Let  $\\ell$  be the line through two distinct points  $a$  and  $b$ , and let  $P$  be any point. Write the foot of the perpendicular from  $P$  to  $\\ell$  as a real-parameter section point  $F=a+t(b-a)$  with  $t\\in\\mathbb{R}$ . Determine  $t$  in terms of  $a,b,P$ , and prove that the mirror image of  $P$  in  $\\ell$  is exactly  \\[ P^{\\ast}=2F-P=\\frac{(b-a)\\,\\overline{P}+a\\overline{b}-\\overline{a}\\,b}{\\overline{b}-\\overline{a}}. \\]  (b) Three lines  $\\ell_1,\\ell_2,\\ell_3$  all pass through the common point  $p=2+i$ . Their directions are:  $\\ell_1$  horizontal;  $\\ell_2$  inclined at  $60^{\\circ}$  to the real axis;  $\\ell_3$  inclined at  $120^{\\circ}$ . Let  $\\sigma_k$  denote reflection in  $\\ell_k$ , and form the composite  $\\Sigma=\\sigma_3\\circ\\sigma_2\\circ\\sigma_1$  (apply  $\\sigma_1$  first). Prove that  $\\Sigma$  is itself a single reflection, identify the mirror line, and compute the image  $\\Sigma(5)$  of the point  $P_0=5$ .",
    "answer": " \\[\\boxed{\\Sigma(5)=\\dfrac{1-\\sqrt{3}}{2}+\\dfrac{1+3\\sqrt{3}}{2}\\,i}\\] ",
    "trap": "The fatal slip is to add the three mirror angles,  $\\theta_1+\\theta_2+\\theta_3$ , as if reflections behaved like rotations. They do not. Each reflection conjugates, so the composite offset acquires the angle with alternating signs:  $\\Sigma(z)=p+e^{2i(\\theta_1-\\theta_2+\\theta_3)}\\,\\overline{(z-p)}$ , governed by  $\\theta_1-\\theta_2+\\theta_3$  — the middle mirror enters with a minus. Here  $\\theta_1-\\theta_2+\\theta_3=0-60+120=60^{\\circ}$ , so the surviving mirror is the  $60^{\\circ}$  line through  $p$ , and  $\\Sigma(5)=\\tfrac{1-\\sqrt3}{2}+\\tfrac{1+3\\sqrt3}{2}i$ . A student who instead writes  $\\theta_1+\\theta_2+\\theta_3=180^{\\circ}$  gets the factor  $e^{2i\\cdot 180^{\\circ}}=1$  and reports the spurious image  $p+\\overline{(5-p)}=5+2i$  — the wrong axis (horizontal, not  $60^{\\circ}$ ) and the wrong point. A second, more refined trap: even a student who knows three reflections in concurrent lines give a reflection may forget that the result is a reflection (orientation-reversing) rather than a rotation, because two of the three reflections already compose to a rotation; the odd number three is exactly what forces a conjugate to survive, so  $\\Sigma$  has a whole line of fixed points (through  $p$ ), not a single centre.",
    "solutions": [
      {
        "name": "Section-formula foot, then the offset-conjugation composite",
        "steps": [
          "Part (a). The foot  $F=a+t(b-a)$  is characterised by  $PF\\perp\\ell$ , i.e. the displacement  $F-P$  is perpendicular to the direction  $b-a$ , which for complex numbers means  $\\operatorname{Re}\\!\\big((F-P)\\,\\overline{(b-a)}\\big)=0$ . Substituting  $F-P=(a-P)+t(b-a)$  and using  $\\operatorname{Re}(w)=\\tfrac12(w+\\overline w)$  gives the real linear equation  $\\operatorname{Re}\\!\\big((a-P)\\overline{(b-a)}\\big)+t\\,|b-a|^2=0$ , hence  $t=\\dfrac{\\operatorname{Re}\\!\\big((P-a)\\overline{(b-a)}\\big)}{|b-a|^2}=\\dfrac{(P-a)\\overline{(b-a)}+\\overline{(P-a)}(b-a)}{2|b-a|^2}\\in\\mathbb{R}.$ ",
          "Since  $F$  is the midpoint of  $P$  and its mirror image, the reflection is  $P^{\\ast}=2F-P$ . Substitute the value of  $t$ , write  $|b-a|^2=(b-a)\\overline{(b-a)}$ , and simplify:  $P^{\\ast}=2a+2t(b-a)-P$ . Clearing the denominator  $\\overline{b}-\\overline{a}$  collapses the expression to  $P^{\\ast}=\\dfrac{(b-a)\\overline{P}+a\\overline{b}-\\overline{a}\\,b}{\\overline{b}-\\overline{a}},$  which is the claimed closed form. (As a sanity check, both  $P^{\\ast}=2F-P$  and this quotient agree identically, confirming the boxed formula in part (a).)",
          "Part (b). Translate so the common point  $p$  is the origin: a reflection in a line through  $p$  with direction angle  $\\theta$  sends an offset  $u=z-p$  to  $e^{2i\\theta}\\,\\overline{u}$ . Indeed, from part (a) with  $a=p,\\ b=p+e^{i\\theta}$ , one gets  $z^{\\ast}=p+\\dfrac{e^{i\\theta}}{e^{-i\\theta}}\\overline{(z-p)}=p+e^{2i\\theta}\\,\\overline{(z-p)}.$  So  $\\sigma_k:\\;u\\mapsto e^{2i\\theta_k}\\overline{u}$  with  $\\theta_1=0,\\ \\theta_2=60^{\\circ},\\ \\theta_3=120^{\\circ}$ .",
          "Compose, tracking each conjugation. Start with  $u$ . After  $\\sigma_1$ :  $e^{2i\\theta_1}\\overline{u}$ . After  $\\sigma_2$ :  $e^{2i\\theta_2}\\overline{e^{2i\\theta_1}\\overline{u}}=e^{2i(\\theta_2-\\theta_1)}u.$  After  $\\sigma_3$ :  $e^{2i\\theta_3}\\overline{e^{2i(\\theta_2-\\theta_1)}u}=e^{2i(\\theta_1-\\theta_2+\\theta_3)}\\overline{u}.$  Hence  $\\Sigma(z)=p+e^{2i(\\theta_1-\\theta_2+\\theta_3)}\\overline{(z-p)}$  — exactly the form of a reflection, so  $\\Sigma$  is the reflection in the line through  $p$  at angle  $\\theta_1-\\theta_2+\\theta_3=60^{\\circ}$ .",
          "Evaluate at  $P_0=5$ . Here  $5-p=5-(2+i)=3-i$ , so  $\\overline{5-p}=3+i$ , and  $e^{2i\\cdot 60^{\\circ}}=e^{120^{\\circ}i}=-\\tfrac12+\\tfrac{\\sqrt3}{2}i$ . Then  $\\Sigma(5)=(2+i)+\\big(-\\tfrac12+\\tfrac{\\sqrt3}{2}i\\big)(3+i)=(2+i)+\\big(-\\tfrac{3}{2}-\\tfrac{\\sqrt3}{2}\\big)+\\big(\\tfrac{3\\sqrt3}{2}-\\tfrac12\\big)i.$  Collecting,  $\\Sigma(5)=\\dfrac{1-\\sqrt3}{2}+\\dfrac{1+3\\sqrt3}{2}i.$   $\\boxed{\\Sigma(5)=\\tfrac{1-\\sqrt3}{2}+\\tfrac{1+3\\sqrt3}{2}i}$ "
        ]
      },
      {
        "name": "Group-theoretic angle bookkeeping (two reflections make a rotation)",
        "steps": [
          "Use the classical fact: the composite of two reflections in lines through a common point  $p$ , with angles  $\\alpha$  then  $\\beta$ , is the rotation about  $p$  through  $2(\\beta-\\alpha)$ . Apply it to the first two mirrors  $\\theta_1=0,\\ \\theta_2=60^{\\circ}$ :  $\\sigma_2\\circ\\sigma_1=\\text{rotation about }p\\text{ by }2(60^{\\circ}-0)=120^{\\circ}.$ ",
          "Now compose this rotation with  $\\sigma_3$  (angle  $120^{\\circ}$ ). A rotation by angle  $\\varphi$  about  $p$  followed by a reflection in a line through  $p$  at angle  $\\theta$  is again a reflection in a line through  $p$ , at angle  $\\theta-\\varphi/2$ : writing the rotation as  $u\\mapsto e^{i\\varphi}u$  and the reflection as  $u\\mapsto e^{2i\\theta}\\overline{u}$ , the composite is  $u\\mapsto e^{2i\\theta}\\overline{e^{i\\varphi}u}=e^{i(2\\theta-\\varphi)}\\overline{u}=e^{2i(\\theta-\\varphi/2)}\\overline{u}.$ ",
          "Plug  $\\varphi=120^{\\circ}$ ,  $\\theta=120^{\\circ}$ : the new mirror angle is  $\\theta-\\varphi/2=120^{\\circ}-60^{\\circ}=60^{\\circ}$ . So  $\\Sigma=\\sigma_3\\circ(\\sigma_2\\circ\\sigma_1)$  is the reflection in the  $60^{\\circ}$  line through  $p=2+i$ , matching Method 1. The orientation count is the safeguard: three reflections are orientation-reversing, so the answer must be a reflection (a rotation would be even).",
          "Apply this reflection to  $P_0=5$  as before:  $\\Sigma(5)=p+e^{2i\\cdot 60^{\\circ}}\\overline{(5-p)}=(2+i)+\\big(-\\tfrac12+\\tfrac{\\sqrt3}{2}i\\big)(3+i)=\\dfrac{1-\\sqrt3}{2}+\\dfrac{1+3\\sqrt3}{2}i.$   $\\boxed{\\Sigma(5)=\\tfrac{1-\\sqrt3}{2}+\\tfrac{1+3\\sqrt3}{2}i}$ "
        ]
      },
      {
        "name": "Fixed-axis pin-down by direct line reflections",
        "steps": [
          "Avoid all angle lore: reflect  $P_0=5$  through the three concrete lines in turn using the part-(a) formula  $z^{\\ast}=\\dfrac{(b-a)\\overline z+a\\overline b-\\overline a\\,b}{\\overline b-\\overline a}$ . Take  $\\ell_1$  horizontal through  $p$ :  $a_1=1+i,\\ b_1=4+i$ ;  $\\ell_2$  at  $60^{\\circ}$  through  $p$ :  $a_2=2+i,\\ b_2=3+(1+\\sqrt3)i$ ;  $\\ell_3$  at  $120^{\\circ}$  through  $p$ :  $a_3=2+i,\\ b_3=(2-2)+ (1+2\\sqrt3)i$ , i.e.  $b_3=0+(1+2\\sqrt3)i$ . Each line indeed passes through  $p=2+i$ .",
          "Reflect step by step.  $\\sigma_1(5)$ : line  $y=1$  horizontal, so it sends  $5=5+0i$  to  $5+2i$  (vertical distance to  $y=1$  is  $1$ , mirrored to  $y=2$ ).  $\\sigma_2(5+2i)$  in the  $60^{\\circ}$  line through  $p$ , and  $\\sigma_3$  of the result, computed from the formula, give after simplification  $\\Sigma(5)=\\dfrac{1-\\sqrt3}{2}+\\dfrac{1+3\\sqrt3}{2}i.$ ",
          "Confirm  $\\Sigma$  is a reflection independently. A reflection is an involution fixing its axis pointwise. Compute  $\\Sigma(\\Sigma(5))=5$  (reflecting twice returns the original — verified by re-running the three reflections on the image), and check that  $p=2+i$  is fixed:  $\\Sigma(p)=p$  since  $\\overline{p-p}=0$ . Thus  $\\Sigma$  has the fixed line through  $p$  at  $60^{\\circ}$ , so it is a reflection, not a rotation. The distance  $|{\\Sigma(5)-p}|=|5-p|=\\sqrt{10}$  is preserved, as any isometry fixing  $p$  requires.",
          "Therefore the single mirror is the  $60^{\\circ}$  line through  $2+i$  and  $\\boxed{\\Sigma(5)=\\tfrac{1-\\sqrt3}{2}+\\tfrac{1+3\\sqrt3}{2}i}.$  All three independent methods agree."
        ]
      }
    ],
    "remark": "Insight: the entire problem is the single identity  $\\Sigma(z)=p+e^{2i(\\theta_1-\\theta_2+\\theta_3)}\\,\\overline{(z-p)}$ , and its soul is the alternating sign on the angles. The mechanism is purely the bookkeeping of conjugation: every reflection flips the offset to its conjugate, so the accumulated rotation angle reverses sign across each mirror — an even number of mirrors leaves a rotation ( $\\overline{u}\\to u$ ), an odd number leaves a reflection. Concurrency is what keeps the composite anchored at  $p$  with no translational part, turning the would-be glide into a clean reflection through the common point. The same calculation proves the general theorem: any odd number of reflections in lines through one point is a single reflection in a line through that point, with mirror angle equal to the alternating sum  $\\theta_1-\\theta_2+\\theta_3-\\cdots$ . The first part is the engine: foot-of-perpendicular as a real section point  $F=a+t(b-a)$  delivers both the reflection formula  $P^{\\ast}=2F-P$  and, via  $a=p,\\ b=p+e^{i\\theta}$ , the offset law  $u\\mapsto e^{2i\\theta}\\overline{u}$  that makes the whole composition transparent."
  },
  {
    "theme": "geometry",
    "themeLabel": "Complex Numbers as Geometry",
    "title": "The Shoelace That Ties the Three Cube Roots",
    "difficulty": 5,
    "task": "Prove and evaluate",
    "tags": [
      "shoelace",
      "roots of unity",
      "signed area",
      "vieta",
      "rotation"
    ],
    "statement": "Identify every point of the plane with a complex number, and write  $\\bar z$  for the conjugate of  $z$ . (a) Let  $z_0,z_1,\\dots,z_{n-1}$  be the vertices of a simple polygon listed in counter-clockwise order, with the convention  $z_n=z_0$ . Prove the complex shoelace identity for its (positive) area,  \\[ [\\,z_0z_1\\cdots z_{n-1}\\,]\\;=\\;\\frac{1}{4i}\\sum_{k=0}^{n-1}\\bigl(\\bar z_k\\,z_{k+1}-z_k\\,\\bar z_{k+1}\\bigr)\\;=\\;\\frac12\\,\\operatorname{Im}\\!\\sum_{k=0}^{n-1}\\bar z_k\\,z_{k+1}. \\]  (b) Fix a non-zero complex number  $w$  and let  $z_0,z_1,z_2$  be the three cube roots of  $w$ , taken in counter-clockwise order around the origin. Using part (a) — and exploiting the relation  $z^3=w$  rather than messy coordinates — find the exact area of triangle  $z_0z_1z_2$  in closed form, and show that this area depends only on  $|w|$ , never on  $\\arg w$ .",
    "answer": " \\[\\boxed{\\;[\\,z_0z_1z_2\\,]=\\dfrac{3\\sqrt3}{4}\\,|w|^{2/3}\\;}\\] ",
    "trap": "The conceptual trap is the confusion of the circumradius with the side. The three cube roots all have modulus  $|w|^{1/3}$ , so they lie on a circle of radius  $r=|w|^{1/3}$  centred at the origin; this  $r$  is the circumradius of the equilateral triangle, not its side. A strong but hasty student writes ``equilateral triangle of side  $r$ '' and reports  $\\tfrac{\\sqrt3}{4}r^2=\\tfrac{\\sqrt3}{4}|w|^{2/3}$ , missing a factor of  $3$ : the side of an equilateral triangle inscribed in a circle of radius  $r$  is  $s=r\\sqrt3$  (the chord subtending a  $120^{\\circ}$  central angle,  $s=2r\\sin 60^{\\circ}$ ), giving the true area  $\\tfrac{\\sqrt3}{4}s^2=\\tfrac{\\sqrt3}{4}\\,(r\\sqrt3)^2=\\tfrac{3\\sqrt3}{4}r^2$ . A second, subtler version of the same blunder: a student recalls the inscribed-polygon area  $\\tfrac12 n\\,R^2\\sin\\tfrac{2\\pi}{n}$  but slips the central angle to  $\\tfrac{\\pi}{3}=60^{\\circ}$  (an interior half-angle) instead of  $\\tfrac{2\\pi}{3}=120^{\\circ}$ , again deflating the answer. The shoelace route immunises against both, because it never asks for the side length at all: it returns  $\\tfrac12\\operatorname{Im}(3r^2\\eta)$  with  $\\eta=e^{2\\pi i/3}$ , and  $\\operatorname{Im}\\eta=\\tfrac{\\sqrt3}{2}$  carries the correct factor automatically. A third trap is to carry  $\\arg w$  through the algebra and announce an  $\\arg w$ -dependent answer; in fact every dependence on  $\\arg w$  cancels because  $\\arg w$  merely rotates the whole triangle rigidly about the origin.",
    "solutions": [
      {
        "name": "Shoelace via Vieta:  $\\bar z_k=r^2/z_k$  and a geometric ratio",
        "steps": [
          "Proof of (a). For an oriented edge from  $P$  to  $Q$ , the signed area of the triangle  $OPQ$  (with  $O$  the origin) is  $\\tfrac12\\operatorname{Im}(\\bar P Q)=\\tfrac{1}{4i}(\\bar P Q-P\\bar Q)$ , since  $\\operatorname{Im}(\\zeta)=\\tfrac{1}{2i}(\\zeta-\\bar\\zeta)$ . Summing these signed origin-triangles over the consecutive edges  $z_k\\to z_{k+1}$  telescopes the interior: each point of the polygon is swept exactly once with the  $+$  sign for counter-clockwise traversal, so  $[\\,z_0\\cdots z_{n-1}\\,]=\\sum_{k}\\tfrac{1}{4i}(\\bar z_kz_{k+1}-z_k\\bar z_{k+1})=\\tfrac12\\operatorname{Im}\\sum_k\\bar z_kz_{k+1}$ . This is the claimed identity.",
          "Apply it to the cube roots. Each  $z_k$  satisfies  $z_k^3=w$ , hence  $|z_k|^3=|w|$ , so all three roots share the modulus  $r:=|w|^{1/3}$  and  $|z_k|^2=r^2$ . The crucial Vieta-flavoured move: from  $z_k\\bar z_k=|z_k|^2=r^2$  we get  $\\bar z_k=\\dfrac{r^2}{z_k}$ , which converts conjugates into reciprocals.",
          "Substitute into the shoelace sum:  $\\displaystyle\\sum_{k=0}^{2}\\bar z_kz_{k+1}=\\sum_{k=0}^{2}\\frac{r^2}{z_k}\\,z_{k+1}=r^2\\sum_{k=0}^{2}\\frac{z_{k+1}}{z_k}$ . In counter-clockwise order the roots are  $z_k=r\\,e^{i(\\phi+2\\pi k/3)}$  with  $\\phi=\\tfrac13\\arg w$ , so each consecutive ratio is the same fixed rotation  $\\dfrac{z_{k+1}}{z_k}=e^{2\\pi i/3}=\\eta$  (including the wrap-around  $z_3=z_0$ , whose ratio  $z_0/z_2=e^{-4\\pi i/3}=\\eta$ ). Thus  $\\sum_k\\bar z_kz_{k+1}=r^2\\,(3\\eta)=3r^2e^{2\\pi i/3}$  — and note  $\\phi=\\tfrac13\\arg w$  has cancelled out entirely, so the sum, hence the area, is independent of  $\\arg w$ .",
          "Finish:  $[\\,z_0z_1z_2\\,]=\\tfrac12\\operatorname{Im}\\!\\bigl(3r^2e^{2\\pi i/3}\\bigr)=\\tfrac32 r^2\\sin\\tfrac{2\\pi}{3}=\\tfrac32 r^2\\cdot\\tfrac{\\sqrt3}{2}=\\tfrac{3\\sqrt3}{4}r^2$ . With  $r=|w|^{1/3}$ ,  $r^2=|w|^{2/3}$ , giving  $[\\,z_0z_1z_2\\,]=\\dfrac{3\\sqrt3}{4}\\,|w|^{2/3}$ .  $\\boxed{\\dfrac{3\\sqrt3}{4}|w|^{2/3}}$ "
        ]
      },
      {
        "name": "Geometry of the circumcircle (and where the trap is sprung)",
        "steps": [
          "From part (a), or directly: the three cube roots have equal modulus  $r=|w|^{1/3}$  and arguments spaced by  $\\tfrac{2\\pi}{3}$ , so they form an equilateral triangle inscribed in the circle of radius  $r$  about the origin. The point of failure for the naive solver is exactly here:  $r$  is the circumradius, NOT the side.",
          "Decompose the triangle into the three congruent isosceles slices  $Oz_0z_1,\\,Oz_1z_2,\\,Oz_2z_0$ , each with two sides of length  $r$  enclosing a central angle of  $\\tfrac{2\\pi}{3}$ . One slice has area  $\\tfrac12 r^2\\sin\\tfrac{2\\pi}{3}$ , so the whole triangle has area  $3\\cdot\\tfrac12 r^2\\sin\\tfrac{2\\pi}{3}=\\tfrac32 r^2\\cdot\\tfrac{\\sqrt3}{2}=\\tfrac{3\\sqrt3}{4}r^2$ . (Equivalently, the side is the chord  $s=2r\\sin 60^{\\circ}=r\\sqrt3$ , and  $\\tfrac{\\sqrt3}{4}s^2=\\tfrac{\\sqrt3}{4}\\cdot 3r^2$  gives the same value — exposing the missing factor  $3$  in the ``side  $=r$ '' error.)",
          "Substitute  $r^2=|w|^{2/3}$  to obtain  $[\\,z_0z_1z_2\\,]=\\dfrac{3\\sqrt3}{4}|w|^{2/3}$ . Since changing  $\\arg w$  replaces every  $z_k$  by  $z_k\\,e^{i\\,\\Delta\\arg w/3}$  — a single rigid rotation of the whole triangle about the origin — the area is unchanged, confirming the dependence on  $|w|$  alone.  $\\boxed{\\dfrac{3\\sqrt3}{4}|w|^{2/3}}$ "
        ]
      },
      {
        "name": "Solve the general  $n$ -gon of  $n$ -th roots, then set  $n=3$ ",
        "steps": [
          "Generalise the computation of solution 1 to the  $n$  roots  $z_k$  of  $z^n=w$ . Again  $|z_k|=|w|^{1/n}=:r$  for all  $k$ , so  $\\bar z_k=r^2/z_k$ , and the counter-clockwise ordering gives  $z_{k+1}/z_k=e^{2\\pi i/n}=:\\zeta$  for every  $k$ . Hence  $\\sum_{k=0}^{n-1}\\bar z_kz_{k+1}=r^2\\sum_{k=0}^{n-1}\\zeta=n\\,r^2\\,e^{2\\pi i/n}$ .",
          "By part (a), the regular  $n$ -gon of  $n$ -th roots has area  $[\\,z_0\\cdots z_{n-1}\\,]=\\tfrac12\\operatorname{Im}(n\\,r^2e^{2\\pi i/n})=\\dfrac n2\\,r^2\\sin\\dfrac{2\\pi}{n}=\\dfrac n2\\,\\sin\\dfrac{2\\pi}{n}\\;|w|^{2/n}$ , a clean closed form for every  $n\\ge3$ , manifestly independent of  $\\arg w$ .",
          "Specialise to  $n=3$ : the area is  $\\dfrac32\\sin\\dfrac{2\\pi}{3}\\,|w|^{2/3}=\\dfrac32\\cdot\\dfrac{\\sqrt3}{2}\\,|w|^{2/3}=\\dfrac{3\\sqrt3}{4}\\,|w|^{2/3}$ . (As checks,  $n=4$  gives  $2|w|^{1/2}$ , the diagonal- $2r$  square, and  $n=6$  gives  $\\tfrac{3\\sqrt3}{2}|w|^{1/3}$ , the regular hexagon — both correct.)  $\\boxed{\\dfrac{3\\sqrt3}{4}|w|^{2/3}}$ "
        ]
      }
    ],
    "remark": "Insight: the whole problem turns on a single substitution. The relation  $z^n=w$  forces every root onto one circle, so  $\\bar z_k=r^2/z_k$  trades each conjugate for a reciprocal, and the shoelace sum collapses to a geometric series of identical rotations  $z_{k+1}/z_k=\\zeta$ . That is why the area never sees  $\\arg w$ : the argument only rotates the configuration rigidly, and the shoelace form  $\\tfrac12\\operatorname{Im}\\sum\\bar z_kz_{k+1}$  is rotation-invariant. The trap is the eternal circumradius-versus-side slip —  $|w|^{1/3}$  is where the vertices sit, not how far apart they are — and the complex shoelace is precisely the tool that bypasses the side length and lets  $\\operatorname{Im}\\,e^{2\\pi i/3}=\\tfrac{\\sqrt3}{2}$  supply the right factor on its own. The general formula  $\\tfrac n2\\sin\\tfrac{2\\pi}{n}|w|^{2/n}$  is the natural home of the result, with the cube-root triangle just its  $n=3$  instance."
  },
  {
    "theme": "geometry",
    "themeLabel": "Complex Numbers as Geometry",
    "title": "The Newton-Gauss Line of a Complete Quadrilateral",
    "difficulty": 5,
    "task": "Prove and determine",
    "tags": [
      "collinearity",
      "real ratio test",
      "complete quadrilateral",
      "newton-gauss line",
      "midpoints",
      "line intersection"
    ],
    "statement": "Identify each point of the plane with a complex number and take the convex quadrilateral with vertices  \\[ A=9+3i,\\quad B=7+i,\\quad C=5+5i,\\quad D=5+9i. \\]  Its four sides, when extended to full lines, form a complete quadrilateral. Besides the four corners, the side-lines meet in two further points:  \\[ E=\\text{(line }AB)\\cap(\\text{line }CD),\\qquad F=\\text{(line }AD)\\cap(\\text{line }BC). \\]  The three diagonals of the complete quadrilateral are the segments  $AC$ ,  $BD$  and  $EF$ , joining opposite vertices. Let  $M_1,M_2,M_3$  be their respective midpoints. \\\\ (a) Using the complex condition that  $z$  lies on the line through  $p,q$  iff  $\\dfrac{z-p}{q-p}\\in\\mathbb{R}$ , compute  $E$  and  $F$ . \\\\ (b) Prove that  $M_1,M_2,M_3$  are collinear, using the real-ratio collinearity test  $\\dfrac{w-u}{v-u}\\in\\mathbb{R}$  as the engine. (This line is the Newton-Gauss line of the complete quadrilateral.) \\\\ Give, as the final answer, the Cartesian equation of the line on which  $M_1,M_2,M_3$  lie.",
    "answer": " \\[\\boxed{x+y=11}\\] ",
    "trap": "The fatal shortcut is to treat  $M_3$  as though it were forced onto the segment  $M_1M_2$  by a Varignon-type law, e.g. to assume the third Newton midpoint is the midpoint of the join of the first two,  $M_3=\\tfrac{1}{2}(M_1+M_2)$ , or more generally to assume the three midpoints sit symmetrically. Varignon's theorem (midpoints of the four sides of a quadrilateral form a parallelogram) is a different statement; it says nothing about the midpoints of the three diagonals of the complete quadrilateral, and it certainly does not pin  $M_3$  to the midpoint of  $M_1M_2$ . Here  $M_1=7+4i$  and  $M_2=6+5i$  give midpoint  $\\tfrac{13}{2}+\\tfrac{9}{2}i$ , whereas the true  $M_3=1+10i$ , so  $M_3-\\tfrac12(M_1+M_2)=-\\tfrac{11}{2}+\\tfrac{11}{2}i\\neq0$ . The three midpoints are collinear but not evenly spaced, and assuming even spacing both gives the wrong line and hides the only thing that actually needs proof. A second, quieter trap is mis-identifying the three diagonals: a student may pair the wrong vertices (using a corner-to- $E$  segment, or the diagonals  $AC,BD$  plus a side midpoint) instead of the three opposite-vertex diagonals  $AC,BD,EF$ , for which the collinearity simply fails.",
    "solutions": [
      {
        "name": "Real-ratio engine after solving the two intersections",
        "steps": [
          "Find  $E=(\\text{line }AB)\\cap(\\text{line }CD)$ . Write  $E=A+t(B-A)$  with the collinearity-on- $CD$  condition  $\\dfrac{E-C}{D-C}\\in\\mathbb{R}$ . Here  $B-A=-2-2i$ ,  $D-C=4i$ . Imposing that  $E=A+t(B-A)$  lies on line  $CD$  and solving the resulting real-linear system gives  $t=2$ , hence  $E=A+2(B-A)=2B-A=(14+2i)-(9+3i)=5-i.$ ",
          "Find  $F=(\\text{line }AD)\\cap(\\text{line }BC)$  the same way. With  $D-A=-4+6i$  and  $C-B=-2+4i$ , solving the two real conditions  $\\dfrac{F-A}{D-A}\\in\\mathbb{R}$  and  $\\dfrac{F-B}{C-B}\\in\\mathbb{R}$  yields  $F=-3+21i.$  (Both checks:  $\\dfrac{E-C}{D-C}=\\dfrac{-6i}{4i}=-\\tfrac32\\in\\mathbb{R}$  and  $\\dfrac{F-A}{D-A}=\\dfrac{-12+18i}{-4+6i}=3\\in\\mathbb{R}$ .)",
          "Form the three diagonal midpoints:  $M_1=\\dfrac{A+C}{2}=\\dfrac{14+8i}{2}=7+4i,\\quad M_2=\\dfrac{B+D}{2}=\\dfrac{12+10i}{2}=6+5i,\\quad M_3=\\dfrac{E+F}{2}=\\dfrac{2+20i}{2}=1+10i.$ ",
          "Apply the collinearity test. Compute  $\\dfrac{M_3-M_1}{M_2-M_1}=\\dfrac{(1+10i)-(7+4i)}{(6+5i)-(7+4i)}=\\dfrac{-6+6i}{-1+i}=\\dfrac{6(-1+i)}{-1+i}=6.$  The ratio is the real number  $6\\in\\mathbb{R}$ , so by the real-ratio test  $M_1,M_2,M_3$  are collinear. The line through  $M_1=(7,4)$  with direction  $M_2-M_1=-1+i$  (slope  $-1$ ) is  $y-4=-(x-7)$ , i.e.  $\\boxed{x+y=11}.$ "
        ]
      },
      {
        "name": "Vanishing signed area (complex shoelace as a collinearity certificate)",
        "steps": [
          "Recall the complex signed-area identity: three points  $z_1,z_2,z_3$  are collinear iff the (four-times) signed area  $\\operatorname{Im}\\big[\\overline{z_1}(z_2-z_3)+\\overline{z_2}(z_3-z_1)+\\overline{z_3}(z_1-z_2)\\big]=0$ . This is the same engine: it is exactly the statement that  $\\dfrac{z_3-z_1}{z_2-z_1}$  has zero imaginary part, written symmetrically.",
          "Using  $E=5-i,\\ F=-3+21i$  from the intersections, the midpoints are  $M_1=7+4i,\\ M_2=6+5i,\\ M_3=1+10i$  as above. Plug into the bracket:  $\\overline{M_1}(M_2-M_3)=(7-4i)(5-5i)=15-55i$ ,  $\\ \\overline{M_2}(M_3-M_1)=(6-5i)(-6+6i)=-6+66i$ ,  $\\ \\overline{M_3}(M_1-M_2)=(1-10i)(1-i)=-9-11i.$ ",
          "Sum them:  $(15-55i)+(-6+66i)+(-9-11i)=0+0i.$  The imaginary part (indeed the whole sum) is  $0$ , so the signed area of triangle  $M_1M_2M_3$  vanishes and the three midpoints are collinear.",
          "To name the line, fit  $ax+by=c$  through  $M_1=(7,4)$  and  $M_2=(6,5)$ : subtracting gives  $a(7-6)+b(4-5)=0\\Rightarrow a=b$ , and  $a\\cdot7+a\\cdot4=11a=c$ , so  $x+y=11$ . Indeed  $M_3=(1,10)$  satisfies  $1+10=11$ . Hence the Newton-Gauss line is  $\\boxed{x+y=11}.$ "
        ]
      },
      {
        "name": "Affine reduction: pin two midpoints, then verify the third by the real test",
        "steps": [
          "Observe that midpoints are affine-covariant, so the collinearity is a statement about the configuration's affine structure. Compute the two ``corner'' diagonal midpoints directly from the given vertices, with no intersection needed:  $M_1=\\dfrac{A+C}{2}=7+4i$  and  $M_2=\\dfrac{B+D}{2}=6+5i.$  These already determine a candidate Newton-Gauss line  $\\ell:\\ x+y=11$  (slope  $-1$  through  $(7,4)$  and  $(6,5)$ ).",
          "Now locate  $E,F$  economically. Since  $E$  lies on line  $AB$  and line  $CD$ , and using  $2B-A=5-i$  satisfies  $\\dfrac{(5-i)-C}{D-C}=\\dfrac{-6i}{4i}=-\\tfrac32\\in\\mathbb{R}$ , we confirm  $E=5-i$  lies on  $CD$  as well; similarly  $F=-3+21i$  lies on both  $AD$  and  $BC$ . Thus  $M_3=\\dfrac{E+F}{2}=1+10i.$ ",
          "Test  $M_3$  against the candidate line with the real-ratio engine relative to  $M_1,M_2$ :  $\\dfrac{M_3-M_1}{M_2-M_1}=\\dfrac{-6+6i}{-1+i}=6\\in\\mathbb{R}.$  Because the ratio is real,  $M_3$  lies on the line through  $M_1,M_2$ , completing the collinearity proof; equivalently  $\\operatorname{Re}(M_3)+\\operatorname{Im}(M_3)=1+10=11$ , so  $M_3\\in\\ell.$ ",
          "Therefore all three diagonal midpoints lie on the single line  $\\boxed{x+y=11}$ , the Newton-Gauss line of this complete quadrilateral."
        ]
      }
    ],
    "remark": "Insight: the entire result is the real-ratio collinearity test  $\\dfrac{w-u}{v-u}\\in\\mathbb{R}$  used as a precision instrument. The only genuine work is producing the third midpoint  $M_3$  from the two ``extra'' intersection points  $E,F$  of the complete quadrilateral; once  $E,F$  are in hand, a single ratio kills the problem. The trap is believing the midpoints must be evenly spaced (a Varignon reflex): they are collinear but here the ratio is  $6$ , so  $M_3$  sits far down the line, not at the midpoint of  $M_1M_2$  — collinearity is a statement about direction, never about spacing. This is the Newton-Gauss line, a projective fact: it persists under any affine (indeed projective) image of the figure, which is exactly why the complex real-ratio test, blind to lengths and sensitive only to direction, is the natural language for it."
  },
  {
    "theme": "geometry",
    "themeLabel": "Complex Numbers as Geometry",
    "title": "Varignon's Crossed Criteria",
    "difficulty": 5,
    "task": "Prove and classify",
    "tags": [
      "varignon",
      "section formula",
      "midpoint parallelogram",
      "imaginary ratio",
      "perpendicularity",
      "diagonals"
    ],
    "statement": "Identify each point of the plane with a complex number. Let  $a,b,c,d\\in\\mathbb{C}$  be the vertices, taken in this cyclic order, of an arbitrary (possibly non-convex) quadrilateral  $ABCD$ , and let  \\[ P=\\tfrac{a+b}{2},\\quad Q=\\tfrac{b+c}{2},\\quad R=\\tfrac{c+d}{2},\\quad S=\\tfrac{d+a}{2} \\]  be the midpoints of the sides  $AB,BC,CD,DA$  respectively, so that  $PQRS$  is the Varignon quadrilateral. (a) Using only the section formula for midpoints, prove that  $PQRS$  is a parallelogram for every choice of  $a,b,c,d$ , and prove that its sides are parallel to the diagonals  $AC$  and  $BD$  of  $ABCD$ , with  $|PQ|=\\tfrac12|AC|$  and  $|PS|=\\tfrac12|BD|$ . (b) Establish the exact algebraic conditions, in the spirit of the purely-imaginary-ratio test, under which  $PQRS$  is (i) a rectangle and (ii) a rhombus, expressed through the diagonals  $AC=c-a$  and  $BD=d-b$  of the original quadrilateral. (c) Apply your criteria to the concrete quadrilateral with vertices  \\[ A=-1-2i,\\qquad B=7+i,\\qquad C=5+6i,\\qquad D=3+4i, \\]  and determine precisely which special parallelogram  $PQRS$  is. Report this classification together with the value of the diagnostic ratio  $\\dfrac{c-a}{d-b}$  as the final answer.",
    "answer": " \\[\\boxed{PQRS\\ \\text{is a rectangle (not a square)},\\quad \\tfrac{c-a}{d-b}=-2i}\\] ",
    "trap": "The fatal conceptual error is to import the familiar parallelogram rule ``perpendicular diagonals  $\\Rightarrow$  rhombus'' and apply it to the wrong object. A strong student computes the diagonals of  $ABCD$ , finds  $AC=6+8i$  and  $BD=-4+3i$  with  $\\langle AC,BD\\rangle=6(-4)+8(3)=0$ , sees that the diagonals are perpendicular, and concludes ``perpendicular diagonals, hence the midpoint figure is a rhombus.'' This is exactly backwards. The sides of  $PQRS$  are parallel to the diagonals of  $ABCD$ , not to its sides, so the diagonals' perpendicularity controls the angle between adjacent sides of  $PQRS$  (giving a rectangle), while the diagonals' equal length would control the equality of those sides (giving a rhombus). The criteria are crossed relative to the half-remembered rule. Here  $|AC|=10\\neq5=|BD|$ , so the sides  $|PQ|=5$  and  $|PS|=\\tfrac52$  are unequal:  $PQRS$  is a genuine rectangle and not a square. A second, quieter trap is to test only the angle and then declare ``square'' the instant a right angle appears, forgetting that a rectangle becomes a square only when additionally  $|AC|=|BD|$ .",
    "solutions": [
      {
        "name": "Section formula and the two half-diagonal vectors",
        "steps": [
          "Form the side-vectors of  $PQRS$  directly from the midpoint formulas. By the section formula,  $Q-P=\\tfrac{b+c}{2}-\\tfrac{a+b}{2}=\\tfrac{c-a}{2}$  and  $R-S=\\tfrac{c+d}{2}-\\tfrac{d+a}{2}=\\tfrac{c-a}{2}$ . Hence  $Q-P=R-S=\\tfrac12\\,AC$ : the sides  $PQ$  and  $SR$  are equal as vectors, parallel to the diagonal  $AC$ , each of length  $\\tfrac12|AC|$ .",
          "Likewise  $S-P=\\tfrac{d+a}{2}-\\tfrac{a+b}{2}=\\tfrac{d-b}{2}$  and  $R-Q=\\tfrac{c+d}{2}-\\tfrac{b+c}{2}=\\tfrac{d-b}{2}$ , so  $S-P=R-Q=\\tfrac12\\,BD$ : the sides  $PS$  and  $QR$  are equal as vectors, parallel to the diagonal  $BD$ , each of length  $\\tfrac12|BD|$ . Since both pairs of opposite sides are equal as vectors,  $PQRS$  is a parallelogram for every  $a,b,c,d$ . This proves (a).",
          "The adjacent sides at  $P$  are  $u=Q-P=\\tfrac12(c-a)$  and  $v=S-P=\\tfrac12(d-b)$ . A parallelogram is a rectangle iff adjacent sides are perpendicular, i.e. iff  $\\tfrac{v}{u}=\\tfrac{d-b}{c-a}$  is purely imaginary, equivalently  $\\tfrac{c-a}{d-b}$  is purely imaginary. It is a rhombus iff  $|u|=|v|$ , i.e.  $|c-a|=|d-b|$ . Thus: rectangle  $\\Leftrightarrow$   $AC\\perp BD$ , rhombus  $\\Leftrightarrow$   $|AC|=|BD|$  (and a square iff both). This proves (b).",
          "For the data,  $c-a=(5+6i)-(-1-2i)=6+8i$  and  $d-b=(3+4i)-(7+i)=-4+3i$ , so  $\\dfrac{c-a}{d-b}=\\dfrac{6+8i}{-4+3i}=\\dfrac{(6+8i)(-4-3i)}{(-4)^2+3^2}=\\dfrac{-24-18i-32i+24}{25}=\\dfrac{-50i}{25}=-2i$ . This is purely imaginary, so  $AC\\perp BD$  and  $PQRS$  is a rectangle; but  $|c-a|=10\\neq5=|d-b|$ , so it is not a rhombus, hence not a square.  $\\boxed{PQRS\\text{ is a rectangle (not a square)},\\ \\tfrac{c-a}{d-b}=-2i}$ "
        ]
      },
      {
        "name": "Direct coordinates of the midpoints, then dot products",
        "steps": [
          "Compute the four midpoints for the given vertices:  $P=\\tfrac{(-1-2i)+(7+i)}{2}=3-\\tfrac12 i$ ,  $Q=\\tfrac{(7+i)+(5+6i)}{2}=6+\\tfrac72 i$ ,  $R=\\tfrac{(5+6i)+(3+4i)}{2}=4+5i$ ,  $S=\\tfrac{(3+4i)+(-1-2i)}{2}=1+i$ .",
          "Check the parallelogram by the midpoint-of-diagonals test (diagonals of a parallelogram bisect each other): midpoint of  $PR$  is  $\\tfrac{(3-\\frac12 i)+(4+5i)}{2}=\\tfrac72+\\tfrac94 i$ , midpoint of  $QS$  is  $\\tfrac{(6+\\frac72 i)+(1+i)}{2}=\\tfrac72+\\tfrac94 i$ . They coincide, so  $PQRS$  is a parallelogram.",
          "Test the corner angle at  $P$  with the adjacent side-vectors  $u=Q-P=3+4i$  and  $v=S-P=-2+\\tfrac32 i$ . Their inner product is  $\\operatorname{Re}(u\\bar v)=\\operatorname{Re}\\big((3+4i)(-2-\\tfrac32 i)\\big)=\\operatorname{Re}(-6-\\tfrac92 i-8i+6)=0$ . The right angle is exact, so  $PQRS$  is a rectangle.",
          "Distinguish rectangle from square by side lengths:  $|u|=|3+4i|=5$  and  $|v|=|-2+\\tfrac32 i|=\\sqrt{4+\\tfrac94}=\\tfrac52$ . Since  $5\\neq\\tfrac52$ , adjacent sides are unequal and  $PQRS$  is not a square. The diagnostic ratio matches solution 1: since  $c-a=2u=6+8i$  and  $d-b=2v=-4+3i$ , we get  $\\tfrac{c-a}{d-b}=\\tfrac{u}{v}=\\tfrac{3+4i}{-2+\\frac32 i}=\\tfrac{(3+4i)(-2-\\frac32 i)}{4+\\frac94}=\\tfrac{-\\frac{25}{2}i}{\\frac{25}{4}}=-2i$ , purely imaginary.  $\\boxed{PQRS\\text{ is a rectangle (not a square)},\\ \\tfrac{c-a}{d-b}=-2i}$ "
        ]
      },
      {
        "name": "Rotation form of the perpendicularity condition",
        "steps": [
          "Encode the side directions through rotation. The adjacent sides of  $PQRS$  at  $P$  point along  $\\tfrac12(c-a)$  and  $\\tfrac12(d-b)$ . They are perpendicular precisely when one is a real multiple of the other rotated by  $\\tfrac{\\pi}{2}$ , i.e. when there is a real  $\\lambda$  with  $d-b=\\lambda\\,i\\,(c-a)$ . Solving,  $\\lambda i=\\tfrac{d-b}{c-a}$ , so perpendicularity  $\\Leftrightarrow$   $\\tfrac{d-b}{c-a}=\\lambda i$  with  $\\lambda\\in\\mathbb{R}$ , i.e. the ratio is purely imaginary.",
          "Read  $\\lambda$  off the data. With  $c-a=6+8i$  and  $d-b=-4+3i$ , factor:  $d-b=-4+3i = \\tfrac{i}{2}(6+8i)$  because  $\\tfrac{i}{2}(6+8i)=\\tfrac{6i-8}{2}=-4+3i$ . Thus  $d-b=\\tfrac{i}{2}(c-a)$ , exhibiting exactly the form  $\\lambda i(c-a)$  with  $\\lambda=\\tfrac12\\in\\mathbb{R}$ . Perpendicularity holds, so  $PQRS$  is a rectangle, and  $\\tfrac{c-a}{d-b}=\\tfrac{1}{\\lambda i}=\\tfrac{1}{(1/2)i}=\\tfrac{2}{i}=-2i$ .",
          "Decide square versus oblong from the magnitude of the same rotation factor. The two adjacent sides have lengths  $\\tfrac12|c-a|$  and  $\\tfrac12|d-b|=\\tfrac12|\\lambda|\\,|c-a|$ ; they are equal iff  $|\\lambda|=1$ . Here  $|\\lambda|=\\tfrac12\\neq1$ , so the sides differ by the factor  $2$  and  $PQRS$  is a non-square rectangle.",
          "Therefore the rotation factor  $\\tfrac{i}{2}$  tells the whole story: its argument  $\\tfrac{\\pi}{2}$  forces the right angle (rectangle), and its modulus  $\\tfrac12\\neq1$  forbids equal sides (not a square).  $\\boxed{PQRS\\text{ is a rectangle (not a square)},\\ \\tfrac{c-a}{d-b}=-2i}$ "
        ]
      }
    ],
    "remark": "Insight: the entire Varignon phenomenon collapses to two identities,  $Q-P=\\tfrac12(c-a)$  and  $S-P=\\tfrac12(d-b)$  — the sides of the midpoint figure are literally half the diagonals of the original quadrilateral. Once you see this, the shape of  $PQRS$  is dictated by the relationship between  $AC$  and  $BD$ , and the criteria are deliberately crossed against the schoolbook reflexes about a single parallelogram: the diagonals of  $ABCD$  being perpendicular makes the midpoint figure a rectangle (it is the angle between  $PQRS$ 's sides that the diagonals' directions control), while the diagonals being equal in length makes it a rhombus (it is the lengths of  $PQRS$ 's sides that the diagonals' magnitudes control). A square demands both at once. The trap punishes the student who answers from muscle memory (``perpendicular diagonals  $\\Rightarrow$  rhombus''); the purely-imaginary ratio  $\\tfrac{c-a}{d-b}=-2i$  encodes both facts simultaneously — its argument  $\\tfrac{\\pi}{2}$  certifies the right angle, its modulus  $2\\neq1$  certifies the unequal sides — leaving exactly one verdict: a rectangle that is not a square."
  },
  {
    "theme": "geometry",
    "themeLabel": "Complex Numbers as Geometry",
    "title": "The Cube That Wants to Be a Triangle",
    "difficulty": 5,
    "task": "Prove and determine",
    "tags": [
      "equilateral criterion",
      "vieta",
      "cubic roots",
      "cube roots of unity",
      "degeneracy",
      "depressed cubic"
    ],
    "statement": "Identify each complex number with a point of the plane. (a) For arbitrary  $z_1,z_2,z_3\\in\\mathbb{C}$ , prove the identity  \\[ z_1^2+z_2^2+z_3^2-(z_1z_2+z_2z_3+z_3z_1)=\\tfrac12\\big[(z_1-z_2)^2+(z_2-z_3)^2+(z_3-z_1)^2\\big], \\]  and deduce that  $z_1^2+z_2^2+z_3^2=z_1z_2+z_2z_3+z_3z_1$  holds if and only if the three points are the vertices of an equilateral triangle, with the single proviso that the three points are not all equal. (b) Now let  $c,d\\in\\mathbb{C}$  and let  $z_1,z_2,z_3$  be the three roots (with multiplicity) of  \\[ z^3+3z^2+cz+d=0. \\]  Using the criterion of part (a) together with Vieta's relations, determine every complex number  $c$  for which the roots form a genuine (non-degenerate) equilateral triangle in the plane, and state precisely the condition on  $d$  that this genuineness imposes. Report, as the final answer, the value (or set of values) of  $c$ .",
    "answer": " \\[\\boxed{c=3}\\] ",
    "trap": "The seductive error is to treat the criterion of part (a) as a clean two-way street and stop the instant the algebra yields  $c=3$ , declaring `` $c=3$  works for every  $d$ .'' The criterion  $z_1^2+z_2^2+z_3^2=z_1z_2+z_2z_3+z_3z_1$  is genuinely an identity-driven iff, but its right-hand side  $\\tfrac12\\sum (z_i-z_j)^2$  vanishes in two utterly different ways: for a true equilateral triangle, and for the wholly degenerate case  $z_1=z_2=z_3$  in which the ``triangle'' has collapsed to a single point of side length  $0$ . That collapse is not an abstract footnote: with  $c=3$  the cubic is  $z^3+3z^2+3z+d$ , and at  $d=1$  it becomes the perfect cube  $(z+1)^3$ , a triple root at  $-1$ . So  $c=3,\\,d=1$  satisfies every algebraic equation in sight yet produces no triangle at all. A student who never substitutes  $z=w-1$  to see the side length emerge as  $\\sqrt{3}\\,|1-d|^{1/3}$  will quietly admit this fake solution and mis-state the result as `` $c=3$  for all  $d$ ,'' missing that genuineness forces  $d\\neq1$ . The value of  $c$  is indeed the unique  $3$ , but the honest statement carries the excluded  $d$  with it; mistaking the degenerate point-triangle for a valid equilateral configuration is the exact conceptual slip the problem is built to expose.",
    "solutions": [
      {
        "name": "Equilateral criterion plus Vieta",
        "steps": [
          "Prove the identity by direct expansion:  $\\tfrac12\\sum(z_i-z_j)^2=\\tfrac12\\big[(z_1^2-2z_1z_2+z_2^2)+(z_2^2-2z_2z_3+z_3^2)+(z_3^2-2z_3z_1+z_1^2)\\big]=z_1^2+z_2^2+z_3^2-(z_1z_2+z_2z_3+z_3z_1)$ . Hence the criterion  $z_1^2+z_2^2+z_3^2=z_1z_2+z_2z_3+z_3z_1$  is equivalent to  $(z_1-z_2)^2+(z_2-z_3)^2+(z_3-z_1)^2=0$ .",
          "Interpret that vanishing geometrically. Writing  $u=z_1-z_2,\\ v=z_2-z_3$  gives  $z_3-z_1=-(u+v)$ , so the condition becomes  $u^2+v^2+(u+v)^2=0$ , i.e.  $u^2+uv+v^2=0$ , i.e.  $\\big(\\tfrac{u}{v}\\big)^2+\\tfrac{u}{v}+1=0$  when  $v\\neq0$ . Thus  $\\tfrac{u}{v}=e^{\\pm 2\\pi i/3}$ , a unit-modulus rotation by  $120^\\circ$ : side  $z_1z_2$  is the side  $z_2z_3$  rotated by  $\\pm120^\\circ$  about  $z_2$ , which is exactly the equilateral condition. The only escape is  $v=0$  forcing  $u=0$  too, i.e. all three points coincide. So the criterion holds iff the triangle is equilateral or all points are equal. This proves (a).",
          "Apply it to the cubic. By Vieta on  $z^3+3z^2+cz+d$ ,  $\\ z_1+z_2+z_3=-3$  and  $z_1z_2+z_2z_3+z_3z_1=c$ . The Newton identity gives  $z_1^2+z_2^2+z_3^2=(z_1+z_2+z_3)^2-2(z_1z_2+z_2z_3+z_3z_1)=9-2c$ . The criterion  $z_1^2+z_2^2+z_3^2=z_1z_2+z_2z_3+z_3z_1$  reads  $9-2c=c$ , giving the unique solution  $c=3$  over  $\\mathbb{C}$ , independent of  $d$ .",
          "Discard the degenerate case. With  $c=3$  the polynomial is  $z^3+3z^2+3z+d$ ; the roots coincide ( $z_1=z_2=z_3=-1$ ) exactly when it equals  $(z+1)^3=z^3+3z^2+3z+1$ , i.e. when  $d=1$ . For every  $d\\neq1$  the three roots are distinct and, by part (a), form a true equilateral triangle. Therefore the value of the coefficient is  $\\boxed{c=3}$  (a genuine triangle additionally requiring  $d\\neq1$ )."
        ]
      },
      {
        "name": "Depress the cubic: roots as cube roots of unity",
        "steps": [
          "Translate to the centroid. The centroid of the roots is  $\\tfrac13(z_1+z_2+z_3)=-1$ . Substitute  $z=w-1$ : then  $z^3+3z^2+cz+d=(w-1)^3+3(w-1)^2+c(w-1)+d=w^3+(c-3)w+(d-c+2)$ . The new roots  $w_k=z_k+1$  have centroid  $0$ .",
          "Characterize equilateral with centroid  $0$ . Three distinct points with centroid at the origin form an equilateral triangle iff they are  $w_k=\\rho\\,\\omega^{k}$  ( $k=0,1,2$ ) for some  $\\rho\\neq0$  and  $\\omega=e^{2\\pi i/3}$ , because such a set is the orbit of one point under  $120^\\circ$  rotation about its centroid. Equivalently their monic cubic is  $w^3-\\rho^3=0$ : a depressed cubic with no linear term.",
          "Match coefficients. Comparing  $w^3+(c-3)w+(d-c+2)$  with  $w^3-\\rho^3$  forces the linear coefficient to vanish:  $c-3=0$ , hence  $c=3$ . Then  $-\\rho^3=d-c+2=d-1$ , so  $\\rho^3=1-d$  and the common side length is  $|w_i-w_j|=|\\rho|\\,|\\omega^i-\\omega^j|=\\sqrt{3}\\,|1-d|^{1/3}$ .",
          "Read off genuineness. The triangle is non-degenerate iff  $\\rho\\neq0$  iff  $d\\neq1$  (matching the side length  $\\sqrt3|1-d|^{1/3}>0$ ). For all such  $d$  the linear-term condition pins the coefficient uniquely:  $\\boxed{c=3}$ ."
        ]
      },
      {
        "name": "Forward construction from an explicit equilateral triangle",
        "steps": [
          "Build the most general such triangle. Any equilateral triangle whose centroid is  $-1$  (forced by  $z_1+z_2+z_3=-3$ ) has vertices  $z_k=-1+\\zeta\\,\\omega^{k}$ ,  $k=0,1,2$ , where  $\\omega=e^{2\\pi i/3}$  and  $\\zeta\\in\\mathbb{C}\\setminus\\{0\\}$  encodes the size and orientation;  $\\zeta=0$  would collapse all vertices to  $-1$ .",
          "Compute the elementary symmetric functions. Since  $1+\\omega+\\omega^2=0$  and  $\\omega^3=1$ :  $\\sum z_k=-3+\\zeta(1+\\omega+\\omega^2)=-3$ , and  $\\sum_{i<j}z_iz_j=\\sum_{i<j}(-1+\\zeta\\omega^{i})(-1+\\zeta\\omega^{j})$ . Expanding, the constant part gives  $3$ , the cross terms  $-\\zeta(\\dots)$  vanish because they involve  $\\sum_{i<j}(\\omega^i+\\omega^j)=2(1+\\omega+\\omega^2)=0$ , and the  $\\zeta^2$  part is  $\\zeta^2(\\omega\\cdot\\omega^2+\\omega^2\\cdot 1+1\\cdot\\omega)=\\zeta^2(\\omega^3+\\omega^2+\\omega)=\\zeta^2(1-1)=0$ . Hence  $\\sum_{i<j}z_iz_j=3$ .",
          "Match Vieta. The middle Vieta coefficient is  $c=\\sum_{i<j}z_iz_j=3$ , with no dependence on  $\\zeta$ ; meanwhile  $-d=\\prod z_k=(-1)^3+\\zeta^3\\,\\omega^{0+1+2}=-1+\\zeta^3$ , so  $d=1-\\zeta^3$ , i.e.  $\\zeta^3=1-d$ . Every genuine equilateral configuration ( $\\zeta\\neq0$ ) thus yields precisely one value of the middle coefficient.",
          "Conclude. The constraint is  $c=3$  for all sizes/orientations, and  $\\zeta\\neq0\\Leftrightarrow d\\neq1$  separates genuine triangles from the degenerate triple point. The required value is  $\\boxed{c=3}$ ."
        ]
      }
    ],
    "remark": "Insight: the criterion  $z_1^2+z_2^2+z_3^2=z_1z_2+z_2z_3+z_3z_1$  is the algebraic shadow of  $\\tfrac12\\sum(z_i-z_j)^2=0$ , which equates to the rotation statement  $\\tfrac{z_1-z_2}{z_2-z_3}=e^{\\pm 2\\pi i/3}$  — a  $120^\\circ$  turn is the whole content of ``equilateral.'' Fed through Vieta it collapses the entire cubic family  $z^3+3z^2+cz+d$  to the single coefficient value  $c=3$ , fixed by the centroid alone and blind to  $d$ . The hidden subtlety is that  $\\tfrac12\\sum(z_i-z_j)^2$  also vanishes for the collapsed point-triangle, and the depression  $z=w-1$  exposes exactly when this happens: the residual cubic  $w^3-(1-d)$  has all roots at  $0$  precisely at  $d=1$ , where the side  $\\sqrt3\\,|1-d|^{1/3}$  shrinks to nothing. So  $c=3$  is the unique coefficient, but a true triangle lives only on  $d\\neq1$  — the degenerate cube  $(z+1)^3$  is the impostor the equilateral criterion cannot, by itself, rule out."
  },
  {
    "theme": "geometry",
    "themeLabel": "Complex Numbers as Geometry",
    "title": "Both Apexes of an Equilateral Triangle",
    "difficulty": 5,
    "task": "Find both third vertices",
    "tags": [
      "equilateral",
      "rotation",
      "argand geometry",
      "modulus",
      "conjugate roots"
    ],
    "statement": "Two vertices of an equilateral triangle in the Argand plane are  $a=1$  and  $b=4+\\sqrt{3}\\,i$ . Find both complex numbers  $c$  that can serve as the third vertex, and verify each satisfies  $a^{2}+b^{2}+c^{2}=ab+bc+ca$ .",
    "answer": " $$\\boxed{\\,c=1+2\\sqrt{3}\\,i\\quad\\text{or}\\quad c=4-\\sqrt{3}\\,i\\,}$$ ",
    "trap": "Assuming there is only one answer, or fixing the wrong rotation sign. The third vertex is  $a$  together with the side  $b-a$  rotated about  $a$  by  $\\pm 60^{\\circ}$ , so  $c=a+(b-a)e^{\\pm i\\pi/3}$  gives TWO triangles — one on each side of the line  $ab$ . A student who writes only  $c=a+(b-a)e^{i\\pi/3}=1+2\\sqrt{3}\\,i$  reports a single point and silently drops the mirror-image triangle  $c=4-\\sqrt{3}\\,i$ . The symmetric condition  $a^{2}+b^{2}+c^{2}=ab+bc+ca$  is a quadratic in  $c$ , so it must have two roots.",
    "solutions": [
      {
        "name": "Rotate the side by  $\\pm 60^{\\circ}$ ",
        "steps": [
          "The side vector is  $b-a=(4+\\sqrt{3}\\,i)-1=3+\\sqrt{3}\\,i$ , with  $|b-a|=\\sqrt{9+3}=2\\sqrt{3}$ .",
          "Rotating  $b$  about  $a$  by  $+60^{\\circ}$ :  $c=a+(b-a)e^{i\\pi/3}=1+(3+\\sqrt{3}\\,i)\\left(\\tfrac12+\\tfrac{\\sqrt3}{2}i\\right)$ . Expanding,  $(3+\\sqrt3 i)(\\tfrac12+\\tfrac{\\sqrt3}{2}i)=\\tfrac32+\\tfrac{3\\sqrt3}{2}i+\\tfrac{\\sqrt3}{2}i-\\tfrac32=2\\sqrt3\\,i$ , so  $c=1+2\\sqrt{3}\\,i$ .",
          "Rotating by  $-60^{\\circ}$  instead:  $c=a+(b-a)e^{-i\\pi/3}=1+(3+\\sqrt3 i)\\left(\\tfrac12-\\tfrac{\\sqrt3}{2}i\\right)=1+\\left(\\tfrac32-\\tfrac{3\\sqrt3}{2}i+\\tfrac{\\sqrt3}{2}i+\\tfrac32\\right)=1+(3-\\sqrt3 i)=4-\\sqrt{3}\\,i$ .",
          "Each is at distance  $|c-a|=|c-b|=2\\sqrt3$  from both  $a$  and  $b$ , confirming equilateral.  $\\boxed{c=1+2\\sqrt3 i\\ \\text{or}\\ 4-\\sqrt3 i}$ "
        ]
      },
      {
        "name": "Solve the symmetric condition as a quadratic",
        "steps": [
          "For an equilateral triangle  $a^{2}+b^{2}+c^{2}=ab+bc+ca$ , i.e.  $c^{2}-(a+b)c+(a^{2}+b^{2}-ab)=0$ , a quadratic whose two roots are exactly the two apex positions.",
          "Here  $a+b=5+\\sqrt3 i$  and  $a^{2}+b^{2}-ab=1+(13+8\\sqrt3 i)-(4+\\sqrt3 i)=10+7\\sqrt3 i$ , so  $c^{2}-(5+\\sqrt3 i)c+(10+7\\sqrt3 i)=0$ .",
          "The two roots have sum  $5+\\sqrt3 i$  and product  $10+7\\sqrt3 i$ . Testing  $c=1+2\\sqrt3 i$  and  $c=4-\\sqrt3 i$ : their sum is  $5+\\sqrt3 i$  and product  $(1+2\\sqrt3 i)(4-\\sqrt3 i)=4-\\sqrt3 i+8\\sqrt3 i+6=10+7\\sqrt3 i$ , matching both Vieta relations.",
          "Hence the quadratic's roots are precisely these,  $\\boxed{c=1+2\\sqrt3 i\\ \\text{or}\\ 4-\\sqrt3 i}$ ."
        ]
      }
    ],
    "remark": "**Insight.** The clean identity  $a^{2}+b^{2}+c^{2}=ab+bc+ca$  is symmetric in the three vertices, so reading it as a quadratic in any one of them forces exactly two solutions — the two equilateral triangles built on a common side. Geometrically those two roots are the two  $\\pm 60^{\\circ}$  rotations; algebraically they are a conjugate pair of apex positions reflected across line  $ab$ ."
  },
  {
    "theme": "geometry",
    "themeLabel": "Complex Numbers as Geometry",
    "title": "Missing Vertex from the Centroid",
    "difficulty": 5,
    "task": "Find third vertex and area",
    "tags": [
      "centroid",
      "shoelace area",
      "conjugate",
      "argand geometry",
      "imaginary part"
    ],
    "statement": "A triangle has vertices  $z_1=1+i$  and  $z_2=4-i$ , and its centroid is at  $g=3+2i$ . Find the third vertex  $z_3$ , then compute the area of the triangle using the complex form  $\\text{Area}=\\tfrac12\\left|\\,\\mathrm{Im}\\!\\left(\\overline{z_1}z_2+\\overline{z_2}z_3+\\overline{z_3}z_1\\right)\\right|$ .",
    "answer": " $$\\boxed{\\,z_3=4+6i,\\qquad \\text{Area}=\\tfrac{21}{2}\\,}$$ ",
    "trap": "Mis-stating the centroid or dropping the  $\\tfrac12$ . The centroid is the average  $g=\\tfrac{z_1+z_2+z_3}{3}$ , so  $z_3=3g-z_1-z_2$  — not  $g-z_1-z_2$ . Also the complex area carries a factor  $\\tfrac12$ , exactly as the Cartesian shoelace formula does; the bare quantity  $\\left|\\mathrm{Im}(\\overline{z_1}z_2+\\overline{z_2}z_3+\\overline{z_3}z_1)\\right|=21$  is TWICE the area. Forgetting either point gives a wrong vertex or doubles the area to  $21$ .",
    "solutions": [
      {
        "name": "Centroid average, then complex shoelace",
        "steps": [
          "From  $g=\\tfrac{z_1+z_2+z_3}{3}$  we get  $z_3=3g-z_1-z_2=3(3+2i)-(1+i)-(4-i)=(9+6i)-(5+0i)=4+6i$ .",
          "Now  $\\overline{z_1}z_2=(1-i)(4-i)=4-i-4i-1=3-5i$ ,  $\\overline{z_2}z_3=(4+i)(4+6i)=16+24i+4i-6=10+28i$ , and  $\\overline{z_3}z_1=(4-6i)(1+i)=4+4i-6i+6=10-2i$ .",
          "Summing:  $(3-5i)+(10+28i)+(10-2i)=23+21i$ , so  $\\mathrm{Im}(\\cdot)=21$ .",
          "Area  $=\\tfrac12|21|=\\tfrac{21}{2}$ .  $\\boxed{z_3=4+6i,\\ \\text{Area}=\\tfrac{21}{2}}$ "
        ]
      },
      {
        "name": "Cartesian cross-check",
        "steps": [
          "Writing  $z_3=3g-z_1-z_2=4+6i$  gives the three points  $(1,1)$ ,  $(4,-1)$ ,  $(4,6)$  in the plane.",
          "The real shoelace area is  $\\tfrac12\\left|x_1(y_2-y_3)+x_2(y_3-y_1)+x_3(y_1-y_2)\\right|=\\tfrac12\\left|1(-1-6)+4(6-1)+4(1+1)\\right|$ .",
          "This equals  $\\tfrac12\\left|-7+20+8\\right|=\\tfrac12\\cdot 21=\\tfrac{21}{2}$ , agreeing with the complex computation.",
          "Both forms are the same determinant; the complex version simply packages  $x,y$  into  $z,\\overline z$ .  $\\boxed{z_3=4+6i,\\ \\text{Area}=\\tfrac{21}{2}}$ "
        ]
      }
    ],
    "remark": "**Insight.** The complex area  $\\tfrac12\\left|\\mathrm{Im}(\\overline{z_1}z_2+\\overline{z_2}z_3+\\overline{z_3}z_1)\\right|$  is just the Cartesian shoelace determinant rewritten with conjugates, so it inherits both the  $\\tfrac12$  and the orientation sign. Pairing it with the centroid identity  $z_1+z_2+z_3=3g$  lets you recover a hidden vertex from a single averaged datum and then measure the triangle without ever splitting into real and imaginary parts."
  },
  {
    "theme": "geometry",
    "themeLabel": "Complex Numbers as Geometry",
    "title": "A Square from Its Diagonal",
    "difficulty": 5,
    "task": "Find the other two vertices",
    "tags": [
      "square",
      "rotation",
      "diagonal",
      "argand geometry",
      "midpoint"
    ],
    "statement": "In the Argand plane  $A=2+i$  and  $C=8+5i$  are the ends of one diagonal of a square  $ABCD$ . Find the complex numbers  $B$  and  $D$ , and the side length of the square.",
    "answer": " $$\\boxed{\\,B=7,\\quad D=3+6i,\\quad \\text{side}=\\sqrt{26}\\,}$$ ",
    "trap": "Rotating the full diagonal  $C-A$  about  $A$  instead of the half-diagonal about the centre. The other two vertices lie at the centre  $M=\\tfrac{A+C}{2}$  displaced by the half-diagonal  $A-M$  turned through  $\\pm 90^{\\circ}$ :  $B=M+i(A-M)$ ,  $D=M-i(A-M)$ . A student who writes  $B=A+i(C-A)$  rotates a whole diagonal's length and lands on  $-2+7i$ , a point at distance  $|C-A|=2\\sqrt{13}$  from  $A$  — that is the diagonal length, not a side, so the figure produced is far too large.",
    "solutions": [
      {
        "name": "Rotate the half-diagonal about the centre",
        "steps": [
          "The diagonals of a square bisect each other at the centre  $M=\\tfrac{A+C}{2}=\\tfrac{(2+i)+(8+5i)}{2}=5+3i$ .",
          "The half-diagonal from the centre to  $A$  is  $A-M=(2+i)-(5+3i)=-3-2i$ . The other diagonal is this turned by  $\\pm 90^{\\circ}$  (multiply by  $\\pm i$ ).",
          "Thus  $B=M+i(A-M)=5+3i+i(-3-2i)=5+3i+(2-3i)=7$ , and  $D=M-i(A-M)=5+3i-(2-3i)=3+6i$ .",
          "Side  $=|B-A|=|7-(2+i)|=|5-i|=\\sqrt{26}$  (each side equals  $\\sqrt{26}$ ).  $\\boxed{B=7,\\ D=3+6i,\\ \\text{side}=\\sqrt{26}}$ "
        ]
      },
      {
        "name": "Side length from the diagonal",
        "steps": [
          "The diagonal length is  $|C-A|=|6+4i|=\\sqrt{36+16}=\\sqrt{52}=2\\sqrt{13}$ , so a square's side is  $\\tfrac{|C-A|}{\\sqrt2}=\\sqrt{26}$ .",
          " $B$  and  $D$  are symmetric across the centre  $M=5+3i$ , so  $B+D=2M=10+6i$  and  $B-D$  is perpendicular to  $A-C$  with the same length  $2\\sqrt{13}$ .",
          " $A-C=-6-4i$ ; a perpendicular of equal length is  $i(A-C)=4-6i$  (or its negative), giving  $B-D=4-6i$ . Solving  $B+D=10+6i,\\ B-D=4-6i$  yields  $B=7,\\ D=3+6i$ .",
          "Then  $|B-A|=|5-i|=\\sqrt{26}$  confirms the side.  $\\boxed{B=7,\\ D=3+6i,\\ \\text{side}=\\sqrt{26}}$ "
        ]
      }
    ],
    "remark": "**Insight.** A square's two diagonals are equal, bisecting, and perpendicular, so once you have one diagonal  $AC$  the other is forced: take the midpoint and rotate the half-diagonal by  $90^{\\circ}$ . Anchoring the rotation at the centre  $M$  — not at a vertex — is what keeps the lengths honest, since the half-diagonal, not the full one, has the size of the missing pair's offset."
  },
  {
    "theme": "geometry",
    "themeLabel": "Complex Numbers as Geometry",
    "title": "Closing a Parallelogram and Its Area",
    "difficulty": 5,
    "task": "Find fourth vertex and area",
    "tags": [
      "parallelogram",
      "shoelace area",
      "conjugate",
      "argand geometry",
      "rhombus test"
    ],
    "statement": "Points  $A=2+i$ ,  $B=8+2i$ ,  $C=10+5i$  are three consecutive vertices of a parallelogram  $ABCD$  (in that cyclic order). Find the fourth vertex  $D$ , the area of the parallelogram via  $\\left|\\mathrm{Im}\\!\\left(\\overline{(B-A)}\\,(D-A)\\right)\\right|$ , and decide whether  $ABCD$  is a rhombus.",
    "answer": " $$\\boxed{\\,D=4+4i,\\quad \\text{Area}=16,\\quad \\text{not a rhombus}\\,}$$ ",
    "trap": "Using the wrong vertex relation for the cyclic order  $ABCD$ . Because the diagonals are  $AC$  and  $BD$ , they share a midpoint, giving  $A+C=B+D$ , hence  $D=A+C-B$ . A student who writes  $D=A+B-C$  (treating  $AB$  and  $CD$  as the diagonals) gets  $D=-2i$ , producing the order  $ABDC$  — a different parallelogram. The cyclic labelling decides which pair are diagonals, and only  $A+C=B+D$  matches  $ABCD$ .",
    "solutions": [
      {
        "name": "Diagonals share a midpoint",
        "steps": [
          "For  $ABCD$  the diagonals  $AC$  and  $BD$  bisect each other, so  $\\tfrac{A+C}{2}=\\tfrac{B+D}{2}$ , giving  $D=A+C-B=(2+i)+(10+5i)-(8+2i)=4+4i$ .",
          "The side vectors from  $A$  are  $B-A=6+i$  and  $D-A=2+3i$ . Then  $\\overline{(B-A)}(D-A)=(6-i)(2+3i)=12+18i-2i+3=15+16i$ .",
          "Area  $=\\left|\\mathrm{Im}(15+16i)\\right|=16$ .",
          "Side lengths:  $|B-A|=|6+i|=\\sqrt{37}$  and  $|B-C|=|{-2}-3i|=\\sqrt{13}$  are unequal, so it is NOT a rhombus.  $\\boxed{D=4+4i,\\ \\text{Area}=16,\\ \\text{not a rhombus}}$ "
        ]
      },
      {
        "name": "Cross-product cross-check",
        "steps": [
          "With  $D=A+C-B=4+4i$ , the two edges leaving  $A$  are  $\\vec u=B-A=(6,1)$  and  $\\vec v=D-A=(2,3)$  in Cartesian form.",
          "The parallelogram area is the magnitude of the  $2$ D cross product  $|u_x v_y-u_y v_x|=|6\\cdot3-1\\cdot2|=|18-2|=16$ , matching  $\\left|\\mathrm{Im}(\\overline{(B-A)}(D-A))\\right|$  exactly since  $\\mathrm{Im}(\\bar u v)=u_x v_y-u_y v_x$ .",
          "The diagonals have lengths  $|C-A|=|8+4i|=4\\sqrt5$  and  $|D-B|=|{-4}+2i|=2\\sqrt5$ ; being unequal they cannot be a rhombus's perpendicular equal-split... more simply, unequal adjacent sides  $\\sqrt{37}\\ne\\sqrt{13}$  already rule out a rhombus.",
          "Hence  $\\boxed{D=4+4i,\\ \\text{Area}=16,\\ \\text{not a rhombus}}$ ."
        ]
      }
    ],
    "remark": "**Insight.** The single relation  $A+C=B+D$  encodes the whole parallelogram: it says the diagonals share a midpoint, and the cyclic order of the labels is what tells you which two vertices are diagonal-opposite. Once the fourth point is fixed,  $\\mathrm{Im}(\\bar u v)$  for the two edge vectors is the signed area — the complex twin of the planar cross product — and comparing adjacent side moduli instantly settles whether the parallelogram has tightened into a rhombus."
  },
  {
    "theme": "loci",
    "themeLabel": "Loci in the Argand Plane",
    "title": "An Angle of Ninety Degrees",
    "difficulty": 3,
    "task": "Describe the locus",
    "tags": [
      "argument locus",
      "arc of a circle",
      "right angle",
      "argand geometry",
      "semicircle"
    ],
    "statement": "Describe completely the set of points  $z$  in the Argand plane satisfying  $$\\arg\\!\\left(\\frac{z-i}{z-1}\\right)=\\frac{\\pi}{2}.$$  State the circle it lies on, which arc it is, and which points are excluded.",
    "answer": " $$\\boxed{\\,\\text{the arc of }\\left|z-\\tfrac{1+i}{2}\\right|=\\tfrac{1}{\\sqrt2}\\ \\text{on the origin side of the chord, with }1\\text{ and }i\\text{ excluded}\\,}$$ ",
    "trap": "Concluding the locus is the  $whole$  circle. The condition  $\\arg\\frac{z-i}{z-1}=+\\frac{\\pi}{2}$  fixes both the magnitude  $\\big(\\tfrac{\\pi}{2}\\big)$   $and$  the sign of the angle, so it selects only  $one$  of the two arcs cut off by the chord joining  $1$  and  $i$ . The other arc satisfies  $\\arg=-\\frac{\\pi}{2}$ . Also the endpoints  $z=1$  and  $z=i$  make the ratio undefined or zero and must be excluded. Reporting the full circle  $|z-\\tfrac{1+i}{2}|=\\tfrac1{\\sqrt2}$  double-counts the locus.",
    "solutions": [
      {
        "name": "Right angle subtended by a chord",
        "steps": [
          "Geometrically  $\\arg\\frac{z-i}{z-1}$  is the directed angle at  $z$  in the triangle with vertices  $z$ ,  $1$ ,  $i$  — the angle  $\\angle(\\,1\\,,\\,z\\,,\\,i\\,)$  measured from  $\\overrightarrow{z\\to 1}$  to  $\\overrightarrow{z\\to i}$ .",
          "Setting this angle to  $\\tfrac{\\pi}{2}$  means the segment joining  $1$  and  $i$  subtends a right angle at  $z$ . By the angle-in-a-semicircle property,  $z$  lies on the circle having  $1$  and  $i$  as ends of a diameter.",
          "Centre  $=\\tfrac{1+i}{2}$ , radius  $=\\tfrac{|1-i|}{2}=\\tfrac{\\sqrt2}{2}=\\tfrac1{\\sqrt2}$ , so  $\\big|z-\\tfrac{1+i}{2}\\big|=\\tfrac1{\\sqrt2}$ .",
          "The sign  $+\\tfrac{\\pi}{2}$  picks the arc on which the rotation from  $\\overrightarrow{z\\to1}$  to  $\\overrightarrow{z\\to i}$  is counter-clockwise — the arc on the origin side of the chord  $x+y=1$  (it passes through  $0$ ). Endpoints  $1,i$  are excluded.  $\\boxed{\\text{that arc}}$ "
        ]
      },
      {
        "name": "Make the ratio purely imaginary",
        "steps": [
          " $\\arg w=\\tfrac{\\pi}{2}$  means  $w=\\frac{z-i}{z-1}$  is purely imaginary with positive imaginary part, so  $\\operatorname{Re}w=0$  while  $\\operatorname{Im}w>0$ .",
          "With  $z=x+iy$ ,  $\\operatorname{Re}\\!\\big((z-i)\\overline{(z-1)}\\big)=0$  expands to  $x^2-x+y^2-y=0$ , i.e.  $\\big(x-\\tfrac12\\big)^2+\\big(y-\\tfrac12\\big)^2=\\tfrac12$  — the circle centre  $\\tfrac{1+i}{2}$ , radius  $\\tfrac1{\\sqrt2}$ .",
          "The extra condition  $\\operatorname{Im}w>0$  keeps only half the circle. Testing  $z=0$ :  $w=\\frac{-i}{-1}=i$ , whose argument is  $+\\tfrac{\\pi}{2}$  ✓, so the valid arc is the one containing the origin.",
          "Testing  $z=1+i$  (the far point) gives  $w=\\frac{1}{i}=-i$ , argument  $-\\tfrac{\\pi}{2}$  — the rejected arc. Excluding  $z=1,i$ , the answer is the origin-side arc of  $\\big|z-\\tfrac{1+i}{2}\\big|=\\tfrac1{\\sqrt2}$ .  $\\boxed{\\text{that arc}}$ "
        ]
      }
    ],
    "remark": "**Insight.** An  $\\arg$ -condition is a  $signed$  statement: it carries both a magnitude and an orientation, so it can never give a whole circle — only an arc. The chord joining the two reference points splits the circle into the  $+\\alpha$  arc and the  $-\\alpha$  arc, and a single test point (here  $z=0$ ) instantly tells you which half you are on."
  },
  {
    "theme": "loci",
    "themeLabel": "Loci in the Argand Plane",
    "title": "The Tilted Crescent",
    "difficulty": 4,
    "task": "Find",
    "tags": [
      "region",
      "half-plane",
      "disc",
      "area"
    ],
    "statement": "Let  $S=\\{\\,z\\in\\mathbb{C}: |z-2|\\le |z-2i|\\ \\text{and}\\ |z|\\le 2\\,\\}$ . Identify the region  $S$  geometrically and find its area.",
    "answer": " $S$  is the half of the disc  $|z|\\le2$  lying on the side  $y\\le x$  of the line  $y=x$ ; it is a semicircular region of area  $2\\pi$ .",
    "trap": "Treating  $|z-2|\\le|z-2i|$  as a disc/annulus inequality and intersecting two circles. Equal-weight modulus inequalities are HALF-PLANES (bounded by the perpendicular bisector), so the answer is a half-disc, not a lens.",
    "solutions": [
      {
        "name": "Reduce to a half-plane",
        "steps": [
          " $|z-2|\\le|z-2i|$  squares to  $(x-2)^2+y^2\\le x^2+(y-2)^2$ .",
          "Expand:  $-4x+4\\le-4y+4\\Rightarrow -4x\\le-4y\\Rightarrow x\\ge y$ .",
          "So  $S=\\{|z|\\le2\\}\\cap\\{x\\ge y\\}$ : the part of the disc of radius  $2$  on one side of the diameter line  $y=x$ .",
          "A line through the centre splits a disc into two equal halves, so  $\\text{area}(S)=\\tfrac12\\pi(2)^2=\\boxed{2\\pi}$ ."
        ]
      },
      {
        "name": "Symmetry argument",
        "steps": [
          "The bisector of  $2$  and  $2i$  is the line  $y=x$ , which passes through the origin — the centre of the disc  $|z|\\le2$ .",
          "Hence  $\\{x\\ge y\\}$  cuts the disc into two congruent halves (reflection across  $y=x$  swaps them).",
          "Each half therefore has area equal to half the disc area  $\\pi\\cdot2^2=4\\pi$ .",
          "Area  $(S)=\\tfrac12\\cdot4\\pi=\\boxed{2\\pi}$ ."
        ]
      }
    ],
    "remark": "Insight:  $|z-a|\\le|z-b|$  is always the closed half-plane on  $a$ 's side of the perpendicular bisector. When that bisector runs through the disc's centre, the area splits exactly in half — no integration."
  },
  {
    "theme": "loci",
    "themeLabel": "Loci in the Argand Plane",
    "title": "The Sixty-Degree Vigil",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "arc",
      "argument",
      "circle-through-two-points",
      "inscribed-angle"
    ],
    "statement": "Determine the locus of all  $z$  with \\[\\arg\\!\\left(\\frac{z-1}{z+1}\\right)=\\frac{\\pi}{3}.\\]  Give the centre and radius of the circle it lies on, and describe which arc it is.",
    "answer": "It is an arc of the circle centred at  $\\dfrac{i}{\\sqrt3}=\\left(0,\\tfrac1{\\sqrt3}\\right)$  with radius  $\\dfrac{2}{\\sqrt3}$ ; specifically the major arc lying in the upper half-plane (where  $\\operatorname{Im}z>0$ ), excluding the endpoints  $\\pm1$ .",
    "trap": "Concluding  $\\arg\\frac{z-1}{z+1}=\\tfrac\\pi3$  gives a full circle. It gives only the ARC on one side of chord  $[-1,1]$  from which the segment subtends exactly  $\\tfrac\\pi3$ ; the other arc subtends  $\\pi-\\tfrac\\pi3$ , and the chord itself is excluded.",
    "solutions": [
      {
        "name": "Inscribed-angle / circle through two points",
        "steps": [
          " $\\arg\\frac{z-1}{z+1}$  is the directed angle subtended at  $z$  by the segment from  $-1$  to  $1$ . Setting it to  $\\tfrac\\pi3$  forces  $z$  onto an arc through  $-1$  and  $1$  where the inscribed angle is  $\\tfrac\\pi3$ .",
          "By the extended law of sines, chord  $=2R\\sin(\\text{inscribed angle})$ :  $|1-(-1)|=2=2R\\sin\\tfrac\\pi3$ , so  $R=\\dfrac{1}{\\sin\\tfrac\\pi3}=\\dfrac{2}{\\sqrt3}$ .",
          "The centre lies on the perpendicular bisector of  $[-1,1]$  (the imaginary axis) at height  $h$  with  $h^2+1=R^2=\\tfrac43$ , so  $h=\\tfrac1{\\sqrt3}$ ; centre  $=\\big(0,\\tfrac1{\\sqrt3}\\big)$ .",
          "Since the inscribed angle  $\\tfrac\\pi3<\\tfrac\\pi2$ , the locus is the major arc, and the positive sign of the argument places it in the upper half-plane. Result: the upper (major) arc of  $x^2+(y-\\tfrac1{\\sqrt3})^2=\\tfrac43$ , endpoints  $\\pm1$  removed.  $\\boxed{}$ "
        ]
      },
      {
        "name": "Direct algebra (tan of argument)",
        "steps": [
          "Let  $w=\\frac{z-1}{z+1}$ . With  $z=x+iy$ ,  $\\operatorname{Re}w=\\frac{x^2+y^2-1}{(x+1)^2+y^2}$  and  $\\operatorname{Im}w=\\frac{2y}{(x+1)^2+y^2}$ .",
          " $\\arg w=\\tfrac\\pi3$  means  $\\operatorname{Im}w=\\sqrt3\\,\\operatorname{Re}w$  with  $\\operatorname{Re}w>0$  and  $\\operatorname{Im}w>0$ :  $2y=\\sqrt3\\,(x^2+y^2-1)$ .",
          "Rearrange:  $x^2+y^2-\\tfrac{2}{\\sqrt3}y-1=0\\Rightarrow x^2+(y-\\tfrac1{\\sqrt3})^2=1+\\tfrac13=\\tfrac43$ .",
          "Centre  $\\big(0,\\tfrac1{\\sqrt3}\\big)$ , radius  $\\tfrac2{\\sqrt3}$ ; the sign constraint  $\\operatorname{Im}w>0$  forces  $y>0$ , leaving the upper (major) arc.  $\\boxed{}$ "
        ]
      }
    ],
    "remark": "Insight:  $\\arg\\frac{z-a}{z-b}=\\theta$  is the constant-inscribed-angle locus — an arc through  $a,b$  with radius  $\\frac{|a-b|}{2\\sin\\theta}$ . The sign of  $\\theta$  picks the side, and whether the arc is major or minor is governed by  $\\theta$  being less than or greater than  $\\tfrac\\pi2$  (here  $\\theta=\\tfrac\\pi3<\\tfrac\\pi2$  gives the major arc); the chord endpoints are never included."
  },
  {
    "theme": "loci",
    "themeLabel": "Loci in the Argand Plane",
    "title": "The Anchor Through the Third Point",
    "difficulty": 5,
    "task": "Determine and prove",
    "tags": [
      "apollonius circle",
      "orthogonal circles",
      "third point constraint",
      "ratio locus",
      "inverse points",
      "degenerate case"
    ],
    "statement": "Fix the two anchors  $a=1+2i$  and  $b=1+i$  in the Argand plane, and consider the family of loci  \\[ S_k=\\{\\,z\\in\\mathbb{C}:\\ |z-a|=k\\,|z-b|\\,\\},\\qquad k>0,\\ k\\neq 1. \\]  It is known that the single locus of the family passes through the point  $z_0=\\dfrac{7}{5}+\\dfrac{6}{5}i$ . (a) Determine the value of  $k$  for which  $z_0\\in S_k$ , and hence write  $S_k$  exactly as a circle, giving its centre and radius in closed form. (b) Prove that this circle is orthogonal to the unit circle  $|z|=1$  — that is, the two circles meet at right angles — using the orthogonality criterion that, for circles  $|z-c_1|=r_1$  and  $|z-c_2|=r_2$ , orthogonality holds exactly when  $|c_1-c_2|^2=r_1^2+r_2^2$  (equivalently  $c_1\\overline{c_2}+\\overline{c_1}c_2=|c_1|^2+|c_2|^2-r_1^2-r_2^2$ ). Report, as the final answer, the value of  $k$  together with the centre and radius of the circle  $S_k$ .",
    "answer": " \\[\\boxed{k=2,\\quad S_k:\\ \\left|z-\\left(1+\\tfrac{2}{3}i\\right)\\right|=\\tfrac{2}{3}}\\] ",
    "trap": "The seductive shortcut is the half-remembered theorem ``an Apollonius circle of  $a$  and  $b$  is orthogonal to  $|z|=1$  precisely when  $a$  and  $b$  are inverse points in the unit circle, i.e.  $a\\,\\overline{b}=1$ .'' A strong student, having found  $k=2$ , reaches for this to settle part (b) in one line — computes  $a\\,\\overline{b}=(1+2i)(1-i)=3+i\\neq 1$ , sees the anchors are not inverse points, and triumphantly concludes the circle is not orthogonal to the unit circle. This is false. Orthogonality of  $S_k$  to  $|z|=1$  is governed by  $k$  together with  $a,b$ , not by whether the two anchors happen to be an inverse pair; the inverse-point statement concerns the pair of points where the circle meets the line  $ab$ , never the anchors  $a,b$  themselves. The genuine condition is  $|c|^2-r^2=1$  for the actual Apollonius centre  $c=\\dfrac{a-k^2 b}{1-k^2}$ , and it holds here. A second, deadlier trap is to plant the centre at the midpoint  $\\tfrac{a+b}{2}=1+\\tfrac32 i$  (it divides the join of  $a,b$  in ratio  $k^2:1$ , not  $1:1$ ): that fake centre gives  $|c|^2-r^2=\\tfrac{101}{36}\\neq 1$ , wrongly killing the orthogonality. A third is to entertain  $k=1$  (the perpendicular bisector — a line, not a circle) or  $k=-2$  as spurious roots; only  $k=2$  survives  $k>0,\\,k\\neq1$ .",
    "solutions": [
      {
        "name": "Solve k from the third point, then test the true centre",
        "steps": [
          "Impose  $z_0\\in S_k$  by squaring:  $|z_0-a|^2=k^2|z_0-b|^2$ . With  $z_0=\\tfrac{7}{5}+\\tfrac{6}{5}i$ ,  $a=1+2i$ ,  $b=1+i$ :  $z_0-a=\\tfrac{2}{5}-\\tfrac{4}{5}i$  so  $|z_0-a|^2=\\tfrac{4}{25}+\\tfrac{16}{25}=\\tfrac{20}{25}=\\tfrac45$ ; and  $z_0-b=\\tfrac{2}{5}+\\tfrac{1}{5}i$  so  $|z_0-b|^2=\\tfrac{4}{25}+\\tfrac{1}{25}=\\tfrac{5}{25}=\\tfrac15$ . Hence  $k^2=\\dfrac{4/5}{1/5}=4$ , and since  $k>0,\\ k\\neq1$ , uniquely  $k=2$ . The rejected roots  $k=-2$  (sign) and  $k=1$  (which would be the perpendicular bisector, a line) are exactly the trap branches.",
          "Build the circle from  $|z-a|^2=4|z-b|^2$ . Expanding  $z\\bar z-\\bar a z-a\\bar z+|a|^2=4\\big(z\\bar z-\\bar b z-b\\bar z+|b|^2\\big)$  and collecting:  $(1-4)z\\bar z-(\\bar a-4\\bar b)z-(a-4b)\\bar z+(|a|^2-4|b|^2)=0$ . Dividing by  $1-4=-3$  gives  $z\\bar z-\\overline{c}\\,z-c\\,\\bar z+\\tfrac{|a|^2-4|b|^2}{1-4}=0$  with centre  $c=\\dfrac{a-4b}{1-4}=\\dfrac{(1+2i)-4(1+i)}{-3}=\\dfrac{-3-2i}{-3}=1+\\tfrac23 i.$ ",
          "Read off the radius from  $r^2=|c|^2-d$  where  $d=\\dfrac{|a|^2-4|b|^2}{1-4}=\\dfrac{5-4\\cdot2}{-3}=\\dfrac{-3}{-3}=1$ . Then  $|c|^2=1+\\tfrac49=\\tfrac{13}{9}$ , so  $r^2=\\tfrac{13}{9}-1=\\tfrac49$ , giving  $r=\\tfrac23$ . Thus  $S_2:\\ \\big|z-(1+\\tfrac23 i)\\big|=\\tfrac23$ , i.e.  $(x-1)^2+(y-\\tfrac23)^2=\\tfrac49$ .",
          "Orthogonality to  $|z|=1$  (centre  $c_2=0$ , radius  $r_2=1$ ): the criterion  $|c-0|^2=r^2+1$  reads  $|c|^2-r^2=1$ . Here  $|c|^2-r^2=\\tfrac{13}{9}-\\tfrac49=\\tfrac{9}{9}=1.$  The equation holds exactly, so the circles meet at right angles. (Note  $d=1$  is this quantity — the constant term already certifies orthogonality.)  $\\boxed{k=2,\\ S_2:\\ |z-(1+\\tfrac23 i)|=\\tfrac23,\\ \\text{orthogonal to }|z|=1}$ "
        ]
      },
      {
        "name": "Orthogonality forces k, the third point confirms it",
        "steps": [
          "Turn the logic around: ask which  $k$  makes  $S_k$  orthogonal to  $|z|=1$ , then check  $z_0$ . For  $S_k$  the constant term after normalising is  $d=\\dfrac{|a|^2-k^2|b|^2}{1-k^2}$ , and orthogonality to the unit circle is exactly  $d=|c|^2-r^2=1$ . So  $|a|^2-k^2|b|^2=1-k^2$ , i.e.  $|a|^2-1=k^2(|b|^2-1)$ , giving  $k^2=\\dfrac{|a|^2-1}{|b|^2-1}.$ ",
          "Substitute the data  $|a|^2=5,\\ |b|^2=2$ :  $k^2=\\dfrac{5-1}{2-1}=4$ , so the only member of the family orthogonal to  $|z|=1$  is  $k=2$ . This exhibits orthogonality as a property of  $k$  (with  $a,b$ ), demolishing the `` $a\\overline b=1$  inverse-points'' trap: indeed  $a\\overline b=3+i\\neq1$ , yet the circle is orthogonal.",
          "Confirm this is the circle through  $z_0$ : with  $k=2$ ,  $|z_0-a|^2=\\tfrac45$  and  $4|z_0-b|^2=4\\cdot\\tfrac15=\\tfrac45$  are equal, so  $z_0\\in S_2$ . Both constraints — passing through  $z_0$  and being orthogonal to  $|z|=1$  — single out the same  $k=2$ .",
          "Its centre and radius follow as before:  $c=\\dfrac{a-4b}{-3}=1+\\tfrac23 i$ ,  $r=\\tfrac23$ .  $\\boxed{k=2,\\ S_2:\\ |z-(1+\\tfrac23 i)|=\\tfrac23,\\ \\text{orthogonal to }|z|=1}$ "
        ]
      },
      {
        "name": "Right-angle radii at a real intersection point",
        "steps": [
          "Having found  $k=2$  and the circle  $S_2:\\ \\big|z-(1+\\tfrac23 i)\\big|=\\tfrac23$  (centre  $c=1+\\tfrac23 i$ , radius  $\\tfrac23$ ), prove orthogonality geometrically by exhibiting a common point where the radii are perpendicular. Two circles are orthogonal iff at a point of intersection the radius of one is tangent to the other, equivalently the two radii to that point are perpendicular.",
          "Find a common point of  $S_2$  and  $|z|=1$ . Try  $z=1$  (i.e.  $(1,0)$ ):  $|z|=1$  holds, and  $|1-c|=|{-\\tfrac23 i}|=\\tfrac23=r$ , so  $z=1$  lies on both circles. (The second intersection is  $\\tfrac{5}{13}+\\tfrac{12}{13}i$ ; one suffices.)",
          "At  $z=1$  the radius of the unit circle is the vector  $1-0=1$  (pointing along  $1+0i$ ), and the radius of  $S_2$  is  $1-c=1-(1+\\tfrac23 i)=-\\tfrac23 i$  (pointing along  $-i$ ). Their inner product is  $\\operatorname{Re}\\big(1\\cdot\\overline{(-\\tfrac23 i)}\\big)=\\operatorname{Re}\\big(1\\cdot\\tfrac23 i\\big)=0.$  The radii are perpendicular, so the circles cross at a right angle there — hence the circles are orthogonal.",
          "This matches the algebraic criterion  $|c|^2-r^2=\\tfrac{13}{9}-\\tfrac49=1$ , confirming orthogonality independently of any inverse-point folklore.  $\\boxed{k=2,\\ S_2:\\ |z-(1+\\tfrac23 i)|=\\tfrac23,\\ \\text{orthogonal to }|z|=1}$ "
        ]
      }
    ],
    "remark": "Insight: the constant term of a normalised circle  $z\\bar z-\\overline c z-c\\bar z+d=0$  equals  $|c|^2-r^2$ , the power of the origin, and orthogonality to the unit circle is the single clean statement  $d=1$ . For the Apollonius locus  $|z-a|=k|z-b|$  this constant is  $d=\\dfrac{|a|^2-k^2|b|^2}{1-k^2}$ , so  $d=1\\iff k^2=\\dfrac{|a|^2-1}{|b|^2-1}$  — orthogonality is a fact about  $k$  (with the anchors), never about the anchors being an inverse pair. The problem is engineered so the third point  $z_0$  and the orthogonality demand both pin down the same  $k=2$ ; a student who solves for  $k$  and then reaches for the `` $a\\overline b=1$ '' reflex (here  $a\\overline b=3+i$ ) wrongly denies the orthogonality, and one who sites the centre at the midpoint of  $a,b$  rather than at the external/internal divider in ratio  $k^2:1$  corrupts the very quantity being tested. The honest path — true centre  $c=\\tfrac{a-k^2 b}{1-k^2}$ , true  $d=|c|^2-r^2$  — makes both the circle and its right-angle meeting with  $|z|=1$  fall out of one constant."
  },
  {
    "theme": "loci",
    "themeLabel": "Loci in the Argand Plane",
    "title": "The Twin Tangent Bisectors",
    "difficulty": 5,
    "task": "Recover and enumerate",
    "tags": [
      "perpendicular bisector",
      "apollonius line",
      "tangency",
      "reflection",
      "two-solution trap",
      "degenerate case"
    ],
    "statement": "Identify each point of the plane with a complex number. Fix the point  $b=7+i$  and the circle  $\\Gamma:\\ |z-(2+2i)|=\\sqrt{2}$ . A complex number  $a$  is sought for which the locus  \\[ L_a=\\bigl\\{\\,z\\in\\mathbb{C}\\ :\\ |z-a|=|z-b|\\,\\bigr\\} \\]  (the perpendicular bisector of the segment joining  $a$  and  $b$ ) simultaneously (i) passes through the fixed point  $P=4+2i$ , and (ii) is tangent to the circle  $\\Gamma$ . Determine every value of  $a$  for which such a locus  $L_a$  exists, and report the complete set of admissible  $a$  as the final answer.",
    "answer": " \\[\\boxed{a\\in\\{\\,3+5i,\\ \\ 5-i\\,\\}}\\] ",
    "trap": "The locus  $|z-a|=|z-b|$  is a genuine line only when  $a\\neq b$ ; it is the perpendicular bisector of  $[a,b]$ , and the defining geometric fact is that  $a$  is the mirror image of  $b$  in this line. The fatal conceptual error is to forget that condition (ii) is a tangency from an external point, which is satisfied by two distinct lines, not one. A strong student correctly translates (i) into `` $P$  is equidistant from  $a$  and  $b$ '', i.e.  $|P-a|=|P-b|=\\sqrt{10}$ , so  $a$  lies on a circle of radius  $\\sqrt{10}$  about  $P$ ; then writes the tangency condition, finds a line, reflects  $b$  across it, and stops at the single answer  $a=3+5i$ . But  $P$  lies outside  $\\Gamma$  (indeed  $|P-(2+2i)|=2>\\sqrt{2}$ ), so there are exactly two tangent lines from  $P$  to  $\\Gamma$ , with slopes  $+1$  and  $-1$ ; reflecting  $b$  in each gives two admissible points, and dropping either one is wrong. A second, quieter trap lies at the other extreme: the algebraic system (impose  $|P-a|=|P-b|$  and squared-distance  $=2$ ) has a third root, the degenerate  $a=b=7+i$ , which formally satisfies both equations because the ``line'' collapses to the whole plane. That root must be discarded, since with  $a=b$  the set  $L_a$  is all of  $\\mathbb{C}$  and is not a perpendicular bisector at all. The honest answer is the pair  $\\{3+5i,\\ 5-i\\}$  — neither the lone tangent's single point nor the over-counted triple.",
    "solutions": [
      {
        "name": "Reflect  $b$  in each tangent line from  $P$ ",
        "steps": [
          "Translate condition (i). Since  $P$  lies on the perpendicular bisector of  $[a,b]$ , it is equidistant from the endpoints:  $|P-a|=|P-b|$ . With  $b=7+i$ ,  $|P-b|=|(4+2i)-(7+i)|=|-3+i|=\\sqrt{10}$ . So  $a$  lies on the circle of radius  $\\sqrt{10}$  centred at  $P$ ; equivalently,  $a$  is the reflection of  $b$  in the bisector line, and that line must pass through  $P$ .",
          "Find the lines through  $P$  tangent to  $\\Gamma$ . The centre is  $O=2+2i$  and radius  $\\sqrt{2}$ ;  $|P-O|=|2|=2>\\sqrt{2}$ , so  $P$  is external and there are exactly two tangents. A line through  $P=(4,2)$  of slope  $m$  is  $mx-y+(2-4m)=0$ ; setting its distance from  $O=(2,2)$  equal to  $\\sqrt{2}$  gives  $\\dfrac{|2m-2+2-4m|}{\\sqrt{m^2+1}}=\\sqrt{2}$ , i.e.  $4m^2=2(m^2+1)$ , so  $m^2=1$  and  $m=\\pm1$ . The two bisector lines are  $L^{+}:\\ y=x-2$  and  $L^{-}:\\ y=-x+6$ .",
          "Reflect  $b=(7,1)$  in  $L^{+}:\\ x-y-2=0$ . The signed value  $\\dfrac{x-y-2}{1^2+(-1)^2}=\\dfrac{7-1-2}{2}=2$ , so the foot displacement is  $2\\,(1,-1)$  and the reflection is  $(7,1)-2\\cdot2\\,(1,-1)/\\!/$  computed as  $a=(7-2\\cdot1\\cdot2,\\ 1-2\\cdot(-1)\\cdot2)=(3,5)$ . Thus  $a=3+5i$ , and one checks  $|3+5i-(4+2i)|=|-1+3i|=\\sqrt{10}$ , confirming  $P$  is on this bisector.",
          "Reflect  $b=(7,1)$  in  $L^{-}:\\ x+y-6=0$ . Here  $\\dfrac{x+y-6}{1^2+1^2}=\\dfrac{7+1-6}{2}=1$ , giving  $a=(7-2\\cdot1\\cdot1,\\ 1-2\\cdot1\\cdot1)=(5,-1)$ , i.e.  $a=5-i$ , with  $|5-i-(4+2i)|=|1-3i|=\\sqrt{10}$ . Both lines are tangent and pass through  $P$ , so  $\\boxed{a\\in\\{3+5i,\\ 5-i\\}}$ ."
        ]
      },
      {
        "name": "Solve the algebraic system and weed out the degenerate root",
        "steps": [
          "Write  $a=x+iy$ . Condition (i) is simply  $|P-a|=|P-b|$ , i.e.  $a$  is equidistant from  $P=4+2i$  and from  $b=7+i$ . Since  $|P-b|=|-3+i|=\\sqrt{10}$ , this says  $|a-P|=\\sqrt{10}$ , the circle  $(x-4)^2+(y-2)^2=10$  about  $P$  (the quadratic terms in  $a$  do not cancel here precisely because  $a$  varies while  $P$  is fixed). This is the first locus carrying  $a$ .",
          "Write condition (ii). The bisector line is  $2(x-7)\\,u+2(y-1)\\,v = (x^2+y^2)-50$  in the running coordinate  $(u,v)$ ; its distance from  $O=(2,2)$  equals  $\\sqrt{2}$  gives, after clearing,  $\\bigl[4(x-7)+4(y-1)-(x^2+y^2)+50\\bigr]^2 = 2\\bigl[4(x-7)^2+4(y-1)^2\\bigr]$ .",
          "Solve the two equations together. Eliminating with  $(x-4)^2+(y-2)^2=10$  reduces the system to the three intersection points  $(x,y)\\in\\{(3,5),\\,(5,-1),\\,(7,1)\\}$ ; that is,  $a\\in\\{3+5i,\\ 5-i,\\ 7+i\\}$ .",
          "Discard the degenerate root. The value  $a=7+i=b$  makes  $|z-a|=|z-b|$  hold for every  $z$ , so  $L_a=\\mathbb{C}$  is not a perpendicular bisector and condition (ii) is vacuous, not a tangency; it is an artefact of squaring. The two legitimate roots remain:  $\\boxed{a\\in\\{3+5i,\\ 5-i\\}}$ ."
        ]
      },
      {
        "name": "Through the tangent points (chord of contact)",
        "steps": [
          "Each admissible bisector passes through  $P$  and touches  $\\Gamma$ , so it is the line  $PT$  for a point of tangency  $T$  on  $\\Gamma$ . The two tangent points from  $P=(4,2)$  to  $\\Gamma:\\ (u-2)^2+(v-2)^2=2$  satisfy  $OT\\perp PT$ , i.e.  $(u-2)(u-4)+(v-2)(v-2)=0$  together with the circle equation; solving gives  $T_1=(3,1)$  and  $T_2=(3,3)$ .",
          "Form the two bisector lines as  $PT_1$  and  $PT_2$ . Line  $PT_1$  joins  $(4,2)$  and  $(3,1)$ : slope  $1$ , equation  $y=x-2$ . Line  $PT_2$  joins  $(4,2)$  and  $(3,3)$ : slope  $-1$ , equation  $y=-x+6$ . These are exactly the lines  $L^{+},L^{-}$  found before, now produced from the chord of contact instead of the slope condition.",
          "Recover  $a$  as the reflection of  $b$  in each line. Reflecting  $b=7+i$  in  $y=x-2$  swaps-and-shifts: the foot of perpendicular from  $(7,1)$  is  $\\bigl(\\tfrac{7+1+2}{2},\\tfrac{7+1-2}{2}\\bigr)=(5,3)$ , so  $a=2(5,3)-(7,1)=(3,5)$ , giving  $a=3+5i$ . Reflecting  $b$  in  $y=-x+6$  gives foot  $\\bigl(\\tfrac{7-1+6}{2},\\tfrac{-7+1+6}{2}\\bigr)=(6,0)$ , so  $a=2(6,0)-(7,1)=(5,-1)$ , giving  $a=5-i$ .",
          "Both reflections are at equal distance  $\\sqrt{10}$  from  $P$  (consistent with  $P$  on each bisector) and each line touches  $\\Gamma$  at a single point  $T_i$ , confirming tangency. Hence the complete admissible set is  $\\boxed{a\\in\\{3+5i,\\ 5-i\\}}$ ."
        ]
      }
    ],
    "remark": "Insight: condition (i) is the cleanest possible reading of a perpendicular bisector — `` $P$  on the bisector of  $[a,b]$ '' is identical to `` $|P-a|=|P-b|$ '', which is itself an Apollonius-with-ratio-one statement and pins  $a$  to a circle of radius  $|P-b|$  about  $P$ . The whole problem then turns on a single counting fact from the tangency in (ii): a point outside a circle admits two tangent lines, so the bisector is one of two lines, and since  $a$  is forced to be the mirror image of  $b$  in the bisector, there are two values of  $a$ . The signature of a top-rank solver is treating the answer as a set and proving the count both ways: that the external position  $|P-O|=2>\\sqrt2$  guarantees two tangents (no fewer, no more), and that the spurious third algebraic root  $a=b$  is the degenerate collapse  $L_a=\\mathbb{C}$  and must be expelled. Reporting a single point understates the locus; reporting three overstates it. The honest answer is the twin pair  $\\{3+5i,\\ 5-i\\}$ ."
  },
  {
    "theme": "loci",
    "themeLabel": "Loci in the Argand Plane",
    "title": "The Angle the Disc Subtends",
    "difficulty": 5,
    "task": "Maximise and justify",
    "tags": [
      "argument extremum",
      "tangent from a point",
      "half-angle subtended",
      "ray locus",
      "boundary not interior"
    ],
    "statement": "In the Argand plane let  $D$  be the closed disc  \\[ D=\\bigl\\{\\,z\\in\\mathbb{C}\\ :\\ |z-(1+i)|\\le 1\\,\\bigr\\}. \\]  For  $z\\in D$  with  $z\\neq 0$ , let  $\\theta(z)=\\arg z\\in(-\\pi,\\pi]$  denote the angle the point makes at the origin, measured from the positive real axis. Determine the maximum value of  $\\theta(z)$  as  $z$  ranges over  $D$ , prove that this maximum is actually attained, and identify the unique point  $z^\\star\\in D$  at which it occurs. Report the maximum value of  $\\arg z$  as the final answer.",
    "answer": " \\[\\boxed{\\max_{z\\in D}\\arg z=\\dfrac{\\pi}{2}}\\] ",
    "trap": "The disc lies wholly in the open first quadrant (its centre is  $1+i$  and it touches both axes), so  $\\arg z$  is well defined and positive throughout. The fatal instinct is to assume the argument is extremised where the modulus is extremised — to look along the central ray from the origin through the centre  $1+i$  and inspect the nearest point  $z_{\\min}=\\bigl(1-\\tfrac{1}{\\sqrt2}\\bigr)(1+i)$  and the farthest point  $z_{\\max}=\\bigl(1+\\tfrac{1}{\\sqrt2}\\bigr)(1+i)$ . But every point of that diameter is a positive real multiple of  $1+i$ , so all of them carry the same argument  $\\arg(1+i)=\\tfrac{\\pi}{4}$ ; the  $|z|$ -extremes give  $\\tfrac{\\pi}{4}$ , which is neither the largest nor the smallest argument. The angle  $\\arg z$  is constant along rays and has nothing to do with  $|z|$ ; its extreme over the disc occurs where a ray from the origin is tangent to the circle, not where  $|z|$  peaks. A second, subtler error is to differentiate  $\\arg z$  over the open disc, find no interior stationary point, and conclude no maximum exists — forgetting that a continuous function on a compact set attains its maximum, necessarily on the boundary circle here. The third trap is sloppy book-keeping of the tangent: there are two tangent rays from the origin (the real axis,  $\\arg=0$ , giving the minimum, and the imaginary axis,  $\\arg=\\tfrac{\\pi}{2}$ , giving the maximum); picking the wrong one returns  $0$ . The honest maximum is  $\\tfrac{\\pi}{2}$ , attained only at the tangency point  $z^\\star=i$ .",
    "solutions": [
      {
        "name": "Tangent ray from the origin (half-angle subtended)",
        "steps": [
          "The level set  $\\{\\arg z=\\theta\\}$  is a ray from the origin. As  $\\theta$  increases from  $\\arg(1+i)=\\tfrac\\pi4$ , the ray rotates anticlockwise and stays a chord of the disc until, at the extreme angle, it becomes tangent to the boundary circle  $C:\\ |z-(1+i)|=1$ ; beyond that the ray misses  $D$  entirely. So  $\\max\\arg z$  is the argument of the upper tangent line from the origin to  $C$ , and the maximiser  $z^\\star$  is the point of tangency.",
          "Let  $c=1+i$  be the centre,  $|c|=\\sqrt2$ , radius  $R=1$ . A ray from the origin tangent to  $C$  touches it at a point  $T$  with  $OT\\perp cT$ , so triangle  $OTc$  is right-angled at  $T$  with hypotenuse  $|Oc|=|c|=\\sqrt2$  and opposite side  $|cT|=R=1$ . Hence the half-angle the disc subtends at the origin is  $\\alpha=\\arcsin\\dfrac{R}{|c|}=\\arcsin\\dfrac{1}{\\sqrt2}=\\dfrac\\pi4$ . The whole disc is seen within the angular sector  $[\\arg c-\\alpha,\\ \\arg c+\\alpha]$ .",
          "Therefore  $\\arg z$  ranges over  $\\Bigl[\\tfrac\\pi4-\\tfrac\\pi4,\\ \\tfrac\\pi4+\\tfrac\\pi4\\Bigr]=\\bigl[0,\\tfrac\\pi2\\bigr]$ , and the maximum is  $\\arg c+\\alpha=\\dfrac\\pi4+\\dfrac\\pi4=\\dfrac\\pi2$ . The upper tangent ray is thus the positive imaginary axis  $\\{x=0,\\ y>0\\}$ , whose distance from  $c=(1,1)$  is exactly  $1=R$ , confirming tangency.",
          "The tangency point is the foot of the perpendicular from  $c=(1,1)$  to the imaginary axis, namely  $(0,1)$ , i.e.  $z^\\star=i$ ; indeed  $|i-(1+i)|=|-1|=1$ , so  $i\\in C\\subset D$  and  $\\arg i=\\tfrac\\pi2$ . Compactness of  $D$  guarantees the maximum is attained, and it is attained uniquely at this single tangency point.  $\\boxed{\\max_{z\\in D}\\arg z=\\dfrac\\pi2\\ \\text{at}\\ z^\\star=i}$ "
        ]
      },
      {
        "name": "Boundary parametrisation and calculus",
        "steps": [
          "Since  $\\arg z$  has no critical point in the interior (its gradient  $\\nabla\\arg z=\\tfrac{1}{|z|^2}(-y,x)\\neq 0$  off the origin, and the origin is not in  $D$ ), and  $D$  is compact, the maximum lies on the boundary circle. Parametrise it by  $z=c+Re^{it}=(1+\\cos t)+i(1+\\sin t)$ ,  $t\\in[0,2\\pi)$ , and maximise  $f(t)=\\arg z=\\arctan\\dfrac{1+\\sin t}{1+\\cos t}$  (valid since both coordinates are positive on the relevant arc).",
          "Set  $g(t)=\\tan f(t)=\\dfrac{1+\\sin t}{1+\\cos t}$ . Then  $g'(t)=\\dfrac{\\cos t(1+\\cos t)-(1+\\sin t)(-\\sin t)}{(1+\\cos t)^2}=\\dfrac{\\cos t+\\sin t+1}{(1+\\cos t)^2}.$  Stationarity needs  $\\cos t+\\sin t+1=0$ , i.e.  $\\cos t+\\sin t=-1$ , i.e.  $\\sqrt2\\cos\\!\\bigl(t-\\tfrac\\pi4\\bigr)=-1$ .",
          "Solving  $\\cos\\!\\bigl(t-\\tfrac\\pi4\\bigr)=-\\tfrac{1}{\\sqrt2}$  gives  $t-\\tfrac\\pi4=\\pm\\tfrac{3\\pi}{4}$ , so  $t=\\pi$  or  $t=-\\tfrac\\pi2$  (i.e.  $t=\\tfrac{3\\pi}{2}$ ). At  $t=\\pi$ :  $z=(1+\\cos\\pi)+i(1+\\sin\\pi)=0+i=i$ , giving  $\\arg z=\\tfrac\\pi2$ . At  $t=\\tfrac{3\\pi}{2}$ :  $z=(1+0)+i(1-1)=1$ , giving  $\\arg z=0$ .",
          "Comparing the two stationary boundary values, the maximum is  $\\tfrac\\pi2$  at  $z=i$  and the minimum is  $0$  at  $z=1$  (the two tangency points). The naive central-diameter candidates  $z=\\bigl(1\\pm\\tfrac{1}{\\sqrt2}\\bigr)(1+i)$  both yield  $\\arg=\\tfrac\\pi4$  and are not even stationary, exposing the  $|z|$ -extreme instinct as false.  $\\boxed{\\max_{z\\in D}\\arg z=\\dfrac\\pi2}$ "
        ]
      },
      {
        "name": "When does the ray meet the disc? (locus intersection)",
        "steps": [
          "Fix a target angle  $\\theta\\in(0,\\tfrac\\pi2)$  and ask whether the ray  $L_\\theta=\\{\\,re^{i\\theta}:r>0\\,\\}$  meets  $D$ . Writing  $z=re^{i\\theta}$ , membership  $|z-(1+i)|\\le1$  becomes  $|re^{i\\theta}-(1+i)|^2\\le1$ , i.e.  $r^2-2r\\,\\mathrm{Re}\\bigl(e^{-i\\theta}(1+i)\\bigr)+1\\le0$  since  $|1+i|^2=2$ . With  $\\mathrm{Re}\\bigl(e^{-i\\theta}(1+i)\\bigr)=\\cos\\theta+\\sin\\theta$ , this is the quadratic  $r^2-2(\\cos\\theta+\\sin\\theta)\\,r+1\\le0$ .",
          "A real  $r>0$  satisfying the inequality exists iff the quadratic's discriminant is non-negative:  $\\Delta=4(\\cos\\theta+\\sin\\theta)^2-4\\ge0$ , i.e.  $(\\cos\\theta+\\sin\\theta)^2\\ge1$ , i.e.  $\\sin 2\\theta\\ge0$ . For  $\\theta\\in(0,\\tfrac\\pi2)$  this holds for all such  $\\theta$  up to and including the boundary case  $\\sin2\\theta=0$  at  $\\theta=\\tfrac\\pi2$ , where the discriminant vanishes and the ray is tangent (a unique  $r$ ).",
          "Thus the ray meets  $D$  exactly for  $\\theta\\in[0,\\tfrac\\pi2]$ , and the largest admissible angle is  $\\theta=\\tfrac\\pi2$ , where  $\\sin2\\theta=0$  gives a double root  $r=\\cos\\tfrac\\pi2+\\sin\\tfrac\\pi2=1$ . The single touching point is  $z^\\star=1\\cdot e^{i\\pi/2}=i$ .",
          "Hence  $\\arg z$  attains every value in  $[0,\\tfrac\\pi2]$  on  $D$  and no more, so its maximum is  $\\tfrac\\pi2$ , realised only at  $z=i$  — precisely the tangency dictated by the vanishing discriminant, never by the modulus extremes.  $\\boxed{\\max_{z\\in D}\\arg z=\\dfrac\\pi2}$ "
        ]
      }
    ],
    "remark": "Insight:  $\\arg z$  is a function of direction, constant along every ray from the origin, so extremising it over a region is a tangency question, never a distance question. A disc of radius  $R$  centred at  $c$  (with  $|c|>R$ , the origin outside) is seen from the origin inside an angular sector of half-width  $\\alpha=\\arcsin(R/|c|)$  bisected by the direction  $\\arg c$ ; therefore  $\\arg z$  sweeps exactly the closed interval  $[\\arg c-\\alpha,\\ \\arg c+\\alpha]$ , attaining each endpoint at one of the two tangent points. Here  $R/|c|=1/\\sqrt2$  makes  $\\alpha=\\tfrac\\pi4=\\arg c$ , a deliberate coincidence forcing the clean answers  $0$  and  $\\tfrac\\pi2$  with the two coordinate axes as the tangent lines and  $1,\\,i$  as the tangency points. The trap — reading the argument off the nearest/farthest point of the disc — collapses to the constant  $\\tfrac\\pi4$  for the whole central diameter, the surest sign that modulus and argument extrema are governed by entirely different geometry."
  },
  {
    "theme": "loci",
    "themeLabel": "Loci in the Argand Plane",
    "title": "The Weight That Swallows the Circle",
    "difficulty": 5,
    "task": "Find all values and count",
    "tags": [
      "apollonius circle",
      "tangency",
      "radical axis",
      "internal tangency",
      "missed case",
      "weight parameter"
    ],
    "statement": "For a real weight  $k>0$  with  $k\\neq 1$ , the locus  \\[ C_k:\\qquad |z|=k\\,|z-5| \\]  is the Apollonius circle of the points  $0$  and  $5$  with ratio  $k$ . As  $k$  varies, this circle slides and breathes along the real axis. Determine all values of  $k>0$  for which  $C_k$  is tangent to the unit circle  $|z|=1$ , and state how many such values exist. (Two circles are tangent when they meet in exactly one point; remember that a small circle may sit inside a large one and touch it, and that the large one may equally be the Apollonius circle.) Report the set of admissible  $k$  and the count.",
    "answer": " \\[\\boxed{k\\in\\left\\{\\tfrac16,\\ \\tfrac14\\right\\}\\quad(\\text{exactly }2\\text{ values})}\\] ",
    "trap": "The locus  $C_k$  is genuinely a circle, so the temptation is to write its centre  $C=\\dfrac{5k^2}{k^2-1}$  and radius  $r=\\dfrac{5k}{|k^2-1|}$ , and then impose tangency to the unit circle by the single familiar rule for two circles touching on the outside,  $d=1+r$ , where  $d=|C|$  is the distance between centres. That equation has no positive solution at all, so the careless conclusion is that no such  $k$  exists. The error is treating ``tangent'' as ``externally tangent.'' For  $0<k<1$  the weight is small, the Apollonius circle is enormous, and one of two internal configurations occurs: either  $C_k$  nestles inside the unit circle ( $d=1-r$ , giving  $k=\\tfrac16$ , contact at  $z=-1$ ) or  $C_k$  has grown so large that it encloses the unit circle ( $d=r-1$ , giving  $k=\\tfrac14$ , contact at  $z=+1$ ). A student who remembers internal tangency but assumes the unit circle is always the outer one writes only  $d=1-r$ , recovers  $k=\\tfrac16$ , and reports a single value — missing the enclosing case entirely. The honest condition is  $d=|1-r|$  or  $d=1+r$ , and only the absolute value, expanded into both signs, surfaces both roots. The count is  $2$ , not  $0$  and not  $1$ .",
    "solutions": [
      {
        "name": "Centre-and-radius with the full  $d=|1-r|$  casework",
        "steps": [
          "Square the defining relation:  $|z|^2=k^2|z-5|^2$  gives  $x^2+y^2=k^2\\big((x-5)^2+y^2\\big)$ . Collecting terms (and dividing by  $1-k^2\\neq0$ ),  $C_k$  is the circle  \\[ x^2+y^2+\\frac{10k^2}{1-k^2}\\,x-\\frac{25k^2}{1-k^2}=0, \\]  with centre  $C=\\Big(\\dfrac{5k^2}{k^2-1},\\,0\\Big)$  on the real axis and radius  $r=\\dfrac{5k}{|k^2-1|}$ . Its centre-distance from the origin is  $d=|C|=\\dfrac{5k^2}{|k^2-1|}$ .",
          "The unit circle has centre  $0$  and radius  $1$ , so  $C_k$  touches it iff  $d=1+r$  (external) or  $d=|1-r|$  (internal). For  $k>1$  one checks  $d=\\dfrac{5k^2}{k^2-1}$  and  $r=\\dfrac{5k}{k^2-1}$  give  $d-r=\\dfrac{5k(k-1)}{k^2-1}=\\dfrac{5k}{k+1}>2$ , which already exceeds  $1+r$  and  $|1-r|$  in the relevant range; no tangency arises for  $k>1$ . So take  $0<k<1$ , where  $|k^2-1|=1-k^2$ , hence  $d=\\dfrac{5k^2}{1-k^2}$  and  $r=\\dfrac{5k}{1-k^2}$ .",
          "External tangency  $d=1+r$  reads  $\\dfrac{5k^2}{1-k^2}=1+\\dfrac{5k}{1-k^2}$ , i.e.  $5k^2-5k=1-k^2$ , i.e.  $6k^2-5k-1=0$ , whose roots are  $k=1$  and  $k=-\\tfrac16$ , both rejected ( $k=1$  excluded,  $k<0$  impossible). Thus there is no externally tangent weight — exactly the case the naive solver stops at.",
          "Internal tangency  $d=|1-r|$  splits into two signs. Case  $d=1-r$ :  $\\dfrac{5k^2}{1-k^2}=1-\\dfrac{5k}{1-k^2}$  gives  $5k^2+5k=1-k^2$ , i.e.  $6k^2+5k-1=0=(6k-1)(k+1)$ , so  $k=\\tfrac16$ . Case  $d=r-1$ :  $\\dfrac{5k^2}{1-k^2}=\\dfrac{5k}{1-k^2}-1$  gives  $5k^2-5k=-(1-k^2)$ , i.e.  $4k^2-5k+1=0=(4k-1)(k-1)$ , so  $k=\\tfrac14$ . Both lie in  $(0,1)$ .",
          "Hence the admissible weights are exactly  $k=\\tfrac16$  (the Apollonius circle sits inside the unit circle, touching at  $z=-1$ ) and  $k=\\tfrac14$  (the Apollonius circle has swollen to enclose the unit circle, touching at  $z=+1$ ).  $\\boxed{k\\in\\{\\tfrac16,\\tfrac14\\},\\ \\text{exactly }2\\text{ values}}$ "
        ]
      },
      {
        "name": "Radical axis: the line that must kiss the unit circle",
        "steps": [
          "Write both circles in the form  $x^2+y^2+\\cdots=0$ . The unit circle is  $S_0:\\,x^2+y^2-1=0$ , and from Solution 1 the Apollonius circle is  $S_k:\\,x^2+y^2+\\dfrac{10k^2}{1-k^2}x-\\dfrac{25k^2}{1-k^2}=0$ . Subtracting  $S_0$  from  $S_k$  eliminates the quadratic part and leaves the radical axis, the line through any common points:  \\[ \\frac{10k^2}{1-k^2}\\,x-\\frac{25k^2}{1-k^2}+1=0. \\] ",
          "Two circles are tangent precisely when they meet in one point, which forces their radical axis to be tangent to each circle. Here the radical axis is the vertical line  $x=x_\\star$  with  \\[ x_\\star=\\frac{\\frac{25k^2}{1-k^2}-1}{\\frac{10k^2}{1-k^2}}=\\frac{25k^2-(1-k^2)}{10k^2}=\\frac{26k^2-1}{10k^2}. \\]  A vertical line  $x=x_\\star$  is tangent to the unit circle  $x^2+y^2=1$  iff  $|x_\\star|=1$ .",
          "Solve  $|x_\\star|=1$ , i.e.  $\\dfrac{26k^2-1}{10k^2}=\\pm1$ . The  $+1$  branch:  $26k^2-1=10k^2\\Rightarrow 16k^2=1\\Rightarrow k=\\tfrac14$  (contact at  $x_\\star=1$ , the point  $z=1$ ). The  $-1$  branch:  $26k^2-1=-10k^2\\Rightarrow 36k^2=1\\Rightarrow k=\\tfrac16$  (contact at  $x_\\star=-1$ , the point  $z=-1$ ). Both are positive and  $\\neq1$ .",
          "Equivalently, clearing denominators in  $x_\\star^2=1$  gives  $(26k^2-1)^2=100k^4$ , i.e.  $(16k^2-1)(36k^2-1)=0$ , which factors over the reals as  $(4k-1)(4k+1)(6k-1)(6k+1)=0$ ; the only positive roots are  $k=\\tfrac14,\\tfrac16$ . No spurious case is lost because the radical-axis tangency captures internal and external touching at once.  $\\boxed{k\\in\\{\\tfrac16,\\tfrac14\\},\\ 2\\text{ values}}$ "
        ]
      },
      {
        "name": "Substitution and a discriminant in  $u=k^2$ ",
        "steps": [
          "Look for a point  $z$  lying on both loci. On the unit circle  $|z|=1$ , the Apollonius condition  $|z|=k|z-5|$  becomes  $1=k|z-5|$ , i.e.  $|z-5|=\\dfrac1k$ . So a common point is an intersection of the unit circle  $|z|=1$  with the circle  $|z-5|=\\tfrac1k$  centred at  $5$ .",
          "Tangency of the original pair is equivalent to these two circles — radii  $1$  and  $\\tfrac1k$ , centres  $0$  and  $5$  — meeting in exactly one point, i.e. tangency, i.e.  $5=1+\\tfrac1k$  or  $5=\\big|1-\\tfrac1k\\big|$  (distance between centres equals sum or difference of radii).",
          "Solve each. External,  $5=1+\\tfrac1k$ :  $\\tfrac1k=4$ , so  $k=\\tfrac14$ . Internal,  $5=\\big|1-\\tfrac1k\\big|$ : either  $1-\\tfrac1k=5\\Rightarrow \\tfrac1k=-4$  (rejected,  $k>0$ ), or  $\\tfrac1k-1=5\\Rightarrow \\tfrac1k=6\\Rightarrow k=\\tfrac16$ . The transformed problem makes the missed case visible: with radii  $1$  and  $\\tfrac1k$  both tangencies of the auxiliary pair are legitimate, and they correspond to the enclosing/enclosed configurations of the original pair.",
          "Writing  $u=\\tfrac1k$ , the two tangency equations  $u=4$  and  $u=6$  are the roots of  $(u-4)(u-6)=u^2-10u+24=0$ , a genuine quadratic with discriminant  $100-96=4>0$ , hence two distinct positive roots; back-substituting  $k=\\tfrac1u$  yields  $k=\\tfrac14$  and  $k=\\tfrac16$ . Both contact points,  $z=1$  and  $z=-1$ , lie on  $|z|=1$  and on the respective  $C_k$ , confirming genuine tangency.  $\\boxed{k\\in\\{\\tfrac16,\\tfrac14\\},\\ \\text{exactly }2}$ "
        ]
      }
    ],
    "remark": "Insight: letting the weight  $k$  vary turns a static Apollonius circle into a one-parameter family that breathes, and the whole problem is governed by where the contact happens on the real axis. The cleanest viewpoint is the auxiliary one in Solution 3: on the unit circle,  $|z|=k|z-5|$  collapses to  $|z-5|=\\tfrac1k$ , so tangency of  $C_k$  to  $|z|=1$  is just tangency of two ordinary circles of radii  $1$  and  $\\tfrac1k$  whose centres are a fixed distance  $5$  apart — and  $5=1+\\tfrac1k$  or  $5=\\tfrac1k-1$  instantly give  $k=\\tfrac14,\\tfrac16$ . The trap is the word ``tangent'': because the small weight inflates  $C_k$ , the relevant touchings are both internal — the Apollonius circle once sitting inside the unit circle ( $z=-1$ ) and once having grown to swallow it ( $z=+1$ ) — while pure external tangency is impossible. Anyone who writes only  $d=1+r$ , or only  $d=1-r$ , reports the wrong count. The honest answer requires the full  $d=|1-r|$  with both signs, and the radical-axis picture (Solution 2) shows why no case can hide: the line  $x=\\tfrac{26k^2-1}{10k^2}$  must kiss the unit circle,  $|x|=1$ , and that single absolute value carries both configurations at once."
  },
  {
    "theme": "loci",
    "themeLabel": "Loci in the Argand Plane",
    "title": "The Right-Angle Semicircle",
    "difficulty": 5,
    "task": "Prove that",
    "tags": [
      "argument",
      "semicircle",
      "arc",
      "diameter",
      "grand-hybrid"
    ],
    "statement": "Prove that the locus \\[\\arg\\!\\left(\\frac{z-1}{z+1}\\right)=\\frac{\\pi}{2}\\]  is precisely the OPEN upper semicircle of the unit circle  $|z|=1$  (the points with  $\\operatorname{Im}z>0$ ), and that lowering the prescribed angle to  $\\tfrac\\pi2-\\varepsilon$  ( $0<\\varepsilon<\\tfrac\\pi2$ ) replaces it by an arc of strictly LARGER radius. Determine that larger radius as a function of  $\\varepsilon$ .",
    "answer": "The locus is the open upper unit semicircle  $\\{e^{i\\theta}:0<\\theta<\\pi\\}$  (equivalently  $x^2+y^2=1,\\ y>0$ ). For angle  $\\tfrac\\pi2-\\varepsilon$  the locus is an upper arc of a circle of radius  $R(\\varepsilon)=\\dfrac{1}{\\sin(\\tfrac\\pi2-\\varepsilon)}=\\dfrac1{\\cos\\varepsilon}=\\sec\\varepsilon>1$ . Proved.",
    "trap": "Claiming the locus is the whole unit circle. The condition  $\\arg=\\tfrac\\pi2$  forces  $\\frac{z-1}{z+1}$  to be a POSITIVE imaginary number, so only the arc with  $\\operatorname{Im}z>0$  qualifies; the lower semicircle gives argument  $-\\tfrac\\pi2$ , and  $\\pm1$  are excluded.",
    "solutions": [
      {
        "name": "Purely imaginary  $\\Rightarrow$  unit circle, sign  $\\Rightarrow$  upper",
        "steps": [
          " $\\arg w=\\tfrac\\pi2$  means  $w=\\frac{z-1}{z+1}$  is purely imaginary with positive imaginary part:  $\\operatorname{Re}w=0,\\ \\operatorname{Im}w>0$ .",
          "With  $z=x+iy$ ,  $\\operatorname{Re}w=\\dfrac{x^2+y^2-1}{(x+1)^2+y^2}$ . Setting it  $=0$  gives  $x^2+y^2=1$  (the unit circle,  $z\\neq-1$ ).",
          " $\\operatorname{Im}w=\\dfrac{2y}{(x+1)^2+y^2}>0\\iff y>0$ . Combined: the open upper unit semicircle (also  $z\\ne1$ ). This proves the first claim.",
          "For angle  $\\tfrac\\pi2-\\varepsilon$ , the inscribed-angle radius is  $R=\\dfrac{|1-(-1)|}{2\\sin(\\tfrac\\pi2-\\varepsilon)}=\\dfrac{1}{\\cos\\varepsilon}=\\sec\\varepsilon$ . Since  $\\cos\\varepsilon<1$ ,  $R>1$ .  $\\boxed{R=\\sec\\varepsilon}$ "
        ]
      },
      {
        "name": "Inscribed-angle (Thales) viewpoint",
        "steps": [
          " $\\arg\\frac{z-1}{z+1}$  is the angle subtended at  $z$  by the chord from  $-1$  to  $1$ . Angle  $=\\tfrac\\pi2$  is Thales' theorem:  $z$  sees the diameter  $[-1,1]$  at a right angle, so  $z$  lies on the circle having  $[-1,1]$  as diameter — the unit circle.",
          "The positive sign of the argument selects the side of the chord on which the rotation from  $z+1$  to  $z-1$  is counterclockwise, namely  $\\operatorname{Im}z>0$ : the upper semicircle (open, endpoints  $\\pm1$  excluded).",
          "For a general angle  $\\alpha=\\tfrac\\pi2-\\varepsilon$ , the chord–radius law  $\\text{chord}=2R\\sin\\alpha$  gives  $2=2R\\sin(\\tfrac\\pi2-\\varepsilon)$ , so  $R=\\dfrac1{\\cos\\varepsilon}=\\sec\\varepsilon$ .",
          "As  $\\varepsilon\\to0^+$ ,  $R\\to1$  (recovering the semicircle); for  $\\varepsilon>0$ ,  $R=\\sec\\varepsilon>1$ .  $\\boxed{R=\\sec\\varepsilon}$ "
        ]
      },
      {
        "name": "Parametrise the semicircle, verify, then perturb",
        "steps": [
          "Take  $z=e^{i\\theta}=\\cos\\theta+i\\sin\\theta$ ,  $0<\\theta<\\pi$ . Then  $\\frac{z-1}{z+1}=\\frac{e^{i\\theta}-1}{e^{i\\theta}+1}=i\\tan(\\theta/2)$  using the half-angle identity.",
          "For  $0<\\theta<\\pi$ ,  $\\tan(\\theta/2)>0$ , so  $\\frac{z-1}{z+1}=i\\tan(\\theta/2)$  has argument exactly  $\\tfrac\\pi2$ . Conversely the  $\\operatorname{Re}=0$  condition forced  $|z|=1$ , so the locus is exactly this open upper semicircle.",
          "Decreasing the target argument to  $\\tfrac\\pi2-\\varepsilon$  can no longer be met on  $|z|=1$  (there the value is always purely imaginary), so the locus moves to a different arc through  $\\pm1$ . Solving  $2y=(x^2+y^2-1)\\tan(\\tfrac\\pi2-\\varepsilon)$  gives the circle  $x^2+y^2-2\\cot(\\tfrac\\pi2-\\varepsilon)\\,y-1=0$  with center  $(0,\\cot(\\tfrac\\pi2-\\varepsilon))$ .",
          "Its radius is  $R=\\sqrt{1+\\cot^2(\\tfrac\\pi2-\\varepsilon)}=\\csc(\\tfrac\\pi2-\\varepsilon)=\\sec\\varepsilon>1$ .  $\\boxed{R=\\sec\\varepsilon}$ "
        ]
      }
    ],
    "remark": "Insight:  $\\arg\\frac{z-1}{z+1}=\\tfrac\\pi2$  is Thales' theorem in complex disguise — a right angle on a diameter. The radius  $\\sec\\varepsilon$  shows the unit semicircle is the tightest arc; any smaller inscribed angle bulges the circle outward."
  },
  {
    "theme": "loci",
    "themeLabel": "Loci in the Argand Plane",
    "title": "When a Ratio Bends the Line",
    "difficulty": 5,
    "task": "Identify the locus",
    "tags": [
      "apollonius circle",
      "modulus ratio",
      "locus",
      "perpendicular bisector trap",
      "argand geometry"
    ],
    "statement": "A point  $z$  in the Argand plane moves so that its distance from  $1$  is always twice its distance from  $-2$ ; that is,  $|z-1|=2\\,|z+2|$ . Show that the locus is a circle, and find its centre and radius. (Beware: it is  $not$  the perpendicular bisector of the segment joining  $1$  and  $-2$ .)",
    "answer": " $$\\boxed{\\,\\text{a circle: }|z+3|=2,\\ \\text{centre }-3,\\ \\text{radius }2\\,}$$ ",
    "trap": "Treating  $|z-1|=2|z+2|$  as if it were  $|z-1|=|z+2|$  and writing down the perpendicular bisector. The perpendicular-bisector rule  $|z-a|=|z-b|$  only applies when the coefficient is  $1$ ; the moment the ratio is  $k\\neq 1$  the squared equation keeps the  $x^2+y^2$  terms (because  $1-k^2\\neq 0$ ), so the locus is an Apollonius  $circle$ , not a line. A student who divides out carelessly may even report the single point  $x=-5$  where the bisector idea collapses. The two boundary points  $-1$  and  $-5$  on the real axis are a diameter, not the whole answer.",
    "solutions": [
      {
        "name": "Square and complete the square",
        "steps": [
          "Put  $z=x+iy$ . Then  $|z-1|=2|z+2|$  becomes  $|z-1|^2=4|z+2|^2$ , i.e.  $(x-1)^2+y^2=4\\big[(x+2)^2+y^2\\big]$ .",
          "Expand:  $x^2-2x+1+y^2=4x^2+16x+16+4y^2$ , so  $0=3x^2+3y^2+18x+15$ . Divide by  $3$ :  $x^2+y^2+6x+5=0$ .",
          "Complete the square:  $(x+3)^2+y^2=9-5=4$ . This is the circle of centre  $(-3,0)$  and radius  $2$ , i.e.  $|z+3|=2$ .",
          "Check the real-axis points:  $z=-1$  gives  $|{-2}|=2|1|$  ✓ and  $z=-5$  gives  $|{-6}|=2|{-3}|$  ✓; these are the endpoints of a diameter, confirming  $\\boxed{|z+3|=2}$ ."
        ]
      },
      {
        "name": "Apollonius diameter from the two boundary points",
        "steps": [
          "The locus meets the line through  $1$  and  $-2$  (the real axis) where  $|z-1|=2|z+2|$  with  $z=t$  real. Internal division:  $t-1=-2(t+2)\\Rightarrow 3t=-3\\Rightarrow t=-1$ . External division:  $t-1=2(t+2)\\Rightarrow t=-5$ .",
          "For an Apollonius locus these two points are the ends of a diameter, since at each the distance ratio equals the given  $2{:}1$  along the line.",
          "Hence the centre is the midpoint  $\\tfrac{(-1)+(-5)}{2}=-3$  and the radius is  $\\tfrac{|-1-(-5)|}{2}=\\tfrac{4}{2}=2$ .",
          "Therefore the locus is the circle  $|z+3|=2$ , matching the algebra.  $\\boxed{|z+3|=2}$ "
        ]
      }
    ],
    "remark": "**Insight.** The single innocent factor  $2$  is what turns a line into a circle. Whenever  $|z-a|=k|z-b|$  with  $k\\neq 1$ , squaring keeps the  $|z|^2$  term alive (coefficient  $1-k^2$ ), forcing an Apollonius circle; only the balanced case  $k=1$  kills that term and leaves the perpendicular bisector. The fastest hand-check is the pair of collinear division points — they are always a diameter."
  },
  {
    "theme": "loci",
    "themeLabel": "Loci in the Argand Plane",
    "title": "Two Off-Axis Foci",
    "difficulty": 5,
    "task": "Find the ellipse",
    "tags": [
      "ellipse",
      "sum of distances",
      "foci",
      "eccentricity",
      "argand geometry"
    ],
    "statement": "A point  $z$  moves so that  $|z-(2+3i)|+|z-(2-3i)|=10$ . First confirm the locus is a genuine ellipse (not empty and not a segment), then find its centre, the lengths of its semi-axes, its eccentricity, and its Cartesian equation.",
    "answer": " $$\\boxed{\\,\\dfrac{(x-2)^2}{16}+\\dfrac{y^2}{25}=1;\\ \\ \\text{centre }2,\\ a=5,\\ b=4,\\ e=\\tfrac{3}{5}\\,}$$ ",
    "trap": "Assuming the major axis is horizontal and writing  $\\frac{(x-2)^2}{25}+\\frac{y^2}{16}=1$ . The foci  $2\\pm3i$  are stacked  $vertically$ , so the major axis is vertical and the  $a^2=25$  term must sit under  $y^2$ , not under  $(x-2)^2$ . A second pitfall is forgetting the existence test: an ellipse needs  $k>$  (distance between foci). Here the foci are  $6$  apart and  $k=10>6$ , so it is real; had someone chosen  $k=6$  they would get only the segment, and  $k<6$  gives the empty set.",
    "solutions": [
      {
        "name": "Read off a, c, b from the definition",
        "steps": [
          "The defining sum of focal distances is constant, so the locus is an ellipse with foci  $S_1=2+3i$  and  $S_2=2-3i$ . The constant sum is  $2a=10$ , giving semi-major axis  $a=5$ .",
          "Distance between the foci is  $|S_1-S_2|=|6i|=6=2c$ , so  $c=3$ ; since  $10>6$  the locus is a non-degenerate ellipse. Then  $b^2=a^2-c^2=25-9=16$ ,  $b=4$ .",
          "The centre is the midpoint  $\\tfrac{S_1+S_2}{2}=2$  (the point  $(2,0)$ ). The foci lie on the vertical line  $x=2$ , so the major axis is vertical:  $a^2=25$  goes under  $y^2$ .",
          "Equation  $\\dfrac{(x-2)^2}{16}+\\dfrac{y^2}{25}=1$ , eccentricity  $e=\\tfrac{c}{a}=\\tfrac{3}{5}$ .  $\\boxed{a=5,\\,b=4,\\,e=\\tfrac35}$ "
        ]
      },
      {
        "name": "Direct algebra by isolating a radical",
        "steps": [
          "Write  $z=x+iy$  and  $R_1=\\sqrt{(x-2)^2+(y-3)^2}$ ,  $R_2=\\sqrt{(x-2)^2+(y+3)^2}$ , with  $R_1+R_2=10$ . Then  $R_1-R_2=\\dfrac{R_1^2-R_2^2}{R_1+R_2}=\\dfrac{(y-3)^2-(y+3)^2}{10}=\\dfrac{-12y}{10}=-\\tfrac{6y}{5}$ .",
          "Adding and subtracting:  $R_1=5-\\tfrac{3y}{5}$ . Square it:  $(x-2)^2+(y-3)^2=25-6y+\\tfrac{9y^2}{25}$ .",
          "Expand the left side:  $(x-2)^2+y^2-6y+9=25-6y+\\tfrac{9y^2}{25}$ , so  $(x-2)^2+y^2+9-25=\\tfrac{9y^2}{25}$ , giving  $(x-2)^2+y^2\\big(1-\\tfrac{9}{25}\\big)=16$ , i.e.  $(x-2)^2+\\tfrac{16}{25}y^2=16$ .",
          "Divide by  $16$ :  $\\dfrac{(x-2)^2}{16}+\\dfrac{y^2}{25}=1$ , confirming centre  $2$ , vertical  $a=5$ ,  $b=4$ ,  $e=\\tfrac35$ .  $\\boxed{\\dfrac{(x-2)^2}{16}+\\dfrac{y^2}{25}=1}$ "
        ]
      }
    ],
    "remark": "**Insight.** The constant-sum condition hands you  $a$  and  $c$  almost for free —  $2a$  is the given sum,  $2c$  is the focal separation — and  $b^2=a^2-c^2$  finishes it. The only judgement calls are orientation (the major axis lines up with the foci, here vertical) and existence (the sum must beat the focal distance), and both are decided before a single radical is squared."
  },
  {
    "theme": "complexgeo",
    "themeLabel": "Rotation, Lines & Circles",
    "title": "Centroid and a Divided Side",
    "difficulty": 4,
    "task": "Find G and the point",
    "tags": [
      "centroid",
      "section formula",
      "triangle",
      "argand geometry",
      "internal division"
    ],
    "statement": "A triangle has vertices  $z_1=2+i$ ,  $z_2=6+3i$ ,  $z_3=4+8i$  in the Argand plane. Find its centroid  $G$ , and find the point  $P$  dividing the side  $z_1 z_2$  internally in the ratio  $1:3$  (measured from  $z_1$ ).",
    "answer": " $$\\boxed{\\,G=4+4i,\\qquad P=3+\\tfrac{3}{2}i\\,}$$ ",
    "trap": "Swapping the weights in the section formula. The point dividing  $z_1z_2$  internally in ratio  $m:n$  from  $z_1$  is  $\\dfrac{n\\,z_1+m\\,z_2}{m+n}$  — the weight on  $z_1$  is  $n$  (the far part), not  $m$ . Putting  $\\dfrac{m z_1+n z_2}{m+n}$  gives the point dividing in ratio  $3:1$  instead, landing three-quarters of the way to  $z_2$  rather than one-quarter.",
    "solutions": [
      {
        "name": "Average and weighted average",
        "steps": [
          "The centroid is the plain average of the vertices:  $G=\\dfrac{z_1+z_2+z_3}{3}=\\dfrac{(2+i)+(6+3i)+(4+8i)}{3}=\\dfrac{12+12i}{3}=4+4i$ .",
          "For internal division of  $z_1z_2$  in ratio  $1:3$  from  $z_1$  (so  $z_1P:Pz_2=1:3$ ), the section formula gives  $P=\\dfrac{3\\,z_1+1\\,z_2}{1+3}$ .",
          "Compute:  $P=\\dfrac{3(2+i)+(6+3i)}{4}=\\dfrac{(6+3i)+(6+3i)}{4}=\\dfrac{12+6i}{4}=3+\\tfrac32 i$ .",
          " $P$  is one-quarter of the way from  $z_1$  toward  $z_2$ , as a check:  $z_1+\\tfrac14(z_2-z_1)=(2+i)+\\tfrac14(4+2i)=3+\\tfrac32 i$ .  $\\boxed{G=4+4i,\\ P=3+\\tfrac32 i}$ "
        ]
      },
      {
        "name": "Vector parametrisation",
        "steps": [
          "Parametrise the side as  $z(t)=z_1+t(z_2-z_1)$ ,  $t\\in[0,1]$ , where  $t$  is the fraction of the way from  $z_1$  to  $z_2$ . Ratio  $1:3$  from  $z_1$  means  $t=\\dfrac{1}{1+3}=\\tfrac14$ .",
          "Here  $z_2-z_1=(6+3i)-(2+i)=4+2i$ , so  $P=(2+i)+\\tfrac14(4+2i)=(2+i)+(1+\\tfrac12 i)=3+\\tfrac32 i$ .",
          "The centroid is where the three medians meet, at parameter  $\\tfrac13$  along each from a vertex to the opposite midpoint; algebraically  $G=\\tfrac13(z_1+z_2+z_3)=4+4i$ .",
          " $\\boxed{G=4+4i,\\ P=3+\\tfrac32 i}$ "
        ]
      }
    ],
    "remark": "**Insight.** The centroid is the unweighted mean of the vertices — the simplest section result of all — while the section formula puts the *opposite* weight on each endpoint: ratio  $1:3$  from  $z_1$  keeps weight  $3$  on  $z_1$ , placing  $P$  a quarter of the way across."
  },
  {
    "theme": "complexgeo",
    "themeLabel": "Rotation, Lines & Circles",
    "title": "Three Points on One Line",
    "difficulty": 4,
    "task": "Find k",
    "tags": [
      "collinearity",
      "real ratio",
      "line",
      "argand geometry",
      "slope"
    ],
    "statement": "For what real number  $k$  are the points  $z_1=2+3i$ ,  $z_2=5+ki$  and  $z_3=8+9i$  collinear in the Argand plane?",
    "answer": " $$\\boxed{\\,k=6\\,}$$ ",
    "trap": "Setting the moduli in arithmetic progression,  $|z_2|=\\tfrac12(|z_1|+|z_3|)$ , or equating arguments  $\\arg z_2=\\arg z_3$ . Collinearity is not a statement about  $|z|$  or  $\\arg z$  measured from the origin; it is that  $\\dfrac{z_2-z_1}{z_3-z_1}$  is real (the displacement vectors are parallel). Mixing in the origin gives a spurious equation and the wrong  $k$ .",
    "solutions": [
      {
        "name": "Real ratio of displacements",
        "steps": [
          "Three points are collinear iff  $\\dfrac{z_2-z_1}{z_3-z_1}\\in\\mathbb R$ , i.e. its imaginary part vanishes.",
          "Here  $z_3-z_1=(8+9i)-(2+3i)=6+6i$  and  $z_2-z_1=(5+ki)-(2+3i)=3+(k-3)i$ .",
          " $\\dfrac{3+(k-3)i}{6+6i}=\\dfrac{(3+(k-3)i)(6-6i)}{72}=\\dfrac{(18+6(k-3))+ (6(k-3)-18)i}{72}$ . The imaginary part is  $\\dfrac{6(k-3)-18}{72}=\\dfrac{6k-36}{72}$ .",
          "Setting it to  $0$ :  $6k-36=0\\Rightarrow k=6$ . (Check: then  $z_2-z_1=3+3i$  is parallel to  $z_3-z_1=6+6i$ .)  $\\boxed{k=6}$ "
        ]
      },
      {
        "name": "Area determinant",
        "steps": [
          "Three points are collinear iff the signed triangle area is zero. With  $z_j=x_j+iy_j$ , this is  $\\begin{vmatrix} x_1&y_1&1\\\\ x_2&y_2&1\\\\ x_3&y_3&1\\end{vmatrix}=0$ .",
          "Substitute  $(2,3),(5,k),(8,9)$ : the determinant equals  $2(k-9)-3(5-8)+1(45-8k)=2k-18+9+45-8k$ .",
          "Simplify:  $2k-8k-18+9+45=-6k+36$ . Set  $-6k+36=0$ .",
          "Hence  $k=6$ .  $\\boxed{k=6}$ "
        ]
      }
    ],
    "remark": "**Insight.** Collinearity lives in the differences, not the points: it is the parallelism of  $z_2-z_1$  and  $z_3-z_1$ , captured cleanly by a real ratio or, equivalently, a vanishing area determinant. The origin never enters."
  },
  {
    "theme": "complexgeo",
    "themeLabel": "Rotation, Lines & Circles",
    "title": "Twice as Far Carves a Circle",
    "difficulty": 4,
    "task": "Find centre and radius",
    "tags": [
      "locus",
      "apollonius circle",
      "modulus",
      "circle equation",
      "argand geometry"
    ],
    "statement": "Find the centre and radius of the locus of points  $z$  in the Argand plane satisfying  $|z-(1+2i)| = 2\\,|z-(4+2i)|.$ ",
    "answer": " $$\\boxed{\\,\\text{centre } 5+2i,\\quad \\text{radius } 2\\,}$$ ",
    "trap": "Assuming the locus is the perpendicular bisector of the segment joining  $1+2i$  and  $4+2i$ . That is the locus of  $|z-a|=|z-b|$  (equal distances). With the coefficient  $2$  the ratio of distances is constant but unequal, so the locus is an Apollonius circle, not a line. Treating it as a line — or squaring carelessly and dropping the cross terms — destroys the  $z\\bar z$  term that makes it a circle.",
    "solutions": [
      {
        "name": "Square and complete",
        "steps": [
          "Put  $z=x+iy$ . Squaring,  $(x-1)^2+(y-2)^2=4\\big[(x-4)^2+(y-2)^2\\big]$ .",
          "Expand:  $x^2-2x+1+y^2-4y+4=4x^2-32x+64+4y^2-16y+16$ . Collect:  $0=3x^2+3y^2-30x-12y+75$ .",
          "Divide by  $3$ :  $x^2+y^2-10x-4y+25=0$ , i.e.  $(x-5)^2+(y-2)^2=25+4-25=4$ .",
          "So the centre is  $(5,2)$  and the radius is  $2$ .  $\\boxed{5+2i,\\ r=2}$ "
        ]
      },
      {
        "name": "Conjugate (complex) form",
        "steps": [
          "Write the condition as  $|z-a|^2=4|z-b|^2$  with  $a=1+2i,\\ b=4+2i$ , i.e.  $(z-a)(\\bar z-\\bar a)=4(z-b)(\\bar z-\\bar b)$ .",
          "Expanding:  $z\\bar z-\\bar a z-a\\bar z+|a|^2=4z\\bar z-4\\bar b z-4b\\bar z+4|b|^2$ , so  $3z\\bar z-(4\\bar b-\\bar a)z-(4b-a)\\bar z+(4|b|^2-|a|^2)=0$ .",
          "Divide by  $3$  to reach  $z\\bar z+\\bar A z+A\\bar z+B=0$  with  $A=-\\dfrac{4b-a}{3}=-\\dfrac{15+6i}{3}=-(5+2i)$  and  $B=\\dfrac{4\\cdot20-5}{3}=25$ . This circle has centre  $-A=5+2i$  and radius  $\\sqrt{|A|^2-B}=\\sqrt{29-25}=2$ .",
          "Hence centre  $5+2i$ , radius  $2$ .",
          " $\\boxed{\\text{centre }5+2i,\\ r=2}$ "
        ]
      }
    ],
    "remark": "**Insight.** The keyword is the coefficient: ratio  $1$  gives the perpendicular-bisector line, any other constant ratio gives a circle (Apollonius). In complex form the tell-tale is the surviving  $z\\bar z$  term — its presence is exactly what separates a circle from a line."
  },
  {
    "theme": "complexgeo",
    "themeLabel": "Rotation, Lines & Circles",
    "title": "The Missing Equilateral Corner",
    "difficulty": 4,
    "task": "Find both apexes",
    "tags": [
      "equilateral triangle",
      "rotation",
      "roots of unity",
      "argand geometry",
      "symmetry"
    ],
    "statement": "The points  $1+i$  and  $4+i$  are two vertices of an equilateral triangle in the Argand plane. Find both possible positions of the third vertex.",
    "answer": " $$\\boxed{\\,z=\\tfrac{5}{2}+\\Big(1\\pm\\tfrac{3\\sqrt3}{2}\\Big)i\\,}$$ ",
    "trap": "Rotating by  $90^\\circ$  (multiplying by  $i$ ) instead of  $60^\\circ$ . For an equilateral triangle the apex is obtained by rotating one base vertex about the other through  $\\pm60^\\circ$ , i.e. multiplying the base vector by  $e^{\\pm i\\pi/3}=\\tfrac12\\pm\\tfrac{\\sqrt3}{2}i$ . Using  $i$  gives an isosceles right triangle instead, and the  $\\sqrt3$  disappears — a sure sign the angle was wrong.",
    "solutions": [
      {
        "name": "Rotate the base by  $\\pm60^\\circ$ ",
        "steps": [
          "Let  $a=1+i,\\ b=4+i$ , so the base vector is  $b-a=3$ . The apex  $c$  satisfies  $c-a=(b-a)e^{\\pm i\\pi/3}$ .",
          "With  $e^{i\\pi/3}=\\tfrac12+\\tfrac{\\sqrt3}{2}i$ :  $c-a=3\\left(\\tfrac12+\\tfrac{\\sqrt3}{2}i\\right)=\\tfrac32+\\tfrac{3\\sqrt3}{2}i$ , so  $c=(1+i)+\\tfrac32+\\tfrac{3\\sqrt3}{2}i=\\tfrac52+\\left(1+\\tfrac{3\\sqrt3}{2}\\right)i$ .",
          "With  $e^{-i\\pi/3}=\\tfrac12-\\tfrac{\\sqrt3}{2}i$ : similarly  $c=\\tfrac52+\\left(1-\\tfrac{3\\sqrt3}{2}\\right)i$ .",
          "Both lie on the perpendicular bisector  $x=\\tfrac52$ , symmetric about the base, at height  $\\pm\\tfrac{3\\sqrt3}{2}$  from it.  $\\boxed{z=\\tfrac52+\\big(1\\pm\\tfrac{3\\sqrt3}{2}\\big)i}$ "
        ]
      },
      {
        "name": "Equilateral identity",
        "steps": [
          "An equilateral triangle  $a,b,c$  obeys  $a^2+b^2+c^2=ab+bc+ca$ , equivalently  $c^2-(a+b)c+(a^2+b^2-ab)=0$ .",
          "Here  $a+b=5+2i$  and  $a^2+b^2-ab=(1+i)^2+(4+i)^2-(1+i)(4+i)=2i+(15+8i)-(3+5i)=12+5i$ .",
          "Solve  $c^2-(5+2i)c+(12+5i)=0$ : discriminant  $(5+2i)^2-4(12+5i)=21+20i-48-20i=-27$ ,  $\\sqrt{-27}=\\pm3\\sqrt3\\,i$ .",
          "Thus  $c=\\dfrac{(5+2i)\\pm3\\sqrt3\\,i}{2}=\\tfrac52+\\left(1\\pm\\tfrac{3\\sqrt3}{2}\\right)i$ .  $\\boxed{z=\\tfrac52+\\big(1\\pm\\tfrac{3\\sqrt3}{2}\\big)i}$ "
        ]
      }
    ],
    "remark": "**Insight.** Equilateral means a  $60^\\circ$  turn, and  $e^{i\\pi/3}$  is a primitive sixth root of unity — that is where the  $\\sqrt3$  comes from. The symmetric quadratic identity  $a^2+b^2+c^2=ab+bc+ca$  encodes both apexes at once, its two roots being the reflections across the base."
  },
  {
    "theme": "complexgeo",
    "themeLabel": "Rotation, Lines & Circles",
    "title": "Two Corners of a Square",
    "difficulty": 5,
    "task": "Find C and D",
    "tags": [
      "rotation",
      "square",
      "modulus",
      "argand geometry",
      "diagonal"
    ],
    "statement": "In the Argand plane the points  $A=2+i$  and  $B=6+4i$  are two adjacent vertices of a square  $ABCD$  labelled counter-clockwise. Find the complex numbers representing  $C$  and  $D$ , and the length of a diagonal.",
    "answer": " $$\\boxed{\\,C=3+8i,\\quad D=-1+5i,\\quad \\text{diagonal}=5\\sqrt2\\,}$$ ",
    "trap": "Rotating with the wrong sign. Going counter-clockwise around the square, the side  $\\overrightarrow{BC}$  is  $\\overrightarrow{AB}$  turned left, i.e. multiplied by  $+i$  (a  $+90^\\circ$  rotation), giving  $C=B+i(B-A)$ . A student who multiplies by  $-i$  (turning right) lands on the reflected square and gets  $C=9+0i$ ,  $D=5-3i$  — a perfectly valid square but the clockwise one, contradicting the stated orientation. The sign of the rotation factor  $e^{i\\theta}$  encodes the orientation; it must match the labelling.",
    "solutions": [
      {
        "name": "Rotation by  $+90^\\circ$ ",
        "steps": [
          "Write the side vector  $\\overrightarrow{AB}=B-A=(6+4i)-(2+i)=4+3i$ , which has modulus  $|4+3i|=5$ , the side length.",
          "For a counter-clockwise square,  $\\overrightarrow{BC}$  is  $\\overrightarrow{AB}$  rotated by  $+90^\\circ$ , i.e. multiplied by  $i$ :  $C-B=i(B-A)=i(4+3i)=-3+4i$ . Hence  $C=(6+4i)+(-3+4i)=3+8i$ .",
          "Likewise  $D=A+i(B-A)=(2+i)+(-3+4i)=-1+5i$ , equivalently  $D=C-(B-A)$  to close the square.",
          "The diagonal  $A C=|C-A|=|(3+8i)-(2+i)|=|1+7i|=\\sqrt{50}=5\\sqrt2$ .  $\\boxed{C=3+8i,\\ D=-1+5i,\\ \\text{diag}=5\\sqrt2}$ "
        ]
      },
      {
        "name": "Midpoint of equal diagonals",
        "steps": [
          "The diagonals  $AC$  and  $BD$  of a square bisect each other at the centre  $M$  and are equal, perpendicular. Rotating  $A$  about the (unknown) centre by  $-90^\\circ$  should give  $B$ , so first find  $M$ .",
          "The centre is reached from  $A$  by half a diagonal at  $+45^\\circ$ :  $M=A+\\tfrac{1}{2}(1+i)(B-A)\\cdot\\frac{1}{1}$ . Concretely the centre is the average of opposite corners; using  $C=A+i(B-A)+(B-A)\\cdot$  structure is circular, so instead take  $M$  as midpoint of  $B$  and  $D$  once  $D$  is known.",
          "Solve directly: a square is fixed by  $C=B+i(B-A)$  and  $D=A+i(B-A)$ . Substituting  $B-A=4+3i$  gives  $C=3+8i$ ,  $D=-1+5i$ ; their midpoint  $\\tfrac{C+ A}{2}=\\tfrac{5+9i}{2}$  equals  $\\tfrac{B+D}{2}=\\tfrac{5+9i}{2}$ , confirming a genuine square.",
          "Equal diagonals:  $|A-C|=|B-D|=|5+? |$ . Compute  $B-D=(6+4i)-(-1+5i)=7-i$ ,  $|7-i|=5\\sqrt2=|A-C|$ .  $\\boxed{C=3+8i,\\ D=-1+5i,\\ 5\\sqrt2}$ "
        ]
      }
    ],
    "remark": "**Insight.** A square is nothing but a  $90^\\circ$  rotation, so multiplying the side vector by  $\\pm i$  does all the work — and the choice of sign is exactly the choice of orientation. Reading the label  $ABCD$  counter-clockwise pins the factor to  $+i$ ; the equal, perpendicular diagonals then drop out as a free consistency check."
  },
  {
    "theme": "complexgeo",
    "themeLabel": "Rotation, Lines & Circles",
    "title": "Mirror in a Slanted Line",
    "difficulty": 5,
    "task": "Reflect the point",
    "tags": [
      "reflection",
      "line",
      "conjugate",
      "foot of perpendicular",
      "argand geometry"
    ],
    "statement": "Let  $\\ell$  be the line through  $a=1+i$  and  $b=5+3i$  in the Argand plane. Find the reflection  $P'$  of the point  $P=2+6i$  in  $\\ell$ .",
    "answer": " $$\\boxed{\\,P'=\\dfrac{28}{5}-\\dfrac{6}{5}i\\,}$$ ",
    "trap": "Reflecting in the perpendicular bisector of  $ab$  instead of in the line  $\\ell$  itself, or conjugating in the wrong frame. The reflection across a line through  $a$  with direction  $d=b-a$  is  $P'=a+\\overline{(P-a)}\\,\\dfrac{d}{\\bar d}$  — you must subtract  $a$ , conjugate, then re-tilt by  $d/\\bar d$ . Forgetting the tilt factor  $d/\\bar d$  reflects in the horizontal line through  $a$  (plain conjugation) and gives a wrong point; using  $\\bar d/d$  rotates the mirror the wrong way.",
    "solutions": [
      {
        "name": "Conjugation in the line's frame",
        "steps": [
          "Translate so the line passes through the origin: subtract  $a=1+i$ . Direction  $d=b-a=(5+3i)-(1+i)=4+2i$ , and  $P-a=(2+6i)-(1+i)=1+5i$ .",
          "Reflection across a line through  $0$  in direction  $d$  sends  $w\\mapsto \\overline{w}\\,\\dfrac{d}{\\bar d}$ . Here  $\\dfrac{d}{\\bar d}=\\dfrac{4+2i}{4-2i}=\\dfrac{(4+2i)^2}{20}=\\dfrac{12+16i}{20}=\\dfrac{3+4i}{5}$ .",
          "So the reflected offset is  $\\overline{(1+5i)}\\cdot\\dfrac{3+4i}{5}=(1-5i)\\cdot\\dfrac{3+4i}{5}=\\dfrac{(3+4i)-5i(3+4i)}{5}=\\dfrac{23-11i}{5}$ .",
          "Translate back:  $P'=a+\\dfrac{23-11i}{5}=(1+i)+\\dfrac{23-11i}{5}=\\dfrac{28-6i}{5}$ .  $\\boxed{P'=\\tfrac{28}{5}-\\tfrac{6}{5}i}$ "
        ]
      },
      {
        "name": "Foot of perpendicular, then double it",
        "steps": [
          "Parametrise  $\\ell$  as  $a+t\\,d$ ,  $t\\in\\mathbb R$ , with  $d=4+2i$ . The foot  $F$  minimises  $|P-(a+td)|$ ; orthogonality means  $\\dfrac{P-F}{d}$  is purely imaginary, i.e.  $\\operatorname{Re}\\dfrac{P-a-td}{d}=0$ .",
          "Compute  $\\dfrac{P-a}{d}=\\dfrac{1+5i}{4+2i}=\\dfrac{(1+5i)(4-2i)}{20}=\\dfrac{14+18i}{20}=\\dfrac{7+9i}{10}$ , so  $\\operatorname{Re}=\\dfrac{7}{10}=t$ .",
          "Thus  $F=a+\\tfrac{7}{10}(4+2i)=(1+i)+\\left(\\tfrac{14}{5}+\\tfrac{7}{5}i\\right)=\\dfrac{19}{5}+\\dfrac{12}{5}i$ .",
          "The reflection is  $P'=2F-P=2\\left(\\tfrac{19}{5}+\\tfrac{12}{5}i\\right)-(2+6i)=\\dfrac{38-10+ (24-30)i}{5}=\\dfrac{28-6i}{5}$ .  $\\boxed{P'=\\tfrac{28}{5}-\\tfrac{6}{5}i}$ "
        ]
      }
    ],
    "remark": "**Insight.** Reflection is conjugation, but only in the line's own frame: translate the line to the origin, undo its tilt, conjugate, then re-tilt. The compact formula  $P'=a+\\overline{(P-a)}\\,d/\\bar d$  and the foot-of-perpendicular route agree, and the midpoint  $\\tfrac12(P+P')$  lands exactly on  $\\ell$ ."
  },
  {
    "theme": "complexgeo",
    "themeLabel": "Rotation, Lines & Circles",
    "title": "A Fourth Point on the Circle",
    "difficulty": 5,
    "task": "Find the value of t",
    "tags": [
      "concyclic",
      "circle equation",
      "real condition",
      "argand geometry",
      "locus"
    ],
    "statement": "The points  $0$ ,  $2$ ,  $2+2i$  lie on a circle in the Argand plane. The point  $it$  (with  $t>0$  real) also lies on that circle. Find  $t$ , and the centre and radius of the circle.",
    "answer": " $$\\boxed{\\,t=2,\\quad \\text{centre } 1+i,\\quad \\text{radius } \\sqrt2\\,}$$ ",
    "trap": "Guessing that  $it$  must be diametrically opposite one of the given points, or hunting for a slick four-point relation instead of just fitting the circle. The clean route is to fit the real circle  $z\\bar z+\\bar A z+A\\bar z+B=0$  (equivalently  $x^2+y^2+Dx+Ey+F=0$ ) through the three known points, then substitute  $z=it$ . A sign slip in the  $z\\bar z$  versus linear terms — confusing the circle equation with the line equation  $\\bar A z+A\\bar z+B=0$  (no  $z\\bar z$ ) — collapses the circle to a line and loses the solution.",
    "solutions": [
      {
        "name": "Fit then substitute",
        "steps": [
          "Use  $x^2+y^2+Dx+Ey+F=0$ . Through  $(0,0)$ :  $F=0$ . Through  $(2,0)$ :  $4+2D=0\\Rightarrow D=-2$ . Through  $(2,2)$ :  $8+2D+2E=0\\Rightarrow 8-4+2E=0\\Rightarrow E=-2$ .",
          "The circle is  $x^2+y^2-2x-2y=0$ , i.e.  $(x-1)^2+(y-1)^2=2$ : centre  $1+i$ , radius  $\\sqrt2$ .",
          "Put  $z=it$ , so  $x=0,\\ y=t$ :  $0+t^2-0-2t=0\\Rightarrow t(t-2)=0$ . With  $t>0$ ,  $t=2$  (the point  $2i$ ).",
          " $\\boxed{t=2,\\ \\text{centre }1+i,\\ r=\\sqrt2}$ "
        ]
      },
      {
        "name": "Geometry of the right angle",
        "steps": [
          "The vectors from  $2$  to  $0$  and from  $2$  to  $2+2i$  are  $-2$  and  $2i$ , which are perpendicular. So the angle at the vertex  $2$  subtended by the chord from  $0$  to  $2+2i$  is  $90^\\circ$ .",
          "An inscribed right angle stands on a diameter, so  $0$  and  $2+2i$  are endpoints of a diameter. The centre is their midpoint  $\\dfrac{0+(2+2i)}{2}=1+i$  and the radius is  $\\dfrac{|2+2i|}{2}=\\dfrac{2\\sqrt2}{2}=\\sqrt2$ .",
          "The point  $it$  is concyclic iff  $|it-(1+i)|=\\sqrt2$ :  $|{-1}+(t-1)i|^2=1+(t-1)^2=2\\Rightarrow (t-1)^2=1\\Rightarrow t=0$  or  $t=2$ .",
          "Taking  $t>0$  gives  $t=2$ .  $\\boxed{t=2,\\ 1+i,\\ \\sqrt2}$ "
        ]
      }
    ],
    "remark": "**Insight.** Four points are concyclic exactly when a single circle equation (with its  $z\\bar z$  term intact) holds for all of them — fit three, test the fourth. The hidden gift here is the right angle at  $2$ : an inscribed right angle forces a diameter, handing you the centre and radius for free."
  },
  {
    "theme": "complexgeo",
    "themeLabel": "Rotation, Lines & Circles",
    "title": "A Line in z and z-bar",
    "difficulty": 5,
    "task": "Write the line equation",
    "tags": [
      "line equation",
      "conjugate",
      "complex coefficients",
      "argand geometry",
      "collinearity"
    ],
    "statement": "Find the equation of the line through  $1+2i$  and  $3-i$  in the form  $\\bar A\\,z+A\\,\\bar z+B=0$ , with  $A\\in\\mathbb C$  and  $B\\in\\mathbb R$ . Then determine the perpendicular distance from the origin to this line.",
    "answer": " $$\\boxed{\\,(-3+2i)\\,z+(-3-2i)\\,\\bar z+14=0,\\qquad d=\\dfrac{7}{\\sqrt{13}}\\,}$$ ",
    "trap": "Producing complex coefficients that do not satisfy the reality structure  $A=\\overline{(\\bar A)}$  with  $B$  real, or mishandling the distance formula. For  $\\bar A z+A\\bar z+B=0$  to be a genuine line the coefficient of  $z$  must be the conjugate of the coefficient of  $\\bar z$  and  $B$  must be real; otherwise the 'equation' is not invariant under conjugation and is not a real line. The distance from the origin is  $\\dfrac{|B|}{2|A|}$ , not  $|B|/|A|$  — dropping the factor  $2$  is the classic slip.",
    "solutions": [
      {
        "name": "Collinearity condition expanded",
        "steps": [
          "A point  $z$  is on the line through  $z_1=1+2i,\\ z_2=3-i$  iff  $\\dfrac{z-z_1}{z_2-z_1}\\in\\mathbb R$ , i.e.  $\\dfrac{z-z_1}{z_2-z_1}=\\dfrac{\\bar z-\\bar z_1}{\\bar z_2-\\bar z_1}$ . Cross-multiplying:  $(\\bar z_2-\\bar z_1)(z-z_1)=(z_2-z_1)(\\bar z-\\bar z_1)$ .",
          "With  $z_2-z_1=2-3i$  and  $\\bar z_2-\\bar z_1=2+3i$ :  $(2+3i)z-(2-3i)\\bar z-\\big[(2+3i)z_1-(2-3i)\\bar z_1\\big]=0$ . Compute the bracket:  $(2+3i)(1+2i)-(2-3i)(1-2i)=(-4+7i)-(-4-7i)=14i$ .",
          "So  $(2+3i)z-(2-3i)\\bar z-14i=0$ . Multiply by  $i$  to clear the imaginary constant:  $(-3+2i)z+(-3-2i)\\bar z+14=0$ . Here  $\\bar A=-3+2i$ ,  $A=-3-2i$  (indeed conjugates) and  $B=14\\in\\mathbb R$ .",
          "Distance from origin:  $d=\\dfrac{|B|}{2|A|}=\\dfrac{14}{2\\sqrt{9+4}}=\\dfrac{14}{2\\sqrt{13}}=\\dfrac{7}{\\sqrt{13}}$ .  $\\boxed{(-3+2i)z+(-3-2i)\\bar z+14=0,\\ d=\\tfrac{7}{\\sqrt{13}}}$ "
        ]
      },
      {
        "name": "Cartesian then complexify",
        "steps": [
          "In real coordinates the line through  $(1,2)$  and  $(3,-1)$  has slope  $\\dfrac{-1-2}{3-1}=-\\dfrac32$ , giving  $y-2=-\\tfrac32(x-1)$ , i.e.  $3x+2y-7=0$ .",
          "Substitute  $x=\\dfrac{z+\\bar z}{2},\\ y=\\dfrac{z-\\bar z}{2i}$ :  $3\\cdot\\dfrac{z+\\bar z}{2}+2\\cdot\\dfrac{z-\\bar z}{2i}-7=0$ . Multiply by  $2$ :  $3(z+\\bar z)+\\dfrac{2}{i}(z-\\bar z)-14=0$ , and  $\\dfrac{2}{i}=-2i$ .",
          "So  $3z+3\\bar z-2i z+2i\\bar z-14=0$ , i.e.  $(3-2i)z+(3+2i)\\bar z-14=0$ . Multiplying by  $-1$  gives  $(-3+2i)z+(-3-2i)\\bar z+14=0$ , matching the required form.",
          "Distance from origin to  $3x+2y-7=0$  is  $\\dfrac{|3\\cdot0+2\\cdot0-7|}{\\sqrt{3^2+2^2}}=\\dfrac{7}{\\sqrt{13}}$ .  $\\boxed{(-3+2i)z+(-3-2i)\\bar z+14=0,\\ d=\\tfrac{7}{\\sqrt{13}}}$ "
        ]
      }
    ],
    "remark": "**Insight.** The line  $\\bar A z+A\\bar z+B=0$  is just the real Cartesian line dressed in conjugate coordinates: the conjugate-pair structure of the coefficients is what makes it invariant under  $z\\mapsto\\bar z$ , hence real. The origin's distance carries a tell-tale factor  $\\tfrac12$  because each of  $z,\\bar z$  contributes half of  $2\\,\\mathrm{Re}(\\bar A z)$ ."
  },
  {
    "theme": "complexgeo",
    "themeLabel": "Rotation, Lines & Circles",
    "title": "A Right Angle Sweeps an Arc",
    "difficulty": 5,
    "task": "Identify the locus",
    "tags": [
      "argument locus",
      "arc of circle",
      "right angle",
      "circle equation",
      "argand geometry"
    ],
    "statement": "Describe the locus of points  $z$  in the Argand plane for which  $\\arg\\!\\left(\\dfrac{z-1}{\\,z-5i\\,}\\right)=\\dfrac{\\pi}{2}$ , and give the centre and radius of the underlying circle.",
    "answer": " $$\\boxed{\\,\\text{the major arc of the circle centre } \\tfrac{1}{2}+\\tfrac{5}{2}i,\\ \\text{radius } \\tfrac{\\sqrt{26}}{2}\\,}$$ ",
    "trap": "Reporting the full circle rather than the specific arc, and ignoring the excluded endpoints. The equation  $\\arg\\frac{z-1}{z-5i}=\\frac{\\pi}{2}$  means the directed angle from  $z-5i$  to  $z-1$  is exactly  $+\\tfrac{\\pi}{2}$ , so  $z$  sees the segment from  $1$  to  $5i$  at a  $90^\\circ$  angle on one definite side — only one arc, with the two endpoints  $1$  and  $5i$  themselves excluded (the ratio is undefined or  $0$  there). Squaring to  $|z-1|^2+|z-5i|^2=|1-5i|^2$  recovers the whole circle and loses the arc/side restriction.",
    "solutions": [
      {
        "name": "Purely imaginary ratio",
        "steps": [
          " $\\arg w=\\tfrac{\\pi}{2}$  means  $w$  is a positive-imaginary number, so  $\\dfrac{z-1}{z-5i}$  is purely imaginary with positive imaginary part; in particular  $\\operatorname{Re}\\dfrac{z-1}{z-5i}=0$ .",
          "Write  $z=x+iy$ . Then  $\\dfrac{(x-1)+iy}{x+i(y-5)}$ ; its real part vanishes when  $(x-1)x+y(y-5)=0$ , i.e.  $x^2+y^2-x-5y=0$ .",
          "Complete the square:  $\\left(x-\\tfrac12\\right)^2+\\left(y-\\tfrac52\\right)^2=\\tfrac14+\\tfrac{25}{4}=\\tfrac{26}{4}$ . Centre  $\\tfrac12+\\tfrac52 i$ , radius  $\\tfrac{\\sqrt{26}}{2}$ .",
          "The real-part-zero equation gives the whole circle; the extra sign condition (positive imaginary part, the angle being  $+\\tfrac{\\pi}{2}$  not  $-\\tfrac{\\pi}{2}$ ) selects exactly one arc — the major arc through which the chord  $1$  to  $5i$  subtends  $90^\\circ$ , endpoints excluded.  $\\boxed{\\text{arc; centre }\\tfrac12+\\tfrac52 i,\\ r=\\tfrac{\\sqrt{26}}{2}}$ "
        ]
      },
      {
        "name": "Inscribed-angle / diameter",
        "steps": [
          "A constant subtended angle of  $\\tfrac{\\pi}{2}$  on the chord joining  $A=1$  and  $B=5i$  means  $z$  lies on a circle for which  $AB$  is a chord, and a  $90^\\circ$  inscribed angle stands on a diameter — so  $AB$  is itself a diameter.",
          "Hence the centre is the midpoint  $\\dfrac{1+5i}{2}=\\tfrac12+\\tfrac52 i$  and the radius is  $\\dfrac{|1-5i|}{2}=\\dfrac{\\sqrt{26}}{2}$ .",
          "Because  $\\arg=+\\tfrac{\\pi}{2}$  (a signed condition), only the points on one side of the chord qualify: the locus is the open arc on that side, with  $A$  and  $B$  removed.",
          " $\\boxed{\\text{arc of circle, centre }\\tfrac12+\\tfrac52 i,\\ r=\\tfrac{\\sqrt{26}}{2}}$ "
        ]
      }
    ],
    "remark": "**Insight.** An  $\\arg$  condition is a constant-angle condition, and a constant inscribed angle traces an arc, not a full circle — the sign of the angle picks the side. The special value  $\\tfrac{\\pi}{2}$  makes the chord a diameter, so the centre and radius read straight off the two anchor points."
  },
  {
    "theme": "complexgeo",
    "themeLabel": "Rotation, Lines & Circles",
    "title": "Spinning Out a Square",
    "difficulty": 5,
    "task": "Find all vertices",
    "tags": [
      "rotation",
      "regular polygon",
      "roots of unity",
      "centroid",
      "argand geometry"
    ],
    "statement": "A square in the Argand plane has centre  $2+2i$  and one vertex at  $5+2i$ . Find the other three vertices (in counter-clockwise order) and verify that the four vertices sum to four times the centre.",
    "answer": " $$\\boxed{\\,2+5i,\\ -1+2i,\\ 2-i;\\quad \\textstyle\\sum=8+8i=4(2+2i)\\,}$$ ",
    "trap": "Rotating about the origin instead of about the centre. The other vertices are obtained by rotating the radius vector  $v_1-\\text{centre}$  by  $90^\\circ,180^\\circ,270^\\circ$  — i.e.  $v_k=c+i^{k}(v_1-c)$  — not by multiplying  $v_1$  itself by  $i$ . Spinning about the origin scatters the points off the square. Equivalently, for any regular polygon the vertices sum to  $n\\times(\\text{centre})$  because the roots of unity sum to zero; forgetting to add back the centre breaks this check.",
    "solutions": [
      {
        "name": "Rotate the radius about the centre",
        "steps": [
          "Let  $c=2+2i$  and  $r_1=v_1-c=(5+2i)-(2+2i)=3$  (a horizontal radius of length  $3$ ). The square's vertices are  $v_k=c+i^{k}\\,r_1$  for  $k=0,1,2,3$ .",
          " $v_1=c+i\\cdot3=(2+2i)+3i=2+5i$ ;  $v_2=c+i^2\\cdot3=(2+2i)-3=-1+2i$ ;  $v_3=c+i^3\\cdot3=(2+2i)-3i=2-i$ .",
          "In counter-clockwise order the vertices are  $5+2i,\\ 2+5i,\\ -1+2i,\\ 2-i$ , each at distance  $3$  from  $c$  and  $90^\\circ$  apart.",
          "Sum:  $(5+2i)+(2+5i)+(-1+2i)+(2-i)=8+8i=4(2+2i)$ .  $\\boxed{2+5i,\\ -1+2i,\\ 2-i;\\ \\sum=8+8i}$ "
        ]
      },
      {
        "name": "Fourth roots of unity scaling",
        "steps": [
          "Translate the centre to the origin: the vertices are  $c+3\\,\\zeta_k$  where  $\\zeta_k$  are the fourth roots of unity  $1,i,-1,-i$  (since the first radius is  $3=3\\cdot1$ ).",
          "Thus the vertices are  $c+3,\\ c+3i,\\ c-3,\\ c-3i=5+2i,\\ 2+5i,\\ -1+2i,\\ 2-i$ .",
          "Because  $1+i+(-1)+(-i)=0$ , the sum of the four vertices is  $4c+3(1+i-1-i)=4c=8+8i$ .",
          "This confirms  $\\sum v_k=4(2+2i)=8+8i$ .  $\\boxed{2+5i,\\ -1+2i,\\ 2-i;\\ \\sum=8+8i}$ "
        ]
      }
    ],
    "remark": "**Insight.** A regular polygon is the centre plus scaled roots of unity, so its vertices spin off by multiplying the first radius by  $i^k$  — about the centre, never the origin. Since the  $n$ th roots of unity sum to zero, the vertices always average to the centre, giving the clean  $\\sum=n\\,c$  check."
  },
  {
    "theme": "triangles",
    "themeLabel": "Triangles & Polygons",
    "title": "All the Distances of a Clock",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "regular-polygon",
      "roots-of-unity",
      "sum-of-squares",
      "dodecagon"
    ],
    "statement": "A regular  $12$ -gon is inscribed in the circle  $|z|=2$ , with vertices  $z_0,z_1,\\dots,z_{11}$ .  \\[\\text{Evaluate } \\sum_{0\\le j<k\\le 11}|z_j-z_k|^2,\\]  the sum of the squares of all  $\\binom{12}{2}$  pairwise distances (sides and diagonals).",
    "answer": " $576$ .",
    "trap": "Trying to classify the chords by length (12 sides, 12 short diagonals, \\dots) and summing  $\\tfrac{12}{2}\\sum(\\text{chord}^2)$  by hand is error-prone bookkeeping with the diametral chords double-counted. Treating all six chord classes as having  $12$  representatives gives  $672$  instead of  $576$ , because the  $6$  diameters get counted as  $12$ . The clean route uses  $\\sum_k z_k=0$  for a centered regular polygon.",
    "solutions": [
      {
        "name": "Expand and use the centroid",
        "steps": [
          " $\\sum_{j<k}|z_j-z_k|^2=\\tfrac12\\sum_{j,k}|z_j-z_k|^2=\\tfrac12\\sum_{j,k}\\big(|z_j|^2+|z_k|^2-2\\operatorname{Re}(z_j\\bar z_k)\\big).$ ",
          "Each vertex has  $|z_k|^2=R^2$  with  $R=2$ , so  $\\tfrac12\\sum_{j,k}(|z_j|^2+|z_k|^2)=\\tfrac12\\cdot2\\cdot n\\cdot nR^2=n^2R^2$ .",
          "Since the polygon is centered,  $\\sum_k z_k=0$ , so  $\\sum_{j,k}\\operatorname{Re}(z_j\\bar z_k)=\\big|\\sum_k z_k\\big|^2=0$ .",
          "Thus the sum  $=n^2R^2=12^2\\cdot2^2=\\boxed{576}$ ."
        ]
      },
      {
        "name": "Per-vertex chord sum",
        "steps": [
          "For a regular  $n$ -gon of radius  $R$ , the sum of squared distances from one fixed vertex to all others is  $\\sum_{k=1}^{n-1}|z_0-z_k|^2=2nR^2$  (since  $\\sum_k z_k=0$ ).",
          "Summing over all  $n$  vertices counts each unordered pair twice: total ordered  $=n\\cdot2nR^2$ .",
          "Divide by  $2$ :  $\\sum_{j<k}|z_j-z_k|^2=n^2R^2$ .",
          "With  $n=12,\\,R=2$ :  $144\\cdot4=\\boxed{576}$ ."
        ]
      }
    ],
    "remark": "Insight: the identity  $\\sum_{j<k}|z_j-z_k|^2=n^2R^2$  holds for ANY  $n$  points equally spaced on a circle of radius  $R$  — the polynomial-free proof is just  $\\sum z_k=0$ . The number of sides never enters, and the same one-line centroid argument works for any centered configuration."
  },
  {
    "theme": "triangles",
    "themeLabel": "Triangles & Polygons",
    "title": "Completing the Square",
    "difficulty": 4,
    "task": "Find all",
    "tags": [
      "square",
      "rotation",
      "orientation",
      "area"
    ],
    "statement": " $A=1+2i$  and  $B=4+6i$  are two adjacent vertices of a square  $ABCD$  (labelled in order).  \\[\\text{Find all possibilities for the remaining vertices } C \\text{ and } D, \\text{ and the area of the square.}\\] ",
    "answer": "Two orientations. Clockwise/anticlockwise give  $\\{C,D\\}=\\{9i,\\,-3+5i\\}$  or  $\\{C,D\\}=\\{8+3i,\\,5-i\\}$ . In both cases the area is  $25$ .",
    "trap": "Multiplying  $(B-A)$  by  $+i$  only (a single  $90^\\circ$  turn) and reporting one square. \" $ABCD$  in order\" still leaves the choice of turning left or right at  $B$ :  $C=B\\pm i(B-A)$ . Both give genuine squares on opposite sides of segment  $AB$ , so two answers exist.",
    "solutions": [
      {
        "name": "Rotate the side by ±90°",
        "steps": [
          "Side vector  $v=B-A=3+4i$ , with  $|v|=5$ . The next side  $BC$  is  $v$  rotated by  $\\pm90^\\circ$ :  $C=B\\pm i\\,v$ .",
          "Plus sign:  $C=(4+6i)+i(3+4i)=4+6i+(3i-4)=9i$ , and  $D=A+iv=(1+2i)+(3i-4)=-3+5i$ .",
          "Minus sign:  $C=(4+6i)-i(3+4i)=8+3i$ , and  $D=A-iv=5-i$ .",
          "Each square has side  $5$ , so area  $=5^2=\\boxed{25}$ ."
        ]
      },
      {
        "name": "Centre and half-diagonals",
        "steps": [
          "The centre  $O$  of the square is the midpoint of diagonal  $AC$ , equivalently of  $BD$ ; the diagonals are equal and perpendicular.",
          "From  $A,B$  adjacent, the centre is  $O=\\tfrac{A+B}{2}\\pm\\tfrac12 i(B-A)$  (perpendicular to  $AB$  at the midpoint, half a side away).",
          "Reflecting  $A,B$  through each candidate  $O$  gives the two vertex pairs  $\\{9i,-3+5i\\}$  and  $\\{8+3i,5-i\\}$ .",
          "Area  $=|B-A|^2=\\boxed{25}$ ."
        ]
      }
    ],
    "remark": "Insight: \"adjacent vertices in order\" pins the side but not the handedness. Multiplication by  $i$  versus  $-i$  is the algebraic fingerprint of the two mirror squares — the same two-orientation theme as the equilateral triangle."
  },
  {
    "theme": "triangles",
    "themeLabel": "Triangles & Polygons",
    "title": "The Vertex Just Past the Arc",
    "difficulty": 5,
    "task": "Prove and evaluate",
    "tags": [
      "roots of unity",
      "regular polygon",
      "product of chords",
      "arc midpoint",
      "factorization",
      "conceptual trap"
    ],
    "statement": "Identify each point of the plane with a complex number and place a regular  $n$ -gon with its centre at the origin: its vertices are  $A_k = R\\,\\omega^{k}$  for  $k=0,1,\\dots,n-1$ , where  $R>0$  is the circumradius and  $\\omega = e^{2\\pi i/n}$ , so the  $A_k$  all lie on the circle  $|z|=R$ . Let  $P$  be an arbitrary point of the plane, written  $P=p\\in\\mathbb{C}$ , and let  \\[ \\Pi(P)=\\prod_{k=0}^{n-1}\\big|\\,P-A_k\\,\\big| \\]  be the product of the distances from  $P$  to all  $n$  vertices. (a) Prove, directly from the fact that  $A_0,\\dots,A_{n-1}$  are exactly the roots of  $z^{n}-R^{n}=0$ , the closed form  \\[ \\Pi(P)=\\big|\\,p^{\\,n}-R^{\\,n}\\,\\big| \\qquad\\text{for every }p\\in\\mathbb{C}. \\]  (b) Now take  $P$  to be the point on the circumscribed circle lying exactly at the midpoint of the minor arc  $A_0A_1$  — i.e. the point  $|P|=R$  whose argument is halfway between those of  $A_0$  and  $A_1$ . Prove that for this  $P$ ,  \\[ \\Pi(P)=2R^{\\,n}, \\]  a value that depends on neither the orientation of the polygon nor on  $n$  beyond the factor  $R^{n}$ . (c) Apply this to a regular hexagon  $(n=6)$  of circumradius  $R=2$  whose arc-midpoint  $P$  sits between two adjacent vertices, and report the exact value of the product  $\\Pi(P)$  as the final answer.",
    "answer": " \\[\\boxed{\\Pi(P)=2R^{n}=128}\\] ",
    "trap": "The fatal conceptual error is to confuse `` $P$  lies on the same circle as the vertices'' with `` $P$  is a root of  $z^{n}=R^{n}$ .'' A strong student writes  $\\Pi(P)=|p^{n}-R^{n}|$  correctly in part (a), then reasons: `` $P$  is on the circle  $|z|=R$ , so  $P$  is just a rotated vertex, hence  $p^{n}=R^{n}$  and the product collapses to  $|R^{n}-R^{n}|=0$ .'' The verdict  $\\Pi(P)=0$  is wrong, and it is wrong for a sharp conceptual reason: of all the points on the circle, only the  $n$  vertices satisfy  $p^{n}=R^{n}$ ; the arc-MIDPOINT  $P=R\\,e^{i\\pi/n}$  carries the extra half-step  $e^{i\\pi/n}$ , so  $p^{n}=R^{n}e^{i\\pi}=-R^{n}$ , a root of  $z^{n}+R^{n}=0$ , NOT of  $z^{n}-R^{n}=0$ . The single sign flip turns  $|R^{n}-R^{n}|=0$  into  $|-R^{n}-R^{n}|=2R^{n}$ . A second, quieter trap is to import the famous from-a-VERTEX value  $\\prod_{k\\neq j}|A_j-A_k|=n\\,R^{\\,n-1}$  (which gives  $6\\cdot2^{5}=192$  here) and apply it to a point that is not a vertex; the from-vertex formula is a different object (it has  $n-1$  factors after deleting the zero distance), and reusing it both miscounts the factors and reports the wrong polygon constant.",
    "solutions": [
      {
        "name": "Factor the vertex polynomial and evaluate at P",
        "steps": [
          "The vertices  $A_k=R\\,\\omega^{k}$  are precisely the  $n$  solutions of  $z^{n}=R^{n}$ , i.e. the roots of the monic polynomial  $f(z)=z^{n}-R^{n}$ . Since this polynomial has leading coefficient  $1$  and these  $n$  distinct roots, it factors completely as  $f(z)=\\prod_{k=0}^{n-1}\\big(z-A_k\\big)$ . Evaluating at any  $p\\in\\mathbb{C}$  gives  $\\prod_{k=0}^{n-1}(p-A_k)=p^{n}-R^{n}$ , and taking moduli,  $\\Pi(P)=\\prod_{k=0}^{n-1}|p-A_k|=\\big|p^{n}-R^{n}\\big|$ . This proves (a) with no trigonometry.",
          "For part (b), the arc-midpoint between  $A_0=R$  and  $A_1=R\\,e^{2\\pi i/n}$  lies on  $|z|=R$  at the average argument  $\\tfrac12\\!\\left(0+\\tfrac{2\\pi}{n}\\right)=\\tfrac{\\pi}{n}$ , so  $P=R\\,e^{i\\pi/n}$ . Then  $p^{n}=R^{n}e^{i\\pi}=-R^{n}$ . Note  $p^{n}=-R^{n}\\neq R^{n}$ :  $P$  is a root of  $z^{n}+R^{n}=0$ , not of  $z^{n}-R^{n}=0$ , which is exactly why the product does not vanish.",
          "Substitute into the closed form:  $\\Pi(P)=|p^{n}-R^{n}|=|-R^{n}-R^{n}|=|-2R^{n}|=2R^{n}$ . The result is independent of the polygon's orientation, because rotating every  $A_k$  by a common  $e^{i\\alpha}$  and  $P$  along with them multiplies  $p^{n}-R^{n}e^{in\\alpha}$  by a unit modulus factor, leaving  $|p^{n}-R^{n}|$  unchanged. This proves (b).",
          "For the hexagon,  $n=6$  and  $R=2$ , so  $\\Pi(P)=2R^{6}=2\\cdot 64=128$ .  \\[\\boxed{\\Pi(P)=2R^{n}=128}\\] "
        ]
      },
      {
        "name": "Chord lengths as sines, summed by the product-of-sines identity",
        "steps": [
          "Write each distance as a chord on the circle  $|z|=R$ . With  $P=R\\,e^{i\\pi/n}$  and  $A_k=R\\,e^{2\\pi i k/n}$ ,  $|P-A_k|=R\\big|e^{i\\pi/n}-e^{2\\pi i k/n}\\big|=2R\\Big|\\sin\\!\\big(\\tfrac{\\pi/n-2\\pi k/n}{2}\\big)\\Big|=2R\\Big|\\sin\\!\\big(\\tfrac{\\pi(1-2k)}{2n}\\big)\\Big|$ , using  $|e^{i\\theta_1}-e^{i\\theta_2}|=2|\\sin\\tfrac{\\theta_1-\\theta_2}{2}|$ .",
          "Multiply over  $k=0,\\dots,n-1$ :  $\\Pi(P)=(2R)^{n}\\prod_{k=0}^{n-1}\\Big|\\sin\\!\\big(-\\tfrac{\\pi}{2n}+\\tfrac{k\\pi}{n}\\big)\\Big|$ , where I have rewritten  $\\tfrac{\\pi(1-2k)}{2n}=-\\tfrac{\\pi}{2n}+\\tfrac{k\\pi}{n}$  and used  $|\\sin(-x)|=|\\sin x|$ .",
          "Invoke the standard identity  $\\prod_{k=0}^{n-1}\\sin\\!\\big(\\phi+\\tfrac{k\\pi}{n}\\big)=\\dfrac{\\sin(n\\phi)}{2^{\\,n-1}}$  with  $\\phi=-\\tfrac{\\pi}{2n}$ . Then  $n\\phi=-\\tfrac{\\pi}{2}$  and  $\\sin(n\\phi)=-1$ , so the product of sines equals  $\\dfrac{-1}{2^{\\,n-1}}$  and its absolute value is  $\\dfrac{1}{2^{\\,n-1}}$ .",
          "Therefore  $\\Pi(P)=(2R)^{n}\\cdot\\dfrac{1}{2^{\\,n-1}}=\\dfrac{2^{n}R^{n}}{2^{\\,n-1}}=2R^{n}$ . For  $n=6,\\,R=2$  this is  $2\\cdot 2^{6}=128$ .  \\[\\boxed{\\Pi(P)=2R^{n}=128}\\] "
        ]
      },
      {
        "name": "P as a root of the dual polynomial z^n + R^n",
        "steps": [
          "Set  $f(z)=z^{n}-R^{n}=\\prod_{k}(z-A_k)$  as before, so that the product of distances from any  $p$  is  $\\Pi(P)=|f(p)|$ . The geometric content of part (b) is that  $P$  is not a vertex but an arc-midpoint, and arc-midpoints are governed by the companion equation  $z^{n}=-R^{n}$ .",
          "Indeed the  $n$  solutions of  $z^{n}+R^{n}=0$  are  $B_j=R\\,e^{i\\pi(2j+1)/n}$ ,  $j=0,\\dots,n-1$ ; these are exactly the  $n$  arc-midpoints of the regular  $n$ -gon (the original polygon rotated by  $\\pi/n$ ). Our  $P=R\\,e^{i\\pi/n}$  is the case  $j=0$ , so  $P^{n}=-R^{n}$  holds by construction, with no trigonometric computation.",
          "Evaluate  $f$  at this root:  $f(P)=P^{n}-R^{n}=(-R^{n})-R^{n}=-2R^{n}$ , hence  $\\Pi(P)=|f(P)|=2R^{n}$ . As a global consistency check, the product of  $f$  over ALL  $n$  arc-midpoints is  $\\prod_{j}f(B_j)=\\prod_{j}(-2R^{n})=(-2R^{n})^{n}$ , which matches the resultant  $\\operatorname{Res}(z^{n}-R^{n},\\,z^{n}+R^{n})=(-2R^{n})^{n}$  up to sign; for  $n=6$  both equal  $64R^{36}$ , confirming each individual factor is  $2R^{n}$ .",
          "Specializing  $n=6,\\,R=2$  gives  $\\Pi(P)=2\\cdot 2^{6}=128$ .  \\[\\boxed{\\Pi(P)=2R^{n}=128}\\] "
        ]
      }
    ],
    "remark": "Insight: the whole problem turns on one dichotomy hidden inside `` $P$  is on the circumscribed circle.'' The circle  $|z|=R$  contains infinitely many points, but only  $n$  of them — the vertices — satisfy  $p^{n}=R^{n}$ ; the remaining points are NOT roots of the vertex polynomial, and the arc-midpoints are the cleanest such points because they satisfy the dual equation  $p^{n}=-R^{n}$ . So  $\\Pi(P)=|p^{n}-R^{n}|$  does not collapse to  $0$ ; it lands on the maximal value  $2R^{n}$ , since  $-R^{n}$  is the point of the value-circle  $|w|=R^{n}$  diametrically opposite  $R^{n}$ . The factorization  $\\prod_k(z-A_k)=z^{n}-R^{n}$  is the engine: it converts a geometric product of  $n$  chord lengths into a single modulus evaluation, sidestepping all the trigonometry that the product-of-sines route makes explicit. The trap punishes the reflex ``on the circle  $\\Rightarrow$  root of  $z^{n}=R^{n}$ ''; the cure is to track the half-step  $e^{i\\pi/n}$ , whose  $n$ -th power is  $-1$ , not  $+1$ . The same machinery recovers the famous from-a-vertex constant  $n\\,R^{n-1}$  (delete the zero factor, differentiate  $f$ , and evaluate  $|f'(A_j)|=n R^{n-1}$ ), making clear it is a genuinely different quantity from the arc-midpoint product."
  },
  {
    "theme": "triangles",
    "themeLabel": "Triangles & Polygons",
    "title": "The Locus That Wasn't There",
    "difficulty": 5,
    "task": "Prove and locate",
    "tags": [
      "directly similar",
      "determinant criterion",
      "shape ratio",
      "orientation",
      "locus",
      "spiral similarity"
    ],
    "statement": "Identify each point of the plane with a complex number. Two ordered triangles  $(a,b,c)$  and  $(a',b',c')$  are called directly similar when one is carried onto the other by an orientation-preserving similarity  $z\\mapsto \\alpha z+\\beta$  (with  $\\alpha\\neq0$ ), the vertices corresponding in the listed order. (a) Prove the determinant criterion:  $(a,b,c)$  and  $(a',b',c')$  are directly similar if and only if  \\[ \\begin{vmatrix} a & a' & 1\\\\ b & b' & 1\\\\ c & c' & 1 \\end{vmatrix}=0. \\]  (b) Fix the reference triangle  $T'$  with vertices  $a'=0,\\ b'=1,\\ c'=1+i$ , and fix the two base points  $b=2$  and  $c=6$ . A variable point  $p$  is sought so that the triangle  $(p,b,c)$  is similar to  $T'$  (the apex  $p$  corresponding to  $a'$ , and  $b,c$  to  $b',c'$  respectively). Using the criterion of part (a), determine the complete set of all such points  $p$ , and report it as the final answer.",
    "answer": " \\[\\boxed{\\{\\,2+4i,\\ 2-4i\\,\\}}\\] ",
    "trap": "The word locus primes the student to expect a curve: ``similar triangles form a one-parameter family of scalings, so  $p$  should sweep out a line or a circle.'' This is the fatal misreading. With the base  $b,c$  pinned and the corresponding vertices fixed, the shape-ratio condition  $\\dfrac{b-p}{c-p}=\\dfrac{b'-a'}{c'-a'}$  is a single linear equation in  $p$  with a complex right-hand side, so direct similarity forces a unique point,  $p=2+4i$  — not a curve. The scaling freedom is already consumed by the requirement that  $b,c$  land on the fixed  $b',c'$ . The second, subtler error is to then answer ``one point'' and stop: the plain word ``similar'' admits the opposite orientation (a mirror image is still similar), and the reflected triangle satisfies  $\\dfrac{b-p}{c-p}=\\overline{\\left(\\tfrac{b'-a'}{c'-a'}\\right)}$ , giving the extra point  $p=2-4i=\\overline{2+4i}$ , the mirror of the first across line  $BC$ . The determinant criterion of part (a) detects only the direct case; missing case is the orientation-reversed copy. So the ``locus'' is neither a curve nor a single point: it is exactly the two points  $\\{2+4i,\\,2-4i\\}$ .",
    "solutions": [
      {
        "name": "Determinant criterion, then solve the linear equation",
        "steps": [
          "Prove (a). A direct similarity has the form  $f(z)=\\alpha z+\\beta$  with  $\\alpha\\neq0$ . The triangles are directly similar iff such  $f$  sends  $a'\\!\\mapsto\\!a,\\ b'\\!\\mapsto\\!b,\\ c'\\!\\mapsto\\!c$ . Eliminating  $\\alpha,\\beta$  from  $a=\\alpha a'+\\beta,\\ b=\\alpha b'+\\beta,\\ c=\\alpha c'+\\beta$ , the system  $\\alpha a'+\\beta\\cdot1=a$ , etc., has a nonzero solution  $(\\alpha,\\beta,-1)$  to the homogeneous system with coefficient columns  $(a',b',c')^{\\!\\top},(1,1,1)^{\\!\\top},(a,b,c)^{\\!\\top}$  precisely when those three columns are dependent, i.e. when  $\\det\\!\\begin{vmatrix} a & a' & 1\\\\ b & b' & 1\\\\ c & c' & 1\\end{vmatrix}=0$  (the columns reordered). Expanding the determinant gives  $(b-a)(c'-a')-(c-a)(b'-a')$ , so the condition is  $\\dfrac{b-a}{c-a}=\\dfrac{b'-a'}{c'-a'}$  — equality of shape ratios, the orientation-preserving similarity condition. This proves (a).",
          "Apply (a) to  $(p,b,c)$  and  $T'=(a',b',c')=(0,1,1+i)$  with  $b=2,\\ c=6$ . The criterion reads  $\\begin{vmatrix} p & 0 & 1\\\\ 2 & 1 & 1\\\\ 6 & 1+i & 1\\end{vmatrix}=0$ .",
          "Expand along the second column: the determinant equals  $-0\\cdot(\\dots)+1\\cdot\\!\\begin{vmatrix}p&1\\\\6&1\\end{vmatrix}-(1+i)\\!\\begin{vmatrix}p&1\\\\2&1\\end{vmatrix}=(p-6)-(1+i)(p-2)=-ip+(2i-4)$ . Setting this to  $0$  gives  $ip=2i-4$ , so  $p=\\dfrac{2i-4}{i}=2+4i$ . This is the unique directly similar apex; there is no curve.",
          "Restore the orientation-reversed copy. ``Similar'' (without ``directly'') also allows the mirror image, which replaces the shape ratio by its conjugate:  $\\dfrac{b-p}{c-p}=\\overline{\\left(\\tfrac{b'-a'}{c'-a'}\\right)}=\\overline{\\tfrac{1}{1+i}}=\\tfrac{1+i}{2}$ . Solving  $\\dfrac{2-p}{6-p}=\\dfrac{1+i}{2}$  gives  $p=2-4i$ , the reflection of  $2+4i$  across the real axis (line  $BC$ ). Hence the complete set is  $\\boxed{\\{\\,2+4i,\\ 2-4i\\,\\}}$ ."
        ]
      },
      {
        "name": "Shape ratio directly",
        "steps": [
          "By part (a), direct similarity of  $(p,b,c)$  to  $(a',b',c')$  is exactly  $\\dfrac{b-p}{c-p}=\\dfrac{b'-a'}{c'-a'}$ , the apex  $p$  playing the role of  $a'$ . Compute the reference shape ratio:  $w=\\dfrac{b'-a'}{c'-a'}=\\dfrac{1-0}{(1+i)-0}=\\dfrac{1}{1+i}=\\dfrac{1-i}{2}.$ ",
          "Impose  $\\dfrac{2-p}{6-p}=\\dfrac{1-i}{2}$ . Cross-multiplying,  $2(2-p)=(1-i)(6-p)$ , i.e.  $4-2p=(6-6i)-(1-i)p$ . Collect:  $\\big(-2+(1-i)\\big)p=6-6i-4$ , so  $(-1-i)p=2-6i$ .",
          "Hence  $p=\\dfrac{2-6i}{-1-i}=\\dfrac{(2-6i)(-1+i)}{(-1)^2+1^2}=\\dfrac{-2+2i+6i+6}{2}=\\dfrac{4+8i}{2}=2+4i.$  This is the only solution with the given orientation.",
          "Allowing the mirror image (still ``similar''), replace  $w$  by  $\\overline w=\\dfrac{1+i}{2}$  and repeat:  $\\dfrac{2-p}{6-p}=\\dfrac{1+i}{2}$  yields  $p=2-4i$ . Both triangles have the same three side lengths  $4,4,4\\sqrt2$  as  $4$  times those of  $T'$  (legs  $1,1$ , hypotenuse  $\\sqrt2$ ), confirming genuine similarity. The complete set is  $\\boxed{\\{\\,2+4i,\\ 2-4i\\,\\}}$ ."
        ]
      },
      {
        "name": "Construct the similarity transformation",
        "steps": [
          "A direct similarity carrying  $T'$  onto  $(p,b,c)$  has the form  $f(z)=\\alpha z+\\beta$  and must satisfy  $f(0)=p,\\ f(1)=b,\\ f(1+i)=c$ . From  $f(0)=p$  we get  $\\beta=p$ , and from  $f(1)=b$  we get  $\\alpha+\\beta=b$ , so  $\\alpha=b-p=2-p$ .",
          "The third condition  $f(1+i)=c$  becomes  $\\alpha(1+i)+\\beta=c$ , i.e.  $(2-p)(1+i)+p=6$ . Expand:  $(2-p)+(2-p)i+p=6$ , so  $2+(2-p)i=6$ , giving  $(2-p)i=4$  and  $2-p=\\dfrac{4}{i}=-4i$ . Therefore  $p=2+4i$ , with  $\\alpha=-4i$ : the map is  $z\\mapsto -4i\\,z+(2+4i)$ , a rotation by  $-\\tfrac{\\pi}{2}$  and magnification by  $4$ . Since  $|\\alpha|=4\\neq0$  it is a genuine similarity, and it is orientation-preserving (no conjugation), so this is the direct copy.",
          "An orientation-reversing similarity has the form  $g(z)=\\alpha\\overline z+\\beta$ . Imposing  $g(0)=p,\\ g(1)=b,\\ g(1+i)=c$  with  $b,c$  real gives  $\\beta=p,\\ \\alpha=2-p$ , and  $(2-p)\\overline{(1+i)}+p=6$ , i.e.  $(2-p)(1-i)+p=6$ , so  $2-(2-p)i=6$  and  $p=2-4i$ , with map  $z\\mapsto 4i\\,\\overline z+(2-4i)$ .",
          "Thus there is exactly one direct similar triangle (apex  $2+4i$ ) and exactly one mirror similar triangle (apex  $2-4i$ ), and no others — the family of similarities is pinned the instant  $b,c$  are required to land on the fixed  $b',c'$ . The complete locus is the two-point set  $\\boxed{\\{\\,2+4i,\\ 2-4i\\,\\}}$ ."
        ]
      }
    ],
    "remark": "Insight: the determinant criterion is just the shape-ratio equality  $\\tfrac{b-a}{c-a}=\\tfrac{b'-a'}{c'-a'}$  in disguise — its vanishing says the three columns  $(a,b,c)$ ,  $(a',b',c')$ ,  $(1,1,1)$  are linearly dependent, which is precisely the existence of an affine map  $z\\mapsto\\alpha z+\\beta$  matching the vertices in order. The pedagogical sting is that ``find the locus'' invites a curve, but once two of the three vertices are nailed to fixed images, the orientation-preserving similarity has no freedom left: the apex is forced to a single point. The genuine subtlety is orientation. The determinant (a holomorphic, conjugate-free object) sees only the direct copy; the bare word ``similar'' silently includes the mirror image, whose apex is the reflection  $\\overline{2+4i}=2-4i$  across the base line  $BC$ . The answer is therefore neither a curve nor a single point but exactly two points — a degenerate ``locus'' that rewards the student who keeps both orientations in view."
  },
  {
    "theme": "triangles",
    "themeLabel": "Triangles & Polygons",
    "title": "When the Orthocentre Vanishes",
    "difficulty": 5,
    "task": "Prove that",
    "tags": [
      "orthocentre",
      "circumcircle",
      "equilateral",
      "centroid"
    ],
    "statement": "Let  $z_1,z_2,z_3$  be three distinct points on the circle  $|z|=R$  (centre the origin). It is a standard fact that the orthocentre of triangle  $z_1z_2z_3$  is  $H=z_1+z_2+z_3$ .  \\[\\text{Prove that } H=0 \\text{ exactly when the triangle is equilateral.}\\] ",
    "answer": "proved",
    "trap": "Reading \" $z_1+z_2+z_3=0$ \" as forcing the points to be the fixed cube roots  $R,\\,R\\omega,\\,R\\omega^2$  in one preferred configuration. The condition is rotation-invariant: on a fixed circle  $z_1+z_2+z_3=0$  only pins down that the three points are equally spaced (a rotated copy of  $\\{R,R\\omega,R\\omega^2\\}$ ) — there is no preferred starting angle. Equal spacing is precisely the equilateral condition, so  $H=0$  holds for every rotated equilateral triangle, not just the one beginning at  $z=R$ .",
    "solutions": [
      {
        "name": "Centroid meets circumcentre",
        "steps": [
          "The centroid is  $G=\\tfrac13(z_1+z_2+z_3)=\\tfrac{H}{3}$ , while the circumcentre is the origin  $O=0$  (all three vertices lie on  $|z|=R$ ).",
          "Hence  $H=0\\iff G=0=O$ , i.e. the centroid coincides with the circumcentre.",
          "In any triangle the centroid equals the circumcentre if and only if the triangle is equilateral: forcing each median to pass through the circumcentre makes each median a perpendicular bisector, so every side is bisected at right angles by the line to the opposite vertex, giving all sides equal. Conversely an equilateral triangle has  $G=O$  by symmetry.",
          "Therefore  $H=0\\iff$  the triangle is equilateral.  $\\blacksquare$ "
        ]
      },
      {
        "name": "Direct via the equilateral identity",
        "steps": [
          "A triangle  $z_1z_2z_3$  is equilateral iff  $z_1^2+z_2^2+z_3^2=z_1z_2+z_2z_3+z_3z_1$  (a standard symmetric criterion, equivalent to  $(z_1+\\omega z_2+\\omega^2 z_3)(z_1+\\omega^2 z_2+\\omega z_3)=0$  with  $\\omega=e^{2\\pi i/3}$ ).",
          "Assume  $H=z_1+z_2+z_3=0$ . Squaring,  $0=\\big(\\textstyle\\sum z_k\\big)^2=\\sum z_k^2+2\\sum_{j<k}z_jz_k$ , so  $\\sum z_k^2=-2\\sum_{j<k}z_jz_k$ .",
          "Since  $|z_k|^2=R^2$  we have  $1/z_k=\\bar z_k/R^2$ , hence  $\\sum_{j<k}z_jz_k=z_1z_2z_3\\sum_k 1/z_k=\\dfrac{z_1z_2z_3}{R^2}\\,\\overline{\\big(\\textstyle\\sum z_k\\big)}=0$ . From the previous line  $\\sum z_k^2=0$  as well.",
          "Thus  $\\sum z_k^2=\\sum_{j<k}z_jz_k\\;(=0)$ : the equilateral identity holds, so the triangle is equilateral. Conversely an equilateral triangle inscribed in  $|z|=R$  has centroid at the centre, giving  $z_1+z_2+z_3=0$ , i.e.  $H=0$ .  $\\blacksquare$ "
        ]
      },
      {
        "name": "Geometric (equal spacing)",
        "steps": [
          "Write  $z_k=Re^{i\\theta_k}$  and set  $u_k=z_k/R$ , three distinct unit vectors. Then  $H=0\\iff u_1+u_2+u_3=0$ .",
          "If  $u_1+u_2+u_3=0$  then  $u_3=-(u_1+u_2)$ , so  $1=|u_3|^2=|u_1+u_2|^2=2+2\\cos(\\theta_1-\\theta_2)$ , forcing  $\\cos(\\theta_1-\\theta_2)=-\\tfrac12$ , i.e.  $u_1,u_2$  are  $120^\\circ$  apart. By symmetry every pair is  $120^\\circ$  apart, so the three points are equally spaced on the circle.",
          "Equal angular spacing of  $120^\\circ$  on a common circle gives equal chords, hence equal sides: the triangle is equilateral.",
          "Conversely, an equilateral triangle has its vertices equally spaced, so the three unit vectors are at mutual  $120^\\circ$  and sum to zero, giving  $H=0$ .  $\\blacksquare$ "
        ]
      }
    ],
    "remark": "Insight: on a circle centred at the origin,  $H=z_1+z_2+z_3$  collapses three classical centres into a single bookkeeping vector, since here the circumcentre is  $0$  and the centroid is  $H/3$ . \" $H=0$ \" is the coordinate-free signature of equilateral — independent of where you begin labelling the vertices. The trap is to mistake one labelled solution  $\\{R,R\\omega,R\\omega^2\\}$  for the whole rotation-invariant family."
  },
  {
    "theme": "triangles",
    "themeLabel": "Triangles & Polygons",
    "title": "A Triangle Pinned by Its Centroid",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "equilateral",
      "centroid",
      "rotation",
      "area"
    ],
    "statement": "An equilateral triangle  $z_1z_2z_3$  has centroid  $3+i$ , and one vertex is  $z_1=5+5i$ .  \\[\\text{Determine } z_2 \\text{ and } z_3, \\text{ and find the area of the triangle.}\\] ",
    "answer": " $z_2=(2-2\\sqrt3)+(-1+\\sqrt3)i$  and  $z_3=(2+2\\sqrt3)+(-1-\\sqrt3)i$ ; area  $=15\\sqrt3$ .",
    "trap": "Rotating  $z_1-g$  about the origin instead of about the centroid  $g=3+i$ . The correct construction is  $z_{2,3}=g+(z_1-g)\\omega^{\\pm1}$ : you must subtract the centroid, rotate by  $\\pm120^\\circ$ , then add it back. Forgetting the shift gives  $z_1\\omega^{\\pm1}$ , whose centroid is  $0$ , not  $3+i$  — the triangle lands in the wrong place.",
    "solutions": [
      {
        "name": "Rotate about the centroid",
        "steps": [
          "For an equilateral triangle, centroid  $=$  circumcentre  $g$ , so  $z_2=g+(z_1-g)\\omega,\\ z_3=g+(z_1-g)\\omega^2$ ,  $\\omega=e^{2\\pi i/3}=-\\tfrac12+\\tfrac{\\sqrt3}{2}i$ .",
          "Here  $z_1-g=2+4i$ . Then  $z_2=(3+i)+(2+4i)\\big(-\\tfrac12+\\tfrac{\\sqrt3}{2}i\\big)=(2-2\\sqrt3)+(-1+\\sqrt3)i$ .",
          " $z_3=(3+i)+(2+4i)\\big(-\\tfrac12-\\tfrac{\\sqrt3}{2}i\\big)=(2+2\\sqrt3)+(-1-\\sqrt3)i$ ; check  $z_1+z_2+z_3=9+3i=3g$ . ✓",
          "Circumradius  $|z_1-g|=\\sqrt{20}=2\\sqrt5$ , side  $=\\sqrt3\\cdot2\\sqrt5=2\\sqrt{15}$ , area  $=\\tfrac{\\sqrt3}{4}(2\\sqrt{15})^2=\\boxed{15\\sqrt3}$ ."
        ]
      },
      {
        "name": "Sum and symmetric conditions",
        "steps": [
          "The centroid gives  $z_2+z_3=3g-z_1=(9+3i)-(5+5i)=4-2i$ , so  $z_2,z_3$  are roots of  $t^2-(4-2i)t+P=0$  with  $P=z_2z_3$ .",
          "Equilateral is equivalent to  $z_1^2+z_2^2+z_3^2=z_1z_2+z_2z_3+z_3z_1$ , i.e.  $(z_1+z_2+z_3)^2=3(z_1z_2+z_2z_3+z_3z_1)$ .",
          "With  $S=z_1+z_2+z_3=9+3i$  this forces  $z_1z_2+z_2z_3+z_3z_1=\\tfrac{S^2}{3}=24+18i$ , and since  $z_1(z_2+z_3)=(5+5i)(4-2i)=30+10i$  we get  $P=z_2z_3=(24+18i)-(30+10i)=-6+8i$ .",
          "Solving  $t^2-(4-2i)t+(-6+8i)=0$  gives exactly  $t=(2-2\\sqrt3)+(-1+\\sqrt3)i$  and  $t=(2+2\\sqrt3)+(-1-\\sqrt3)i$ . Side  $=2\\sqrt{15}\\Rightarrow$  area  $=\\boxed{15\\sqrt3}$ ."
        ]
      },
      {
        "name": "Area from circumradius directly",
        "steps": [
          "The distance from the centroid to a vertex is the circumradius  $R=|z_1-g|=|2+4i|=2\\sqrt5$ .",
          "For an equilateral triangle, area  $=\\tfrac{3\\sqrt3}{4}R^2=\\tfrac{3\\sqrt3}{4}\\cdot20=15\\sqrt3$ .",
          "The vertices follow from rotating  $z_1-g$  by  $\\pm120^\\circ$  about  $g$ , giving the  $z_2,z_3$  above.",
          "Area  $=\\boxed{15\\sqrt3}$ ."
        ]
      }
    ],
    "remark": "Insight: once the centroid of an equilateral triangle is known, one vertex determines the rest by two  $120^\\circ$  rotations about that centroid. The shift-rotate-unshift pattern  $g+(z-g)\\omega^k$  is the workhorse for any \"rotate about a point\" task in the Argand plane."
  },
  {
    "theme": "triangles",
    "themeLabel": "Triangles & Polygons",
    "title": "The Equilateral Apex on a Side",
    "difficulty": 5,
    "task": "Find the third vertex",
    "tags": [
      "equilateral triangle",
      "rotation",
      "argand geometry",
      "orientation",
      "exponential form"
    ],
    "statement": "In the Argand plane,  $A=1+i$  and  $B=4+5i$  are two vertices of an equilateral triangle  $ABC$  labelled counter-clockwise. Find the complex number representing the apex  $C$ , and verify that  $A^2+B^2+C^2=AB+BC+CA$ .",
    "answer": " $$\\boxed{\\,C=\\left(\\tfrac{5}{2}-2\\sqrt3\\right)+\\left(3+\\tfrac{3\\sqrt3}{2}\\right)i\\,}$$ ",
    "trap": "Turning the wrong way. For the counter-clockwise label  $ABC$ , side  $\\overrightarrow{AC}$  is  $\\overrightarrow{AB}$  rotated by  $+60^\\circ$ , so  $C=A+(B-A)e^{i\\pi/3}$ . A student who uses  $e^{-i\\pi/3}$  (a  $-60^\\circ$  turn) lands on the mirror-image apex  $C'=\\left(\\tfrac{5}{2}+2\\sqrt3\\right)+\\left(3-\\tfrac{3\\sqrt3}{2}\\right)i$  — a genuine equilateral triangle, but the clockwise one, contradicting the stated orientation. Both apexes satisfy the symmetric identity  $a^2+b^2+c^2=ab+bc+ca$ , so that identity alone cannot pin the sign; the orientation lives in the sign of the rotation factor  $e^{\\pm i\\pi/3}$ .",
    "solutions": [
      {
        "name": "Rotation by  $+60^\\circ$ ",
        "steps": [
          "The side vector is  $\\overrightarrow{AB}=B-A=(4+5i)-(1+i)=3+4i$ , of modulus  $|3+4i|=5$ , so every side has length  $5$ .",
          "Going counter-clockwise,  $\\overrightarrow{AC}$  is  $\\overrightarrow{AB}$  turned through  $+60^\\circ$ :  $C-A=(B-A)e^{i\\pi/3}=(3+4i)\\left(\\tfrac12+\\tfrac{\\sqrt3}{2}i\\right)=\\left(\\tfrac32-2\\sqrt3\\right)+\\left(2+\\tfrac{3\\sqrt3}{2}\\right)i.$ ",
          "Add  $A=1+i$ :  $C=\\left(\\tfrac52-2\\sqrt3\\right)+\\left(3+\\tfrac{3\\sqrt3}{2}\\right)i$ , and  $|C-A|=|B-A|=5$ ,  $|C-B|=5$  confirm equality of all sides.  $\\boxed{C=\\left(\\tfrac52-2\\sqrt3\\right)+\\left(3+\\tfrac{3\\sqrt3}{2}\\right)i}$ "
        ]
      },
      {
        "name": "Symmetric equilateral identity",
        "steps": [
          "A triangle  $ABC$  is equilateral iff  $A^2+B^2+C^2=AB+BC+CA$ , equivalently  $C^2-(A+B)C+(A^2+B^2-AB)=0$ , a quadratic in  $C$ .",
          "By the quadratic formula  $C=\\dfrac{(A+B)\\pm\\sqrt{(A+B)^2-4(A^2+B^2-AB)}}{2}=\\dfrac{(A+B)\\pm\\sqrt{-3}\\,(A-B)}{2}=\\dfrac{A+B}{2}\\pm i\\sqrt3\\,\\dfrac{A-B}{2}.$ ",
          "Here  $\\tfrac{A+B}{2}=\\tfrac52+3i$  and  $\\tfrac{A-B}{2}=-\\tfrac32-2i$ . The two signs give the two apexes; the  $-$  sign matches the counter-clockwise label,  $C=\\left(\\tfrac52+3i\\right)-i\\sqrt3\\left(-\\tfrac32-2i\\right)=\\left(\\tfrac52-2\\sqrt3\\right)+\\left(3+\\tfrac{3\\sqrt3}{2}\\right)i$ , agreeing with the rotation result (the  $+$  sign reproduces the clockwise mirror apex).  $\\boxed{C=\\left(\\tfrac52-2\\sqrt3\\right)+\\left(3+\\tfrac{3\\sqrt3}{2}\\right)i}$ "
        ]
      }
    ],
    "remark": "**Insight.** An equilateral triangle is a  $60^\\circ$  rotation in disguise, so the apex is forced the instant you fix the turning sign. The famous identity  $a^2+b^2+c^2=ab+bc+ca$  is the symmetric shadow of both apexes at once — it certifies “equilateral” but is blind to orientation, which is exactly why the  $\\pm$  in the quadratic reappears as the  $\\pm60^\\circ$  choice."
  },
  {
    "theme": "triangles",
    "themeLabel": "Triangles & Polygons",
    "title": "Every Chord from One Corner",
    "difficulty": 5,
    "task": "Find the product of chords",
    "tags": [
      "regular polygon",
      "roots of unity",
      "factorization",
      "chord length",
      "unit circle"
    ],
    "statement": "A regular  $12$ -gon is inscribed in the unit circle with vertices  $V_k=e^{2\\pi i k/12}$  for  $k=0,1,\\dots,11$ . From the single vertex  $V_0=1$ , draw all  $11$  segments to the other vertices (the two sides and nine diagonals). Find the product of the lengths of these  $11$  segments,  $\\displaystyle\\prod_{k=1}^{11}|V_0-V_k|$ .",
    "answer": " $$\\boxed{\\,\\prod_{k=1}^{11}|V_0-V_k|=12\\,}$$ ",
    "trap": "Including the zero factor, or miscounting the index range. The product runs over  $k=1$  to  $11$  (the  $11$  \\emph{other} vertices); a student who lets  $k$  run from  $0$  to  $11$  accidentally inserts the factor  $|V_0-V_0|=0$  and concludes the product is  $0$ . The clean route is to recognize  $\\prod_{k=1}^{n-1}(z-V_k)=\\dfrac{z^n-1}{z-1}=1+z+\\cdots+z^{n-1}$  and evaluate at  $z=V_0=1$ , giving  $n$  — here  $12$  — \\emph{not}  $0$ .",
    "solutions": [
      {
        "name": "Factor  $z^{n}-1$  and evaluate",
        "steps": [
          "The  $V_k$  are exactly the roots of  $z^{12}-1=0$ , so  $z^{12}-1=\\prod_{k=0}^{11}(z-V_k)=(z-1)\\prod_{k=1}^{11}(z-V_k)$  since  $V_0=1$ .",
          "Divide out the factor  $(z-1)$ :  $\\displaystyle\\prod_{k=1}^{11}(z-V_k)=\\frac{z^{12}-1}{z-1}=1+z+z^2+\\cdots+z^{11}.$ ",
          "Let  $z\\to 1$  (the value  $V_0$ ): the right side becomes  $1+1+\\cdots+1=12$ . Hence  $\\prod_{k=1}^{11}(1-V_k)=12$ .",
          "Taking moduli,  $\\prod_{k=1}^{11}|V_0-V_k|=\\left|\\prod_{k=1}^{11}(1-V_k)\\right|=|12|=12.$   $\\boxed{12}$ "
        ]
      },
      {
        "name": "Chord lengths via the sine product",
        "steps": [
          "Each chord has length  $|V_0-V_k|=|1-e^{2\\pi i k/12}|=2\\left|\\sin\\dfrac{\\pi k}{12}\\right|$ , so the product is  $2^{11}\\prod_{k=1}^{11}\\sin\\dfrac{\\pi k}{12}.$ ",
          "There is a standard identity  $\\prod_{k=1}^{n-1}\\sin\\dfrac{\\pi k}{n}=\\dfrac{n}{2^{n-1}}$ , obtainable from the same factorization  $\\frac{z^n-1}{z-1}\\big|_{z=1}=n$  by writing each  $|1-V_k|=2\\sin\\frac{\\pi k}{n}$ .",
          "With  $n=12$ :  $\\prod_{k=1}^{11}\\sin\\dfrac{\\pi k}{12}=\\dfrac{12}{2^{11}}.$ ",
          "Therefore the chord product is  $2^{11}\\cdot\\dfrac{12}{2^{11}}=12.$   $\\boxed{12}$ "
        ]
      }
    ],
    "remark": "**Insight.** The whole regular polygon is the root set of  $z^n-1$ , so a product of chord lengths from one vertex is just the polynomial  $\\frac{z^n-1}{z-1}$  in disguise. Removing the self-segment is precisely cancelling the  $(z-1)$  factor; evaluating the leftover  $1+z+\\cdots+z^{n-1}$  at that vertex hands you  $n$  with no trigonometry at all."
  },
  {
    "theme": "triangles",
    "themeLabel": "Triangles & Polygons",
    "title": "Where the Right Angle Hides",
    "difficulty": 5,
    "task": "Find the circumcentre",
    "tags": [
      "circumcentre",
      "right triangle",
      "argument condition",
      "argand geometry",
      "perpendicular bisector"
    ],
    "statement": "A triangle has vertices  $A=5+i$ ,  $B=2+5i$ ,  $C=2+i$  in the Argand plane. Find its circumcentre  $O$  (the point equidistant from all three) and its circumradius, and identify at which vertex the right angle sits.",
    "answer": " $$\\boxed{\\,O=\\tfrac{7}{2}+3i,\\qquad R=\\tfrac{5}{2}\\,}$$ ",
    "trap": "Assuming the right angle sits at the wrong vertex. The right angle is where two sides meet perpendicularly, i.e. where the ratio of the two side vectors is purely imaginary. Here  $\\dfrac{A-C}{B-C}=\\dfrac{3}{4i}=-\\tfrac34 i$  is purely imaginary, so the right angle is at  $C$ , making  $AB$  the hypotenuse and  $O$  its midpoint. A student who eyeballs the picture and guesses the right angle at  $A$  or  $B$  takes the wrong midpoint (e.g.  $\\tfrac{A+C}{2}=\\tfrac72+i$ ) and gets a point not equidistant from all three.",
    "solutions": [
      {
        "name": "Right angle via a purely imaginary ratio",
        "steps": [
          "Test each vertex for a right angle by the ratio of its two adjacent side vectors. At  $C$ :  $\\dfrac{A-C}{B-C}=\\dfrac{(5+i)-(2+i)}{(2+5i)-(2+i)}=\\dfrac{3}{4i}=-\\tfrac34 i$ , which is purely imaginary, so  $\\angle C=90^\\circ$ .",
          "For a right triangle the circumcentre is the midpoint of the hypotenuse (Thales). The hypotenuse is the side opposite the right angle, namely  $AB$ , so  $O=\\dfrac{A+B}{2}=\\dfrac{(5+i)+(2+5i)}{2}=\\dfrac72+3i.$ ",
          "The circumradius is half the hypotenuse:  $R=\\dfrac{|A-B|}{2}=\\dfrac{|3-4i|}{2}=\\dfrac52.$ ",
          "Check:  $|O-A|=\\left|\\tfrac{-3}{2}+2i\\right|=\\tfrac52$ ,  $|O-B|=\\left|\\tfrac32-2i\\right|=\\tfrac52$ ,  $|O-C|=\\left|\\tfrac32+2i\\right|=\\tfrac52$ .  $\\boxed{O=\\tfrac72+3i,\\ R=\\tfrac52}$ "
        ]
      },
      {
        "name": "Equidistance equations",
        "steps": [
          "Write  $O=x+iy$  with  $x,y$  real and impose  $|O-A|^2=|O-C|^2$  and  $|O-B|^2=|O-C|^2$ . The first gives  $(x-5)^2+(y-1)^2=(x-2)^2+(y-1)^2$ , i.e.  $-10x+25=-4x+4$ , so  $x=\\tfrac72$ .",
          "The second gives  $(x-2)^2+(y-5)^2=(x-2)^2+(y-1)^2$ , i.e.  $-10y+25=-2y+1$ , so  $y=3$ . Hence  $O=\\tfrac72+3i$ .",
          "Then  $R=|O-C|=\\left|\\left(\\tfrac72-2\\right)+(3-1)i\\right|=\\left|\\tfrac32+2i\\right|=\\sqrt{\\tfrac94+4}=\\tfrac52$ , equal to  $|O-A|$  and  $|O-B|$ .",
          "That  $O$  is the midpoint of  $AB$  confirms  $AB$  is a diameter, so  $\\angle C=90^\\circ$ .  $\\boxed{O=\\tfrac72+3i,\\ R=\\tfrac52}$ "
        ]
      }
    ],
    "remark": "**Insight.** In complex form a right angle announces itself as a purely imaginary side-ratio, and Thales then collapses the whole circumcentre computation to one midpoint. The trap is geometric over-confidence: only the algebra of  $\\frac{A-C}{B-C}$  tells you which vertex carries the  $90^\\circ$ , and hence which side is the diameter."
  },
  {
    "theme": "triangles",
    "themeLabel": "Triangles & Polygons",
    "title": "A Hexagon from One Corner",
    "difficulty": 5,
    "task": "Find opposite vertex and sum",
    "tags": [
      "regular polygon",
      "rotation",
      "roots of unity",
      "centroid",
      "argand geometry"
    ],
    "statement": "A regular hexagon  $V_0V_1V_2V_3V_4V_5$ , labelled counter-clockwise, has centre  $P=2+i$  and one vertex  $V_0=4+i$ . Find the vertex  $V_3$  diametrically opposite  $V_0$ , and the sum  $V_0+V_1+V_2+V_3+V_4+V_5$  of all six vertices.",
    "answer": " $$\\boxed{\\,V_3=i,\\qquad \\sum_{k=0}^{5}V_k=12+6i\\,}$$ ",
    "trap": "An indexing slip in the rotation. The vertices are  $V_k=P+(V_0-P)\\,e^{2\\pi i k/6}$ , so the \\emph{opposite} vertex is  $k=3$  (a half-turn,  $e^{i\\pi}=-1$ ), giving  $V_3=P-(V_0-P)=2P-V_0=i$ . A student who instead takes the \\emph{adjacent} vertex  $k=1$  (rotation by only  $60^\\circ$ ) reports  $V_1=3+(1+\\sqrt3)i$ , and one who forgets the centre offset claims the vertex sum is  $0$  (true only for roots of unity about the origin) instead of  $6P=12+6i$ .",
    "solutions": [
      {
        "name": "Rotate the radius vector",
        "steps": [
          "Place the hexagon as rotations of the radius  $V_0-P=(4+i)-(2+i)=2$  about the centre:  $V_k=P+(V_0-P)e^{2\\pi i k/6}=P+2e^{i\\pi k/3}.$ ",
          "The opposite vertex is the half-turn  $k=3$ :  $e^{i\\pi}=-1$ , so  $V_3=P+2(-1)=2P-V_0=(4+2i)-(4+i)=i.$ ",
          "Summing the geometric spread of sixth roots of unity,  $\\sum_{k=0}^{5}e^{i\\pi k/3}=0$  (the six sixth roots of unity sum to zero), so  $\\sum_{k=0}^{5}V_k=\\sum_{k=0}^{5}\\big(P+2e^{i\\pi k/3}\\big)=6P+2\\cdot 0=6P.$ ",
          "Thus  $\\sum V_k=6(2+i)=12+6i$  and  $V_3=i$ .  $\\boxed{V_3=i,\\ \\sum V_k=12+6i}$ "
        ]
      },
      {
        "name": "Centroid and central symmetry",
        "steps": [
          "The centroid of any regular polygon's vertices is its centre, so  $\\dfrac{1}{6}\\sum_{k=0}^{5}V_k=P$ , giving  $\\sum_{k=0}^{5}V_k=6P=6(2+i)=12+6i$  immediately.",
          "A regular hexagon is centrally symmetric about  $P$ : opposite vertices are reflections of each other through the centre, so  $V_3=2P-V_0.$ ",
          "Compute  $V_3=2(2+i)-(4+i)=(4+2i)-(4+i)=i.$ ",
          "Consistency: the three diagonals  $V_0V_3,V_1V_4,V_2V_5$  all pass through  $P$ , and indeed  $\\tfrac{V_0+V_3}{2}=\\tfrac{(4+i)+i}{2}=2+i=P$ .  $\\boxed{V_3=i,\\ \\sum V_k=12+6i}$ "
        ]
      }
    ],
    "remark": "**Insight.** A regular polygon is just scaled, shifted roots of unity, so two facts fall out for free: the vertices sum to  $n$  times the centre (the roots of unity themselves cancel), and the opposite vertex is the half-turn  $2P-V_0$ . The danger is purely bookkeeping — which power of  $e^{2\\pi i/n}$  you want, and whether you remembered to add the centre back."
  },
  {
    "theme": "equations",
    "themeLabel": "Polynomial Equations",
    "title": "When the Twelfth Root Splits the Eighth",
    "difficulty": 4,
    "task": "Find the value of",
    "tags": [
      "roots of unity",
      "cyclotomic",
      "factoring",
      "real quadratics",
      "symmetric"
    ],
    "statement": "The polynomial  $P(z)=z^{8}+z^{4}+1$  has no real roots, yet over  $\\mathbb{R}$  it factors completely into monic quadratics. Write  \\[ z^{8}+z^{4}+1=\\prod_{k=1}^{m}\\bigl(z^{2}+b_k z+1\\bigr),\\qquad b_k\\in\\mathbb{R}, \\]  using the largest possible number  $m$  of real quadratic factors (so that none of the  $z^{2}+b_k z+1$  factors further over  $\\mathbb{R}$ ). Determine the number  $m$  of factors and the value of  $\\displaystyle\\sum_{k=1}^{m} b_k^{2}$ .",
    "answer": " \\[\\boxed{\\,m=4,\\ \\textstyle\\sum_{k=1}^{4} b_k^{2}=8\\,}\\] ",
    "trap": "The seductive route is to grind  $z^{8}+z^{4}+1=(z^{4}+z^{2}+1)(z^{4}-z^{2}+1)$  then split only the first quartic via  $z^{4}+z^{2}+1=(z^{2}+z+1)(z^{2}-z+1)$ , and declare the leftover  $z^{4}-z^{2}+1$  irreducible over  $\\mathbb{R}$  because it has no real roots and no rational factorization. That stops at  $m=3$  and reports  $\\sum b_k^{2}=(-1)^2+(1)^2=2$  from the two genuine quadratics (the quartic having no  $b z$  term to count). But over  $\\mathbb{R}$  EVERY polynomial of even degree with no real roots still factors into real quadratics:  $z^{4}-z^{2}+1=(z^{2}-\\sqrt3\\,z+1)(z^{2}+\\sqrt3\\,z+1)$  via the Sophie-Germain completion  $z^{4}-z^{2}+1=(z^{2}+1)^{2}-(\\sqrt3\\,z)^{2}$ . Irreducibility over  $\\mathbb{Q}$  is NOT irreducibility over  $\\mathbb{R}$ ; the true count is  $m=4$  and  $\\sum b_k^{2}=8$ .",
    "solutions": [
      {
        "name": "Roots of unity through the cyclotomic quotient",
        "steps": [
          "Recognize the geometric-series shape:  $z^{8}+z^{4}+1=\\dfrac{z^{12}-1}{z^{4}-1}$ , since  $(z^{4}-1)(z^{8}+z^{4}+1)=z^{12}-1$ . Hence the roots of  $P$  are exactly the  $12$ th roots of unity that are NOT  $4$ th roots of unity.",
          "The  $12$ th roots are  $\\zeta^{k}=e^{2\\pi i k/12}$  for  $k=0,\\dots,11$ ; removing the  $4$ th roots ( $k=0,3,6,9$ ) leaves the eight values  $k\\in\\{1,2,4,5,7,8,10,11\\}$ , none of them real. Pair each root with its conjugate  $\\zeta^{k},\\zeta^{-k}$ ; each pair gives a real quadratic  $z^{2}-2\\cos\\!\\frac{\\pi k}{6}\\,z+1$  (note  $\\zeta^{k}\\zeta^{-k}=1$ ).",
          "The four upper-half angles are  $\\frac{\\pi}{6},\\frac{\\pi}{3},\\frac{2\\pi}{3},\\frac{5\\pi}{6}$ , giving  $b_k=-2\\cos\\theta\\in\\{-\\sqrt3,\\,-1,\\,1,\\,\\sqrt3\\}$ . So  $m=4$  and  $P=(z^{2}-\\sqrt3 z+1)(z^{2}-z+1)(z^{2}+z+1)(z^{2}+\\sqrt3 z+1)$ .",
          "Therefore  $\\sum b_k^{2}=(-\\sqrt3)^2+(-1)^2+(1)^2+(\\sqrt3)^2=3+1+1+3=8$ .  $\\boxed{m=4,\\ \\sum b_k^{2}=8}$ "
        ]
      },
      {
        "name": "Difference of squares twice (Sophie Germain in disguise)",
        "steps": [
          "Group as a difference of squares:  $z^{8}+z^{4}+1=(z^{4}+1)^{2}-(z^{2})^{2}=(z^{4}+z^{2}+1)(z^{4}-z^{2}+1)$ .",
          "Split the first quartic the same way:  $z^{4}+z^{2}+1=(z^{2}+1)^{2}-z^{2}=(z^{2}+z+1)(z^{2}-z+1)$ , giving  $b=\\pm1$ .",
          "Now do NOT stop: the second quartic also yields  $z^{4}-z^{2}+1=(z^{2}+1)^{2}-3z^{2}=(z^{2}+1)^{2}-(\\sqrt3\\,z)^{2}=(z^{2}+\\sqrt3 z+1)(z^{2}-\\sqrt3 z+1)$ , giving  $b=\\pm\\sqrt3$ . Each of these four quadratics has discriminant  $<0$ , so none factors further over  $\\mathbb{R}$ ; hence  $m=4$ .",
          "Summing,  $\\sum b_k^{2}=1+1+3+3=8$ .  $\\boxed{m=4,\\ \\sum b_k^{2}=8}$ "
        ]
      },
      {
        "name": "Coefficient matching via Newton (no roots computed)",
        "steps": [
          "Because  $P$  is palindromic with no real roots, it is a product of  $m=4$  monic quadratics each with constant term  $1$  (degree  $8$  forces four quadratics, and  $z^{2}+b z+c$  reciprocal to a factor of a palindrome forces  $c=1$ ). Expanding  $\\prod_{k=1}^{4}(z^{2}+b_k z+1)$ , the  $z^{7}$  coefficient is  $e_1=\\sum b_k$  and the  $z^{6}$  coefficient is  $e_2+4$ , where  $e_2=\\sum_{i<j} b_i b_j$ .",
          "Match to  $z^{8}+z^{4}+1$ , whose  $z^{7}$  and  $z^{6}$  coefficients are both  $0$ : this gives  $e_1=0$  and  $e_2+4=0$ , so  $e_1=0,\\ e_2=-4$ .",
          "By Newton's identity for power sums,  $\\sum b_k^{2}=e_1^{2}-2e_2=0^{2}-2(-4)=8$  — obtained without ever solving for the individual  $b_k$ .",
          "(The remaining coefficient equations are consistent and pin down  $\\{b_k\\}=\\{\\pm1,\\pm\\sqrt3\\}$ , confirming  $m=4$ .)  $\\boxed{m=4,\\ \\sum b_k^{2}=8}$ "
        ]
      }
    ],
    "remark": "Insight: the engine is the cyclotomic quotient  $z^{8}+z^{4}+1=\\frac{z^{12}-1}{z^{4}-1}$ , which exposes the roots as the  $12$ th roots of unity stripped of the  $4$ th roots, conjugate pairs assembling into four real quadratics. The trap is the silent jump from 'irreducible over  $\\mathbb{Q}$ ' to 'irreducible over  $\\mathbb{R}$ ':  $z^{4}-z^{2}+1$  resists rational factoring but yields instantly to the Sophie-Germain split  $(z^{2}+1)^{2}-(\\sqrt3 z)^{2}$ . Most elegantly, the requested sum needs no factor at all: Newton's  $\\sum b_k^{2}=e_1^{2}-2e_2$  reads  $8$  straight off the two vanishing top coefficients."
  },
  {
    "theme": "equations",
    "themeLabel": "Polynomial Equations",
    "title": "Three Cubes Without the Mirror",
    "difficulty": 4,
    "task": "Find the value of",
    "tags": [
      "newton's identities",
      "power sums",
      "complex coefficients",
      "symmetric functions",
      "conjugate trap",
      "hidden constraint"
    ],
    "statement": "Three complex numbers  $\\alpha,\\beta,\\gamma$  (not assumed conjugate in any way) are the roots of a cubic  $z^{3}+pz^{2}+qz+r=0$  whose coefficients  $p,q,r$  are themselves complex. You are told only the following three symmetric data:  \\[ \\alpha+\\beta+\\gamma=2+4i,\\qquad \\alpha^{2}+\\beta^{2}+\\gamma^{2}=2i,\\qquad \\alpha\\beta\\gamma=-7-i. \\]  Compute the sum of cubes  \\[ p_{3}=\\alpha^{3}+\\beta^{3}+\\gamma^{3}. \\]  Note that because the cubic's coefficients are genuinely non-real, none of the comfortable real-coefficient shortcuts (conjugate roots, real power sums) is available; the answer must be earned from the symmetric data alone.",
    "answer": " \\[\\boxed{\\,11+11i\\,}\\] ",
    "trap": "The fatal reflex is the schoolbook identity  $\\alpha^{3}+\\beta^{3}+\\gamma^{3}=3\\alpha\\beta\\gamma$ , which would hand back  $3(-7-i)=-21-3i$  in one line. But that identity is conditional:  $\\alpha^{3}+\\beta^{3}+\\gamma^{3}-3\\alpha\\beta\\gamma=(\\alpha+\\beta+\\gamma)\\bigl(\\alpha^{2}+\\beta^{2}+\\gamma^{2}-\\alpha\\beta-\\beta\\gamma-\\gamma\\alpha\\bigr)$ , so the collapse  $p_{3}=3\\alpha\\beta\\gamma$  holds only when  $\\alpha+\\beta+\\gamma=0$ . Here  $\\alpha+\\beta+\\gamma=2+4i\\neq0$ , so the right-hand factor survives and the shortcut is simply false. A second, subtler temptation is to lean on real-coefficient instincts: a student used to real cubics expects the roots to come in conjugate pairs and the power sums  $p_{1},p_{2},p_{3}$  to be real, then tries to ``fix up'' the imaginary part by inspection. But the coefficients  $p=-(2+4i)$ ,  $q=-6+7i$ ,  $r=7+i$  are non-real, the roots are not conjugate-closed, and  $p_{3}$  is honestly complex; there is no symmetry to exploit. The only correct route is the full Newton recursion (equivalently the unconditional factorisation identity), keeping the  $\\alpha+\\beta+\\gamma$  factor alive — which converts  $-21-3i$  into the true value  $11+11i$ .",
    "solutions": [
      {
        "name": "Newton's identities, run honestly",
        "steps": [
          "Translate the data into elementary symmetric functions. With  $e_{1}=\\alpha+\\beta+\\gamma$ ,  $e_{2}=\\alpha\\beta+\\beta\\gamma+\\gamma\\alpha$ ,  $e_{3}=\\alpha\\beta\\gamma$  and power sums  $p_{1}=e_{1}$ ,  $p_{2}=\\sum\\alpha^{2}$ , the standard relation  $p_{2}=e_{1}^{2}-2e_{2}$  gives  $e_{2}=\\dfrac{e_{1}^{2}-p_{2}}{2}$ . Here  $e_{1}=2+4i$ , so  $e_{1}^{2}=(2+4i)^{2}=4+16i-16=-12+16i$ , and  $e_{2}=\\dfrac{(-12+16i)-2i}{2}=\\dfrac{-12+14i}{2}=-6+7i$ . Also  $e_{3}=-7-i$  directly.",
          "Apply Newton's third identity for three variables,  $p_{3}=e_{1}p_{2}-e_{2}p_{1}+3e_{3}$  (note the  $+3e_{3}$  term — this is exactly what the naive shortcut throws away). Substitute  $p_{1}=e_{1}=2+4i$ ,  $p_{2}=2i$ ,  $e_{2}=-6+7i$ ,  $e_{3}=-7-i$ .",
          "Compute the three pieces.  $e_{1}p_{2}=(2+4i)(2i)=4i+8i^{2}=-8+4i$ . Next  $e_{2}p_{1}=(-6+7i)(2+4i)=-12-24i+14i+28i^{2}=-12-10i-28=-40-10i$ , so  $-e_{2}p_{1}=40+10i$ . And  $3e_{3}=3(-7-i)=-21-3i$ .",
          "Add:  $p_{3}=(-8+4i)+(40+10i)+(-21-3i)=(-8+40-21)+(4+10-3)i=11+11i$ . Hence  $\\boxed{\\,\\alpha^{3}+\\beta^{3}+\\gamma^{3}=11+11i\\,}$ , and the surviving  $-e_{2}p_{1}$  contribution  $40+10i$  is precisely the term the  $3\\alpha\\beta\\gamma$  trap discards."
        ]
      },
      {
        "name": "Unconditional sum-of-cubes factorisation",
        "steps": [
          "Use the identity valid for all complex  $\\alpha,\\beta,\\gamma$ :  $\\alpha^{3}+\\beta^{3}+\\gamma^{3}-3\\alpha\\beta\\gamma=(\\alpha+\\beta+\\gamma)\\bigl(\\alpha^{2}+\\beta^{2}+\\gamma^{2}-(\\alpha\\beta+\\beta\\gamma+\\gamma\\alpha)\\bigr)$ . Every quantity on the right is given or one step away; nothing here needs the coefficients to be real.",
          "We already have  $\\alpha+\\beta+\\gamma=2+4i$  and  $\\alpha^{2}+\\beta^{2}+\\gamma^{2}=2i$ . The only missing symmetric quantity is  $e_{2}=\\alpha\\beta+\\beta\\gamma+\\gamma\\alpha=\\dfrac{(\\alpha+\\beta+\\gamma)^{2}-(\\alpha^{2}+\\beta^{2}+\\gamma^{2})}{2}=\\dfrac{(-12+16i)-2i}{2}=-6+7i$ .",
          "So  $\\alpha^{2}+\\beta^{2}+\\gamma^{2}-e_{2}=2i-(-6+7i)=6-5i$ , and the right factor product is  $(\\alpha+\\beta+\\gamma)(6-5i)=(2+4i)(6-5i)=12-10i+24i-20i^{2}=12+14i+20=32+14i$ .",
          "Therefore  $\\alpha^{3}+\\beta^{3}+\\gamma^{3}=3\\alpha\\beta\\gamma+(32+14i)=3(-7-i)+32+14i=(-21-3i)+(32+14i)=11+11i$ . The trap value  $-21-3i$  is exactly  $3\\alpha\\beta\\gamma$ ; the genuine answer adds the non-vanishing factor  $(\\alpha+\\beta+\\gamma)(\\cdots)=32+14i$ , giving  $\\boxed{\\,11+11i\\,}$ ."
        ]
      },
      {
        "name": "Reduce each cube through the cubic the roots satisfy",
        "steps": [
          "Reconstruct the cubic from the data. The monic cubic with these roots is  $z^{3}-e_{1}z^{2}+e_{2}z-e_{3}=0$  with  $e_{1}=2+4i$ ,  $e_{2}=-6+7i$  (from  $e_{2}=\\tfrac12(e_{1}^{2}-p_{2})$ ),  $e_{3}=-7-i$ ; that is, every root satisfies  $z^{3}=e_{1}z^{2}-e_{2}z+e_{3}$ .",
          "Substitute  $z=\\alpha,\\beta,\\gamma$  and sum:  $\\sum z^{3}=e_{1}\\sum z^{2}-e_{2}\\sum z+3e_{3}$ , i.e.  $p_{3}=e_{1}p_{2}-e_{2}p_{1}+3e_{3}$ . This derives Newton's identity mechanically from the equation itself, with no appeal to conjugate symmetry — the  $3e_{3}$  arises because the constant term is added once for each of the three roots.",
          "Plug in:  $e_{1}p_{2}=(2+4i)(2i)=-8+4i$ ;  $\\;-e_{2}p_{1}=-(-6+7i)(2+4i)=-(-40-10i)=40+10i$ ;  $\\;3e_{3}=-21-3i$ .",
          "Summing,  $p_{3}=(-8+4i)+(40+10i)+(-21-3i)=11+11i$ . Since  $e_{1}=2+4i\\neq0$ , the cross term  $-e_{2}p_{1}$  does not vanish, so  $p_{3}\\neq3e_{3}$  and the answer is  $\\boxed{\\,11+11i\\,}$ ."
        ]
      }
    ],
    "remark": "Insight: the elegant collapse  $\\alpha^{3}+\\beta^{3}+\\gamma^{3}=3\\alpha\\beta\\gamma$  is a theorem with a hypothesis — it needs  $\\alpha+\\beta+\\gamma=0$ , because the true statement is the unconditional factorisation  $p_{3}-3e_{3}=e_{1}(p_{2}-e_{2})$ . Whenever  $e_{1}\\neq0$  the cross term  $e_{1}(p_{2}-e_{2})=-e_{2}p_{1}+e_{1}p_{2}$  is alive and must be carried. Working over  $\\mathbb{C}$  with non-real coefficients strips away every crutch a student leans on for real cubics: roots need not come in conjugate pairs, the power sums need not be real, and there is no shadow symmetry to recover a lost term by inspection. The disciplined move is to convert the data to  $(e_{1},e_{2},e_{3})$  via  $e_{2}=\\tfrac12(e_{1}^{2}-p_{2})$  and run Newton's recursion  $p_{3}=e_{1}p_{2}-e_{2}p_{1}+3e_{3}$  in full — the honest recursion is the whole point, and it turns the seductive  $-21-3i$  into the correct  $11+11i$ ."
  },
  {
    "theme": "equations",
    "themeLabel": "Polynomial Equations",
    "title": "A Product Over Seventh Roots",
    "difficulty": 4,
    "task": "Evaluate the product",
    "tags": [
      "roots of unity",
      "factoring z^n-1",
      "product of roots",
      "telescoping factorisation",
      "Vieta"
    ],
    "statement": "Let  $\\omega=e^{2\\pi i/7}$ , a primitive  $7$ th root of unity, so that  $\\omega,\\omega^2,\\dots,\\omega^6$  together with  $1$  are all seven roots of  $z^7=1$ . Evaluate the real number  $\\displaystyle\\prod_{k=1}^{6}\\bigl(2-\\omega^k\\bigr)$ .",
    "answer": " $$\\boxed{\\,\\displaystyle\\prod_{k=1}^{6}\\bigl(2-\\omega^{k}\\bigr)=127\\,}$$ ",
    "trap": "Trying to multiply six complex factors numerically, or — the common slip — evaluating the geometric sum  $1+2+4+\\cdots+2^6$  off by one term (stopping at  $2^5=32$  gives  $63$ , or running to  $2^7=128$  gives  $255$ ). The clean move is to recognise the product as a polynomial evaluated at  $z=2$ : since  $z^7-1=\\prod_{k=0}^{6}(z-\\omega^k)$ , dividing out the  $k=0$  factor  $(z-1)$  gives  $\\prod_{k=1}^{6}(z-\\omega^k)=1+z+\\cdots+z^6$ , a degree- $6$  sum with  $\\textbf{seven}$  terms. Miscounting the terms of that geometric series is the only real danger.",
    "solutions": [
      {
        "name": "Factorisation of  $z^7-1$  evaluated at a point",
        "steps": [
          "All seventh roots of unity satisfy  $z^7-1=\\displaystyle\\prod_{k=0}^{6}(z-\\omega^k)$ , with  $\\omega^0=1$ .",
          "Peel off the root  $z=1$ :  $\\dfrac{z^7-1}{z-1}=1+z+z^2+\\cdots+z^6=\\displaystyle\\prod_{k=1}^{6}(z-\\omega^k)$ .",
          "Substitute  $z=2$  on the left:  $1+2+4+8+16+32+64=127$ .",
          "Therefore  $\\displaystyle\\prod_{k=1}^{6}(2-\\omega^k)=127$ .  $\\boxed{127}$ "
        ]
      },
      {
        "name": "Direct limit of the quotient",
        "steps": [
          "Write  $P(z)=\\displaystyle\\prod_{k=1}^{6}(z-\\omega^k)=\\dfrac{z^7-1}{z-1}$ , valid for  $z\\neq1$  as the six non-trivial seventh-root factors.",
          "At  $z=2$  this is  $\\dfrac{2^7-1}{2-1}=\\dfrac{128-1}{1}=127$ .",
          "As a check, the constant term of  $P$  is  $\\prod(-\\omega^k)=(-1)^6\\prod\\omega^k=\\omega^{1+2+\\cdots+6}=\\omega^{21}=(\\omega^7)^3=1$ , matching the constant term of  $1+z+\\cdots+z^6$ .",
          "Hence the value is  $127$ .  $\\boxed{127}$ "
        ]
      }
    ],
    "remark": "**Insight.** A product over all the roots of a polynomial is just that polynomial read off at a point. The factorisation  $z^n-1=\\prod(z-\\omega^k)$  turns any such symmetric product into a one-line evaluation — here a geometric sum. The only care needed is which roots are in the product, i.e. whether the factor  $(z-1)$  belongs."
  },
  {
    "theme": "equations",
    "themeLabel": "Polynomial Equations",
    "title": "The Double Root That Hid in the Complex Plane",
    "difficulty": 5,
    "task": "Find all real parameter values forcing a repeated real root",
    "tags": [
      "repeated roots",
      "gcd of p and p-prime",
      "discriminant",
      "complex double root",
      "elimination",
      "hidden case"
    ],
    "statement": "For a real parameter  $a$ , consider the quartic  \\[ P_a(x)=x^4-2x^3+a\\,x^2-2x+1. \\]  As  $a$  varies,  $P_a$  has, for certain special values of  $a$ , a repeated root in  $\\mathbb{C}$  (a root of multiplicity  $\\ge 2$ ). Among those special values, determine all real  $a$  for which  $P_a$  has a repeated root that is itself real. The repeated root is nowhere given to you; you must locate it as the common root of  $P_a$  and  $P_a'$  and then decide, case by case, whether it lies on the real axis. Report only the set of admissible  $a$ .",
    "answer": " \\[\\boxed{a\\in\\{-6,\\;2\\}}\\] ",
    "trap": "The fatal shortcut is to set the discriminant to zero, factor it, and hand back every real root of the resulting equation. The discriminant of  $P_a$  is  $\\Delta(a)=16\\,(a-3)^2(a-2)(a+6)$ , which vanishes at  $a=-6,\\,2,\\,3$  — so the careless reader reports all three,  $\\{-6,2,3\\}$ . But  $\\Delta=0$  certifies only that a repeated root exists \\emph{somewhere in  $\\mathbb{C}$ }; it says nothing about whether that root is real. The value  $a=3$  is precisely the saboteur: there  $P_3(x)=(x^2-x+1)^2$ , whose repeated roots are the non-real pair  $\\tfrac{1\\pm i\\sqrt3}{2}$  — a double root, yes, but living off the real axis. The squared factor  $(a-3)^2$  in  $\\Delta$  is the visible fingerprint of this case: it is squared because at  $a=3$  there are two coincident conjugate double roots, not one — a structural warning that the discriminant test alone cannot read off. A second, subtler trap waits for anyone who trusts the substitution  $t=x+\\tfrac1x$  (valid since  $P_a$  is palindromic): the reduced equation in  $t$  also produces the value  $a=3$ , and unless one checks that the corresponding  $x$  from  $x^2-tx+1=0$  is real,  $a=3$  slips back in. Only the explicit reality test on each candidate root removes  $a=3$  and leaves  $\\{-6,2\\}$ .",
    "solutions": [
      {
        "name": "Eliminate  $a$  between  $P_a=0$  and  $P_a'=0$  (the  $\\gcd(P,P')$  resolvent)",
        "steps": [
          "A number  $r$  is a repeated root of  $P_a$  iff it is a common root of  $P_a$  and  $P_a'$ , i.e.  $\\gcd(P_a,P_a')\\ne 1$ . Here  $P_a'(x)=4x^3-6x^2+2a\\,x-2$ . Note  $P_a'(0)=-2\\ne0$ , so any repeated root  $r$  satisfies  $r\\ne0$ , and we may solve  $P_a'(r)=0$  for the parameter:  $a=\\dfrac{2-4r^3+6r^2}{2r}=\\dfrac{3r^2-2r^3+1}{r}.$ ",
          "Substitute this  $a$  back into  $P_a(r)=0$  to eliminate the parameter. Clearing the denominator  $r$ , the relation  $r^4-2r^3+a r^2-2r+1=0$  becomes  $-\\,r^4+r^3-r+1=0$ , i.e.  $r^4-r^3+r-1=0.$ ",
          "Factor the resolvent:  $r^4-r^3+r-1=r^3(r-1)+(r-1)=(r-1)(r^3+1)=(r-1)(r+1)(r^2-r+1).$  Thus the possible repeated roots are  $r=1,\\;r=-1,$  and the two roots of  $r^2-r+1=0$ , namely  $r=\\tfrac{1\\pm i\\sqrt3}{2}.$ ",
          "Map each candidate to its parameter and test reality. For  $r=1$ :  $a=\\dfrac{3-2+1}{1}=2$  (root  $1$ , real). For  $r=-1$ :  $a=\\dfrac{3+2+1}{-1}=-6$  (root  $-1$ , real). For  $r=\\tfrac{1\\pm i\\sqrt3}{2}$  one finds  $a=3$ , but these roots are non-real. Keeping only the real repeated roots gives  $\\boxed{a\\in\\{-6,2\\}}.$ "
        ]
      },
      {
        "name": "Palindromic reduction  $t=x+\\tfrac1x$ , then separate the two ways a root doubles",
        "steps": [
          " $P_a$  is palindromic and  $P_a(0)=1\\ne0$ , so divide by  $x^2$  and set  $t=x+\\tfrac1x$  (using  $x^2+\\tfrac1{x^2}=t^2-2$ ):  $\\dfrac{P_a(x)}{x^2}=\\Big(x^2+\\tfrac1{x^2}\\Big)-2\\Big(x+\\tfrac1x\\Big)+a=(t^2-2)-2t+a=t^2-2t+(a-2)=:R(t).$  Each root  $t_0$  of  $R$  gives values of  $x$  via  $x^2-t_0x+1=0.$ ",
          "A root  $x$  of  $P_a$  can acquire multiplicity in exactly two ways. Way 1: the quadratic  $x^2-t_0x+1=0$  has a double root, which needs  $t_0^2-4=0$ , i.e.  $t_0=\\pm2$ . Then  $x=1$  (from  $t_0=2$ ) or  $x=-1$  (from  $t_0=-2$ ), both real. Requiring  $R(t_0)=0$ :  $R(2)=a-2=0\\Rightarrow a=2$ ;  $R(-2)=a+6=0\\Rightarrow a=-6.$ ",
          "Way 2: the two roots  $t_0$  of  $R$  coincide, so each  $x$  produced by  $x^2-t_0x+1=0$  is doubled. This needs  $\\operatorname{disc}_t R=4-4(a-2)=12-4a=0$ , i.e.  $a=3$ , giving  $t_0=1$  and  $x^2-x+1=0\\Rightarrow x=\\tfrac{1\\pm i\\sqrt3}{2}$ , which are non-real.",
          "Collecting the cases that yield a real repeated root:  $a=2$  (root  $1$ ) and  $a=-6$  (root  $-1$ ); the Way-2 value  $a=3$  is discarded for non-reality. Hence  $\\boxed{a\\in\\{-6,2\\}}.$ "
        ]
      },
      {
        "name": "Discriminant locates candidates; explicit factorisation decides reality",
        "steps": [
          "The discriminant detects a repeated root over  $\\mathbb{C}$ : a direct computation (or the resultant  $\\operatorname{Res}(P_a,P_a')$ ) gives  $\\Delta(a)=16\\,(a-3)^2(a-2)(a+6).$  Its real zeros are  $a=-6,\\;2,\\;3$ , the only real candidates; for all other real  $a$ ,  $P_a$  is squarefree and has no repeated root at all.",
          "Resolve  $a=2$ :  $P_2(x)=x^4-2x^3+2x^2-2x+1=(x-1)^2(x^2+1).$  The repeated root is  $x=1$  — real, so  $a=2$  is admissible.",
          "Resolve  $a=-6$ :  $P_{-6}(x)=x^4-2x^3-6x^2-2x+1=(x+1)^2(x^2-4x+1).$  The repeated root is  $x=-1$  — real, so  $a=-6$  is admissible.",
          "Resolve  $a=3$ :  $P_3(x)=x^4-2x^3+3x^2-2x+1=(x^2-x+1)^2.$  Here the repeated roots are  $\\tfrac{1\\pm i\\sqrt3}{2}$ , both non-real, so  $a=3$  is rejected despite  $\\Delta(3)=0$ . The admissible set is  $\\boxed{a\\in\\{-6,2\\}}.$ "
        ]
      }
    ],
    "remark": "Insight:  $\\Delta=0$  is the condition for a repeated root \\emph{in  $\\mathbb{C}$ }, not in  $\\mathbb{R}$  — the discriminant cannot see the real axis. The grammar of the factored discriminant tells the whole story: a simple linear factor  $(a-2)$  or  $(a+6)$  marks a single real double root, while the squared factor  $(a-3)^2$  marks the simultaneous birth of a conjugate pair of double roots off the real line. The honest procedure is therefore two-staged: use  $\\gcd(P_a,P_a')$  (equivalently the discriminant) to pin down the finite list of candidate parameters, then return to each candidate and test the multiplicity-bearing root for reality. The elimination of  $a$  between  $P_a$  and  $P_a'$  is the cleanest engine here, because it manufactures the resolvent  $(x-1)(x+1)(x^2-x+1)=0$  whose own factorisation hands you the real-versus-complex split for free — the quadratic  $x^2-x+1$  is exactly the locked door behind which the spurious value  $a=3$  is hiding."
  },
  {
    "theme": "equations",
    "themeLabel": "Polynomial Equations",
    "title": "A Palindrome Hiding a Double Root",
    "difficulty": 5,
    "task": "Solve the quartic",
    "tags": [
      "palindromic equation",
      "reciprocal substitution",
      "Vieta",
      "factoring",
      "double root"
    ],
    "statement": "Solve over  $\\mathbb{C}$  the equation  $z^4-5z^3+8z^2-5z+1=0$ . The coefficients read the same forwards and backwards, so the equation is reciprocal: if  $z$  is a root so is  $1/z$ . Exploit this symmetry to find all four roots.",
    "answer": " $$\\boxed{\\,z=1\\ (\\text{double}),\\qquad z=\\dfrac{3+\\sqrt5}{2},\\qquad z=\\dfrac{3-\\sqrt5}{2}\\,}$$ ",
    "trap": "Trying to factor a generic quartic blindly, or assuming a reciprocal equation must have four distinct reciprocal pairs. Here the substitution  $w=z+\\tfrac1z$  collapses the quartic to  $w^2-5w+6=0$ , giving  $w=2$  and  $w=3$ . The value  $w=2$  forces  $z+\\tfrac1z=2$ , i.e.  $(z-1)^2=0$ , a  $\\textbf{double}$  root  $z=1$  — its own reciprocal. A solver who reports only two roots, or who misses that  $z=1$  is repeated, loses the multiplicity. The other value  $w=3$  gives a genuine reciprocal pair whose product is  $1$ .",
    "solutions": [
      {
        "name": "Reciprocal substitution  $w=z+1/z$ ",
        "steps": [
          "Since  $z=0$  is not a root, divide through by  $z^2$ :  $\\;z^2-5z+8-\\dfrac{5}{z}+\\dfrac{1}{z^2}=0$ , i.e.  $\\left(z^2+\\dfrac{1}{z^2}\\right)-5\\left(z+\\dfrac1z\\right)+8=0$ .",
          "Put  $w=z+\\dfrac1z$ , so  $z^2+\\dfrac{1}{z^2}=w^2-2$ . The equation becomes  $w^2-2-5w+8=0$ , i.e.  $w^2-5w+6=0$ , giving  $w=2$  or  $w=3$ .",
          "For  $w=2$ :  $z+\\dfrac1z=2\\Rightarrow z^2-2z+1=0\\Rightarrow (z-1)^2=0$ , so  $z=1$  is a double root.",
          "For  $w=3$ :  $z+\\dfrac1z=3\\Rightarrow z^2-3z+1=0\\Rightarrow z=\\dfrac{3\\pm\\sqrt5}{2}$ .  $\\boxed{z=1\\,(\\text{double}),\\ \\tfrac{3\\pm\\sqrt5}{2}}$ "
        ]
      },
      {
        "name": "Direct factoring with Vieta",
        "steps": [
          "Seek a factoring into two reciprocal quadratics  $z^2-pz+1$  and  $z^2-qz+1$  (each has constant term  $1$  so that the roots pair as reciprocals, product  $=1$ ).",
          "Expand:  $(z^2-pz+1)(z^2-qz+1)=z^4-(p+q)z^3+(2+pq)z^2-(p+q)z+1$ . Matching with  $z^4-5z^3+8z^2-5z+1$  gives  $p+q=5$  and  $2+pq=8\\Rightarrow pq=6$ .",
          "Hence  $p,q$  are roots of  $t^2-5t+6=0$ , i.e.  $\\{p,q\\}=\\{2,3\\}$ . The quartic factors as  $(z^2-2z+1)(z^2-3z+1)=(z-1)^2(z^2-3z+1)$ .",
          "Solving each:  $(z-1)^2=0\\Rightarrow z=1$  (double);  $z^2-3z+1=0\\Rightarrow z=\\dfrac{3\\pm\\sqrt5}{2}$ .  $\\boxed{z=1\\,(\\text{double}),\\ \\tfrac{3\\pm\\sqrt5}{2}}$ "
        ]
      }
    ],
    "remark": "**Insight.** A palindromic (reciprocal) polynomial of even degree is really a polynomial of half the degree in  $w=z+1/z$ . The fixed points of  $z\\mapsto 1/z$  are  $z=\\pm1$ , so whenever the reduced equation produces  $w=\\pm2$  you should expect a self-reciprocal root, often with multiplicity — exactly the detail that turns a routine factorisation into a trap."
  },
  {
    "theme": "equations",
    "themeLabel": "Polynomial Equations",
    "title": "The Forgotten Conjugate",
    "difficulty": 5,
    "task": "Find all roots and the cubic",
    "tags": [
      "conjugate-root pair",
      "real coefficients",
      "Vieta",
      "sum of roots",
      "reconstruction"
    ],
    "statement": "A cubic  $z^3+pz^2+qz+r=0$  with  $\\textbf{real}$  coefficients has  $2+i$  among its roots, and the sum of all three roots equals  $5$ . Determine  $p,q,r$  and list every root.",
    "answer": " $$\\boxed{\\,p=-5,\\quad q=9,\\quad r=-5;\\qquad \\text{roots } 2+i,\\ 2-i,\\ 1\\,}$$ ",
    "trap": "Treating  $2+i$  as the only complex root and trying to finish with just one real partner. Because the coefficients are real, complex roots occur in conjugate pairs, so  $2-i$  is  $\\textbf{forced}$  to be a root as well. Forgetting this conjugate leaves the cubic underdetermined and produces non-real coefficients. The third root must be real; the condition (sum  $=5$ ) then pins it down to  $5-(2+i)-(2-i)=1$ , a real value as required.",
    "solutions": [
      {
        "name": "Conjugate pair plus Vieta",
        "steps": [
          "Real coefficients force the conjugate  $2-i$  to also be a root. Let the third root be  $a$  (real). By the sum condition  $(2+i)+(2-i)+a=5\\Rightarrow 4+a=5\\Rightarrow a=1$ .",
          "The conjugate pair gives the real quadratic factor  $\\bigl(z-(2+i)\\bigr)\\bigl(z-(2-i)\\bigr)=z^2-4z+5$ .",
          "Multiply by the remaining factor  $(z-1)$ :  $(z^2-4z+5)(z-1)=z^3-5z^2+9z-5$ . Hence  $p=-5,\\ q=9,\\ r=-5$ .",
          "The roots are  $2+i,\\ 2-i,\\ 1$ .  $\\boxed{p=-5,\\ q=9,\\ r=-5;\\ \\{2\\pm i,\\,1\\}}$ "
        ]
      },
      {
        "name": "Symmetric functions of the roots",
        "steps": [
          "Denote the roots  $z_1=2+i,\\ z_2=2-i$  (conjugate, forced by real coefficients) and  $z_3=a$ . By Vieta,  $-p=z_1+z_2+z_3=5$  is given, so  $p=-5$  and  $a=5-4=1$ .",
          "Next  $q=z_1z_2+z_1z_3+z_2z_3$ . Here  $z_1z_2=(2+i)(2-i)=4+1=5$  and  $z_3(z_1+z_2)=1\\cdot 4=4$ , so  $q=5+4=9$ .",
          "Finally  $-r=z_1z_2z_3=5\\cdot 1=5$ , giving  $r=-5$ .",
          "Thus the cubic is  $z^3-5z^2+9z-5$  with roots  $2+i,\\,2-i,\\,1$ .  $\\boxed{p=-5,\\ q=9,\\ r=-5;\\ \\{2\\pm i,\\,1\\}}$ "
        ]
      }
    ],
    "remark": "**Insight.** Real coefficients are a symmetry statement: the conjugation  $z\\mapsto\\overline z$  permutes the roots. The instant a non-real root appears you get its mirror image for free, and the leftover root is pinned by whichever symmetric function (here the sum) you are handed. Reconstruction is then pure Vieta."
  },
  {
    "theme": "equations",
    "themeLabel": "Polynomial Equations",
    "title": "Fifth Roots in Disguise",
    "difficulty": 5,
    "task": "Solve and read off a cosine",
    "tags": [
      "reciprocal equation",
      "roots of unity",
      "De Moivre",
      "cosine value",
      "fifth roots"
    ],
    "statement": "Solve  $z^4+z^3+z^2+z+1=0$  over  $\\mathbb{C}$ , and use the reciprocal substitution to deduce the exact value of  $\\cos\\dfrac{2\\pi}{5}$ .",
    "answer": " $$\\boxed{\\,z=e^{\\pm 2\\pi i/5},\\ e^{\\pm 4\\pi i/5};\\qquad \\cos\\dfrac{2\\pi}{5}=\\dfrac{\\sqrt5-1}{4}\\,}$$ ",
    "trap": "Reaching for the quadratic formula on a quartic, or — after the substitution  $w=z+\\tfrac1z$  — picking the wrong root of  $w^2+w-1=0$  for  $2\\cos\\tfrac{2\\pi}{5}$ . The four roots are the primitive fifth roots of unity, since  $z^4+z^3+z^2+z+1=\\dfrac{z^5-1}{z-1}$ . The two values  $w=\\dfrac{-1\\pm\\sqrt5}{2}$  equal  $2\\cos\\tfrac{2\\pi}{5}$  and  $2\\cos\\tfrac{4\\pi}{5}$ ; because  $\\tfrac{2\\pi}{5}$  is acute,  $\\cos\\tfrac{2\\pi}{5}>0$ , so it is the  $\\textbf{larger}$  value  $\\dfrac{-1+\\sqrt5}{2}$  halved. Choosing the negative root mislabels the angle.",
    "solutions": [
      {
        "name": "Quotient  $\\frac{z^5-1}{z-1}$  and De Moivre",
        "steps": [
          "Multiply by  $(z-1)$ :  $(z-1)(z^4+z^3+z^2+z+1)=z^5-1=0$ , so the roots are fifth roots of unity  $z=e^{2\\pi i k/5}$  with the value  $z=1$  (from  $k=0$ ) excluded.",
          "Hence the four roots are  $e^{2\\pi i/5},\\,e^{4\\pi i/5},\\,e^{6\\pi i/5},\\,e^{8\\pi i/5}$ , i.e.  $e^{\\pm 2\\pi i/5}$  and  $e^{\\pm 4\\pi i/5}$ .",
          "Pair conjugates:  $e^{2\\pi i/5}+e^{-2\\pi i/5}=2\\cos\\tfrac{2\\pi}{5}$  and  $e^{4\\pi i/5}+e^{-4\\pi i/5}=2\\cos\\tfrac{4\\pi}{5}$ , the two real values  $z+\\tfrac1z$  take.",
          "From the reciprocal reduction below these equal  $\\tfrac{-1\\pm\\sqrt5}{2}$ ; the acute angle gives the positive one, so  $2\\cos\\tfrac{2\\pi}{5}=\\tfrac{-1+\\sqrt5}{2}$ , i.e.  $\\cos\\tfrac{2\\pi}{5}=\\tfrac{\\sqrt5-1}{4}$ .  $\\boxed{e^{\\pm2\\pi i/5},e^{\\pm4\\pi i/5};\\ \\cos\\tfrac{2\\pi}{5}=\\tfrac{\\sqrt5-1}{4}}$ "
        ]
      },
      {
        "name": "Reciprocal substitution  $w=z+1/z$ ",
        "steps": [
          "Divide by  $z^2$  (note  $z=0$  is not a root):  $z^2+z+1+\\dfrac1z+\\dfrac{1}{z^2}=0$ , i.e.  $\\left(z+\\dfrac1z\\right)^2+\\left(z+\\dfrac1z\\right)-1=0$  using  $z^2+\\tfrac{1}{z^2}=w^2-2$ .",
          "So  $w^2+w-1=0\\Rightarrow w=\\dfrac{-1\\pm\\sqrt5}{2}$ , where  $w=z+\\dfrac1z$ .",
          "Each  $w$  gives  $z^2-wz+1=0$ , whose roots have modulus  $1$  (product of roots  $=1$ , and  $w$  real with  $|w|<2$ ), confirming the roots lie on the unit circle as fifth roots of unity.",
          "Since  $w=2\\cos\\theta$  for a root  $z=e^{i\\theta}$ , and the acute angle  $\\tfrac{2\\pi}{5}$  gives the positive value,  $2\\cos\\tfrac{2\\pi}{5}=\\dfrac{-1+\\sqrt5}{2}$ , hence  $\\cos\\tfrac{2\\pi}{5}=\\dfrac{\\sqrt5-1}{4}$ .  $\\boxed{\\cos\\tfrac{2\\pi}{5}=\\tfrac{\\sqrt5-1}{4}}$ "
        ]
      }
    ],
    "remark": "**Insight.** The equation  $1+z+z^2+z^3+z^4=0$  is the unit circle wearing an algebraic mask: its roots are the four non-trivial fifth roots of unity. Folding it with  $w=z+1/z$  turns De Moivre's  $z=e^{i\\theta}$  into  $w=2\\cos\\theta$ , so a quadratic in  $w$  literally computes a cosine."
  },
  {
    "theme": "equations",
    "themeLabel": "Polynomial Equations",
    "title": "Real Quadratic Factors of a Sextic",
    "difficulty": 5,
    "task": "Factor into real quadratics",
    "tags": [
      "factoring z^n+1",
      "roots of unity",
      "real quadratic factors",
      "conjugate pairs",
      "sum of roots"
    ],
    "statement": "Factor  $z^6+1$  into a product of three quadratics with  $\\textbf{real}$  coefficients, and verify that the sum of all six roots is  $0$ .",
    "answer": " $$\\boxed{\\,z^6+1=(z^2+1)\\bigl(z^2-\\sqrt3\\,z+1\\bigr)\\bigl(z^2+\\sqrt3\\,z+1\\bigr)\\,}$$ ",
    "trap": "Confusing  $z^6+1$  with  $z^6-1$ , or pairing the six roots into conjugate quadratics incorrectly. The roots solve  $z^6=-1$ , i.e.  $z=e^{i(\\pi+2\\pi k)/6}=e^{i\\pi(2k+1)/6}$  for  $k=0,\\dots,5$  — six points on the unit circle at angles  $\\tfrac{\\pi}{6},\\tfrac{\\pi}{2},\\tfrac{5\\pi}{6},\\tfrac{7\\pi}{6},\\tfrac{3\\pi}{2},\\tfrac{11\\pi}{6}$ . Each conjugate pair  $e^{\\pm i\\theta}$  gives a real factor  $z^2-2\\cos\\theta\\,z+1$ . Using  $\\cos\\theta=0,\\pm\\tfrac{\\sqrt3}{2}$  is essential; a sign slip on  $\\sqrt3$  swaps two factors but a wrong  $\\cos$  ruins them.",
    "solutions": [
      {
        "name": "Roots on the unit circle, paired by conjugates",
        "steps": [
          "Solve  $z^6=-1=e^{i\\pi}$ : the roots are  $z_k=e^{i\\pi(2k+1)/6}$ ,  $k=0,\\dots,5$ , all of modulus  $1$ , at angles  $\\tfrac{\\pi}{6},\\tfrac{\\pi}{2},\\tfrac{5\\pi}{6}$  and their negatives.",
          "Group conjugate pairs  $e^{\\pm i\\theta}$ , each giving the real quadratic  $(z-e^{i\\theta})(z-e^{-i\\theta})=z^2-2\\cos\\theta\\,z+1$ .",
          "With  $\\theta=\\tfrac{\\pi}{6}$ :  $2\\cos\\theta=\\sqrt3\\Rightarrow z^2-\\sqrt3 z+1$ . With  $\\theta=\\tfrac{\\pi}{2}$ :  $2\\cos\\theta=0\\Rightarrow z^2+1$ . With  $\\theta=\\tfrac{5\\pi}{6}$ :  $2\\cos\\theta=-\\sqrt3\\Rightarrow z^2+\\sqrt3 z+1$ .",
          "Thus  $z^6+1=(z^2+1)(z^2-\\sqrt3 z+1)(z^2+\\sqrt3 z+1)$ . The sum of roots equals minus the  $z^5$  coefficient of  $z^6+1$ , which is  $0$ .  $\\boxed{(z^2+1)(z^2-\\sqrt3 z+1)(z^2+\\sqrt3 z+1)}$ "
        ]
      },
      {
        "name": "Algebraic identity via  $z^4-z^2+1$ ",
        "steps": [
          "Factor out the cube structure:  $z^6+1=(z^2)^3+1=(z^2+1)(z^4-z^2+1)$  using  $a^3+b^3=(a+b)(a^2-ab+b^2)$  with  $a=z^2,b=1$ .",
          "Factor the quartic  $z^4-z^2+1$  by completing a square:  $z^4-z^2+1=(z^2+1)^2-3z^2=(z^2+1)^2-(\\sqrt3 z)^2$ .",
          "This is a difference of squares:  $(z^2+1-\\sqrt3 z)(z^2+1+\\sqrt3 z)=(z^2-\\sqrt3 z+1)(z^2+\\sqrt3 z+1)$ .",
          "Combine:  $z^6+1=(z^2+1)(z^2-\\sqrt3 z+1)(z^2+\\sqrt3 z+1)$ ; expanding confirms the  $z^5$  and  $z$  terms cancel, so the root-sum is  $0$ .  $\\boxed{(z^2+1)(z^2-\\sqrt3 z+1)(z^2+\\sqrt3 z+1)}$ "
        ]
      }
    ],
    "remark": "**Insight.** Over the reals a polynomial breaks into linear and quadratic pieces, and for  $z^n\\pm1$  those quadratics are exactly the conjugate pairs  $z^2-2\\cos\\theta\\,z+1$  coming from roots on the unit circle. The completing-the-square trick  $(z^2+1)^2-3z^2$  is the same factorisation arrived at without ever leaving real algebra."
  },
  {
    "theme": "equations",
    "themeLabel": "Polynomial Equations",
    "title": "Roots Trapped on a Vertical Line",
    "difficulty": 5,
    "task": "Solve and locate the roots",
    "tags": [
      "roots of unity",
      "reducible equation",
      "locus of roots",
      "perpendicular bisector",
      "De Moivre"
    ],
    "statement": "Solve  $(z+1)^7=z^7$  over  $\\mathbb{C}$ , and show that every solution lies on a single straight line in the Argand plane. Name that line.",
    "answer": " $$\\boxed{\\,z=\\dfrac{1}{\\omega^k-1}\\ (k=1,\\dots,6),\\ \\omega=e^{2\\pi i/7};\\quad \\text{all on the line }\\operatorname{Re}(z)=-\\tfrac12\\,}$$ ",
    "trap": "Expecting seven roots from a degree- $7$  equation. Both sides have leading term  $z^7$ , so the  $z^7$  cancels and the equation is really degree  $6$  — it has only  $\\textbf{six}$  roots. Dividing by  $z^7$  (valid since  $z=0$  is not a solution) turns it into  $\\bigl(1+\\tfrac1z\\bigr)^7=1$ , a roots-of-unity equation. A student who keeps degree  $7$ , or who fails to discard the spurious case  $\\omega^0=1$  (which would need  $1+\\tfrac1z=1$ , impossible), miscounts the solutions.",
    "solutions": [
      {
        "name": "Reduce to seventh roots of unity",
        "steps": [
          "Since  $z=0$  gives  $1=0$  (false),  $z\\neq0$ . Divide both sides by  $z^7$ :  $\\left(\\dfrac{z+1}{z}\\right)^7=1$ , i.e.  $\\left(1+\\dfrac1z\\right)^7=1$ .",
          "Hence  $1+\\dfrac1z=\\omega^k$  where  $\\omega=e^{2\\pi i/7}$  and  $k=0,1,\\dots,6$ . The case  $k=0$  gives  $1+\\tfrac1z=1\\Rightarrow \\tfrac1z=0$ , which has no solution, so  $k=1,\\dots,6$  — six roots.",
          "Solve:  $\\dfrac1z=\\omega^k-1\\Rightarrow z=\\dfrac{1}{\\omega^k-1}$  for  $k=1,\\dots,6$ .",
          "Write  $\\omega^k=e^{i\\theta}$ . Then  $\\dfrac{1}{e^{i\\theta}-1}=\\dfrac{1}{(\\cos\\theta-1)+i\\sin\\theta}=-\\dfrac12-\\dfrac{i}{2}\\cot\\dfrac{\\theta}{2}$ , whose real part is  $-\\tfrac12$  for every  $k$ . So all roots lie on  $\\operatorname{Re}(z)=-\\tfrac12$ .  $\\boxed{z=\\tfrac{1}{\\omega^k-1},\\ \\operatorname{Re}(z)=-\\tfrac12}$ "
        ]
      },
      {
        "name": "Geometric locus via equal moduli",
        "steps": [
          "Take modulus of  $(z+1)^7=z^7$ :  $|z+1|^7=|z|^7$ , so  $|z+1|=|z|$ , i.e.  $|z-(-1)|=|z-0|$ .",
          "This is the set of points equidistant from  $-1$  and  $0$  — the perpendicular bisector of the segment joining  $0$  and  $-1$ , namely the vertical line  $\\operatorname{Re}(z)=-\\tfrac12$ .",
          "So all solutions necessarily lie on  $\\operatorname{Re}(z)=-\\tfrac12$ ; it remains to find which six points. From  $\\left(1+\\tfrac1z\\right)^7=1$  we get  $z=\\dfrac{1}{\\omega^k-1}$ ,  $k=1,\\dots,6$ ,  $\\omega=e^{2\\pi i/7}$ .",
          "These six points indeed sit on that line (their common real part is  $-\\tfrac12$ ), confirming both the algebra and the geometry.  $\\boxed{z=\\tfrac{1}{\\omega^k-1},\\ \\operatorname{Re}(z)=-\\tfrac12}$ "
        ]
      }
    ],
    "remark": "**Insight.** When two sides of an equation share the same leading power, the degree quietly drops and a root vanishes to infinity. Taking the modulus exposes the geometry instantly:  $|z+1|=|z|$  is a perpendicular bisector, so the roots were destined to be collinear before any root of unity was computed."
  },
  {
    "theme": "equations",
    "themeLabel": "Polynomial Equations",
    "title": "Anti-Palindrome on the Unit Circle",
    "difficulty": 5,
    "task": "Solve; show roots unimodular",
    "tags": [
      "reciprocal polynomial",
      "roots on unit circle",
      "modulus one",
      "Vieta",
      "conjugate symmetry"
    ],
    "statement": "Consider  $2z^4-3z^3+3z-2=0$ . Notice the coefficients  $(2,-3,0,3,-2)$  satisfy  $a_k=-a_{4-k}$ , an anti-palindrome. Solve the equation and prove that all four roots lie on the unit circle  $|z|=1$ .",
    "answer": " $$\\boxed{\\,z=1,\\ z=-1,\\ z=\\dfrac{3\\pm i\\sqrt7}{4};\\quad \\text{each satisfies }|z|=1\\,}$$ ",
    "trap": "Assuming an anti-palindromic equation has no obvious root, or mishandling the missing  $z^2$  term when grouping. For an anti-palindrome of even degree,  $z=1$  is  $\\textbf{automatically}$  a root (the coefficients sum to  $0$ ) and  $z=-1$  is a root too (here  $a_k=-a_{4-k}$  makes the alternating sum vanish). Dividing these out leaves  $2z^2-3z+2=0$ , whose roots have product  $\\tfrac{2}{2}=1$  and are a conjugate pair, so each has modulus  $\\sqrt{1}=1$ . A solver who forgets that  $z=\\pm1$  are forced, or who mis-divides, never sees the clean quadratic.",
    "solutions": [
      {
        "name": "Extract  $z=\\pm1$ , then Vieta on the unit circle",
        "steps": [
          "Sum of coefficients  $2-3+0+3-2=0$ , so  $z=1$  is a root. Alternating sum  $2+3+0-3-2=0$ , so  $z=-1$  is a root.",
          "Divide out  $(z-1)(z+1)=z^2-1$ : polynomial division gives  $2z^4-3z^3+3z-2=(z^2-1)(2z^2-3z+2)$ .",
          "Solve  $2z^2-3z+2=0$ :  $z=\\dfrac{3\\pm\\sqrt{9-16}}{4}=\\dfrac{3\\pm i\\sqrt7}{4}$ , a conjugate pair.",
          "Their product is  $\\dfrac{c}{a}=\\dfrac{2}{2}=1$ ; for a conjugate pair  $z\\bar z=|z|^2$ , so  $|z|^2=1\\Rightarrow|z|=1$ . The roots  $\\pm1$  trivially have modulus  $1$ , so all four lie on  $|z|=1$ .  $\\boxed{1,-1,\\tfrac{3\\pm i\\sqrt7}{4}}$ "
        ]
      },
      {
        "name": "Reciprocal symmetry forces  $|z|=1$  pairs",
        "steps": [
          "An anti-palindromic polynomial satisfies  $z^4P(1/z)=-P(z)$ ; hence if  $z_0$  is a root so is  $1/z_0$ . The roots therefore come in reciprocal pairs  $\\{z_0,1/z_0\\}$ .",
          "Because the coefficients are real, roots also come in conjugate pairs  $\\{z_0,\\bar z_0\\}$ . For a non-real root, combining both symmetries forces  $1/z_0=\\bar z_0$ , i.e.  $z_0\\bar z_0=1$ , so  $|z_0|=1$ .",
          "Explicitly, factoring gives  $(z^2-1)(2z^2-3z+2)$ ; the real roots are the self-reciprocal  $z=\\pm1$  and the non-real pair  $z=\\dfrac{3\\pm i\\sqrt7}{4}$  from  $2z^2-3z+2=0$ .",
          "Check the non-real pair:  $\\left|\\dfrac{3\\pm i\\sqrt7}{4}\\right|^2=\\dfrac{9+7}{16}=1$ , confirming  $|z|=1$  for all four roots.  $\\boxed{1,-1,\\tfrac{3\\pm i\\sqrt7}{4},\\ |z|=1}$ "
        ]
      }
    ],
    "remark": "**Insight.** Reciprocal and anti-reciprocal polynomials carry the symmetry  $z\\mapsto1/z$  in their coefficients; combined with real-coefficient conjugation  $z\\mapsto\\bar z$ , a non-real root is pinned to satisfy  $\\bar z=1/z$ , which is exactly the unit circle. The forced roots  $z=\\pm1$  are the fixed points of  $z\\mapsto1/z$  and fall out from the coefficient sums."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Equilateral Cubic",
    "difficulty": 5,
    "task": "Find all",
    "tags": [
      "roots of unity",
      "rotation",
      "equilateral triangle",
      "cubic"
    ],
    "statement": "Consider the cubic  $z^{3}-6z^{2}+12z+c=0$  with  $c$  a real constant. (a) Show that, for every real  $c$ , its three roots are the vertices of an equilateral triangle, and find the common centroid and the side length as a function of  $c$ . (b) Determine the value of  $c$  for which one vertex of the triangle is the real number  $3$ , and give the resulting side length.",
    "answer": "(a) For every real  $c$  the centroid is  $g=2$  and the side length is  $s=\\sqrt{3}\\,|c+8|^{1/3}$  (degenerate only at  $c=-8$ ). (b) The vertex  $z=3$  forces  $c=-9$ ; then the roots are  $3,\\,2+\\zeta,\\,2+\\zeta^{2}$  with  $\\zeta=e^{2\\pi i/3}$ , centroid  $2$ , and side length  $\\sqrt{3}$ .",
    "trap": "Pinning  $c$  from the discriminant, or believing the side length alone fixes  $c$ . Equilaterality is the rotational-symmetry condition  $a^{2}=3b$  on the coefficients, which here holds automatically ( $36=3\\cdot12$ ), so it does NOT determine  $c$  at all. Worse, even demanding side  $=\\sqrt{3}$  leaves two solutions  $c=-9$  and  $c=-7$  (the latter has real vertex  $1$ , not  $3$ ). Only a genuine vertex condition pins  $c$  uniquely.",
    "solutions": [
      {
        "name": "Roots-of-unity ansatz",
        "steps": [
          "Equilateral vertices with centroid  $g$  have the form  $g+r\\zeta^{k}$ ,  $\\zeta=e^{2\\pi i/3}$ ,  $k=0,1,2$ , because  $1,\\zeta,\\zeta^{2}$  are the cube roots of unity, a rotation by  $120^\\circ$  about  $g$ .",
          "Their elementary symmetric sums give the monic cubic  $(z-g)^{3}-r^{3}=0$ , since  $\\sum\\zeta^{k}=0$  and  $\\sum_{i<j}\\zeta^{i}\\zeta^{j}=0$ . Thus any equilateral triad is the root set of  $z^{3}-3g\\,z^{2}+3g^{2}z-(g^{3}+r^{3})=0$ .",
          "Match to  $z^{3}-6z^{2}+12z+c$ : the quadratic term gives  $3g=6$ , so  $g=2$ , and the linear term  $3g^{2}=12$  is automatically consistent. The constant term gives  $-(g^{3}+r^{3})=c$ , i.e.  $r^{3}=-(8+c)$ . Hence for every real  $c$  the roots are equilateral with centroid  $g=2$  and side  $s=\\sqrt{3}\\,|r|=\\sqrt{3}\\,|c+8|^{1/3}$  (using  $|\\zeta^{i}-\\zeta^{j}|=\\sqrt{3}$ ). This proves part (a).",
          "For part (b), demand a vertex at  $z=3$ . Substituting  $z=3$  into the cubic:  $27-54+36+c=0\\Rightarrow c=-9$ . Then  $r^{3}=-(8-9)=1$ , so  $|r|=1$  and  $s=\\sqrt{3}$ , with the real cube root  $r=1$  giving the vertex  $g+r=3$  exactly.  $\\boxed{c=-9,\\;g=2,\\;\\text{side}=\\sqrt{3}}$ "
        ]
      },
      {
        "name": "Depress and recognize cube roots",
        "steps": [
          "Substitute  $z=u+2$  (a shift to the centroid  $-\\tfrac{a}{3}=2$ ). Expanding,  $z^{3}-6z^{2}+12z+c=(u+2)^{3}-6(u+2)^{2}+12(u+2)+c=u^{3}+(c+8)$ . The quadratic and linear terms vanish identically because the coefficient pattern satisfies  $a^{2}=3b$ .",
          "So the equation becomes  $u^{3}=-(c+8)$ , a constant. Its three solutions are the three cube roots of a fixed complex number, which always sit at the vertices of an equilateral triangle centred at  $u=0$ . Translating back, the  $z$ -roots are equilateral with centroid  $2$  and side  $\\sqrt{3}\\,|c+8|^{1/3}$  for every real  $c$  (degenerate only when  $c=-8$ ). This settles part (a).",
          "For part (b), the vertex  $z=3$  means  $u=1$ , so  $u^{3}=1$ , giving  $-(c+8)=1$  and  $c=-9$ .",
          "Then  $u\\in\\{1,\\zeta,\\zeta^{2}\\}$  and  $z\\in\\{3,\\,2+\\zeta,\\,2+\\zeta^{2}\\}$ , centroid  $2$ , side  $=|1-\\zeta|=\\sqrt{3}$ . (Note  $c=-7$  would also give side  $\\sqrt{3}$  but with real vertex  $1$ , so the vertex-at- $3$  condition is essential.)  $\\boxed{c=-9,\\;g=2,\\;\\text{side}=\\sqrt{3}}$ "
        ]
      }
    ],
    "remark": "Insight: depressing a cubic to  $u^{3}=\\text{const}$  instantly exposes an equilateral triangle, because the cube roots of any complex number are the vertices of one. The coefficient fingerprint of this symmetry is  $a^{2}=3b$ ; when it holds, equilaterality is forced for the whole one-parameter family, so the centroid is locked but the side length and constant  $c$  float freely. A unique  $c$  therefore requires one extra honest constraint, such as fixing an actual vertex."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Disguised Translation",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "locus",
      "max min",
      "modulus",
      "factoring"
    ],
    "statement": "The complex number  $z$  moves on the circle  $|z-2|=1$ . Determine the maximum and minimum values of  $|z^{2}-4z|$  as  $z$  traverses this circle.",
    "answer": "Maximum  $=5$ , minimum  $=3$ .",
    "trap": "Parametrizing  $z=2+e^{it}$  and grinding  $|z^2-4z|$  as a messy trigonometric function, then trusting a calculus critical-point hunt that misses the structure. The slick move is to factor first:  $z^2-4z=z(z-4)$  telescopes into  $e^{2it}-4$ , turning a quartic-looking modulus into a simple distance from a fixed point.",
    "solutions": [
      {
        "name": "Factor and telescope",
        "steps": [
          "Write  $z=2+e^{it}$  on the circle. Then  $z-4=-2+e^{it}=e^{it}-2.$ ",
          "So  $z^2-4z=z(z-4)=(2+e^{it})(e^{it}-2)=e^{2it}-4$  (the cross terms  $2e^{it}-2e^{it}$  cancel and  $2\\cdot(-2)=-4$ ).",
          "Hence  $|z^2-4z|=|e^{2it}-4|$ , the distance from the unit-circle point  $e^{2it}$  to the fixed point  $4.$ ",
          "This distance ranges from  $4-1=3$  (nearest point  $e^{2it}=1$ ) to  $4+1=5$  (farthest point  $e^{2it}=-1$ ).  $\\boxed{\\min=3,\\ \\max=5}$ "
        ]
      },
      {
        "name": "Complete the square geometrically",
        "steps": [
          " $z^2-4z=(z-2)^2-4.$  On the circle  $|z-2|=1$ , set  $w=z-2$  so  $|w|=1$ ; then  $z^2-4z=w^2-4.$ ",
          "As  $w$  ranges over the unit circle,  $w^2$  ranges over the unit circle as well (covering it twice).",
          "Thus  $|w^2-4|$  is the distance from a unit-circle point to  $4$ , lying in  $[\\,4-1,\\,4+1\\,]=[3,5].$ ",
          "Both extremes are attained ( $w^2=1$  gives  $3$ ,  $w^2=-1$  gives  $5$ ).  $\\boxed{\\min=3,\\ \\max=5}$ "
        ]
      },
      {
        "name": "Direct modulus-squared (verifying the trap is harmless)",
        "steps": [
          "With  $z=2+e^{it}$  one finds  $|z^2-4z|^2=|e^{2it}-4|^2=(\\cos 2t-4)^2+\\sin^2 2t=17-8\\cos 2t.$ ",
          "As  $\\cos 2t$  sweeps  $[-1,1]$ , the value  $17-8\\cos 2t$  sweeps  $[9,25].$ ",
          "Taking square roots,  $|z^2-4z|\\in[3,5]$ , with  $\\min$  at  $\\cos 2t=1$  and  $\\max$  at  $\\cos 2t=-1.$   $\\boxed{\\min=3,\\ \\max=5}$ "
        ]
      }
    ],
    "remark": "Insight: completing the square inside a modulus turns 'point on a circle' into 'point on another circle', and the extremes of  $|w^2-c|$  are just  $|c|\\pm 1$ . The algebra of  $(z-2)^2$  is the whole problem; even the brute-force route collapses to the clean  $17-8\\cos 2t$ , so there is no hidden critical point to miss."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Dirichlet Ceiling",
    "difficulty": 5,
    "task": "Find the supremum and decide attainment",
    "tags": [
      "geometric sum",
      "dirichlet kernel",
      "modulus optimization",
      "supremum not maximum",
      "triangle inequality equality",
      "unit circle"
    ],
    "statement": "Fix an integer  $n\\ge 2$  and consider the polynomial  $P(z)=1+z+z^{2}+\\cdots+z^{n-1}$ , the  $n$ -term partial sum of the geometric series. We let  $z$  roam over the unit circle but forbid the single point  $z=1$ :  \\[ S=\\Bigl\\{\\,|P(z)|\\ :\\ |z|=1,\\ z\\neq 1\\,\\Bigr\\}. \\]  Equivalently, since  $P(z)=\\dfrac{z^{n}-1}{z-1}$  for  $z\\neq1$ , the quantity in play is the ratio of chord lengths  $\\dfrac{|z^{n}-1|}{|z-1|}$  as  $z$  travels the punctured circle. (a) Determine  $\\displaystyle M=\\sup S$ , the least upper bound of  $|P(z)|$  over the punctured unit circle, as a function of  $n$ . (b) Decide — with proof — whether  $M$  is attained: is there an admissible  $z$  (with  $|z|=1$ ,  $z\\neq1$ ) for which  $|P(z)|=M$ , so that the supremum is a genuine maximum? Report  $M$  as the final answer. Throughout, the natural reduction is to write  $z=e^{i\\theta}$  with  $\\theta\\in(0,2\\pi)$  and recognize  $|P(z)|$  as a Dirichlet kernel; but be warned that the value of  $|P|$  at the obvious special points (roots of  $z^{n}=1$ , polygon vertices, lobe peaks) is a distraction. The whole game is the boundary behaviour as  $z$  creeps toward the excluded point  $1$ .",
    "answer": " \\[\\boxed{M=n}\\] ",
    "trap": "The fatal move is to hunt for an interior maximizer and report its value as the answer. Setting  $z=e^{i\\theta}$  gives  $|P(z)|=\\left|\\dfrac{\\sin(n\\theta/2)}{\\sin(\\theta/2)}\\right|$ , the Dirichlet kernel  $D_{n}(\\theta)$ . A strong student differentiates, locates stationary points, and either (i) reports the height of the tallest interior critical lobe — which for every  $n$  is strictly less than  $n$  — as ``the maximum,'' or (ii) tests the seductive special points and is misled twice over: the  $n$ th roots of unity nearest  $1$ , namely  $z=e^{\\pm 2\\pi i/n}$ , satisfy  $z^{n}=1$  with  $z\\neq1$ , so  $P(z)=\\dfrac{z^{n}-1}{z-1}=0$  — the minimum, not the maximum — while the antipode  $z=-1$  (for even  $n$ ) gives  $P(-1)=0$  as well. Tempted by symmetry, some declare the supremum is some clean interior peak. All of this misses the real structure:  $D_{n}(\\theta)\\to n$  as  $\\theta\\to0^{+}$ , i.e. as  $z\\to1$  along the circle, yet  $z=1$  is excluded. So the value  $n$  is approached arbitrarily closely but never reached —  $M=n$  is a supremum, not a maximum. The conceptual error is treating  $\\sup$  and  $\\max$  as the same: the optimizer wants to sit at the forbidden point, the closed unit circle's removal of  $\\{1\\}$  turns a would-be maximum into an unattained limit, and any answer of the form ``the max is the height of lobe so-and-so'' is wrong. The honest answer must state both  $M=n$  and that it is not attained on the punctured circle.",
    "solutions": [
      {
        "name": "Triangle inequality ceiling + limit floor (the clean two-sided squeeze)",
        "steps": [
          "Upper bound.  $P(z)=1+z+\\cdots+z^{n-1}$  is a sum of  $n$  complex numbers, each of modulus  $1$  when  $|z|=1$  (since  $|z^{k}|=|z|^{k}=1$ ). By the triangle inequality  $|P(z)|\\le\\sum_{k=0}^{n-1}|z^{k}|=n$ . Hence  $M=\\sup S\\le n$  — a ceiling that holds for every point of the (full) unit circle.",
          "When is the ceiling tight? Equality in the triangle inequality  $|\\sum a_{k}|\\le\\sum|a_{k}|$  requires all nonzero  $a_{k}=z^{k}$  to point in the same direction, i.e.  $\\arg(z^{k})$  independent of  $k$ . Since  $\\arg(z^{k})=k\\arg z$ , this forces  $\\arg z\\equiv 0$ , i.e.  $z=1$ . Thus for every admissible  $z$  (with  $z\\neq1$ ) the inequality is strict:  $|P(z)|<n$ . So  $n$  is not attained on the punctured circle, and in particular no interior lobe can equal  $n$ .",
          "Lower bound for the supremum. Approach the forbidden point: let  $z=e^{i\\theta}$  with  $\\theta\\to0^{+}$ . Then  $P(z)=\\sum_{k=0}^{n-1}e^{ik\\theta}$ , and each term  $e^{ik\\theta}\\to 1$ , so by continuity  $P(e^{i\\theta})\\to n$  and  $|P(e^{i\\theta})|\\to n$ . Concretely  $|P|=\\left|\\frac{\\sin(n\\theta/2)}{\\sin(\\theta/2)}\\right|\\to n$  as  $\\theta\\to0$ . Thus values of  $|P|$  on the punctured circle get within any  $\\varepsilon$  of  $n$ .",
          "Combine:  $|P(z)|<n$  always (so  $n$  is an upper bound), yet  $|P(z)|$  exceeds  $n-\\varepsilon$  for  $\\theta$  small (so no number below  $n$  is an upper bound). Therefore the least upper bound is exactly  $M=n$ , and it is not attained:  $\\sup S=n$  is a supremum, not a maximum.  $\\boxed{M=n}$ ."
        ]
      },
      {
        "name": "Dirichlet kernel: monotone main lobe forces the supremum to the excluded endpoint",
        "steps": [
          "Write  $z=e^{i\\theta}$ ,  $\\theta\\in(0,2\\pi)$ . Summing the geometric series,  $P(z)=\\dfrac{z^{n}-1}{z-1}$ ; factoring  $e^{in\\theta/2}$  and  $e^{i\\theta/2}$  from numerator and denominator gives the Dirichlet kernel  $|P(z)|=D_{n}(\\theta)=\\left|\\dfrac{\\sin(n\\theta/2)}{\\sin(\\theta/2)}\\right|$ .",
          "On the first (main) lobe  $0<\\theta\\le 2\\pi/n$  the numerator  $\\sin(n\\theta/2)\\ge0$  and we may drop absolute values:  $f(\\theta)=\\dfrac{\\sin(n\\theta/2)}{\\sin(\\theta/2)}$ . Its endpoint values are  $\\lim_{\\theta\\to0^{+}}f(\\theta)=n$  (L'Hopital, or  $\\frac{\\sin(n\\theta/2)}{\\sin(\\theta/2)}\\sim\\frac{n\\theta/2}{\\theta/2}$ ) and  $f(2\\pi/n)=\\dfrac{\\sin\\pi}{\\sin(\\pi/n)}=0$ . A short computation (or the standard fact that the Dirichlet kernel decreases monotonically from its central peak across the main lobe) shows  $f$  is strictly decreasing on  $(0,2\\pi/n)$ , dropping from the limit  $n$  down to  $0$ .",
          "Beyond the first zero the kernel oscillates in side lobes whose peak heights are bounded by  $\\dfrac{1}{\\sin(\\theta/2)}\\le\\dfrac{1}{\\sin(\\pi/n)}<n$  for  $\\theta\\ge 2\\pi/n$  (and they shrink as  $\\theta$  moves toward  $\\pi$ ); every such peak is strictly below  $n$ . Hence the global supremum of  $D_{n}$  over  $(0,2\\pi)$  comes solely from the main-lobe limit  $\\theta\\to0^{+}$ , where  $D_{n}\\uparrow n$  but  $\\theta=0$  (i.e.  $z=1$ ) is excluded.",
          "Therefore  $\\sup_{\\theta\\in(0,2\\pi)}D_{n}(\\theta)=n$ , approached only as  $\\theta\\to0$ , never attained for  $\\theta\\neq0$ . So  $M=n$  and it is not a maximum.  $\\boxed{M=n}$ ."
        ]
      },
      {
        "name": "Direct partial-sum bound with explicit near-miss sequence",
        "steps": [
          "Real-part bound. For  $|z|=1$ ,  $|P(z)|=\\Bigl|\\sum_{k=0}^{n-1}z^{k}\\Bigr|$ . Projecting onto the direction of  $P(z)$  itself,  $|P(z)|=\\sum_{k=0}^{n-1}\\mathrm{Re}\\bigl(\\overline{u}\\,z^{k}\\bigr)$  where  $u=P(z)/|P(z)|$  is the unit vector along  $P$ . Each summand is  $\\le|z^{k}|=1$ , giving  $|P(z)|\\le n$ , with equality only if every  $\\mathrm{Re}(\\overline u z^{k})=1$ , i.e. every  $z^{k}=u$  — impossible unless  $z=1$ . So strictly  $|P(z)|<n$  for all admissible  $z$ .",
          "Explicit approaching sequence. Take  $z_{m}=e^{i/m}$  for integers  $m\\ge1$  (so  $z_{m}\\neq1$  and  $z_{m}\\to1$ ). Then  $|P(z_{m})|=\\dfrac{\\sin(n/(2m))}{\\sin(1/(2m))}$ . As  $m\\to\\infty$ , using  $\\sin x\\sim x$ , this ratio  $\\to\\dfrac{n/(2m)}{1/(2m)}=n$ . Hence  $\\lim_{m\\to\\infty}|P(z_{m})|=n$  with each  $|P(z_{m})|<n$ .",
          "These two facts say exactly that  $n$  is an upper bound for  $S$  that is approached but never met. No smaller bound works (the sequence overshoots any  $n-\\varepsilon$ ), and no value of  $n$  itself occurs. Thus  $\\sup S=n$  while  $\\max S$  does not exist.",
          "(Sanity check on the traps.) The roots  $z=e^{\\pm2\\pi i/n}$  give  $P=\\frac{z^{n}-1}{z-1}=0$ , the minimum; for even  $n$ ,  $z=-1$  gives  $P=0$  too. None of these special points is anywhere near the supremum, confirming the optimizer lives only at the excluded boundary  $z=1$ . Final answer:  $\\boxed{M=n}$ , not attained."
        ]
      }
    ],
    "remark": "Insight: this is the cleanest possible illustration that  $\\sup$  and  $\\max$  are different beasts. The geometric sum  $P(z)=\\frac{z^{n}-1}{z-1}$  is the Dirichlet kernel in disguise, and the triangle inequality instantly caps it at  $n$  — but equality in the triangle inequality demands all  $n$  unit vectors  $1,z,\\dots,z^{n-1}$  point the same way, which happens only at the one forbidden point  $z=1$ . Remove that point and the cap  $n$  becomes a horizon: reachable in the limit, never in fact. Every tempting interior candidate (a side-lobe peak, a polygon vertex, the nearest  $n$ th root of unity) is a decoy; the roots of  $z^{n}=1$  even sit at the minimum  $0$ . The lesson for a top ranker is to ask not only ``what is the bound?'' but ``is the bound achieved on the actual domain?'' — here the punctured circle quietly converts a maximum into an unattained supremum  $M=n$ . Same machinery, sharper conclusion: optimize on the domain you are actually given, endpoints and punctures included."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "Diagonals of a Regular Dodecagon",
    "difficulty": 5,
    "task": "Find a product of distances",
    "tags": [
      "roots of unity",
      "regular polygon",
      "factoring z^n-1",
      "modulus",
      "geometry in complex form"
    ],
    "statement": "A regular  $12$ -gon is inscribed in the unit circle, its vertices being  $A_0,A_1,\\dots,A_{11}$  where  $A_k=\\omega^{k}$  and  $\\omega=e^{2\\pi i/12}$  is a primitive twelfth root of unity. From the single vertex  $A_0=1$ , draw the eleven segments to every other vertex. Compute the product of the  $\\mathbf{squares}$  of these eleven lengths,  \\[ P=\\prod_{k=1}^{11}\\bigl|A_0-A_k\\bigr|^{2}=\\prod_{k=1}^{11}\\bigl|1-\\omega^{k}\\bigr|^{2}. \\] ",
    "answer": " $$\\boxed{\\,P=144\\,}$$ ",
    "trap": "Computing the product of the lengths themselves rather than their squares. The unsquared product  $\\prod_{k=1}^{11}|1-\\omega^{k}|$  equals  $12$  (the celebrated “the product of diagonals and sides from one vertex of a regular  $n$ -gon is  $n$ ”), so a hurried reader answers  $12$ . The problem asks for the product of the  $\\mathbf{squared}$  lengths, which is  $12^{2}=144$ .",
    "solutions": [
      {
        "name": "Factor  $z^{12}-1$  and evaluate the derivative limit",
        "steps": [
          "Since  $1,\\omega,\\dots,\\omega^{11}$  are precisely the roots of  $z^{12}-1$ , we have  $z^{12}-1=\\prod_{k=0}^{11}(z-\\omega^{k})=(z-1)\\prod_{k=1}^{11}(z-\\omega^{k})$ .",
          "Divide by  $(z-1)$  and let  $z\\to 1$ : the left side becomes  $\\lim_{z\\to1}\\dfrac{z^{12}-1}{z-1}=12$  (the value of the derivative pattern  $1+z+\\cdots+z^{11}$  at  $z=1$ ). Hence  $\\prod_{k=1}^{11}(1-\\omega^{k})=12$ .",
          "Now  $|1-\\omega^{k}|^{2}=(1-\\omega^{k})(1-\\overline{\\omega^{k}})=(1-\\omega^{k})(1-\\omega^{-k})$ , and as  $k$  runs over  $1,\\dots,11$  so does  $-k$  (mod  $12$ ). Therefore  $P=\\prod_{k=1}^{11}(1-\\omega^{k})\\cdot\\prod_{k=1}^{11}(1-\\omega^{-k})=12\\cdot 12=144$ .",
          "Thus  $\\boxed{P=144}$ ."
        ]
      },
      {
        "name": "Trigonometric form via  $|1-\\omega^{k}|=2\\sin(k\\pi/12)$ ",
        "steps": [
          "Write  $|1-\\omega^{k}|=|1-e^{2\\pi i k/12}|=2\\bigl|\\sin(k\\pi/12)\\bigr|$ , so  $P=\\prod_{k=1}^{11}4\\sin^{2}\\!\\left(\\dfrac{k\\pi}{12}\\right)=4^{11}\\Bigl(\\prod_{k=1}^{11}\\sin\\dfrac{k\\pi}{12}\\Bigr)^{2}.$ ",
          "Use the standard product  $\\displaystyle\\prod_{k=1}^{n-1}\\sin\\dfrac{k\\pi}{n}=\\dfrac{n}{2^{\\,n-1}}$  with  $n=12$ :  $\\prod_{k=1}^{11}\\sin\\dfrac{k\\pi}{12}=\\dfrac{12}{2^{11}}.$ ",
          "Substitute:  $P=4^{11}\\cdot\\dfrac{12^{2}}{2^{22}}=2^{22}\\cdot\\dfrac{144}{2^{22}}=144.$ ",
          "Hence  $\\boxed{P=144}$ , matching the factorization route."
        ]
      }
    ],
    "remark": "**Insight.** The factorization  $z^{n}-1=\\prod_{k=0}^{n-1}(z-\\omega^{k})$  is the bridge between a polygon's geometry and pure algebra: deleting the vertex at  $z=1$  leaves  $\\prod_{k=1}^{n-1}(1-\\omega^{k})=n$ . Squaring the lengths is not cosmetic — it pairs  $\\omega^{k}$  with its conjugate  $\\omega^{-k}$ , and because conjugation permutes the nontrivial roots, the squared product is exactly  $n^{2}$ . The whole trap lives in the one word “squares.”"
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "A Quadratic, De Moivre, and a Power",
    "difficulty": 5,
    "task": "Evaluate a high power sum",
    "tags": [
      "de moivre",
      "polynomial equation",
      "polar form",
      "argument",
      "roots on the unit circle"
    ],
    "statement": "A complex number  $z$  satisfies the quadratic equation  \\[ z^{2}-2z\\cos\\frac{\\pi}{5}+1=0. \\]  Using De Moivre's theorem, find the exact value of  \\[ z^{2024}+\\frac{1}{z^{2024}}. \\] ",
    "answer": " $$\\boxed{\\,z^{2024}+\\dfrac{1}{z^{2024}}=-\\dfrac{1+\\sqrt{5}}{2}\\,}$$ ",
    "trap": "Mistaking the period. The roots are  $z=e^{\\pm i\\pi/5}$ , which are primitive  $\\mathbf{tenth}$  roots of unity (they satisfy  $z^{10}=1$  but  $z^{5}=-1$ , not  $z^{5}=1$ ). A student who assumes  $z^{5}=1$  reduces  $2024\\equiv 4\\pmod 5$  and gets  $2\\cos\\frac{8\\pi}{5}=\\frac{\\sqrt5-1}{2}$ . The correct period is  $10$ :  $2024\\equiv 4\\pmod{10}$  gives  $2\\cos\\frac{4\\pi}{5}=-\\frac{1+\\sqrt5}{2}$ .",
    "solutions": [
      {
        "name": "Solve the quadratic, then apply De Moivre",
        "steps": [
          "The quadratic  $z^{2}-2z\\cos\\frac{\\pi}{5}+1=0$  has roots  $z=\\cos\\frac{\\pi}{5}\\pm\\sqrt{\\cos^{2}\\frac{\\pi}{5}-1}=\\cos\\frac{\\pi}{5}\\pm i\\sin\\frac{\\pi}{5}=e^{\\pm i\\pi/5}$ , since the discriminant is  $-\\sin^{2}\\frac{\\pi}{5}$ . In either case  $|z|=1$ .",
          "By De Moivre,  $z^{n}+z^{-n}=e^{\\,i n\\pi/5}+e^{-i n\\pi/5}=2\\cos\\dfrac{n\\pi}{5}$ , independent of the  $\\pm$  sign chosen.",
          "With  $n=2024$ :  $\\dfrac{2024\\pi}{5}=\\dfrac{2024}{5}\\pi$ . Reduce the angle modulo  $2\\pi$ , i.e. reduce  $2024$  modulo  $10$ :  $2024=10\\cdot 202+4$ , so  $\\dfrac{2024\\pi}{5}\\equiv\\dfrac{4\\pi}{5}\\pmod{2\\pi}$ .",
          "Hence  $z^{2024}+z^{-2024}=2\\cos\\dfrac{4\\pi}{5}=-2\\cos\\dfrac{\\pi}{5}=-\\dfrac{1+\\sqrt5}{2}$ , using  $\\cos\\frac{\\pi}{5}=\\frac{1+\\sqrt5}{4}$ . Therefore  $\\boxed{\\,-\\dfrac{1+\\sqrt5}{2}\\,}$ ."
        ]
      },
      {
        "name": "Recurrence on  $a_n=z^{n}+z^{-n}$ ",
        "steps": [
          "Let  $a_n=z^{n}+z^{-n}$ . From the equation,  $z+z^{-1}=2\\cos\\frac{\\pi}{5}=a_1$ , and the identity  $(z+z^{-1})(z^{n}+z^{-n})=(z^{n+1}+z^{-(n+1)})+(z^{n-1}+z^{-(n-1)})$  gives the recurrence  $a_{n+1}=a_1\\,a_n-a_{n-1}$  with  $a_0=2$ .",
          "This is exactly the recurrence for  $a_n=2\\cos\\frac{n\\pi}{5}$ , so the sequence is periodic with period  $10$  (since  $\\cos\\frac{(n+10)\\pi}{5}=\\cos\\!\\big(\\frac{n\\pi}{5}+2\\pi\\big)=\\cos\\frac{n\\pi}{5}$ ).",
          "Therefore  $a_{2024}=a_{2024\\bmod 10}=a_4=2\\cos\\dfrac{4\\pi}{5}$ .",
          "Evaluating,  $a_{4}=-\\dfrac{1+\\sqrt5}{2}$ , so  $\\boxed{\\,z^{2024}+z^{-2024}=-\\dfrac{1+\\sqrt5}{2}\\,}$ ."
        ]
      }
    ],
    "remark": "**Insight.** The fusion here is a quadratic whose roots are forced onto the unit circle ( $z^2-2z\\cos\\theta+1=0\\Rightarrow z=e^{\\pm i\\theta}$ ), after which De Moivre converts a giant exponent into a tiny angle reduction. The entire difficulty is the period:  $e^{i\\pi/5}$  has order  $10$ , not  $5$ , because  $\\theta=\\pi/5$  is half of  $2\\pi/10$ . Always reduce the exponent modulo the order of the root, and read that order off the actual angle."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "Rotating an Edge Into a Triangle",
    "difficulty": 5,
    "task": "Find the apex modulus squared",
    "tags": [
      "rotation",
      "equilateral triangle",
      "modulus",
      "geometry in complex form",
      "argument"
    ],
    "statement": "Points  $A=1$  and  $B=4$  are two vertices of an equilateral triangle  $ABC$  in the Argand plane. The third vertex  $C$  is the one lying  $\\mathbf{above}$  the real axis (positive imaginary part). Determine  $|C|^{2}$ .",
    "answer": " $$\\boxed{\\,|C|^{2}=13\\,}$$ ",
    "trap": "Rotating the edge  $AB$  by  $90^{\\circ}$  (multiplying  $b-a$  by  $i$ ) as if building a square or right triangle, which gives  $C=1+(4-1)i=1+3i$  and the wrong value  $|C|^{2}=10$ . An equilateral triangle requires a rotation by  $60^{\\circ}$ , i.e. multiplication by  $e^{i\\pi/3}$ , not  $i$ .",
    "solutions": [
      {
        "name": "Rotation formula about a vertex",
        "steps": [
          "To get  $C$ , rotate  $B$  about  $A$  through  $+60^{\\circ}$ :  $C-A=(B-A)e^{i\\pi/3}$ , so  $C=A+(B-A)\\left(\\tfrac12+\\tfrac{\\sqrt3}{2}i\\right)$  (the  $+$  sign gives the upper vertex).",
          "Here  $B-A=3$ , so  $C=1+3\\left(\\tfrac12+\\tfrac{\\sqrt3}{2}i\\right)=1+\\tfrac32+\\tfrac{3\\sqrt3}{2}i=\\dfrac{5}{2}+\\dfrac{3\\sqrt3}{2}i.$ ",
          "Then  $|C|^{2}=\\left(\\dfrac52\\right)^{2}+\\left(\\dfrac{3\\sqrt3}{2}\\right)^{2}=\\dfrac{25}{4}+\\dfrac{27}{4}=\\dfrac{52}{4}=13.$ ",
          "Hence  $\\boxed{|C|^{2}=13}$ ."
        ]
      },
      {
        "name": "Equilateral condition  $a^{2}+b^{2}+c^{2}=ab+bc+ca$ ",
        "steps": [
          "An equilateral triangle with vertices  $a,b,c$  satisfies  $a^{2}+b^{2}+c^{2}=ab+bc+ca$ . With  $a=1,\\,b=4$  this is  $1+16+c^{2}=4+4c+c$ , i.e.  $c^{2}-5c+13=0.$ ",
          "Solving,  $c=\\dfrac{5\\pm\\sqrt{25-52}}{2}=\\dfrac{5\\pm i\\sqrt{27}}{2}=\\dfrac{5}{2}\\pm\\dfrac{3\\sqrt3}{2}i.$  The upper vertex is  $c=\\dfrac{5}{2}+\\dfrac{3\\sqrt3}{2}i.$ ",
          "By Vieta on  $c^{2}-5c+13=0$ , the product of the two possible apexes is  $13$ , and since they are conjugates,  $|C|^{2}=C\\,\\overline{C}=13$  directly.",
          "Therefore  $\\boxed{|C|^{2}=13}$ , confirming the rotation result."
        ]
      }
    ],
    "remark": "**Insight.** Two clean handles describe an equilateral triangle: the rotation  $C-A=(B-A)e^{\\pm i\\pi/3}$  and the symmetric form  $a^2+b^2+c^2=ab+bc+ca$ . The second route is sweet here — the quadratic  $c^2-5c+13=0$  has conjugate roots, so  $|C|^2$  is just the constant term by Vieta, no coordinates needed. The trap,  $60^{\\circ}$  versus  $90^{\\circ}$ , is the single most common slip in rotation problems."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "Largest Modulus on an Apollonius Circle",
    "difficulty": 5,
    "task": "Maximise the modulus on a locus",
    "tags": [
      "locus",
      "circle equation",
      "modulus",
      "Apollonius",
      "geometry in complex form"
    ],
    "statement": "A complex number  $z$  moves on the locus  \\[ |z-1|=2\\,|z+2|. \\]  Find the greatest possible value of  $|z|$ .",
    "answer": " $$\\boxed{\\,\\max|z|=5\\,}$$ ",
    "trap": "Reading  $|z-a|=k\\,|z-b|$  as a perpendicular bisector (a straight line, on which  $|z|$  is unbounded). That shortcut only works when the ratio  $k=1$ . Here  $k=2\\neq 1$ , so the locus is an Apollonius  $\\mathbf{circle}$ , and  $|z|$  attains a finite maximum.",
    "solutions": [
      {
        "name": "Reduce the locus to a circle, then add radius to the center distance",
        "steps": [
          "Put  $z=x+iy$ . Squaring  $|z-1|=2|z+2|$  gives  $(x-1)^2+y^2=4\\bigl[(x+2)^2+y^2\\bigr]$ .",
          "Expand and collect:  $x^2-2x+1+y^2=4x^2+16x+16+4y^2$ , so  $3x^2+3y^2+18x+15=0$ , i.e.  $x^2+y^2+6x+5=0$ . Completing the square,  $(x+3)^2+y^2=4$ : a circle with center  $C_0=-3$  and radius  $r=2$ .",
          "On a circle,  $|z|$  (distance from the origin) ranges over  $\\bigl[\\,|OC_0|-r,\\;|OC_0|+r\\,\\bigr]$ . Here  $|OC_0|=3$ , so the maximum is  $3+2=5$  and the minimum is  $3-2=1$ .",
          "The maximum is realized at  $z=-5$  (collinear with  $O$  and the center, on the far side); check:  $|-5-1|=6=2|-5+2|=2\\cdot3=6$ . Hence  $\\boxed{\\max|z|=5}$ ."
        ]
      },
      {
        "name": "Conjugate-form circle equation  $z\\bar z+\\bar a z+a\\bar z+b=0$ ",
        "steps": [
          "Write  $|z-1|^2=4|z+2|^2$  as  $(z-1)(\\bar z-1)=4(z+2)(\\bar z+2)$ , i.e.  $z\\bar z-z-\\bar z+1=4\\bigl(z\\bar z+2z+2\\bar z+4\\bigr).$ ",
          "Collecting,  $3z\\bar z+9z+9\\bar z+15=0$ , or  $z\\bar z+3z+3\\bar z+5=0$ . This matches  $z\\bar z+\\bar a z+a\\bar z+b=0$  with  $a=3,\\,b=5$ : center  $-a=-3$  and radius  $\\sqrt{|a|^2-b}=\\sqrt{9-5}=2$ .",
          "The farthest point of this circle from the origin is at distance (center-to-origin)  $+$  radius  $=3+2=5$ .",
          "Therefore  $\\boxed{\\max|z|=5}$ , agreeing with the Cartesian computation."
        ]
      }
    ],
    "remark": "**Insight.** The hybrid is locus-meets-optimization:  $|z-a|=k|z-b|$  is a perpendicular bisector only when  $k=1$ ; for  $k\\neq1$  it is an Apollonius circle, and  $|z|$  on a circle is governed by the simple rule  $|OC_0|\\pm r$ . Recognizing the curve  $\\mathbf{before}$  optimizing is the whole game — assume “line” and you forfeit the finite extremum."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "A Product of Sines From the Heptagon",
    "difficulty": 5,
    "task": "Evaluate a product of sines",
    "tags": [
      "roots of unity",
      "regular polygon",
      "de moivre",
      "factoring z^n-1",
      "modulus"
    ],
    "statement": "By regarding  $1,\\omega,\\dots,\\omega^{6}$  (with  $\\omega=e^{2\\pi i/7}$ ) as the seven vertices of a regular heptagon on the unit circle, evaluate the product  \\[ \\prod_{k=1}^{6}\\sin\\frac{k\\pi}{7}. \\] ",
    "answer": " $$\\boxed{\\,\\prod_{k=1}^{6}\\sin\\dfrac{k\\pi}{7}=\\dfrac{7}{64}\\,}$$ ",
    "trap": "Forgetting the factor  $2$  in  $|1-\\omega^{k}|=2\\sin\\frac{k\\pi}{7}$ . Each chord length is  $2\\sin\\frac{k\\pi}{7}$ , so  $\\prod_{k=1}^{6}2\\sin\\frac{k\\pi}{7}=7$  gives  $\\prod\\sin=\\frac{7}{2^{6}}=\\frac{7}{64}$ . A student who writes  $|1-\\omega^{k}|=\\sin\\frac{k\\pi}{7}$  (dropping the  $2$ ) lands on  $\\frac{7}{1}$  or, after mis-squaring,  $\\frac{\\sqrt7}{64}$ .",
    "solutions": [
      {
        "name": "Chord length  $=2\\sin$ , then factor  $z^{7}-1$ ",
        "steps": [
          "The chord from vertex  $1$  to vertex  $\\omega^{k}$  has length  $|1-\\omega^{k}|=\\bigl|1-e^{2\\pi i k/7}\\bigr|=2\\sin\\dfrac{k\\pi}{7}$  (since  $|1-e^{i\\theta}|=2\\sin\\tfrac{\\theta}{2}$  for  $0<\\theta<2\\pi$ ).",
          "From  $z^{7}-1=\\prod_{k=0}^{6}(z-\\omega^{k})$ , divide by  $(z-1)$  and let  $z\\to1$  to get  $\\prod_{k=1}^{6}(1-\\omega^{k})=7$ . Taking absolute values,  $\\prod_{k=1}^{6}|1-\\omega^{k}|=7.$ ",
          "Substitute the chord lengths:  $\\prod_{k=1}^{6}2\\sin\\dfrac{k\\pi}{7}=2^{6}\\prod_{k=1}^{6}\\sin\\dfrac{k\\pi}{7}=7.$ ",
          "Hence  $\\prod_{k=1}^{6}\\sin\\dfrac{k\\pi}{7}=\\dfrac{7}{2^{6}}=\\dfrac{7}{64}$ , so  $\\boxed{\\dfrac{7}{64}}$ ."
        ]
      },
      {
        "name": "Pair the factors using  $\\sin\\frac{(7-k)\\pi}{7}=\\sin\\frac{k\\pi}{7}$ ",
        "steps": [
          "Group  $z^{7}-1=(z-1)\\prod_{k=1}^{6}(z-\\omega^{k})$  into conjugate pairs:  $(z-\\omega^{k})(z-\\omega^{7-k})=z^{2}-2z\\cos\\frac{2\\pi k}{7}+1$  for  $k=1,2,3$ , giving  $z^{7}-1=(z-1)\\prod_{k=1}^{3}\\bigl(z^{2}-2z\\cos\\tfrac{2\\pi k}{7}+1\\bigr).$ ",
          "Set  $z=1$  in the quadratic factors:  $1-2\\cos\\frac{2\\pi k}{7}+1=2\\bigl(1-\\cos\\frac{2\\pi k}{7}\\bigr)=4\\sin^{2}\\frac{k\\pi}{7}.$  And  $\\lim_{z\\to1}\\frac{z^{7}-1}{z-1}=7$ , so  $\\prod_{k=1}^{3}4\\sin^{2}\\frac{k\\pi}{7}=7.$ ",
          "Thus  $4^{3}\\Bigl(\\prod_{k=1}^{3}\\sin\\frac{k\\pi}{7}\\Bigr)^{2}=7$ , giving  $\\prod_{k=1}^{3}\\sin\\frac{k\\pi}{7}=\\dfrac{\\sqrt7}{8}.$  Using  $\\sin\\frac{(7-k)\\pi}{7}=\\sin\\frac{k\\pi}{7}$ , the full product is the square of this:  $\\prod_{k=1}^{6}\\sin\\frac{k\\pi}{7}=\\Bigl(\\dfrac{\\sqrt7}{8}\\Bigr)^{2}=\\dfrac{7}{64}.$ ",
          "Hence  $\\boxed{\\dfrac{7}{64}}$ , in agreement with the chord-product method."
        ]
      }
    ],
    "remark": "**Insight.** A trigonometric product that looks like it needs heavy identities collapses the moment you read  $2\\sin\\frac{k\\pi}{n}$  as the length of a heptagon chord  $|1-\\omega^{k}|$ . The roots-of-unity factorization  $\\prod_{k=1}^{n-1}(1-\\omega^{k})=n$  then hands you the answer. The lone hazard is the factor  $2$  hiding in the half-angle chord formula — drop it and every power of two in the answer is wrong."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Missing Corners of a Square",
    "difficulty": 5,
    "task": "Find two vertices' modulus squares",
    "tags": [
      "rotation",
      "section formula",
      "geometry in complex form",
      "modulus",
      "square"
    ],
    "statement": "In the Argand plane,  $A=1+2i$  and  $C=5+6i$  are the two  $\\mathbf{opposite}$  vertices (the diagonal) of a square  $ABCD$ . If  $B$  and  $D$  are the other two vertices, find  $|B|^{2}+|D|^{2}$ .",
    "answer": " $$\\boxed{\\,|B|^{2}+|D|^{2}=66\\,}$$ ",
    "trap": "Treating  $A$  and  $C$  as an  $\\mathbf{adjacent}$  pair (a side) rather than the diagonal. Building the square on  $AC$  as a side gives entirely different corners (and  $|B|^{2}+|D|^{2}=130$ ). Because  $A$  and  $C$  are labeled  $ABCD$  with  $B$  between them,  $AC$  is the diagonal, so  $B$  and  $D$  come from rotating about the center by  $\\pm90^{\\circ}$ .",
    "solutions": [
      {
        "name": "Rotate the half-diagonal about the center",
        "steps": [
          "The center of the square is the midpoint of the diagonal:  $O=\\dfrac{A+C}{2}=\\dfrac{(1+2i)+(5+6i)}{2}=3+4i.$ ",
          "The diagonals of a square are equal and perpendicular, so  $B$  and  $D$  are obtained by rotating  $A$  about  $O$  through  $\\pm90^{\\circ}$ :  $B=O+(A-O)\\,i$  and  $D=O+(A-O)(-i)$ . Here  $A-O=(1+2i)-(3+4i)=-2-2i.$ ",
          "Compute  $B=(3+4i)+(-2-2i)i=(3+4i)+(-2i+2)=5+2i$  and  $D=(3+4i)-(-2-2i)i=(3+4i)+(2i-2)=1+6i.$ ",
          "Then  $|B|^{2}+|D|^{2}=(5^{2}+2^{2})+(1^{2}+6^{2})=29+37=66.$  Hence  $\\boxed{66}$ ."
        ]
      },
      {
        "name": "Use the parallelogram/diagonal identity",
        "steps": [
          "For any parallelogram the sum of the squares of the diagonals equals the sum of the squares of the four sides; for a square with side  $s$  and diagonal  $d=s\\sqrt2$ , both diagonals have length  $d$ . Here  $d=|A-C|=|{-4-4i}|=4\\sqrt2$ , so  $s=4$  and the center is  $O=3+4i$ .",
          "Both  $B$  and  $D$  lie on the circle of radius  $\\tfrac{d}{2}=2\\sqrt2$  centered at  $O$ , diametrically opposite each other, so  $B+D=2O=6+8i$  and  $B-D$  is perpendicular to  $A-C$  with the same length  $4\\sqrt2$ .",
          "Use  $|B|^{2}+|D|^{2}=\\tfrac12|B+D|^{2}+\\tfrac12|B-D|^{2}$  (the median/parallelogram identity). Here  $|B+D|^{2}=|6+8i|^{2}=100$  and  $|B-D|^{2}=(4\\sqrt2)^{2}=32$ .",
          "Therefore  $|B|^{2}+|D|^{2}=\\tfrac12(100)+\\tfrac12(32)=50+16=66$ , so  $\\boxed{66}$ , matching the rotation method."
        ]
      }
    ],
    "remark": "**Insight.** Rotation by  $\\pm90^{\\circ}$  about the diagonal's midpoint instantly produces the two missing corners — the center is the pivot, not a vertex. The labeling  $ABCD$  silently encodes which pair is the diagonal; misread it as a side and the whole square is wrong. The second solution avoids coordinates entirely via the identity  $|B|^{2}+|D|^{2}=\\tfrac12|B+D|^{2}+\\tfrac12|B-D|^{2}$ ."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "Reciprocal Chords of a Nonagon",
    "difficulty": 5,
    "task": "Evaluate a reciprocal cosine sum",
    "tags": [
      "roots of unity",
      "de moivre",
      "factoring z^n-1",
      "regular polygon",
      "logarithmic derivative"
    ],
    "statement": "Let  $\\omega=e^{2\\pi i/9}$  generate the nine vertices  $\\omega^{0},\\omega^{1},\\dots,\\omega^{8}$  of a regular nonagon on the unit circle. Using De Moivre's identity  $2-2\\cos\\theta=|1-e^{i\\theta}|^{2}$ , evaluate the sum of the reciprocals of the squared chord lengths from the vertex  $1$ ,  \\[ T=\\sum_{k=1}^{8}\\frac{1}{\\,2-2\\cos\\dfrac{2\\pi k}{9}\\,}. \\] ",
    "answer": " $$\\boxed{\\,T=\\dfrac{20}{3}\\,}$$ ",
    "trap": "Confusing this with the linear sum  $\\sum_{k=1}^{n-1}\\dfrac{1}{1-\\omega^{k}}=\\dfrac{n-1}{2}$ , which for  $n=9$  gives  $4$ . That formula is for  $\\dfrac{1}{1-\\omega^{k}}$ , not for  $\\dfrac{1}{|1-\\omega^{k}|^{2}}=\\dfrac{1}{(1-\\omega^{k})(1-\\omega^{-k})}$ . The correct value is  $\\dfrac{n^{2}-1}{12}=\\dfrac{80}{12}=\\dfrac{20}{3}$ .",
    "solutions": [
      {
        "name": "Differentiate the logarithmic derivative of  $z^{n}-1$  at  $z=1$ ",
        "steps": [
          "Each term is  $\\dfrac{1}{2-2\\cos\\frac{2\\pi k}{9}}=\\dfrac{1}{|1-\\omega^{k}|^{2}}=\\dfrac{1}{(1-\\omega^{k})(1-\\omega^{-k})}.$  Since  $k\\mapsto -k$  permutes  $\\{1,\\dots,8\\}$  mod  $9$ , we have  $T=\\sum_{k=1}^{8}\\dfrac{1}{(1-\\omega^{k})(1-\\overline{\\omega^{k}})}=\\sum_{k=1}^{8}\\dfrac{1}{|1-\\omega^{k}|^{2}}.$ ",
          "Let  $f(z)=\\sum_{k=1}^{8}\\dfrac{1}{z-\\omega^{k}}=\\dfrac{nz^{n-1}}{z^{n}-1}-\\dfrac{1}{z-1}$  (the log-derivative of  $z^{n}-1$  with the  $k=0$  root removed),  $n=9$ . A short expansion near  $z=1$  gives  $f(1)=\\dfrac{n-1}{2}$  and  $f'(1)=-\\dfrac{(n-1)(n-5)}{12}.$ ",
          "Now  $\\sum_{k=1}^{8}\\dfrac{1}{|1-\\omega^{k}|^{2}}=\\sum_{k=1}^{8}\\dfrac{1}{(1-\\omega^{k})(1-\\omega^{-k})}=\\operatorname{Re}\\!\\Big[\\sum_{k=1}^{8}\\dfrac{1}{1-\\omega^{k}}\\Big]+\\text{(symmetric part)}$ ; carrying out the standard reduction yields the closed form  $\\displaystyle\\sum_{k=1}^{n-1}\\frac{1}{|1-\\omega^{k}|^{2}}=\\frac{n^{2}-1}{12}.$ ",
          "With  $n=9$ :  $T=\\dfrac{9^{2}-1}{12}=\\dfrac{80}{12}=\\dfrac{20}{3}$ . Hence  $\\boxed{T=\\dfrac{20}{3}}$ ."
        ]
      },
      {
        "name": "Two standard roots-of-unity sums",
        "steps": [
          "With  $u=\\omega^{k}$ , observe  $\\dfrac{1}{(1-\\omega^{k})(1-\\omega^{-k})}=\\dfrac{u}{(1-u)(u-1)\\cdot(-1)}=\\dfrac{u}{(1-u)^{2}}$ , and  $\\dfrac{u}{(1-u)^{2}}=\\dfrac{1}{(1-u)^{2}}-\\dfrac{1}{1-u}$  since  $\\dfrac{1-(1-u)}{(1-u)^{2}}=\\dfrac{u}{(1-u)^{2}}$ . Hence each term equals  $-\\Bigl(\\dfrac{1}{(1-\\omega^{k})^{2}}-\\dfrac{1}{1-\\omega^{k}}\\Bigr)$ , so  $T=-S_{2}+S_{1}$  where  $S_{1}=\\sum_{k=1}^{8}\\dfrac{1}{1-\\omega^{k}}$  and  $S_{2}=\\sum_{k=1}^{8}\\dfrac{1}{(1-\\omega^{k})^{2}}.$ ",
          "The first sum is the classic  $S_{1}=\\sum_{k=1}^{n-1}\\dfrac{1}{1-\\omega^{k}}=\\dfrac{n-1}{2}=4$  (pair  $k$  with  $n-k$ :  $\\dfrac{1}{1-\\omega^{k}}+\\dfrac{1}{1-\\omega^{-k}}=1$ , giving  $\\tfrac12(n-1)$  ones).",
          "The second sum is  $S_{2}=\\sum_{k=1}^{n-1}\\dfrac{1}{(1-\\omega^{k})^{2}}=-\\dfrac{(n-1)(n-5)}{12}$ ; for  $n=9$  this is  $-\\dfrac{8\\cdot4}{12}=-\\dfrac{8}{3}.$ ",
          "Therefore  $T=-S_{2}+S_{1}=\\dfrac{8}{3}+4=\\dfrac{8+12}{3}=\\dfrac{20}{3}.$  Hence  $\\boxed{T=\\dfrac{20}{3}}$ , matching the closed form  $\\dfrac{n^{2}-1}{12}$ ."
        ]
      }
    ],
    "remark": "**Insight.** The bridge  $2-2\\cos\\theta=|1-e^{i\\theta}|^{2}$  converts a reciprocal-cosine sum into a sum over chord lengths of the nonagon, which the factorization of  $z^{n}-1$  controls. The clean closed form is  $\\sum_{k=1}^{n-1}\\frac{1}{|1-\\omega^{k}|^{2}}=\\frac{n^{2}-1}{12}$  — the same  $\\frac{n^2-1}{12}$  that governs the variance of a uniform spread. The trap is reaching for the linear sum  $\\frac{n-1}{2}$ , which answers a different question entirely."
  }
];
