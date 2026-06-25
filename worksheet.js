/* ============================================================
   Ranker's Masterbooks — Creator (worksheet.js)
   One shared tool. Works on the HOMEPAGE (mix problems from ANY of the
   21 books) and inside any book. Pick books → pick chapters (or a one-tap
   preset) → Generate a DPP / Assignment / Question Paper as a clean PDF.
   Minimal typing, premium UI, bulletproof per-segment KaTeX. No backend.
   ============================================================ */
(function () {
  'use strict';
  var SIG_KEY = 'rmb_sig', RATED_KEY = 'rmb_rated', SKIN_KEY = 'rmb_skin', LKEY = 'rmb_events';
  var EMAIL = 'yadavindrajeet877@gmail.com';

  /* the 21 books (build order is the natural reading order) */
  var BOOKS = [
    ['area-masterbook', 'Area under Curves'], ['lines-masterbook', 'Straight Lines'],
    ['aod-masterbook', 'Application of Derivatives'], ['indefinite-masterbook', 'Indefinite Integration'],
    ['functions-masterbook', 'Functions & Relations'], ['conics-masterbook', 'Conic Sections'],
    ['diffeq-masterbook', 'Differential Equations'], ['vectors-masterbook', 'Vectors & 3D'],
    ['sequences-masterbook', 'Sequences & Series'], ['binomial-masterbook', 'Binomial Theorem'],
    ['probability-masterbook', 'Probability'], ['pnc-masterbook', 'Permutations & Combinations'],
    ['definite-masterbook', 'Definite Integration'], ['complex-masterbook', 'Complex Numbers'],
    ['quadratics-masterbook', 'Quadratics'], ['diff-masterbook', 'Differentiability'],
    ['continuity-masterbook', 'Continuity'], ['matrix-masterbook', 'Matrices & Determinants'],
    ['trig-masterbook', 'Trigonometry'], ['itf-masterbook', 'Inverse Trigonometry'],
    ['limits-masterbook', 'Limits']
  ];
  var NAME = {}; BOOKS.forEach(function (b) { NAME[b[0]] = b[1]; });

  function ready(fn) { if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn); else fn(); }
  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function getSig() { try { var v = localStorage.getItem(SIG_KEY); return v == null ? 'Indrajeet Yadav' : v; } catch (e) { return 'Indrajeet Yadav'; } }
  function setSig(v) { try { localStorage.setItem(SIG_KEY, v); } catch (e) {} }
  function getSkin() { try { return localStorage.getItem(SKIN_KEY) || 'clean'; } catch (e) { return 'clean'; } }
  function setSkin(v) { try { localStorage.setItem(SKIN_KEY, v); } catch (e) {} }
  function ratedThisSession() { try { return sessionStorage.getItem(RATED_KEY) === '1'; } catch (e) { return false; } }
  function markRated() { try { sessionStorage.setItem(RATED_KEY, '1'); } catch (e) {} }
  function logLocal(ev) { try { var a = JSON.parse(localStorage.getItem(LKEY) || '[]'); a.push(ev); if (a.length > 3000) a = a.slice(-3000); localStorage.setItem(LKEY, JSON.stringify(a)); } catch (e) {} }

  /* ---- per-segment KaTeX (printable sentinels @@PB@@ / @@Mn@@; matches the app) ---- */
  function stripcmd(s) {
    for (var i = 0; i < 4; i++) s = s.replace(/\\(emph|textbf|textit|textsf|texttt|textrm|textsc|textnormal|text)\{((?:[^{}]|\{[^{}]*\})*)\}/g, '$2');
    return s.replace(/\\dots\b|\\ldots\b/g, '…').replace(/\\textemdash\b/g, '—').replace(/\\textendash\b/g, '–')
      .replace(/\\textquotedblleft\b/g, '“').replace(/\\textquotedblright\b/g, '”').replace(/\\textquoteleft\b/g, '‘').replace(/\\textquoteright\b/g, '’')
      .replace(/\\(newline|medskip|bigskip|smallskip|noindent)\b/g, ' ');
  }
  function prose(t) { return esc(t).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/@@PB@@/g, '<span class="pb"></span>'); }
  function tex(s) {
    if (s == null) return '';
    var str = String(s), math = [];
    str = str.replace(/\$\$[\s\S]+?\$\$|\\\[[\s\S]+?\\\]|\$[^$]+?\$|\\\([\s\S]+?\\\)/g, function (mm) { math.push(mm); return '@@M' + (math.length - 1) + '@@'; });
    str = stripcmd(str).replace(/\\par\b\s*/g, '@@PB@@');
    var out = '', parts = str.split(/@@M(\d+)@@/);
    for (var i = 0; i < parts.length; i++) {
      if (i % 2 === 0) { out += prose(parts[i]); }
      else {
        var mm = math[+parts[i]], t, disp;
        if (mm.slice(0, 2) === '$$') { t = mm.slice(2, -2); disp = true; }
        else if (mm.slice(0, 2) === '\\[') { t = mm.slice(2, -2); disp = true; }
        else if (mm.slice(0, 2) === '\\(') { t = mm.slice(2, -2); disp = false; }
        else { t = mm.slice(1, -1); disp = false; }
        try { out += (window.katex ? katex.renderToString(t, { throwOnError: false, displayMode: disp }) : esc(t)); }
        catch (e) { out += '<code>' + esc(t) + '</code>'; }
      }
    }
    return out;
  }

  // statements/answers may be PURE LaTeX with no $ delimiters (e.g. Limits' \lim_{...}); render the whole thing as display math, else fall back to segment rendering.
  function texStmt(s) {
    if (s == null) return '';
    var str = String(s);
    if (/\$|\\\[|\\\(/.test(str)) return tex(str);
    try { return window.katex ? katex.renderToString(stripcmd(str).replace(/\\par\b\s*/g, ' '), { throwOnError: false, displayMode: true }) : esc(str); }
    catch (e) { return '<code>' + esc(str) + '</code>'; }
  }

  /* ---- data: lazy-load any book's problems (cross-book) ---- */
  var cache = {};            // slug -> [problems(+__book,__key)]
  function inBook() { return /-masterbook\//.test(location.pathname); }
  function curSlug() { return (location.pathname.match(/([a-z0-9]+-masterbook)/) || [])[1] || null; }
  function bookPath(slug) { return (inBook() ? '../' : '') + slug + '/problems.js'; }
  function tag(list, slug) { return list.map(function (p, idx) { p.__book = slug; if (p._id == null) p._id = idx + 1; p.__key = slug + ':' + p._id; return p; }); }
  function loadBook(slug) {
    if (cache[slug]) return Promise.resolve(cache[slug]);
    if (slug === curSlug() && window.PROBLEMS && window.PROBLEMS.length) { cache[slug] = tag(window.PROBLEMS.slice(), slug); return Promise.resolve(cache[slug]); }
    return fetch(bookPath(slug)).then(function (r) { return r.text(); }).then(function (t) {
      var g = {}; try { (new Function('window', t))(g); } catch (e) { g.PROBLEMS = []; }
      cache[slug] = tag((g.PROBLEMS || []).slice(), slug); return cache[slug];
    }).catch(function () { cache[slug] = []; return cache[slug]; });
  }
  function chaptersOf(list) {
    var order = [], map = {};
    list.forEach(function (p) { var t = p.theme || 'misc'; if (!map[t]) { map[t] = { key: t, label: p.themeLabel || t, problems: [] }; order.push(map[t]); } map[t].problems.push(p); });
    return order;
  }
  function timeEst(p) { var d = p.difficulty || 3; return d <= 3 ? 4 : (d === 4 ? 7 : 11); }
  function accent() { try { var c = getComputedStyle(document.documentElement).getPropertyValue('--gold') || ''; if (c.trim()) return c.trim(); } catch (e) {} return '#0f766e'; }

  /* ---- builder styles ---- */
  var css = ''
    + '.ws-fab{display:none}'
    + '.ws-modal{position:fixed;inset:0;z-index:9600;display:flex;align-items:center;justify-content:center;background:rgba(12,9,4,.6);-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);font-family:var(--sans,Inter,system-ui,sans-serif)}'
    + '.ws-card{background:#fbf7ee;color:#241f17;width:min(720px,calc(100% - 26px));max-height:92vh;display:flex;flex-direction:column;border-radius:20px;box-shadow:0 30px 80px rgba(0,0,0,.45);border:1px solid #e7dcc6;overflow:hidden}'
    + '.ws-hd{padding:20px 24px 14px;border-bottom:1px solid #e7dcc6}'
    + '.ws-hd h3{margin:0;font:900 23px/1.1 var(--serif,Georgia),serif}.ws-hd p{margin:5px 0 0;opacity:.65;font-size:13.5px}'
    + '.ws-bd{padding:16px 24px;overflow:auto}'
    + '.ws-ft{padding:14px 24px;border-top:1px solid #e7dcc6;display:flex;gap:12px;align-items:center;background:#f4ecdb}'
    + '.ws-lab{display:block;font:700 11px/1 var(--sans,Inter,sans-serif);text-transform:uppercase;letter-spacing:.1em;opacity:.55;margin:16px 0 7px}'
    + '.ws-lab:first-child{margin-top:2px}'
    + '.ws-seg{display:flex;flex-wrap:wrap;border:1px solid var(--line2,#d8cdb4);border-radius:11px;overflow:hidden}'
    + '.ws-seg button{font:600 13px var(--sans,Inter,sans-serif);padding:9px 14px;border:0;border-right:1px solid #e7dcc6;background:transparent;color:inherit;cursor:pointer;opacity:.6;flex:1;min-width:92px}'
    + '.ws-seg button:last-child{border-right:0}.ws-seg button.on{background:var(--gold,#0f766e);color:#fff;opacity:1}'
    + '.ws-chips{display:flex;flex-wrap:wrap;gap:7px}'
    + '.ws-chip{font:600 12.5px var(--sans,Inter,sans-serif);padding:7px 12px;border-radius:999px;border:1px solid var(--line2,#d8cdb4);cursor:pointer;opacity:.85;background:#ffffff;transition:.13s}'
    + '.ws-chip:hover{border-color:var(--gold,#0f766e)}'
    + '.ws-chip.on{background:var(--gold,#0f766e);color:#fff;border-color:var(--gold,#0f766e);opacity:1}'
    + '.ws-presets{display:flex;flex-wrap:wrap;gap:8px}'
    + '.ws-pre{font:700 12.5px var(--sans,Inter,sans-serif);padding:9px 14px;border-radius:10px;border:1px dashed var(--gold,#0f766e);color:var(--gold,#0f766e);background:transparent;cursor:pointer;transition:.13s}'
    + '.ws-pre:hover{background:var(--gold,#0f766e);color:#fff;border-style:solid}'
    + '.ws-search{width:100%;box-sizing:border-box;font:inherit;font-size:14px;padding:11px 13px;border:1px solid var(--line2,#d8cdb4);border-radius:11px;background:#ffffff;color:inherit}'
    + '.ws-search:focus{outline:0;border-color:var(--gold,#0f766e);box-shadow:0 0 0 4px color-mix(in srgb,var(--gold,#0f766e) 14%,transparent)}'
    + '.ws-bookgrp{margin:10px 0 4px}.ws-bookgrp>.bn{font:800 13px var(--serif,Georgia),serif;color:var(--gold,#0f766e);margin:10px 0 4px;display:flex;align-items:center;gap:8px}'
    + '.ws-ch{border:1px solid #e7dcc6;border-radius:11px;margin:6px 0;overflow:hidden;background:#ffffff}'
    + '.ws-ch>.h{display:flex;align-items:center;gap:10px;padding:10px 13px;cursor:pointer}'
    + '.ws-ch>.h:hover{background:color-mix(in srgb,var(--gold,#0f766e) 6%,transparent)}'
    + '.ws-ch .nm{font-weight:700;font-size:14px;flex:1;color:#241f17}.ws-ch .ct{font-size:12px;opacity:.55}'
    + '.ws-ch .exp{font-size:12px;opacity:.6;padding:3px 8px;border-radius:7px;border:1px solid var(--line2,#d8cdb4)}'
    + '.ws-plist{display:none;padding:2px 14px 10px 40px}.ws-plist.open{display:block}'
    + '.ws-plist label,.ws-flat label{display:flex;gap:9px;align-items:flex-start;padding:5px 0;font-size:13px;cursor:pointer;color:#241f17}'
    + '.ws-cb{width:17px;height:17px;accent-color:var(--gold,#0f766e);cursor:pointer;flex:0 0 auto;margin-top:1px}'
    + '.ws-cb.lg{width:18px;height:18px}'
    + '.ws-hint{font-size:12.5px;opacity:.6;padding:14px 4px;text-align:center}'
    + '.ws-more{margin-top:14px}.ws-more>summary{cursor:pointer;font:700 12px var(--sans,Inter,sans-serif);text-transform:uppercase;letter-spacing:.08em;opacity:.6;list-style:none}'
    + '.ws-more>summary::-webkit-details-marker{display:none}.ws-more[open]>summary{margin-bottom:8px}'
    + '.ws-card input[type=text],.ws-card input[type=number],.ws-card textarea,.ws-card select{width:100%;box-sizing:border-box;font:inherit;font-size:14px;padding:9px 11px;border:1px solid var(--line2,#d8cdb4);border-radius:9px;background:#ffffff;color:inherit}'
    + '.ws-2{display:flex;gap:10px;flex-wrap:wrap}.ws-2>label{flex:1;min-width:150px}'
    + '.ws-bp{display:flex;gap:8px;flex-wrap:wrap}.ws-bp .s{flex:1;min-width:120px;border:1px solid var(--line2,#d8cdb4);border-radius:9px;padding:8px 10px;font-size:12px}'
    + '.ws-btn{cursor:pointer;border:0;border-radius:11px;padding:12px 20px;font:800 14px var(--sans,Inter,sans-serif);color:#fff;background:var(--gold,#0f766e)}'
    + '.ws-btn:disabled{opacity:.5;cursor:not-allowed}.ws-btn.ghost{background:transparent;color:inherit;border:1px solid var(--line2,#d8cdb4)}'
    + '.ws-count{flex:1;font:600 13px var(--sans,Inter,sans-serif);opacity:.8}'
    + '.ws-stars i{font-style:normal;font-size:27px;cursor:pointer;opacity:.4;transition:.1s}.ws-stars i.lit{opacity:1}'
    + '.ws-spin{font-size:12px;opacity:.6;padding:8px 0}'
    + '.ws-chdl{margin-top:14px;cursor:pointer;border:1.5px solid var(--gold,#0f766e);background:transparent;color:var(--gold,#0f766e);font:700 12.5px var(--sans,Inter,sans-serif);padding:9px 15px;border-radius:10px;display:inline-flex;gap:7px;align-items:center}'
    + '.ws-chdl:hover{background:var(--gold,#0f766e);color:#fff}'
    + '.ws-home-create{display:inline-flex;align-items:center;gap:9px;cursor:pointer;border:0;border-radius:13px;padding:14px 24px;font:800 16px var(--sans,Inter,sans-serif);color:#fff;background:var(--gold,#0f766e);box-shadow:0 6px 20px rgba(15,118,110,.28);transition:.15s}'
    + '.ws-home-create:hover{filter:brightness(1.06);transform:translateY(-1px)}';
  function injectCss() { if (document.getElementById('ws-css')) return; var st = document.createElement('style'); st.id = 'ws-css'; st.textContent = css; document.head.appendChild(st); }

  /* ---- state ---- */
  var MODES = { dpp: 'DPP', assignment: 'Assignment', paper: 'Question Paper' };
  var picked = {};           // 'slug:id' -> true
  var loadedById = {};       // 'slug:id' -> problem
  var selBooks = {};         // slug -> true (chosen in the picker)

  function selKeys() { return Object.keys(picked).filter(function (k) { return picked[k]; }); }
  function selProblems() { return selKeys().map(function (k) { return loadedById[k]; }).filter(Boolean); }

  /* ---- the unified builder ---- */
  function open(scope) {
    injectCss();
    if (scope) selBooks[scope] = true; else if (inBook() && curSlug()) selBooks[curSlug()] = true;
    var ov = document.createElement('div'); ov.className = 'ws-modal';
    ov.innerHTML = '<div class="ws-card">'
      + '<div class="ws-hd"><h3>Create</h3><p>Pick any book(s), tap a ready-made set or choose chapters, then Save as PDF. Mix across books freely.</p></div>'
      + '<div class="ws-bd">'
      + '<label class="ws-lab">Type</label><div class="ws-seg" id="ws-mode"><button data-m="dpp" class="on">DPP</button><button data-m="assignment">Assignment</button><button data-m="paper">Question Paper</button></div>'
      + '<label class="ws-lab">Books — tap to include</label><div class="ws-chips" id="ws-books"></div>'
      + '<label class="ws-lab">Quick sets</label><div class="ws-presets" id="ws-pre">'
      + '<button class="ws-pre" data-p="bal">✨ Balanced 12</button><button class="ws-pre" data-p="easy">🌱 Easiest 10</button>'
      + '<button class="ws-pre" data-p="mixed">🎲 Mixed 12</button><button class="ws-pre" data-p="hard">🔥 Hardest 10</button>'
      + '<button class="ws-pre" data-p="all">All selected</button><button class="ws-pre" data-p="clear">Clear</button></div>'
      + '<label class="ws-lab">Or search & pick</label><input class="ws-search" id="ws-search" placeholder="Search chapters, problems or tags…" autocomplete="off">'
      + '<div id="ws-pick"><div class="ws-hint">Tap a book above to load its chapters.</div></div>'
      + '<details class="ws-more"><summary>More options ▾</summary>'
      + '<label class="ws-lab">Include</label><div class="ws-seg" id="ws-inc"><button data-i="problems" class="on">Problems only</button><button data-i="solutions">With solutions</button><button data-i="answerkey">+ Answer key</button></div>'
      + '<label class="ws-lab">Paper skin</label><div class="ws-seg" id="ws-skin"><button data-s="clean" class="on">Clean</button><button data-s="ruled">Ruled</button><button data-s="exam">Exam</button></div>'
      + '<div class="ws-2"><label><span class="ws-lab" style="margin-top:14px">Title (optional)</span><input type="text" id="ws-title" placeholder="auto"></label>'
      + '<label><span class="ws-lab" style="margin-top:14px">Class / batch</span><input type="text" id="ws-class" placeholder="optional"></label>'
      + '<label><span class="ws-lab" style="margin-top:14px">Signature</span><input type="text" id="ws-sig" value="' + esc(getSig()) + '" placeholder="(none)"></label></div>'
      + '<label class="ws-lab">Instructions</label><textarea id="ws-ins" rows="2" placeholder="Attempt all questions."></textarea>'
      + '<div id="ws-bp" style="display:none"><label class="ws-lab">Paper blueprint (marks)</label><div class="ws-bp">'
      + '<div class="s"><b>L3</b> <input type="number" id="bpAm" min="1" value="1" style="width:52px"> mk</div>'
      + '<div class="s"><b>L4</b> <input type="number" id="bpBm" min="1" value="2" style="width:52px"> mk</div>'
      + '<div class="s"><b>L5</b> <input type="number" id="bpCm" min="1" value="4" style="width:52px"> mk</div></div></div>'
      + '</details>'
      + '</div>'
      + '<div class="ws-ft"><span class="ws-count" id="ws-count">0 selected</span><button class="ws-btn ghost" id="ws-cancel">Cancel</button><button class="ws-btn" id="ws-gen">Generate &amp; print →</button></div>'
      + '</div>';
    document.body.appendChild(ov);

    var mode = 'dpp', inc = 'problems', skin = getSkin(); if (['clean', 'ruled', 'exam'].indexOf(skin) < 0) skin = 'clean';
    var pickEl = ov.querySelector('#ws-pick'), searchEl = ov.querySelector('#ws-search');

    // book chips
    var bc = ov.querySelector('#ws-books');
    bc.innerHTML = BOOKS.map(function (b) { return '<button class="ws-chip wbk' + (selBooks[b[0]] ? ' on' : '') + '" data-slug="' + b[0] + '">' + esc(b[1]) + '</button>'; }).join('');
    bc.addEventListener('click', function (e) { var c = e.target.closest('.wbk'); if (!c) return; var slug = c.getAttribute('data-slug');
      if (selBooks[slug]) { delete selBooks[slug]; c.classList.remove('on'); renderPick(); }
      else { selBooks[slug] = true; c.classList.add('on'); c.textContent = NAME[slug] + ' …'; loadBook(slug).then(function () { c.textContent = NAME[slug]; renderPick(); }); }
    });

    function loadedSelBooks() { return Object.keys(selBooks).filter(function (s) { return selBooks[s] && cache[s]; }); }
    function syncSkin() { /* persisted on generate */ }
    function refresh() {
      var ps = selProblems(); var mins = ps.reduce(function (a, p) { return a + timeEst(p); }, 0);
      ov.querySelector('#ws-count').textContent = ps.length + ' selected · ~' + mins + ' min';
      ov.querySelectorAll('.wch-all').forEach(function (b) { var s = b.getAttribute('data-slug'), ci = +b.getAttribute('data-ci'); var ch = chaptersOf(cache[s] || [])[ci]; if (ch) b.checked = ch.problems.length && ch.problems.every(function (p) { return picked[p.__key]; }); });
    }
    function indexLoaded() { loadedSelBooks().forEach(function (s) { (cache[s] || []).forEach(function (p) { loadedById[p.__key] = p; }); }); }

    function renderPick() {
      indexLoaded();
      var books = loadedSelBooks();
      var q = (searchEl.value || '').trim().toLowerCase();
      if (!books.length) { pickEl.innerHTML = '<div class="ws-hint">Tap a book above to load its chapters.</div>'; refresh(); return; }
      if (q) {
        var hits = [];
        books.forEach(function (s) { (cache[s] || []).forEach(function (p) {
          var hay = ((p.title || '') + ' ' + (p.themeLabel || '') + ' ' + (p.tags || []).join(' ')).toLowerCase();
          if (hay.indexOf(q) >= 0) hits.push(p);
        }); });
        pickEl.innerHTML = '<div class="ws-flat">' + (hits.slice(0, 80).map(function (p) {
          return '<label><input type="checkbox" class="ws-cb wpb" data-key="' + p.__key + '" ' + (picked[p.__key] ? 'checked' : '') + '><span>' + esc(p.title || 'Untitled') + ' <span style="opacity:.5">· ' + esc(NAME[p.__book]) + ' · L' + (p.difficulty || '') + '</span></span></label>';
        }).join('') || '<div class="ws-hint">No matches.</div>') + '</div>';
      } else {
        pickEl.innerHTML = books.map(function (s) {
          var chs = chaptersOf(cache[s] || []);
          return '<div class="ws-bookgrp"><div class="bn">' + esc(NAME[s]) + '</div>' + chs.map(function (c, ci) {
            var pl = c.problems.map(function (p) { return '<label><input type="checkbox" class="ws-cb wpb" data-key="' + p.__key + '" ' + (picked[p.__key] ? 'checked' : '') + '><span>№' + p._id + ' · ' + esc(p.title || '') + ' <span style="opacity:.5">· L' + (p.difficulty || '') + ' · ~' + timeEst(p) + 'm</span></span></label>'; }).join('');
            return '<div class="ws-ch"><div class="h"><input type="checkbox" class="ws-cb lg wch-all" data-slug="' + s + '" data-ci="' + ci + '"><span class="nm">' + esc(c.label) + '</span><span class="ct">' + c.problems.length + '</span><span class="exp" data-toggle="1">pick ▾</span></div><div class="ws-plist">' + pl + '</div></div>';
          }).join('') + '</div>';
        }).join('');
      }
      refresh();
    }

    pickEl.addEventListener('click', function (e) {
      var tg = e.target;
      if (tg.closest && tg.closest('[data-toggle]')) { var pl = tg.closest('.ws-ch').querySelector('.ws-plist'); pl.classList.toggle('open'); tg.textContent = pl.classList.contains('open') ? 'hide ▴' : 'pick ▾'; return; }
      var all = tg.closest && tg.closest('.wch-all');
      if (all) { var s = all.getAttribute('data-slug'), ci = +all.getAttribute('data-ci'); var ch = chaptersOf(cache[s] || [])[ci]; ch.problems.forEach(function (p) { if (all.checked) picked[p.__key] = true; else delete picked[p.__key]; }); ch.problems.forEach(function (p) { var cb = pickEl.querySelector('.wpb[data-key="' + p.__key + '"]'); if (cb) cb.checked = all.checked; }); refresh(); return; }
      var pb = tg.closest && tg.closest('.wpb');
      if (pb) { var k = pb.getAttribute('data-key'); if (pb.checked) picked[k] = true; else delete picked[k]; refresh(); return; }
    });
    searchEl.addEventListener('input', function () { renderPick(); });

    // presets
    function applyPreset(p) {
      indexLoaded();
      var pool = []; loadedSelBooks().forEach(function (s) { pool = pool.concat(cache[s] || []); });
      if (p === 'clear') { picked = {}; renderPick(); return; }
      if (!pool.length) return;
      if (p === 'all') { pool.forEach(function (x) { picked[x.__key] = true; }); }
      else if (p === 'hard') { picked = {}; pool.slice().sort(function (a, b2) { return (b2.difficulty || 0) - (a.difficulty || 0); }).slice(0, 10).forEach(function (x) { picked[x.__key] = true; }); }
      else if (p === 'easy') { picked = {}; pool.slice().sort(function (a, b2) { return (a.difficulty || 9) - (b2.difficulty || 9); }).slice(0, 10).forEach(function (x) { picked[x.__key] = true; }); }
      else if (p === 'mixed') { picked = {}; [3, 4, 5].forEach(function (d) { pool.filter(function (x) { return (x.difficulty || 3) === d; }).slice(0, 4).forEach(function (x) { picked[x.__key] = true; }); }); }
      else if (p === 'bal') { picked = {}; // ~12 spread across chapters & difficulties
        var chs = []; loadedSelBooks().forEach(function (s) { chaptersOf(cache[s] || []).forEach(function (c) { chs.push(c); }); });
        var i = 0; while (Object.keys(picked).length < 12 && chs.length) { var c = chs[i % chs.length]; var cand = c.problems[Math.floor(i / chs.length)]; if (cand) picked[cand.__key] = true; i++; if (i > 400) break; }
      }
      renderPick();
    }
    ov.querySelector('#ws-pre').addEventListener('click', function (e) {
      var b = e.target.closest('.ws-pre'); if (!b) return; var p = b.getAttribute('data-p');
      // if no book is chosen yet, auto-pick a sensible default so presets always do something
      if (p !== 'clear' && !loadedSelBooks().length) {
        var def = (inBook() && curSlug()) ? curSlug() : BOOKS[0][0];
        selBooks[def] = true;
        var chip = bc.querySelector('.wbk[data-slug="' + def + '"]'); if (chip) chip.classList.add('on');
        loadBook(def).then(function () { renderPick(); applyPreset(p); });
        return;
      }
      applyPreset(p);
    });

    ov.querySelectorAll('#ws-mode button').forEach(function (b) { b.onclick = function () { ov.querySelectorAll('#ws-mode button').forEach(function (x) { x.classList.remove('on'); }); b.classList.add('on'); mode = b.getAttribute('data-m'); ov.querySelector('#ws-bp').style.display = mode === 'paper' ? 'block' : 'none'; if (mode === 'paper') ov.querySelector('.ws-more').open = true; }; });
    ov.querySelectorAll('#ws-inc button').forEach(function (b) { b.onclick = function () { ov.querySelectorAll('#ws-inc button').forEach(function (x) { x.classList.remove('on'); }); b.classList.add('on'); inc = b.getAttribute('data-i'); }; });
    ov.querySelectorAll('#ws-skin button').forEach(function (b) { if (b.getAttribute('data-s') === skin) { ov.querySelectorAll('#ws-skin button').forEach(function (x) { x.classList.remove('on'); }); b.classList.add('on'); } b.onclick = function () { ov.querySelectorAll('#ws-skin button').forEach(function (x) { x.classList.remove('on'); }); b.classList.add('on'); skin = b.getAttribute('data-s'); }; });
    ov.addEventListener('click', function (e) { if (e.target === ov) ov.remove(); });
    ov.querySelector('#ws-cancel').onclick = function () { ov.remove(); };
    ov.querySelector('#ws-gen').onclick = function () {
      var ps = selProblems(); if (!ps.length) { alert('Pick at least one problem (tap a book, then a Quick set or some chapters).'); return; }
      var o = { mode: mode, inc: inc, skin: skin, sig: ov.querySelector('#ws-sig').value.trim(),
        title: ov.querySelector('#ws-title').value.trim(), cls: ov.querySelector('#ws-class').value.trim(), ins: ov.querySelector('#ws-ins').value.trim(),
        marks: { 3: +ov.querySelector('#bpAm').value || 1, 4: +ov.querySelector('#bpBm').value || 2, 5: +ov.querySelector('#bpCm').value || 4 },
        items: ps };
      setSig(o.sig); setSkin(o.skin);
      requireRating(function () { generate(o); ov.remove(); });
    };
    renderPick();
    // preload any already-selected books (e.g. current book)
    Object.keys(selBooks).forEach(function (s) { if (selBooks[s] && !cache[s]) loadBook(s).then(renderPick); });
  }

  /* ---- required quick rating before first export ---- */
  function requireRating(cb) {
    if (ratedThisSession()) { cb(); return; }
    injectCss();
    var ov = document.createElement('div'); ov.className = 'ws-modal'; ov.style.zIndex = 9700; var rate = 0;
    ov.innerHTML = '<div class="ws-card" style="width:min(430px,calc(100% - 26px))"><div class="ws-hd"><h3>One quick thing 🙏</h3><p>How useful are these masterbooks for your teaching?</p></div>'
      + '<div class="ws-bd"><div class="ws-stars" id="ws-rate" style="text-align:center">' + [0, 0, 0, 0, 0].map(function () { return '<i>★</i>'; }).join('') + '</div>'
      + '<label class="ws-lab">Anything to add? (optional)</label><textarea id="ws-fbnote" rows="2"></textarea></div>'
      + '<div class="ws-ft"><a class="ws-count" id="ws-mail" href="#" style="text-decoration:underline">Email feedback</a><button class="ws-btn" id="ws-rok">Continue →</button></div></div>';
    document.body.appendChild(ov);
    var stars = ov.querySelectorAll('#ws-rate i');
    stars.forEach(function (s, i) { s.onmouseenter = function () { stars.forEach(function (x, j) { x.classList.toggle('lit', j <= i); }); }; s.onclick = function () { rate = i + 1; }; });
    ov.querySelector('#ws-rate').onmouseleave = function () { stars.forEach(function (x, j) { x.classList.toggle('lit', j < rate); }); };
    ov.querySelector('#ws-mail').onclick = function (e) { e.preventDefault(); location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent('Masterbooks feedback') + '&body=' + encodeURIComponent((rate ? 'Rating ' + rate + '/5\n' : '') + ov.querySelector('#ws-fbnote').value.trim()); };
    ov.querySelector('#ws-rok').onclick = function () {
      if (!rate) { var p = ov.querySelector('.ws-hd p'); p.textContent = 'Please tap a star to continue.'; p.style.color = '#b3402e'; return; }
      logLocal({ kind: 'rating', value: rate, note: ov.querySelector('#ws-fbnote').value.trim() || null, created_at: new Date().toISOString() });
      var ep = window.RMB_FEEDBACK_ENDPOINT || ''; if (ep) { try { fetch(ep, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ kind: 'rating', value: rate }), keepalive: true }).catch(function () {}); } catch (e) {} }
      markRated(); ov.remove(); cb();
    };
  }

  /* ---- print skins (clean / ruled / exam) ---- */
  function skinCss(skin, acc) {
    var b = '@page{size:A4;margin:18mm 16mm 20mm}*{box-sizing:border-box}'
      + 'body{font-family:Inter,system-ui,sans-serif;color:#201c16;font-size:11pt;line-height:1.55;margin:0;-webkit-print-color-adjust:exact;print-color-adjust:exact}'
      + '.katex{font-size:1.05em}.pb{display:block;height:.5em}.wrap{max-width:760px;margin:0 auto;padding:8px}'
      + '.head{border-bottom:2.5px solid ' + acc + ';padding-bottom:13px;margin-bottom:8px}'
      + '.kick{font:700 9pt/1 Inter;letter-spacing:.3em;text-transform:uppercase;color:' + acc + '}'
      + '.ttl{font:900 25pt/1.05 Fraunces,Georgia,serif;margin:8px 0 3px}'
      + '.sub{font:500 italic 12pt/1.3 Newsreader,serif;color:#7a7060}'
      + '.ins{font:italic 11pt/1.4 Newsreader,serif;color:#5a5346;margin-top:5px}'
      + '.meta{font:600 8.5pt/1 Inter;letter-spacing:.05em;color:#8b8474;margin-top:9px;text-transform:uppercase}'
      + '.q{padding:12px 0;border-bottom:1px solid #ece3d0;break-inside:avoid}'
      + '.qh{display:flex;align-items:baseline;gap:9px}.qn{font:900 13pt Fraunces,serif;color:' + acc + ';font-variant-numeric:tabular-nums}'
      + '.qt{font:700 12.5pt Fraunces,serif;flex:1}.qmk{font:700 9pt Inter;color:' + acc + '}.ql{font:700 7.5pt Inter;letter-spacing:.06em;color:#9a927f}.qbk{font:600 7.5pt Inter;letter-spacing:.04em;color:#b7ad97;text-transform:uppercase}'
      + '.qtask{font:800 7.5pt Inter;letter-spacing:.14em;text-transform:uppercase;color:' + acc + ';margin:4px 0 2px}.qbody{margin-top:2px}'
      + '.sol{margin-top:9px;padding:10px 13px;background:#faf6ee;border-left:3px solid ' + acc + ';border-radius:0 7px 7px 0;font-size:10.5pt}'
      + '.sol .ans{margin-bottom:4px}.sol .trap{color:#9a3a2a;margin:5px 0}.sol .rem{font-style:italic;color:#5a5346;margin-top:5px}'
      + '.sol .m{margin:6px 0}.sol .mn{font-weight:700;font-size:9.5pt;color:' + acc + '}.sol ol{margin:3px 0 0;padding-left:20px}.sol li{margin:2px 0}'
      + '.akey{margin-top:16px;padding:11px 13px;border:1px dashed ' + acc + ';border-radius:8px;font-size:10pt}.akey b{color:' + acc + '}.akey .ak{margin:2px 0}'
      + '.sign{margin-top:20px;padding-top:11px;border-top:1px solid #ddd2bc;display:flex;justify-content:space-between;align-items:baseline;font-size:9pt;color:#8b8474}.sign b{font:600 italic 12pt Newsreader,serif;color:#201c16}'
      + '@media print{.noprint{display:none}}';
    if (skin === 'ruled') b += 'body{background:repeating-linear-gradient(#fff,#fff 27px,#e3edf5 28px)}.wrap{border-left:2px solid #ecc3c3;padding-left:22px}';
    if (skin === 'exam') b += 'body{background:#f3eee2}.wrap{background:#fdfbf4;border:1px solid #d8cba8;padding:22px}.q{border-bottom:1px dashed #cdbd97}';
    return b;
  }

  /* ---- generate the print document ---- */
  function generate(o) {
    var sel = o.items.slice().sort(function (a, b) { return a._id - b._id; });
    var multi = {}; sel.forEach(function (p) { multi[p.__book] = 1; }); multi = Object.keys(multi).length > 1;
    var acc = accent() || '#0f766e';
    var withSol = (o.inc === 'solutions'), withKey = (o.inc === 'answerkey'), isPaper = (o.mode === 'paper');
    var d = new Date(), date = d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    var markOf = function (p) { return o.marks[p.difficulty || 3] || 1; };
    var totalMarks = sel.reduce(function (a, p) { return a + markOf(p); }, 0), totalMin = sel.reduce(function (a, p) { return a + timeEst(p); }, 0);
    var bookList = {}; sel.forEach(function (p) { bookList[NAME[p.__book] || p.__book] = 1; });
    var subtitle = Object.keys(bookList).join(' · ');
    var title = o.title || (MODES[o.mode] + (multi ? ' — Mixed Set' : ' — ' + (Object.keys(bookList)[0] || 'Masterbooks')));

    var parts = sel.map(function (p, i) {
      var sol = '';
      if (withSol) {
        var methods = (p.solutions || []).map(function (s) { return '<div class="m"><div class="mn">' + tex(s.name || 'Method') + '</div><ol>' + (s.steps || []).map(function (st) { return '<li>' + tex(st) + '</li>'; }).join('') + '</ol></div>'; }).join('');
        sol = '<div class="sol"><div class="ans"><b>Answer.</b> ' + texStmt(p.answer) + '</div>' + (p.trap ? '<div class="trap"><b>The Trap.</b> ' + tex(p.trap) + '</div>' : '') + methods + (p.remark ? '<div class="rem"><b>Insight.</b> ' + tex(p.remark) + '</div>' : '') + '</div>';
      }
      return '<div class="q"><div class="qh"><span class="qn">' + (i + 1) + '.</span><span class="qt">' + esc(p.title || '') + '</span>'
        + (isPaper ? '<span class="qmk">[' + markOf(p) + ']</span>' : '<span class="ql">L' + (p.difficulty || '') + '</span>')
        + (multi ? '<span class="qbk">' + esc((NAME[p.__book] || '').split(' ')[0]) + '</span>' : '')
        + '</div><div class="qtask">' + esc(p.task || 'Solve') + '</div><div class="qbody">' + texStmt(p.statement) + '</div>' + sol + '</div>';
    }).join('');

    var keyHtml = withKey ? '<div class="akey"><b>Answer Key</b>' + sel.map(function (p, i) { return '<div class="ak">' + (i + 1) + '. ' + texStmt(p.answer) + '</div>'; }).join('') + '</div>' : '';
    var metaBits = sel.length + ' question' + (sel.length === 1 ? '' : 's');
    if (isPaper) metaBits += ' · ' + totalMarks + ' marks · ' + Math.max(totalMin, Math.round(totalMarks * 3)) + ' min';
    else metaBits += ' · ~' + totalMin + ' min · ' + (withSol ? 'with full solutions' : (withKey ? 'with answer key' : 'problems only'));
    var clsHtml = o.cls ? '<div class="meta">Class / batch: ' + esc(o.cls) + ' &nbsp;·&nbsp; Name: ____________________ &nbsp;·&nbsp; Date: __________</div>' : '';
    var sigHtml = o.sig ? '<span>Compiled by <b>' + esc(o.sig) + '</b></span>' : '<span></span>';

    var html = '<!DOCTYPE html><html><head><meta charset="utf-8"><title>' + esc(title) + '</title>'
      + '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css">'
      + '<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700;9..144,900&family=Newsreader:ital@0;1&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">'
      + '<style>' + skinCss(o.skin, acc) + '</style></head><body class="skin-' + esc(o.skin) + '"><div class="wrap">'
      + '<div class="head"><div class="kick">The Ranker’s Masterbooks · ' + esc(MODES[o.mode]) + '</div><div class="ttl">' + esc(title) + '</div>'
      + '<div class="sub">' + esc(subtitle) + '</div>' + (o.ins ? '<div class="ins">' + esc(o.ins) + '</div>' : '') + clsHtml
      + '<div class="meta">' + metaBits + '</div></div>' + parts + keyHtml
      + '<div class="sign">' + sigHtml + '<span>' + esc(date) + '</span></div>'
      + '<div class="noprint" style="text-align:center;margin:22px 0"><button onclick="window.print()" style="font:600 14px Inter;padding:11px 22px;border:0;border-radius:10px;background:' + acc + ';color:#fff;cursor:pointer">Save as PDF / Print</button></div>'
      + '</div></body></html>';
    var w = window.open('', '_blank');
    if (!w) { alert('Please allow pop-ups to generate the sheet.'); return; }
    w.document.open(); w.document.write(html); w.document.close();
    w.onload = function () { setTimeout(function () { try { w.print(); } catch (e) {} }, 700); };
  }

  /* ---- per-chapter download button (inside a book) ---- */
  function injectChapterBtn() {
    var m = (location.hash || '').match(/#\/ch\/([a-zA-Z0-9]+)/); if (!m) return;
    var key = m[1], hero = document.querySelector('.chap-hero'); if (!hero || hero.querySelector('.ws-chdl')) return;
    if (!(window.PROBLEMS || []).some(function (p) { return p.theme === key; })) return;
    var b = document.createElement('button'); b.className = 'ws-chdl'; b.innerHTML = '&#8595; Make a DPP from this chapter';
    b.onclick = function () { var s = curSlug(); selBooks[s] = true; loadBook(s).then(function (list) { picked = {}; list.forEach(function (p) { if (p.theme === key) { picked[p.__key] = true; loadedById[p.__key] = p; } }); open(s); }); };
    hero.appendChild(b);
  }

  ready(function () {
    injectCss();
    var fab = document.createElement('button'); fab.className = 'ws-fab'; fab.onclick = function () { open(curSlug()); }; document.body.appendChild(fab);
    if (inBook()) {
      var view = document.getElementById('view') || document.body;
      new MutationObserver(function () { injectChapterBtn(); }).observe(view, { childList: true, subtree: true });
      window.addEventListener('hashchange', function () { setTimeout(injectChapterBtn, 60); });
      injectChapterBtn();
    }
  });

  window.RMB_creator = function (scope) { open(scope || (inBook() ? curSlug() : null)); };
  window.RMB_worksheet = function (themeKey) { var s = curSlug(); selBooks[s] = true; loadBook(s).then(function (list) { picked = {}; list.forEach(function (p) { if (p.theme === themeKey) { picked[p.__key] = true; loadedById[p.__key] = p; } }); open(s); }); };
})();
