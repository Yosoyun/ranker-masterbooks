import katex from 'katex';
import puppeteer from 'puppeteer-core';
import { readFileSync, writeFileSync } from 'node:fs';

import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const CHROME = process.env.PUPPETEER_EXECUTABLE_PATH || ['/Applications/Google Chrome.app/Contents/MacOS/Google Chrome','/Applications/Chromium.app/Contents/MacOS/Chromium','/usr/bin/google-chrome','/usr/bin/chromium','/usr/bin/chromium-browser'].find(p=>{try{return readFileSync(p)&&true}catch(e){return false}}) || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

// ---- load data ----
const src = readFileSync(ROOT + '/problems.js', 'utf8');
const PROBLEMS = JSON.parse(src.slice(src.indexOf('['), src.lastIndexOf(']') + 1));

const THEME_ORDER = ['floor','frac','signum','modulus','invtrig','log','trig','indeterminate','squeeze','hybrid'];
const ROMAN = ['I','II','III','IV','V','VI','VII','VIII','IX','X'];
const GLYPH = { floor:'⌊x⌋', frac:'{x}', signum:'sgn', modulus:'|x|', invtrig:'tan⁻¹', log:'ln', trig:'sin', indeterminate:'1^∞', squeeze:'Σ', hybrid:'∞' };
const BLURB = {
  floor:'Where the graph leaps, the limit hides.',
  frac:'The sawtooth that never rests.',
  signum:'A function with only three answers — and it changes its mind.',
  modulus:'Every corner is a trap. Split the limit before it splits you.',
  invtrig:'Branch cuts, boundary singularities, the ±π/2 cliff.',
  log:'Growth races, hidden orders, and the 1^∞ only logarithms can tame.',
  trig:'Beyond sin x⁄x — nested angles, telescopes, Taylor cancellations.',
  indeterminate:'0^0, ∞−∞, ∞^0 — forms that hide their answer until forced.',
  squeeze:'When termwise intuition lies, only a global bound tells the truth.',
  hybrid:'Three or more worlds fused into a single pitiless limit.',
};

// order + index
PROBLEMS.sort((a,b)=>THEME_ORDER.indexOf(a.theme)-THEME_ORDER.indexOf(b.theme));
PROBLEMS.forEach((p,i)=>{ p._id=i+1; });
const chapters = THEME_ORDER.map((k,ci)=>({ key:k, ci, rom:ROMAN[ci],
  label:(PROBLEMS.find(p=>p.theme===k)||{}).themeLabel||k,
  problems:PROBLEMS.filter(p=>p.theme===k) })).filter(c=>c.problems.length);

// ---- math helpers ----
const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const TX = (latex, display) => { try { return katex.renderToString(latex, {displayMode:display, throwOnError:false}); } catch(e){ return esc(latex); } };
function prose(t){
  let h = esc(t);
  h = h.replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>');
  h = h.replace(/(^|[^`])`([^`]+)`/g,'$1<code>$2</code>');
  return h;
}
function rich(str){
  if(str==null) return '';
  const s=String(str); const re=/\$\$([\s\S]+?)\$\$|\$([^$]+)\$/g;
  let out='', last=0, m;
  while((m=re.exec(s))){
    out += prose(s.slice(last,m.index));
    out += (m[1]!=null) ? TX(m[1],true) : TX(m[2],false);
    last=re.lastIndex;
  }
  out += prose(s.slice(last));
  return out;
}
function diffPips(d){
  let s='<span class="diff">';
  for(let i=1;i<=5;i++) s+=`<span class="pip${i<=d?' on':''}"></span>`;
  s+=`<span class="dl">L${d}</span></span>`;
  return s;
}

const totalMethods = PROBLEMS.reduce((s,p)=>s+(p.solutions?.length||0),0);

// ---- shared CSS ----
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700;9..144,900&family=Inter:wght@400;500;600;700&family=Newsreader:ital,opsz@0,6..72;1,6..72&display=swap');
@page { size: A4; }
*{box-sizing:border-box}
html,body{margin:0;padding:0}
body{font-family:'Inter',system-ui,sans-serif;color:#211c14;font-size:10.5pt;line-height:1.5;background:#fff;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.katex{font-size:1.02em}
h1,h2,h3,h4{font-family:'Fraunces',Georgia,serif;margin:0}
code{font-family:ui-monospace,Menlo,monospace;font-size:.88em;background:#f3ecdc;padding:.5px 4px;border-radius:4px}
strong{font-weight:700}

/* cover */
.cover{height:247mm;display:flex;flex-direction:column;justify-content:center;padding:0 8mm;page-break-after:always;position:relative}
.cover .kick{font-size:11pt;letter-spacing:.3em;text-transform:uppercase;color:#a36a12;font-weight:700}
.cover h1{font-size:58pt;font-weight:900;line-height:.95;margin:8pt 0 0;letter-spacing:.01em}
.cover h1 .d{color:#caa24a}
.cover .vol{font-family:'Newsreader',serif;font-style:italic;font-size:20pt;color:#6b6353;margin-top:6pt}
.cover .edition{margin-top:24pt;font-size:15pt;font-weight:700;color:#a36a12;letter-spacing:.04em;border-top:1.5px solid #e0d6bf;border-bottom:1.5px solid #e0d6bf;padding:10pt 0;display:inline-block}
.cover .stats{display:flex;gap:30pt;margin-top:26pt}
.cover .stats b{font-family:'Fraunces',serif;font-size:22pt;font-weight:900;display:block;line-height:1}
.cover .stats span{font-size:8.5pt;letter-spacing:.12em;text-transform:uppercase;color:#8b8474;margin-top:3pt;display:block}
.cover .foot{position:absolute;bottom:6mm;left:8mm;right:8mm;font-family:'Newsreader',serif;font-style:italic;color:#8b8474;font-size:11pt;border-top:1px solid #e9e0cd;padding-top:7pt}
.cover .watermark{position:absolute;right:2mm;bottom:30mm;font-family:'Fraunces',serif;font-weight:900;font-size:150pt;color:#f4ecda;z-index:-1;line-height:1}

/* contents */
.toc{page-break-after:always;padding-top:6mm}
.toc h2{font-size:24pt;font-weight:900;margin-bottom:4pt}
.toc .tsub{font-family:'Newsreader',serif;font-style:italic;color:#8b8474;margin-bottom:16pt}
.toc table{width:100%;border-collapse:collapse}
.toc td{padding:7pt 0;border-bottom:1px solid #eee4cf;vertical-align:baseline}
.toc .trom{font-family:'Fraunces',serif;font-weight:700;color:#a36a12;width:34pt}
.toc .tname{font-family:'Fraunces',serif;font-weight:600;font-size:12pt}
.toc .tglyph{color:#b9ad8f;font-size:11pt}
.toc .trange{text-align:right;color:#8b8474;font-variant-numeric:tabular-nums;white-space:nowrap}

/* chapter divider */
.chap{page-break-before:always;padding-top:30mm;position:relative}
.chap .crom{font-family:'Fraunces',serif;font-weight:600;color:#a36a12;font-size:13pt;letter-spacing:.12em}
.chap h2{font-size:34pt;font-weight:900;line-height:1.02;margin:6pt 0 8pt;max-width:80%}
.chap .cblurb{font-family:'Newsreader',serif;font-style:italic;font-size:14pt;color:#6b6353}
.chap .cglyph{position:absolute;right:4mm;top:24mm;font-family:'Fraunces',serif;font-size:60pt;color:#efe7d3}
.chap .crule{height:2px;background:linear-gradient(90deg,#caa24a,transparent);margin-top:14pt;width:55%}

/* problem block */
.p{padding:9pt 0;border-bottom:1px solid #efe7d3;break-inside:avoid}
.p.sol{break-inside:auto}
.p-head{display:flex;align-items:baseline;gap:8pt;margin-bottom:5pt}
.p-num{font-family:'Fraunces',serif;font-weight:900;color:#a36a12;font-size:11pt}
.p-title{font-family:'Fraunces',serif;font-weight:700;font-size:12.5pt;flex:1}
.diff{display:inline-flex;align-items:center;gap:2.5pt}
.diff .pip{width:5pt;height:5pt;border-radius:50%;background:#ddd2b8;display:inline-block}
.diff .pip.on{background:#a36a12}
.diff .dl{font-size:7.5pt;letter-spacing:.08em;color:#8b8474;font-weight:700;margin-left:3pt}
.stmt{background:#faf5ea;border-left:2.5pt solid #caa24a;border-radius:0 6pt 6pt 0;padding:9pt 12pt;margin:3pt 0;text-align:center;break-inside:avoid}
.stmt .katex-display{margin:0!important}
.tags{margin-top:4pt}
.tags .tag{font-size:7.5pt;color:#8b8474;background:#f3ecdc;border:1px solid #ece1c9;border-radius:20pt;padding:1pt 7pt;margin-right:3pt;white-space:nowrap}

/* solution parts */
.ans{margin-top:8pt;background:#f6ebd4;border:1px solid #e3c98c;border-radius:6pt;padding:6pt 11pt;break-inside:avoid}
.ans .lab{font-size:7.5pt;letter-spacing:.14em;text-transform:uppercase;color:#a36a12;font-weight:800;margin-right:8pt}
.trap{margin-top:7pt;background:#f9e7ec;border-left:2.5pt solid #b21e46;border-radius:0 6pt 6pt 0;padding:6pt 11pt;font-size:9.5pt}
.trap .lab{font-size:7.5pt;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:#b21e46;display:block;margin-bottom:2pt}
.method{margin-top:9pt;break-inside:auto}
.method .mname{font-family:'Fraunces',serif;font-weight:700;font-size:11pt;color:#211c14;border-bottom:1px solid #eee4cf;padding-bottom:3pt;margin-bottom:5pt}
ol.steps{margin:0;padding-left:16pt}
ol.steps li{margin:0 0 5pt;line-height:1.55}
ol.steps li .katex-display{margin:5pt 0!important}
.remark{margin-top:8pt;background:#ecebf7;border-left:2.5pt solid #4338ca;border-radius:0 6pt 6pt 0;padding:6pt 11pt;font-size:9.5pt;font-family:'Newsreader',serif}
.remark .lab{font-size:7.5pt;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:#4338ca;display:block;margin-bottom:2pt;font-family:'Inter',sans-serif}
`;

function coverHTML(kind){
  const isSol = kind==='solutions';
  return `<section class="cover">
    <div class="watermark">lim</div>
    <div class="kick">The Ranker’s Masterbook</div>
    <h1>LIMITS<span class="d">.</span></h1>
    <div class="vol">The Edge of Calculus</div>
    <div class="edition">${isSol ? 'Complete Solutions' : 'The Problem Set'}</div>
    <div class="stats">
      <div><b>100</b><span>Problems</span></div>
      <div><b>10</b><span>Chapters</span></div>
      <div><b>3–5</b><span>Difficulty</span></div>
      ${isSol ? `<div><b>${totalMethods}</b><span>Worked Solutions</span></div>` : ''}
    </div>
    <div class="foot">One hundred original limits where the obvious move is the wrong move — for the very top of JEE Advanced and the Mathematical Olympiad. ${isSol ? 'Every problem solved more than one way.' : 'Solutions in the companion volume.'}</div>
  </section>`;
}
function tocHTML(){
  let rows='';
  chapters.forEach(c=>{
    const a=c.problems[0]._id, b=c.problems[c.problems.length-1]._id;
    rows+=`<tr><td class="trom">${c.rom}</td><td class="tname">${esc(c.label)} <span class="tglyph">· ${GLYPH[c.key]}</span></td><td class="trange">№${a}–${b}</td></tr>`;
  });
  return `<section class="toc"><h2>Contents</h2><div class="tsub">Ten chapters, ten problems each.</div><table>${rows}</table></section>`;
}
function chapDivider(c){
  return `<section class="chap"><div class="cglyph">${GLYPH[c.key]}</div><div class="crom">CHAPTER ${c.rom}</div><h2>${esc(c.label)}</h2><div class="cblurb">${esc(BLURB[c.key]||'')}</div><div class="crule"></div></section>`;
}
function problemHTML(p, withSolutions){
  let h=`<div class="p${withSolutions?' sol':''}">`;
  h+=`<div class="p-head"><span class="p-num">№${p._id}</span><span class="p-title">${esc(p.title||'')}</span>${diffPips(p.difficulty||3)}</div>`;
  h+=`<div class="stmt">${TX(p.statement,true)}</div>`;
  if(p.tags?.length) h+=`<div class="tags">${p.tags.map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div>`;
  if(withSolutions){
    h+=`<div class="ans"><span class="lab">Limit</span>${TX(p.answer,true)}</div>`;
    if(p.trap) h+=`<div class="trap"><span class="lab">The Trap</span>${rich(p.trap)}</div>`;
    (p.solutions||[]).forEach(s=>{
      h+=`<div class="method"><div class="mname">${esc(s.name||'Method')}</div><ol class="steps">${(s.steps||[]).map(st=>`<li>${rich(st)}</li>`).join('')}</ol></div>`;
    });
    if(p.remark) h+=`<div class="remark"><span class="lab">Insight</span>${rich(p.remark)}</div>`;
  }
  h+=`</div>`;
  return h;
}
function buildDoc(kind){
  const withSol = kind==='solutions';
  let body = coverHTML(kind) + tocHTML();
  chapters.forEach(c=>{
    body += chapDivider(c);
    body += c.problems.map(p=>problemHTML(p, withSol)).join('');
  });
  return `<!DOCTYPE html><html><head><meta charset="utf-8">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css">
  <style>${CSS}</style></head><body>${body}</body></html>`;
}

// ---- render + print ----
const docs = [
  { kind:'problems',  html:'_problems.html',  pdf:'LIMITS-Problems.pdf' },
  { kind:'solutions', html:'_solutions.html', pdf:'LIMITS-Solutions.pdf' },
];
for(const d of docs){ writeFileSync(resolve(ROOT,'tools',d.html), buildDoc(d.kind)); }

const browser = await puppeteer.launch({ executablePath: CHROME, headless: true, args:['--no-sandbox','--font-render-hinting=none'] });
for(const d of docs){
  const page = await browser.newPage();
  const htmlPath = resolve(ROOT,'tools',d.html);
  await page.goto('file://'+htmlPath, { waitUntil:'networkidle0', timeout:120000 });
  await page.evaluate(async()=>{ if(document.fonts && document.fonts.ready){ await document.fonts.ready; } await new Promise(r=>setTimeout(r,300)); });
  const title = d.kind==='solutions' ? 'LIMITS — Complete Solutions' : 'LIMITS — The Problem Set';
  await page.pdf({
    path: ROOT + '/' + d.pdf,
    format: 'A4',
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: '<span></span>',
    footerTemplate: `<div style="width:100%;font-size:8px;color:#9a8f78;font-family:Georgia,serif;padding:0 14mm;display:flex;justify-content:space-between;"><span>${title}</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>`,
    margin: { top:'15mm', bottom:'16mm', left:'14mm', right:'14mm' },
  });
  console.log('wrote', d.pdf);
  await page.close();
}
await browser.close();
console.log('DONE');
