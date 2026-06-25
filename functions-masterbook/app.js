/* ============================================================
   f(x) — Maps, Relations & Their Inverses  ·  application logic
   ============================================================ */
(function () {
  'use strict';

  const THEME_ORDER = ['relations','domainrange','classification','composition','inverse','functionaleq','symmetry','special','graphs','hybrid'];
  const ROMAN = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII'];
  const THEME_META = {
    relations:     { glyph:'R',      blurb:'Relations as sets of ordered pairs — reflexive, symmetric, transitive; the equivalence relation and its partition into classes; partial and total orders; counting the relations of a given type on a finite set.' },
    domainrange:   { glyph:'dom f',  blurb:'The largest domain on which a formula makes sense, and the exact range it sweeps — square roots, logs, reciprocals and their combinations, where the trap is a hidden restriction.' },
    classification:{ glyph:'1–1',    blurb:'Injective, surjective and bijective maps — proving or disproving each, and counting the functions, injections, surjections and bijections between finite sets.' },
    composition:   { glyph:'f∘g',    blurb:'Composition and its order, the domain of a composite, decomposing a function into simpler maps, and iterates fⁿ that fall into cycles.' },
    inverse:       { glyph:'f⁻¹',    blurb:'When a function has an inverse and how to find it, the reflection in y=x, involutions with f(f(x))=x, and inverses of piecewise and restricted maps.' },
    functionaleq:  { glyph:'f(x+y)', blurb:'Functional equations — Cauchy and its cousins, substitution and symmetry, fixed points and injectivity arguments that pin every solution without calculus.' },
    symmetry:      { glyph:'f(−x)',  blurb:'Even and odd functions and their algebra, periodic functions and the fundamental period, and the symmetry that collapses a hard problem to half its size.' },
    special:       { glyph:'⌊x⌋',    blurb:'The greatest-integer, fractional-part, signum and absolute-value functions — their identities, equations and the integer-vs-real case splits they hide.' },
    graphs:        { glyph:'y=f(x)', blurb:'Reading and building graphs — shifts, stretches, reflections and |·| transformations, and recovering a function from its graph or a mapping diagram.' },
    hybrid:        { glyph:'⊕',      blurb:'The capstones: relations, classification, composition, inverses, functional equations and the special functions fused into one problem that resists every single tool.' },
  };

  // ---- state ----
  let PROBLEMS = [];
  let CHAPTERS = [];          // [{key,label,glyph,blurb,rom,problems:[...]}]
  let byChapter = {};
  let route = { kind:'home', key:null };
  let searchQuery = '';
  const store = loadStore();

  // ---- boot ----
  let booted = false;
  document.addEventListener('DOMContentLoaded', init);
  // DOMContentLoaded may already have fired for deferred scripts → guard
  if (document.readyState !== 'loading') init();

  function init() {
    if (booted) return; booted = true;
    PROBLEMS = (window.PROBLEMS || []).slice();
    indexProblems();
    applyTheme(store.theme || preferredTheme());
    buildNav();
    wireChrome();
    parseHash();
    render();
  }

  // ---- data prep ----
  function indexProblems() {
    // order by theme, assign global ids and per-chapter indices
    const ordered = [];
    THEME_ORDER.forEach((key, ci) => {
      const group = PROBLEMS.filter(p => p.theme === key);
      group.forEach((p, pi) => { p._ci = ci; p._pi = pi + 1; ordered.push(p); });
    });
    // include any unknown-theme problems at the end
    PROBLEMS.filter(p => THEME_ORDER.indexOf(p.theme) === -1).forEach(p => { p._ci = 99; p._pi = 0; ordered.push(p); });
    ordered.forEach((p, i) => { p._id = i + 1; });
    PROBLEMS = ordered;

    CHAPTERS = THEME_ORDER.map((key, ci) => {
      const probs = PROBLEMS.filter(p => p.theme === key);
      const meta = THEME_META[key] || {};
      return {
        key, ci, rom: ROMAN[ci],
        label: (probs[0] && probs[0].themeLabel) || prettyKey(key),
        glyph: meta.glyph || '∂', blurb: meta.blurb || '', problems: probs,
      };
    }).filter(c => c.problems.length);
    byChapter = {}; CHAPTERS.forEach(c => byChapter[c.key] = c);
  }
  function prettyKey(k){ return k.charAt(0).toUpperCase()+k.slice(1); }

  // ---- store ----
  function loadStore() {
    try { return JSON.parse(localStorage.getItem('functions_masterbook') || '{}'); }
    catch (e) { return {}; }
  }
  function saveStore() {
    try { localStorage.setItem('functions_masterbook', JSON.stringify(store)); } catch (e) {}
  }
  function solvedSet(){ store.solved = store.solved || {}; return store.solved; }
  function markedSet(){ store.marked = store.marked || {}; return store.marked; }
  function isSolved(id){ return !!solvedSet()[id]; }
  function isMarked(id){ return !!markedSet()[id]; }
  function toggleSolved(id){ const s=solvedSet(); if(s[id])delete s[id];else s[id]=1; saveStore(); }
  function toggleMarked(id){ const m=markedSet(); if(m[id])delete m[id];else m[id]=1; saveStore(); }
  function solvedCount(){ return Object.keys(solvedSet()).length; }
  function chapterSolved(c){ return c.problems.filter(p=>isSolved(p._id)).length; }

  // ---- theme ----
  function preferredTheme(){ return (window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark':'light'; }
  function applyTheme(t){ document.documentElement.setAttribute('data-theme', t); store.theme=t; saveStore();
    const b=document.getElementById('themeBtn'); if(b) b.textContent = t==='dark' ? '☀' : '☾'; }
  function toggleTheme(){ applyTheme(document.documentElement.getAttribute('data-theme')==='dark'?'light':'dark'); }

  // ---- math rendering ----
  function texInline(latex){ try { return katex.renderToString(latex, {throwOnError:false, displayMode:false}); } catch(e){ return esc(latex); } }
  function renderDisplay(el, latex){ var s=(latex==null?'':String(latex)); if(/\$|\\\[|\\\(|\\par/.test(s)){ renderRich(el,s); return; } try { katex.render(s, el, {throwOnError:false, displayMode:true}); } catch(e){ el.textContent = s; } }
  // statement/answer may be EITHER pure LaTeX OR prose with $…$ / \[…\] / \(…\) math — auto-detect.
  function renderStmt(el, s){ if (s && /\$|\\\[|\\\(/.test(String(s))) renderRich(el, s); else renderDisplay(el, s); }
  function stripcmd(s){
    for(var i=0;i<4;i++) s=s.replace(/\\(emph|textbf|textit|textsf|texttt|textrm|textsc|textnormal|text)\{((?:[^{}]|\{[^{}]*\})*)\}/g,'$2');
    return s.replace(/\\dots\b|\\ldots\b/g,'…').replace(/\\textemdash\b/g,'—').replace(/\\textendash\b/g,'–').replace(/\\textquotedblleft\b/g,'“').replace(/\\textquotedblright\b/g,'”').replace(/\\textquoteleft\b/g,'‘').replace(/\\textquoteright\b/g,'’').replace(/\\(newline|medskip|bigskip|smallskip|noindent)\b/g,' ');
  }
  function richStr(str){
    if (str == null) return '';
    var s = String(str); var math=[];
    s = s.replace(/\$\$[\s\S]+?\$\$|\\\[[\s\S]+?\\\]|\$[^$]+?\$|\\\([\s\S]+?\\\)/g, function(mm){ math.push(mm); return '\u0002'+(math.length-1)+'\u0002'; });
    s = stripcmd(s).replace(/\\par\b\s*/g, '\u0001');
    function prose(t){ return esc(t).replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>').replace(/(^|[^`])`([^`]+)`/g,'$1<code>$2</code>').replace(/\u0001/g,'<span class="parbreak"></span>'); }
    var out='', parts=s.split(/\u0002(\d+)\u0002/);
    for(var i=0;i<parts.length;i++){
      if(i%2===0){ out+=prose(parts[i]); }
      else { var mm=math[+parts[i]], tex, disp;
        if(mm.slice(0,2)==='$$'){ tex=mm.slice(2,-2); disp=true; }
        else if(mm.slice(0,2)==='\\['){ tex=mm.slice(2,-2); disp=true; }
        else if(mm.slice(0,2)==='\\('){ tex=mm.slice(2,-2); disp=false; }
        else { tex=mm.slice(1,-1); disp=false; }
        try { out += katex.renderToString(tex, {throwOnError:false, displayMode:disp}); }
        catch(e){ out += '<code>'+esc(tex)+'</code>'; }
      }
    }
    return out;
  }
  function renderRich(el, str){ el.innerHTML = richStr(str); }
  function esc(s){ return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

  // ---- chrome / nav ----
  function buildNav(){
    const nav = document.getElementById('nav');
    let html = '<div class="navgroup">The Book</div>';
    html += '<ul class="nav"><li>'+navBtn('all','—','All Problems', PROBLEMS.length, true)+'</li></ul>';
    html += '<div class="navgroup">Chapters</div><ul class="nav">';
    CHAPTERS.forEach(c => { html += '<li>'+navBtn(c.key, c.rom, c.label, c.problems.length, false)+'</li>'; });
    html += '</ul>';
    nav.innerHTML = html;
    nav.querySelectorAll('button[data-go]').forEach(b => {
      b.addEventListener('click', () => { const g=b.getAttribute('data-go'); location.hash = g==='all' ? '#/all' : '#/ch/'+g; });
    });
    refreshNavProgress();
  }
  function navBtn(key, rom, label, count, isAll){
    const cls = isAll ? 'allbtn' : '';
    return '<button data-go="'+key+'" class="'+cls+'" data-key="'+key+'">'
      + '<span class="rom">'+rom+'</span>'
      + '<span class="ntext">'+esc(label)+'</span>'
      + '<span class="ncount">'+count+'</span>'
      + '<span class="nbar"><i style="width:0%"></i></span></button>';
  }
  function refreshNavProgress(){
    CHAPTERS.forEach(c => {
      const btn = document.querySelector('#nav button[data-key="'+c.key+'"]');
      if(!btn) return;
      const done = chapterSolved(c), pct = Math.round(100*done/c.problems.length);
      btn.classList.toggle('has-progress', done>0);
      const bar = btn.querySelector('.nbar i'); if(bar) bar.style.width = pct+'%';
    });
    // active highlight
    document.querySelectorAll('#nav button').forEach(b=>b.classList.remove('active'));
    const activeKey = route.kind==='chapter' ? route.key : (route.kind==='all' ? 'all' : null);
    if(activeKey){ const ab=document.querySelector('#nav button[data-key="'+activeKey+'"]'); if(ab) ab.classList.add('active'); }
    // score chip
    const sn=document.getElementById('scoreNum'); if(sn) sn.textContent=solvedCount();
    const st=document.getElementById('scoreTot'); if(st) st.textContent=PROBLEMS.length;
  }
  function wireChrome(){
    document.getElementById('themeBtn').addEventListener('click', toggleTheme);
    document.querySelector('.brand').addEventListener('click', ()=>{ location.hash='#/'; });
    const ham=document.getElementById('hamburger'), app=document.getElementById('app'), scrim=document.getElementById('scrim');
    ham.addEventListener('click', ()=>app.classList.toggle('nav-open'));
    scrim.addEventListener('click', ()=>app.classList.remove('nav-open'));
    const search=document.getElementById('search');
    search.addEventListener('input', ()=>{ searchQuery=search.value.trim(); render(); });
    window.addEventListener('hashchange', ()=>{ parseHash(); render(); document.getElementById('app').classList.remove('nav-open'); window.scrollTo(0,0); });
    document.addEventListener('keydown', onKey);
    setupTopbarUX();
  }
  function setupTopbarUX(){
    var tb=document.getElementById('topbar'); if(!tb) return;
    var crumb=document.getElementById('crumb'), sw=tb.querySelector('.searchwrap');
    if(!document.getElementById('homeBtn')){
      var hb=document.createElement('button');
      hb.id='homeBtn'; hb.className='homebtn'; hb.type='button';
      hb.setAttribute('aria-label','Home'); hb.title='Back to the cover';
      hb.innerHTML='<span class="hi">\u2302</span><span class="ht">Home</span>';
      hb.addEventListener('click', function(){ location.hash='#/'; });
      tb.insertBefore(hb, crumb || sw || tb.firstChild);
    }
    if(sw){ var hb2=document.getElementById('homeBtn'); tb.insertBefore(sw, (hb2 && hb2.nextSibling) ? hb2.nextSibling : crumb); }
    if(crumb){ crumb.style.cursor='pointer'; crumb.title='Back to the cover'; crumb.addEventListener('click', function(){ location.hash='#/'; }); }
  }
  function onKey(e){
    if(e.target && /input|textarea/i.test(e.target.tagName)){ if(e.key==='Escape'){e.target.blur(); document.getElementById('search').value=''; searchQuery=''; render();} return; }
    if(e.key==='/'){ e.preventDefault(); const s=document.getElementById('search'); if(s){ s.focus(); } }
    else if(e.key==='t'||e.key==='T'){ toggleTheme(); }
    else if(e.key==='j'||e.key==='k'){ stepProblem(e.key==='j'?1:-1); }
  }
  function stepProblem(dir){
    const cards=[].slice.call(document.querySelectorAll('.q')); if(!cards.length) return;
    const y=window.scrollY+90; let idx=cards.findIndex(c=>c.offsetTop>y+4);
    if(dir>0){ if(idx===-1) idx=cards.length-1; } else { idx = (idx<=0?cards.length:idx)-1; if(idx<0)idx=0; }
    const t=cards[Math.max(0,Math.min(cards.length-1,idx))]; if(t) window.scrollTo({top:t.offsetTop-80,behavior:'smooth'});
  }

  // ---- routing ----
  function parseHash(){
    const h=location.hash.replace(/^#\/?/, '');
    if(!h || h==='/'){ route={kind:'home',key:null}; return; }
    if(h==='all'){ route={kind:'all',key:null}; return; }
    const m=h.match(/^ch\/(.+)$/); if(m && byChapter[m[1]]){ route={kind:'chapter',key:m[1]}; return; }
    const pm=h.match(/^p\/(\d+)$/); if(pm){ route={kind:'problem',key:parseInt(pm[1],10)}; return; }
    route={kind:'home',key:null};
  }

  // ---- top-level render ----
  function render(){
    const view=document.getElementById('view'), crumb=document.getElementById('crumb');
    if(searchQuery){ crumb.textContent='Search'; renderSearch(view); refreshNavProgress(); return; }
    if(route.kind==='home'){ crumb.textContent='Cover'; renderHome(view); }
    else if(route.kind==='all'){ crumb.innerHTML='<span class="crumb-rom">—</span>All Problems'; renderList(view, PROBLEMS, 'All Problems', null); }
    else if(route.kind==='chapter'){ const c=byChapter[route.key]; crumb.innerHTML='<span class="crumb-rom">'+c.rom+'</span>'+esc(c.label); renderChapter(view, c); }
    else if(route.kind==='problem'){ const p=PROBLEMS.find(x=>x._id===route.key); if(p){ const c=CHAPTERS[p._ci]; location.hash='#/ch/'+(c?c.key:'all'); setTimeout(()=>scrollToProblem(p._id),60);} else location.hash='#/'; return; }
    refreshNavProgress();
  }
  function scrollToProblem(id){ const el=document.getElementById('q'+id); if(el) window.scrollTo({top:el.offsetTop-80,behavior:'smooth'}); }

  // ---- HOME / cover ----
  function renderHome(view){
    const total=PROBLEMS.length;
    const maxd=total ? Math.max.apply(null,PROBLEMS.map(p=>p.difficulty||0)) : 5;
    const mind=total ? Math.min.apply(null,PROBLEMS.map(p=>p.difficulty||5)) : 3;
    const methods=PROBLEMS.reduce((s,p)=>s+((p.solutions&&p.solutions.length)||0),0);
    let html='';
    html+='<div class="cover">'
      + '<div class="kicker">The Ranker’s Masterbook</div>'
      + '<h2>f(x)<em>.</em></h2>'
      + '<div class="tagline">Original functions-and-relations problems where the structure of the map is the whole game — relations and equivalence, domain and range, injective/surjective/bijective and the counting of maps, composition and inverses, functional equations, even/odd/periodic symmetry, the greatest-integer and fractional-part family, and graphs and transformations. Drawn from the rarest corners of olympiad and JEE-Advanced algebra, each solved several ways.</div>'
      + '<div class="cover-stats">'
        + stat(total,'Problems') + stat(CHAPTERS.length,'Chapters')
        + stat(mind+'–'+maxd,'Difficulty') + stat(methods,'Worked Solutions')
      + '</div>'
      + '<div class="cover-cta">'
        + '<button class="btn gold" data-begin>Begin reading &rarr;</button>'
        + '<button class="btn ghost" data-go-all>Browse all problems</button>'
        + '<a class="btn ghost" href="https://github.com/Yosoyun/ranker-masterbooks/releases/download/pdfs/FUNC-Problems.pdf" download>&#8595; Problems PDF</a>'
        + '<a class="btn ghost" href="https://github.com/Yosoyun/ranker-masterbooks/releases/download/pdfs/FUNC-Solutions.pdf" download>&#8595; Solutions PDF</a>'
      + '</div>'
      + '<p class="cover-manifesto">Relations and the equivalence and order they impose, domain and range, the injective–surjective–bijective trichotomy and the counting of maps between finite sets, composition and its decomposition, inverses and involutions, functional equations, the symmetry of even, odd and periodic functions, the greatest-integer and fractional-part and signum family, and graphs and their transformations — each one a doorway to a problem that punishes the careless. Every problem here is solved more than one way, because a ranker doesn’t plug in a value; they read the structure of the map.</p>'
      + '</div>';

    // legend of instruments
    html+='<div class="sec-head"><span class="sh-rom">i</span><h3>The Instruments</h3><span class="sh-line"></span></div>';
    html+='<div class="legend">';
    const fam=[['relations','Relations & order','R'],['domainrange','Domain & range','dom f'],['classification','Inj · Surj · Bij','1–1'],['composition','Composition','f∘g'],['inverse','Inverses','f⁻¹'],['functionaleq','Functional equations','f(x+y)'],['symmetry','Even, odd & periodic','f(−x)'],['special','Floor, frac & sgn','⌊x⌋'],['graphs','Graphs & transforms','y=f(x)'],['hybrid','Hybrids','⊕']];
    fam.forEach(f=>{ const c=byChapter[f[0]]; const cnt=c?c.problems.length:0;
      html+='<div class="lg card"><div class="glyph">'+f[2]+'</div><div><div class="lgname">'+f[1]+'</div><div class="lgcount">'+cnt+' problems</div></div></div>'; });
    html+='</div>';

    // chapter index
    html+='<div class="sec-head"><span class="sh-rom">ii</span><h3>The Ten Chapters</h3><span class="sh-line"></span></div>';
    html+='<div class="chgrid">';
    CHAPTERS.forEach(c=>{ const done=chapterSolved(c),pct=Math.round(100*done/c.problems.length);
      html+='<div class="chcard card" data-ch="'+c.key+'">'
        + '<div class="ch-glyph">'+c.glyph+'</div>'
        + '<div class="ch-rom">CHAPTER '+c.rom+'</div>'
        + '<h4>'+esc(c.label)+'</h4>'
        + '<p>'+esc(c.blurb)+'</p>'
        + '<div class="ch-foot"><span>'+c.problems.length+' problems</span>'
          + '<span class="cpbar"><i style="width:'+pct+'%"></i></span></div>'
        + '</div>';
    });
    html+='</div>';
    view.innerHTML=html;
    view.querySelector('[data-begin]').addEventListener('click',()=>{ location.hash=CHAPTERS[0] ? '#/ch/'+CHAPTERS[0].key : '#/all'; });
    view.querySelector('[data-go-all]').addEventListener('click',()=>{ location.hash='#/all'; });
    view.querySelectorAll('[data-ch]').forEach(el=>el.addEventListener('click',()=>{ location.hash='#/ch/'+el.getAttribute('data-ch'); }));
  }
  function stat(v,l){ return '<div class="cs"><b>'+v+'</b><span>'+l+'</span></div>'; }

  // ---- CHAPTER view ----
  function renderChapter(view, c){
    const done=chapterSolved(c);
    let html='<div class="chap-hero card">'
      + '<div class="ch-glyph-lg">'+c.glyph+'</div>'
      + '<div class="ch-rom">CHAPTER '+c.rom+'</div>'
      + '<h2>'+esc(c.label)+'</h2>'
      + '<div class="ch-desc">'+esc(c.blurb)+'</div>'
      + '<div class="ch-meta"><span>'+c.problems.length+' problems</span><span>&middot;</span><span>'+done+' solved</span><span>&middot;</span><span>'+diffRange(c.problems)+'</span></div>'
      + '</div>';
    html+=filterBar();
    html+='<div id="qlist"></div>';
    html+=chapterFootNav(c);
    view.innerHTML=html;
    mountFilter(view, c.problems, document.getElementById('qlist'));
    wireFootNav(view);
  }
  function diffRange(ps){ const ds=ps.map(p=>p.difficulty||0); const a=Math.min.apply(null,ds),b=Math.max.apply(null,ds); return 'difficulty '+(a===b?a:a+'–'+b); }

  // ---- LIST view (all / search subset) ----
  function renderList(view, list, title, glyph){
    let html='<div class="chap-hero card"><div class="ch-glyph-lg">f(x)</div>'
      + '<div class="ch-rom">THE COMPLETE SET</div><h2>'+esc(title)+'</h2>'
      + '<div class="ch-desc">Every functions-and-relations problem in the book, in chapter order. Filter by difficulty, or search from the bar above.</div>'
      + '<div class="ch-meta"><span>'+list.length+' problems</span><span>&middot;</span><span>'+solvedCount()+' solved</span></div></div>';
    html+=filterBar();
    html+='<div id="qlist"></div>';
    view.innerHTML=html;
    mountFilter(view, list, document.getElementById('qlist'));
  }

  // ---- filter bar (difficulty + solved) ----
  function filterBar(){
    return '<div class="filterbar" data-filterbar>'
      + '<span class="flabel">Difficulty</span>'
      + '<button class="fchip active" data-d="all">All</button>'
      + '<button class="fchip gold" data-d="3">3</button>'
      + '<button class="fchip gold" data-d="4">4</button>'
      + '<button class="fchip gold" data-d="5">5</button>'
      + '<span style="width:10px"></span>'
      + '<button class="fchip" data-f="unsolved">Unsolved</button>'
      + '<button class="fchip" data-f="marked">★ Bookmarked</button>'
      + '</div>';
  }
  function mountFilter(view, list, target){
    const bar=view.querySelector('[data-filterbar]');
    let dfilter='all', extra=null;
    function draw(){
      let l=list.slice();
      if(dfilter!=='all') l=l.filter(p=>String(p.difficulty)===dfilter);
      if(extra==='unsolved') l=l.filter(p=>!isSolved(p._id));
      if(extra==='marked') l=l.filter(p=>isMarked(p._id));
      renderCards(target, l);
    }
    bar.querySelectorAll('[data-d]').forEach(b=>b.addEventListener('click',()=>{
      dfilter=b.getAttribute('data-d'); bar.querySelectorAll('[data-d]').forEach(x=>x.classList.remove('active')); b.classList.add('active'); draw();
    }));
    bar.querySelectorAll('[data-f]').forEach(b=>b.addEventListener('click',()=>{
      const f=b.getAttribute('data-f'); if(extra===f){extra=null;b.classList.remove('active');} else {extra=f; bar.querySelectorAll('[data-f]').forEach(x=>x.classList.remove('active')); b.classList.add('active');} draw();
    }));
    draw();
  }

  // ---- SEARCH ----
  function renderSearch(view){
    const q=searchQuery.toLowerCase();
    const list=PROBLEMS.filter(p=>{
      const hay=[p.title,p.statement,p.answer,(p.tags||[]).join(' '),p.themeLabel].join(' ').toLowerCase();
      return hay.indexOf(q)!==-1;
    });
    let html='<div class="chap-hero card"><div class="ch-rom">SEARCH</div>'
      + '<h2>“'+esc(searchQuery)+'”</h2>'
      + '<div class="ch-desc">'+list.length+' problem'+(list.length===1?'':'s')+' match.</div></div>';
    html+='<div id="qlist"></div>';
    view.innerHTML=html;
    renderCards(document.getElementById('qlist'), list);
  }

  // ---- problem cards ----
  function renderCards(target, list){
    if(!list.length){ target.innerHTML='<div class="empty"><div class="big">Nothing here.</div><div>No problems match this filter.</div></div>'; return; }
    target.innerHTML='';
    list.forEach(p=>target.appendChild(buildCard(p)));
  }

  function buildCard(p){
    const c=CHAPTERS[p._ci];
    const card=document.createElement('article');
    card.className='q card'+(isSolved(p._id)?' solved':'');
    card.id='q'+p._id;

    // head
    const head=document.createElement('div'); head.className='q-head';
    head.innerHTML='<span class="qnum">№'+p._id+'</span>'
      + '<span class="qtitle">'+richStr(p.title||'Untitled')+'</span>'
      + '<span class="diff d'+(p.difficulty||3)+'" title="Difficulty '+(p.difficulty||3)+'/5">'
        + '<span class="pip"></span><span class="pip"></span><span class="pip"></span><span class="pip"></span><span class="pip"></span>'
        + '<span class="difflabel">L'+(p.difficulty||3)+'</span></span>'
      + '<button class="qicon-btn star'+(isMarked(p._id)?' on':'')+'" title="Bookmark">'+(isMarked(p._id)?'★':'☆')+'</button>'
      + '<button class="qicon-btn solvebtn'+(isSolved(p._id)?' on':'')+'" title="Mark solved">'+(isSolved(p._id)?'✔':'○')+'</button>';
    card.appendChild(head);

    // chapter tag line (only useful in all/search views)
    if(c){ const ctag=document.createElement('div'); ctag.className='q-tags';
      ctag.innerHTML='<span class="tag" style="border-color:var(--line2)">Ch '+c.rom+' &middot; '+esc(c.label)+'</span>';
      card.appendChild(ctag); }

    // statement
    const st=document.createElement('div'); st.className='q-statement';
    st.innerHTML='<span class="stmt-label">Evaluate</span><div class="stmt-math"></div>';
    renderStmt(st.querySelector('.stmt-math'), p.statement||'');
    card.appendChild(st);

    // tags
    if(p.tags && p.tags.length){ const tg=document.createElement('div'); tg.className='q-tags';
      tg.innerHTML=p.tags.map(t=>'<span class="tag">'+esc(t)+'</span>').join(''); card.appendChild(tg); }

    // actions
    const act=document.createElement('div'); act.className='q-actions';
    const bAns=mkbtn('Reveal answer','btn ghost small');
    const bSol=mkbtn('Full solution','btn small');
    act.appendChild(bAns); act.appendChild(bSol);
    card.appendChild(act);

    // reveal: answer + trap
    const ansWrap=document.createElement('div'); ansWrap.className='reveal';
    const ansBox=document.createElement('div'); ansBox.className='answer-box';
    ansBox.innerHTML='<span class="ans-label">Limit</span><span class="ans-val"></span>';
    renderStmt(ansBox.querySelector('.ans-val'), p.answer||'');
    ansBox.querySelector('.ans-val').querySelectorAll('.katex-display').forEach(n=>n.style.margin='0');
    ansWrap.appendChild(ansBox);
    if(p.trap){ const tr=document.createElement('div'); tr.className='trap';
      const lab=document.createElement('span'); lab.className='tlabel'; lab.textContent='The Trap'; tr.appendChild(lab);
      const body=document.createElement('span'); renderRich(body, p.trap); tr.appendChild(body); ansWrap.appendChild(tr); }
    card.appendChild(ansWrap);

    // reveal: methods + remark
    const solWrap=document.createElement('div'); solWrap.className='reveal';
    solWrap.appendChild(buildMethods(p));
    if(p.remark){ const rm=document.createElement('div'); rm.className='remark';
      const lab=document.createElement('span'); lab.className='rlabel'; lab.textContent='Insight'; rm.appendChild(lab);
      const body=document.createElement('span'); renderRich(body, p.remark); rm.appendChild(body); solWrap.appendChild(rm); }
    card.appendChild(solWrap);

    // interactions
    bAns.addEventListener('click',()=>{ const open=ansWrap.classList.toggle('open'); bAns.textContent=open?'Hide answer':'Reveal answer'; });
    bSol.addEventListener('click',()=>{ const open=solWrap.classList.toggle('open'); bSol.textContent=open?'Hide solution':'Full solution'; if(open && !ansWrap.classList.contains('open')){ansWrap.classList.add('open');bAns.textContent='Hide answer';} });
    head.querySelector('.star').addEventListener('click',e=>{ toggleMarked(p._id); const on=isMarked(p._id); e.target.classList.toggle('on',on); e.target.textContent=on?'★':'☆'; });
    head.querySelector('.solvebtn').addEventListener('click',e=>{ toggleSolved(p._id); const on=isSolved(p._id); e.target.classList.toggle('on',on); e.target.textContent=on?'✔':'○'; card.classList.toggle('solved',on); refreshNavProgress(); });
    return card;
  }
  function mkbtn(txt,cls){ const b=document.createElement('button'); b.className=cls; b.textContent=txt; return b; }

  function buildMethods(p){
    const wrap=document.createElement('div'); wrap.className='methods';
    const sols=p.solutions||[];
    const tabs=document.createElement('div'); tabs.className='method-tabs';
    const bodies=[];
    sols.forEach((s,i)=>{
      const tab=document.createElement('button'); tab.className='mtab'+(i===0?' active':''); tab.textContent=tabName(s,i); tabs.appendChild(tab);
      const body=document.createElement('div'); body.className='method-body'+(i===0?' active':'');
      const name=document.createElement('div'); name.className='mname'; if(/\$|\\\[|\\\(/.test(s.name||'')) renderRich(name, s.name); else name.textContent=s.name||('Method '+(i+1)); body.appendChild(name);
      const ol=document.createElement('ol'); ol.className='steps';
      (s.steps||[]).forEach(stp=>{ const li=document.createElement('li'); renderRich(li, stp); ol.appendChild(li); });
      body.appendChild(ol); bodies.push(body);
      tab.addEventListener('click',()=>{ tabs.querySelectorAll('.mtab').forEach(x=>x.classList.remove('active')); tab.classList.add('active'); bodies.forEach(b=>b.classList.remove('active')); body.classList.add('active'); });
    });
    wrap.appendChild(tabs); bodies.forEach(b=>wrap.appendChild(b));
    return wrap;
  }
  function tabName(s,i){ const n=s.name||''; const m=n.match(/Method\s+([IVX0-9]+)/i); if(m) return 'Method '+m[1]; return 'Method '+(i+1); }

  // ---- chapter footer nav ----
  function chapterFootNav(c){
    const prev=CHAPTERS[c.ci-1], next=CHAPTERS[c.ci+1];
    function side(ch,dir){
      if(!ch) return '<button disabled class="'+(dir>0?'next':'')+'"><span class="fn-dir">'+(dir>0?'Next':'Previous')+'</span><span class="fn-name">—</span></button>';
      return '<button data-goto="'+ch.key+'" class="'+(dir>0?'next':'')+'"><span class="fn-dir">'+(dir>0?'Next chapter':'Previous chapter')+'</span><span class="fn-name">'+ch.rom+' &middot; '+esc(ch.label)+'</span></button>';
    }
    return '<div class="chap-footnav">'+side(prev,-1)+side(next,1)+'</div>';
  }
  function wireFootNav(view){ view.querySelectorAll('[data-goto]').forEach(b=>b.addEventListener('click',()=>{ location.hash='#/ch/'+b.getAttribute('data-goto'); })); }

})();
