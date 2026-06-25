/* ============================================================
   Ranker's Masterbooks — Creator (worksheet.js)
   The teacher's leverage tool. One shared file, loaded by every book via
     <script defer src="../worksheet.js"></script>
   Modes: DPP · Assignment · Question Paper. Select by chapter / tag /
   difficulty / target time, cross-chapter. With or without solutions
   (+ answer key). Editable signature (default Indrajeet Yadav, persisted).
   Five export skins. A required quick rating before the first export.
   No backend — print-to-PDF. Bulletproof per-segment KaTeX.
   ============================================================ */
(function () {
  'use strict';
  var SIG_KEY = 'rmb_sig', RATED_KEY = 'rmb_rated', SKIN_KEY = 'rmb_skin', LKEY = 'rmb_events';
  var FEEDBACK_EMAIL = 'yadavindrajeet877@gmail.com';

  function ready(fn) { if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn); else fn(); }
  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function getSig() { try { var v = localStorage.getItem(SIG_KEY); return v == null ? 'Indrajeet Yadav' : v; } catch (e) { return 'Indrajeet Yadav'; } }
  function setSig(v) { try { localStorage.setItem(SIG_KEY, v); } catch (e) {} }
  function getSkin() { try { return localStorage.getItem(SKIN_KEY) || 'clean'; } catch (e) { return 'clean'; } }
  function setSkin(v) { try { localStorage.setItem(SKIN_KEY, v); } catch (e) {} }
  function ratedThisSession() { try { return sessionStorage.getItem(RATED_KEY) === '1'; } catch (e) { return false; } }
  function markRated() { try { sessionStorage.setItem(RATED_KEY, '1'); } catch (e) {} }
  function logLocal(ev) { try { var a = JSON.parse(localStorage.getItem(LKEY) || '[]'); a.push(ev); if (a.length > 3000) a = a.slice(-3000); localStorage.setItem(LKEY, JSON.stringify(a)); } catch (e) {} }

  /* ---- per-segment KaTeX (math-protected; matches the app renderer) ---- */
  function stripcmd(s) {
    for (var i = 0; i < 4; i++) s = s.replace(/\\(emph|textbf|textit|textsf|texttt|textrm|textsc|textnormal|text)\{((?:[^{}]|\{[^{}]*\})*)\}/g, '$2');
    return s.replace(/\\dots\b|\\ldots\b/g, '…').replace(/\\textemdash\b/g, '—').replace(/\\textendash\b/g, '–')
      .replace(/\\textquotedblleft\b/g, '“').replace(/\\textquotedblright\b/g, '”').replace(/\\textquoteleft\b/g, '‘').replace(/\\textquoteright\b/g, '’')
      .replace(/\\(newline|medskip|bigskip|smallskip|noindent)\b/g, ' ');
  }
  function prose(t) { return esc(t).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(//g, '<span class="pb"></span>'); }
  function tex(s) {
    if (s == null) return '';
    var str = String(s), math = [];
    str = str.replace(/\$\$[\s\S]+?\$\$|\\\[[\s\S]+?\\\]|\$[^$]+?\$|\\\([\s\S]+?\\\)/g, function (mm) { math.push(mm); return '' + (math.length - 1) + ''; });
    str = stripcmd(str).replace(/\\par\b\s*/g, '');
    var out = '', parts = str.split(/(\d+)/);
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

  /* ---- data helpers ---- */
  function chapters() {
    var P = window.PROBLEMS || [], order = [], map = {};
    P.forEach(function (p) { var t = p.theme || 'misc'; if (!map[t]) { map[t] = { key: t, label: p.themeLabel || t, problems: [] }; order.push(map[t]); } map[t].problems.push(p); });
    return order;
  }
  function allTags() {
    var P = window.PROBLEMS || [], set = {};
    P.forEach(function (p) { (p.tags || []).forEach(function (t) { set[t] = (set[t] || 0) + 1; }); });
    return Object.keys(set).sort(function (a, b) { return set[b] - set[a]; });
  }
  function timeEst(p) { var d = p.difficulty || 3; return d <= 3 ? 4 : (d === 4 ? 7 : 11); }
  function bookName() { var h = document.querySelector('.brand h1'); return (h ? h.textContent : document.title.split('·')[0] || '').trim().replace(/\.$/, ''); }
  function bookSub() { var s = document.querySelector('.brand .sub'); return s ? s.textContent.trim() : ''; }
  function accent() { try { var c = getComputedStyle(document.documentElement).getPropertyValue('--gold') || ''; if (c.trim()) return c.trim(); } catch (e) {} return '#a4642a'; }

  /* ---- builder styles ---- */
  var css = ''
    + '.ws-fab{display:none}'
    + '.ws-modal{position:fixed;inset:0;z-index:9600;display:flex;align-items:center;justify-content:center;background:rgba(10,8,4,.55);-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);font-family:system-ui,-apple-system,Inter,sans-serif}'
    + '.ws-card{background:var(--paper,#fffdf8);color:var(--ink,#1c1a16);width:min(660px,calc(100% - 28px));max-height:92vh;display:flex;flex-direction:column;border-radius:18px;box-shadow:0 24px 70px rgba(0,0,0,.4);border:1px solid var(--line,#e2d8c2)}'
    + '.ws-hd{padding:18px 22px 12px;border-bottom:1px solid rgba(128,128,128,.18)}'
    + '.ws-hd h3{margin:0;font:800 20px/1.2 var(--serif,Georgia),serif}.ws-hd p{margin:4px 0 0;opacity:.7;font-size:13px}'
    + '.ws-bd{padding:14px 22px;overflow:auto}'
    + '.ws-ft{padding:14px 22px;border-top:1px solid rgba(128,128,128,.18);display:flex;gap:10px;align-items:center}'
    + 'label.ws-lab{display:block;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;opacity:.6;margin:12px 0 5px}'
    + '.ws-card input[type=text],.ws-card input[type=number],.ws-card textarea{width:100%;box-sizing:border-box;font:inherit;font-size:14px;padding:9px 11px;border:1px solid rgba(128,128,128,.4);border-radius:9px;background:transparent;color:inherit}'
    + '.ws-2{display:flex;gap:10px}.ws-2>label{flex:1}'
    + '.ws-seg{display:flex;flex-wrap:wrap;border:1px solid rgba(128,128,128,.4);border-radius:10px;overflow:hidden}'
    + '.ws-seg button{font:600 13px system-ui;padding:8px 13px;border:0;border-right:1px solid rgba(128,128,128,.25);background:transparent;color:inherit;cursor:pointer;opacity:.62;flex:1;min-width:90px}'
    + '.ws-seg button:last-child{border-right:0}.ws-seg button.on{background:var(--gold,#a4642a);color:#fff;opacity:1}'
    + '.ws-chips{display:flex;flex-wrap:wrap;gap:6px;max-height:96px;overflow:auto;padding:2px 0}'
    + '.ws-chip{font:600 12px system-ui;padding:5px 10px;border-radius:999px;border:1px solid rgba(128,128,128,.4);cursor:pointer;opacity:.8}'
    + '.ws-chip.on{background:var(--gold,#a4642a);color:#fff;border-color:var(--gold,#a4642a);opacity:1}'
    + '.ws-ch{border:1px solid rgba(128,128,128,.2);border-radius:11px;margin:7px 0;overflow:hidden}'
    + '.ws-ch>.h{display:flex;align-items:center;gap:9px;padding:9px 12px;cursor:pointer}'
    + '.ws-ch>.h:hover{background:rgba(128,128,128,.07)}'
    + '.ws-ch .nm{font-weight:700;font-size:14px;flex:1}.ws-ch .ct{font-size:12px;opacity:.6}'
    + '.ws-ch .exp{font-size:12px;opacity:.55;padding:2px 6px;border-radius:6px}.ws-ch .exp:hover{background:rgba(128,128,128,.15)}'
    + '.ws-plist{display:none;padding:2px 12px 10px 38px}.ws-plist.open{display:block}'
    + '.ws-plist label{display:flex;gap:8px;align-items:flex-start;padding:4px 0;font-size:13px;cursor:pointer;opacity:.9}'
    + '.ws-cb{width:17px;height:17px;accent-color:var(--gold,#a4642a);cursor:pointer;flex:0 0 auto;margin-top:1px}'
    + '.ws-btn{cursor:pointer;border:0;border-radius:10px;padding:11px 18px;font:700 14px system-ui;color:#fff;background:var(--gold,#a4642a)}'
    + '.ws-btn.ghost{background:rgba(128,128,128,.18);color:inherit}.ws-btn.sm{padding:6px 12px;font-size:12px}'
    + '.ws-count{flex:1;font-size:13px;opacity:.78}'
    + '.ws-hint{font-size:12px;opacity:.6;margin:4px 0 0}'
    + '.ws-bp{display:flex;gap:8px;flex-wrap:wrap}.ws-bp .s{flex:1;min-width:120px;border:1px solid rgba(128,128,128,.25);border-radius:9px;padding:8px 10px}'
    + '.ws-bp .s b{font-size:12px}.ws-bp .s input{margin-top:4px}'
    + '.ws-stars i{font-style:normal;font-size:26px;cursor:pointer;opacity:.4;transition:.1s}.ws-stars i.lit{opacity:1}'
    + '.ws-chdl{margin-top:14px;cursor:pointer;border:1.5px solid var(--gold,#a4642a);background:transparent;color:var(--gold,#a4642a);font:700 12.5px/1 system-ui,Inter,sans-serif;padding:9px 15px;border-radius:10px;display:inline-flex;gap:7px;align-items:center}'
    + '.ws-chdl:hover{background:var(--gold,#a4642a);color:#fff}';
  function injectCss() { if (document.getElementById('ws-css')) return; var st = document.createElement('style'); st.id = 'ws-css'; st.textContent = css; document.head.appendChild(st); }

  /* ---- state ---- */
  var picked = {};
  var MODES = { dpp: { label: 'DPP', titleHint: 'DPP — Practice Set 1', ins: 'Attempt all questions.' },
                assignment: { label: 'Assignment', titleHint: 'Assignment 1', ins: 'Submit your full working.' },
                paper: { label: 'Question Paper', titleHint: 'Unit Test 1', ins: 'All questions are compulsory. Marks are shown against each question.' } };

  function selectedIds() { return Object.keys(picked).filter(function (k) { return picked[k]; }).map(Number); }
  function selCount() { return selectedIds().length; }

  /* ---- the builder modal ---- */
  function open() {
    injectCss();
    var chs = chapters();
    var ov = document.createElement('div'); ov.className = 'ws-modal';
    var chRows = chs.map(function (c, ci) {
      var pl = c.problems.map(function (p) {
        return '<label><input type="checkbox" class="ws-cb wcb" data-pid="' + p._id + '" ' + (picked[p._id] ? 'checked' : '') + '>'
          + '<span>№' + p._id + ' · ' + esc(p.title || 'Untitled') + ' <span style="opacity:.5">· L' + (p.difficulty || '') + ' · ~' + timeEst(p) + 'm</span></span></label>';
      }).join('');
      return '<div class="ws-ch" data-ci="' + ci + '"><div class="h"><input type="checkbox" class="ws-cb ws-all" data-ci="' + ci + '">'
        + '<span class="nm">' + esc(c.label) + '</span><span class="ct">' + c.problems.length + '</span><span class="exp" data-ci="' + ci + '">pick ▾</span></div>'
        + '<div class="ws-plist" data-ci="' + ci + '">' + pl + '</div></div>';
    }).join('');
    var tagChips = allTags().slice(0, 40).map(function (t) { return '<span class="ws-chip wtag" data-tag="' + esc(t) + '">' + esc(t) + '</span>'; }).join('');

    ov.innerHTML = '<div class="ws-card">'
      + '<div class="ws-hd"><h3>Create</h3><p>Build a DPP, an assignment or a question paper from ' + esc(bookName()) + ' — then Save as PDF.</p></div>'
      + '<div class="ws-bd">'
      + '<label class="ws-lab">Type</label><div class="ws-seg" id="ws-mode"><button data-m="dpp" class="on">DPP</button><button data-m="assignment">Assignment</button><button data-m="paper">Question Paper</button></div>'
      + '<div class="ws-2"><label><span class="ws-lab">Title</span><input type="text" id="ws-title" placeholder="' + esc(MODES.dpp.titleHint) + '"></label>'
      + '<label style="flex:0 0 150px"><span class="ws-lab">Class / batch</span><input type="text" id="ws-class" placeholder="e.g. XII-A"></label></div>'
      + '<label class="ws-lab">Instructions</label><textarea id="ws-ins" rows="2">' + esc(MODES.dpp.ins) + '</textarea>'
      + '<label class="ws-lab">Include</label><div class="ws-seg" id="ws-inc"><button data-i="problems" class="on">Problems only</button><button data-i="solutions">With solutions</button><button data-i="answerkey">+ Answer key</button></div>'
      + '<div id="ws-bp" style="display:none"><label class="ws-lab">Paper blueprint (marks per section)</label><div class="ws-bp">'
      + '<div class="s"><b>A · easy</b> (L3)<input type="number" id="bpA" min="0" value="0"> × <input type="number" id="bpAm" min="1" value="1" style="width:54px"> mk</div>'
      + '<div class="s"><b>B · medium</b> (L4)<input type="number" id="bpB" min="0" value="0"> × <input type="number" id="bpBm" min="1" value="2" style="width:54px"> mk</div>'
      + '<div class="s"><b>C · hard</b> (L5)<input type="number" id="bpC" min="0" value="0"> × <input type="number" id="bpCm" min="1" value="4" style="width:54px"> mk</div>'
      + '</div><div class="ws-hint" id="ws-bphint">Set counts, then “Auto-pick by blueprint”. </div>'
      + '<button class="ws-btn ghost sm" id="ws-bpgo" style="margin-top:6px">Auto-pick by blueprint</button></div>'
      + '<label class="ws-lab">Quick fill</label>'
      + '<div style="display:flex;gap:6px;flex-wrap:wrap"><button class="ws-btn ghost sm" data-diff="3">All L3</button><button class="ws-btn ghost sm" data-diff="4">All L4</button><button class="ws-btn ghost sm" data-diff="5">All L5</button>'
      + '<span style="display:inline-flex;align-items:center;gap:5px;font-size:12px;opacity:.8">by time <input type="number" id="ws-time" min="5" step="5" value="30" style="width:62px;padding:5px 7px"> min <button class="ws-btn ghost sm" id="ws-timego">fill</button></span>'
      + '<button class="ws-btn ghost sm" id="ws-selall">Select all</button><button class="ws-btn ghost sm" id="ws-clr">Clear</button></div>'
      + '<label class="ws-lab">By tag</label><div class="ws-chips">' + tagChips + '</div>'
      + '<label class="ws-lab">Chapters &amp; problems</label>' + chRows
      + '<div class="ws-2"><label><span class="ws-lab">Signature (your name)</span><input type="text" id="ws-sig" value="' + esc(getSig()) + '" placeholder="leave blank for none"></label>'
      + '<label style="flex:0 0 230px"><span class="ws-lab">Paper skin</span><select id="ws-skin" style="width:100%;font:inherit;font-size:14px;padding:9px 11px;border:1px solid rgba(128,128,128,.4);border-radius:9px;background:transparent;color:inherit">'
      + ['clean','ruled','rugged','chalk','hand'].map(function (s) { return '<option value="' + s + '"' + (getSkin() === s ? ' selected' : '') + '>' + ({ clean: 'Clean print', ruled: 'Ruled notebook', rugged: 'Rugged exam paper', chalk: 'Chalkboard', hand: 'Handwritten' })[s] + '</option>'; }).join('') + '</select></label></div>'
      + '</div>'
      + '<div class="ws-ft"><span class="ws-count" id="ws-count">0 selected</span><button class="ws-btn ghost" id="ws-cancel">Cancel</button><button class="ws-btn" id="ws-gen">Generate &amp; print →</button></div>'
      + '</div>';
    document.body.appendChild(ov);

    var mode = 'dpp', inc = 'problems';
    function refresh() {
      var ids = selectedIds(), mins = ids.reduce(function (a, id) { return a + timeEst(byId()[id] || {}); }, 0);
      ov.querySelector('#ws-count').textContent = ids.length + ' selected · ~' + mins + ' min';
      chs.forEach(function (c, ci) { var all = c.problems.length && c.problems.every(function (p) { return picked[p._id]; }); var b = ov.querySelector('.ws-all[data-ci="' + ci + '"]'); if (b) b.checked = all; });
    }
    function syncBoxes() { ov.querySelectorAll('.wcb').forEach(function (cb) { cb.checked = !!picked[+cb.getAttribute('data-pid')]; }); refresh(); }
    function byId() { var m = {}; (window.PROBLEMS || []).forEach(function (p) { m[p._id] = p; }); return m; }

    ov.addEventListener('click', function (e) { if (e.target === ov) ov.remove(); });
    ov.querySelector('#ws-cancel').onclick = function () { ov.remove(); };
    ov.querySelectorAll('#ws-mode button').forEach(function (b) { b.onclick = function () { ov.querySelectorAll('#ws-mode button').forEach(function (x) { x.classList.remove('on'); }); b.classList.add('on'); mode = b.getAttribute('data-m'); ov.querySelector('#ws-bp').style.display = mode === 'paper' ? 'block' : 'none'; var t = ov.querySelector('#ws-title'); t.placeholder = MODES[mode].titleHint; ov.querySelector('#ws-ins').value = MODES[mode].ins; }; });
    ov.querySelectorAll('#ws-inc button').forEach(function (b) { b.onclick = function () { ov.querySelectorAll('#ws-inc button').forEach(function (x) { x.classList.remove('on'); }); b.classList.add('on'); inc = b.getAttribute('data-i'); }; });
    ov.querySelectorAll('.exp').forEach(function (x) { x.onclick = function () { var pl = ov.querySelector('.ws-plist[data-ci="' + x.getAttribute('data-ci') + '"]'); pl.classList.toggle('open'); x.textContent = pl.classList.contains('open') ? 'hide ▴' : 'pick ▾'; }; });
    ov.querySelectorAll('.ws-all').forEach(function (b) { b.onclick = function () { var ci = +b.getAttribute('data-ci'); chs[ci].problems.forEach(function (p) { if (b.checked) picked[p._id] = true; else delete picked[p._id]; }); syncBoxes(); }; });
    ov.querySelectorAll('.wcb').forEach(function (cb) { cb.onclick = function () { var pid = +cb.getAttribute('data-pid'); if (cb.checked) picked[pid] = true; else delete picked[pid]; refresh(); }; });
    ov.querySelectorAll('.wtag').forEach(function (ch) { ch.onclick = function () { var tag = ch.getAttribute('data-tag'), on = !ch.classList.contains('on'); ch.classList.toggle('on', on); (window.PROBLEMS || []).forEach(function (p) { if ((p.tags || []).indexOf(tag) >= 0) { if (on) picked[p._id] = true; else delete picked[p._id]; } }); syncBoxes(); }; });
    ov.querySelectorAll('[data-diff]').forEach(function (b) { b.onclick = function () { var d = +b.getAttribute('data-diff'); (window.PROBLEMS || []).forEach(function (p) { if ((p.difficulty || 3) === d) picked[p._id] = true; }); syncBoxes(); }; });
    ov.querySelector('#ws-timego').onclick = function () { var target = +ov.querySelector('#ws-time').value || 30, acc = 0; picked = {}; (window.PROBLEMS || []).slice().forEach(function (p) { if (acc < target) { picked[p._id] = true; acc += timeEst(p); } }); syncBoxes(); };
    ov.querySelector('#ws-selall').onclick = function () { (window.PROBLEMS || []).forEach(function (p) { picked[p._id] = true; }); syncBoxes(); };
    ov.querySelector('#ws-clr').onclick = function () { picked = {}; syncBoxes(); };
    ov.querySelector('#ws-bpgo').onclick = function () {
      var want = { 3: +ov.querySelector('#bpA').value || 0, 4: +ov.querySelector('#bpB').value || 0, 5: +ov.querySelector('#bpC').value || 0 };
      picked = {};
      [3, 4, 5].forEach(function (d) { var pool = (window.PROBLEMS || []).filter(function (p) { return (p.difficulty || 3) === d; }); for (var i = 0; i < want[d] && i < pool.length; i++) picked[pool[i]._id] = true; });
      syncBoxes();
    };
    ov.querySelector('#ws-gen').onclick = function () {
      var ids = selectedIds(); if (!ids.length) { alert('Select at least one problem.'); return; }
      var opts = {
        mode: mode, inc: inc,
        title: (ov.querySelector('#ws-title').value || MODES[mode].titleHint).trim(),
        cls: ov.querySelector('#ws-class').value.trim(),
        ins: ov.querySelector('#ws-ins').value.trim(),
        sig: ov.querySelector('#ws-sig').value.trim(),
        skin: ov.querySelector('#ws-skin').value,
        marks: { 3: +ov.querySelector('#bpAm').value || 1, 4: +ov.querySelector('#bpBm').value || 2, 5: +ov.querySelector('#bpCm').value || 4 },
        ids: ids
      };
      setSig(opts.sig); setSkin(opts.skin);
      requireRating(function () { generate(opts); ov.remove(); });
    };
    refresh();
  }

  /* ---- required quick rating before first export ---- */
  function requireRating(cb) {
    if (ratedThisSession()) { cb(); return; }
    injectCss();
    var ov = document.createElement('div'); ov.className = 'ws-modal'; ov.style.zIndex = 9700;
    var rate = 0;
    ov.innerHTML = '<div class="ws-card" style="width:min(440px,calc(100% - 28px))"><div class="ws-hd"><h3>One quick thing 🙏</h3>'
      + '<p>How useful are these masterbooks for your teaching? Your rating helps make them better.</p></div>'
      + '<div class="ws-bd"><div class="ws-stars" id="ws-rate" style="text-align:center">' + [1, 2, 3, 4, 5].map(function () { return '<i>★</i>'; }).join('') + '</div>'
      + '<label class="ws-lab">Anything to add? (optional)</label><textarea id="ws-fbnote" rows="2" placeholder="What would help you most?"></textarea>'
      + '<p class="ws-hint">Stored on this device. You can also email feedback directly.</p></div>'
      + '<div class="ws-ft"><a class="ws-count" id="ws-mail" href="#" style="opacity:.8;text-decoration:underline">Email feedback</a><button class="ws-btn" id="ws-rok">Continue →</button></div></div>';
    document.body.appendChild(ov);
    var stars = ov.querySelectorAll('#ws-rate i');
    stars.forEach(function (s, i) { s.onmouseenter = function () { stars.forEach(function (x, j) { x.classList.toggle('lit', j <= i); }); }; s.onclick = function () { rate = i + 1; }; });
    ov.querySelector('#ws-rate').onmouseleave = function () { stars.forEach(function (x, j) { x.classList.toggle('lit', j < rate); }); };
    ov.querySelector('#ws-mail').onclick = function (e) { e.preventDefault(); var note = ov.querySelector('#ws-fbnote').value.trim(); location.href = 'mailto:' + FEEDBACK_EMAIL + '?subject=' + encodeURIComponent('Masterbooks feedback') + '&body=' + encodeURIComponent((rate ? 'Rating: ' + rate + '/5\n' : '') + note); };
    ov.querySelector('#ws-rok').onclick = function () {
      if (!rate) { ov.querySelector('#ws-rate').animate ? ov.querySelector('#ws-rate').animate([{ transform: 'translateX(-4px)' }, { transform: 'translateX(4px)' }, { transform: 'translateX(0)' }], { duration: 200 }) : 0; var h = ov.querySelector('.ws-hd p'); h.textContent = 'Please tap a star to continue.'; h.style.color = '#b3402e'; return; }
      logLocal({ kind: 'rating', value: rate, note: ov.querySelector('#ws-fbnote').value.trim() || null, book: bookName(), created_at: new Date().toISOString() });
      markRated(); ov.remove(); cb();
    };
  }

  /* ---- print-doc skins ---- */
  function skinCss(skin, acc) {
    var base = '@page{size:A4;margin:18mm 16mm 20mm}*{box-sizing:border-box}'
      + 'body{font-family:Inter,system-ui,sans-serif;color:#201c16;font-size:11pt;line-height:1.55;margin:0;-webkit-print-color-adjust:exact;print-color-adjust:exact}'
      + '.katex{font-size:1.05em}.pb{display:block;height:.5em}.wrap{max-width:760px;margin:0 auto;padding:8px}'
      + '.head{border-bottom:2.5px solid ' + acc + ';padding-bottom:12px;margin-bottom:6px}'
      + '.kick{font:700 9pt/1 Inter;letter-spacing:.28em;text-transform:uppercase;color:' + acc + '}'
      + '.bk{font:500 italic 12pt/1.2 Newsreader,serif;color:#7a7060;margin-top:3px}'
      + '.ttl{font:900 23pt/1.1 Fraunces,Georgia,serif;margin:7px 0 2px}'
      + '.ins{font:italic 11pt/1.4 Newsreader,serif;color:#5a5346;margin-top:4px}'
      + '.meta{font:600 8.5pt/1 Inter;letter-spacing:.04em;color:#8b8474;margin-top:8px;text-transform:uppercase}'
      + '.q{padding:11px 0;border-bottom:1px solid #ece3d0;break-inside:avoid}'
      + '.qh{display:flex;align-items:baseline;gap:8px}.qn{font:900 12pt Fraunces,serif;color:' + acc + '}'
      + '.qt{font:700 12pt Fraunces,serif;flex:1}.qmk{font:700 8.5pt Inter;color:' + acc + ';white-space:nowrap}.ql{font:700 7.5pt Inter;letter-spacing:.06em;color:#8b8474}'
      + '.qtask{font:800 7.5pt Inter;letter-spacing:.13em;text-transform:uppercase;color:' + acc + ';margin:3px 0 2px}.qbody{margin-top:2px}'
      + '.sol{margin-top:8px;padding:9px 12px;background:#faf6ee;border-left:3px solid ' + acc + ';border-radius:6px;font-size:10.5pt}'
      + '.sol .ans{margin-bottom:4px}.sol .trap{color:#9a3a2a;margin-bottom:5px}.sol .rem{font-style:italic;color:#5a5346;margin-top:5px}'
      + '.sol .m{margin:5px 0}.sol .mn{font-weight:700;font-size:9.5pt;color:' + acc + '}.sol ol{margin:3px 0 0;padding-left:20px}.sol li{margin:2px 0}'
      + '.akey{margin-top:14px;padding:10px 12px;border:1px dashed ' + acc + ';border-radius:8px;font-size:10pt}.akey b{color:' + acc + '}.akey .ak{margin:2px 0}'
      + '.sign{margin-top:18px;padding-top:10px;border-top:1px solid #ddd2bc;display:flex;justify-content:space-between;align-items:baseline;font-size:9pt;color:#8b8474}'
      + '.sign b{font:600 italic 12pt Newsreader,serif;color:#201c16}@media print{.noprint{display:none}}';
    if (skin === 'ruled') base += 'body{background:repeating-linear-gradient(#fff,#fff 27px,#cfe0f0 28px)}.wrap{background:transparent;border-left:2px solid #e6b3b3;padding-left:20px}';
    if (skin === 'rugged') base += 'body{background:#f1e9d4}.wrap{background:#fbf7ec;border:1px solid #d8cba8;box-shadow:0 0 0 6px #fbf7ec,0 0 0 7px #d8cba8;padding:20px}.ttl{font-family:Fraunces,Georgia,serif}.q{border-bottom:1px dashed #cbb88c}';
    if (skin === 'chalk') base += 'body{background:#26352e;color:#eef3ee}.bk,.ins,.meta,.ql,.sol .rem,.sign{color:#a9c4b3}.q{border-bottom:1px solid #3c5247}.ttl,.qt,.qn,.kick,.qtask,.sol .mn,.akey b,.sign b{color:#fff}.katex{color:#eef3ee}.sol{background:rgba(255,255,255,.06);border-left-color:#9ad0b0}.head{border-bottom-color:#9ad0b0}.akey{border-color:#9ad0b0}.qt,.ttl{font-family:"Comic Sans MS",Fraunces,serif}';
    if (skin === 'hand') base += '@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&display=swap");body{font-family:"Caveat",Inter,cursive;font-size:14pt;background:#fffef8}.qt,.ttl,.qn{font-family:"Caveat",Fraunces,cursive}.ins,.bk{font-family:"Caveat",Newsreader,cursive}.sol{background:#fdfbf0}';
    return base;
  }

  /* ---- generate the print document ---- */
  function generate(o) {
    var P = window.PROBLEMS || [], byId = {}; P.forEach(function (p) { byId[p._id] = p; });
    var sel = o.ids.map(function (id) { return byId[id]; }).filter(Boolean).sort(function (a, b) { return a._id - b._id; });
    var acc = accent() || '#a4642a';
    var withSol = (o.inc === 'solutions');
    var withKey = (o.inc === 'answerkey');
    var d = new Date(), date = d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    var markOf = function (p) { return o.marks[p.difficulty || 3] || 1; };
    var totalMarks = sel.reduce(function (a, p) { return a + markOf(p); }, 0);
    var totalMin = sel.reduce(function (a, p) { return a + timeEst(p); }, 0);
    var isPaper = (o.mode === 'paper');

    var parts = sel.map(function (p, i) {
      var sol = '';
      if (withSol) {
        var methods = (p.solutions || []).map(function (s) { return '<div class="m"><div class="mn">' + tex(s.name || 'Method') + '</div><ol>' + (s.steps || []).map(function (st) { return '<li>' + tex(st) + '</li>'; }).join('') + '</ol></div>'; }).join('');
        sol = '<div class="sol"><div class="ans"><b>Answer.</b> ' + tex(p.answer) + '</div>' + (p.trap ? '<div class="trap"><b>The Trap.</b> ' + tex(p.trap) + '</div>' : '') + methods + (p.remark ? '<div class="rem"><b>Insight.</b> ' + tex(p.remark) + '</div>' : '') + '</div>';
      }
      return '<div class="q"><div class="qh"><span class="qn">' + (i + 1) + '.</span><span class="qt">' + esc(p.title || '') + '</span>'
        + (isPaper ? '<span class="qmk">[' + markOf(p) + ']</span>' : '<span class="ql">L' + (p.difficulty || '') + '</span>')
        + '</div><div class="qtask">' + esc(p.task || 'Solve') + '</div><div class="qbody">' + tex(p.statement) + '</div>' + sol + '</div>';
    }).join('');

    var keyHtml = '';
    if (withKey) keyHtml = '<div class="akey"><b>Answer Key</b>' + sel.map(function (p, i) { return '<div class="ak">' + (i + 1) + '. ' + tex(p.answer) + '</div>'; }).join('') + '</div>';

    var metaBits = sel.length + ' question' + (sel.length === 1 ? '' : 's');
    if (isPaper) metaBits += ' · ' + totalMarks + ' marks · ' + Math.max(totalMin, Math.round(totalMarks * 3)) + ' min';
    else metaBits += ' · ~' + totalMin + ' min · ' + (withSol ? 'with full solutions' : (withKey ? 'with answer key' : 'problems only'));

    var sigHtml = o.sig ? '<span>Compiled by <b>' + esc(o.sig) + '</b></span>' : '<span></span>';
    var clsHtml = o.cls ? '<div class="meta">Class / batch: ' + esc(o.cls) + ' &nbsp;·&nbsp; Name: ____________________ &nbsp;·&nbsp; Date: __________</div>' : '';

    var html = '<!DOCTYPE html><html><head><meta charset="utf-8"><title>' + esc(o.title) + '</title>'
      + '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css">'
      + '<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700;9..144,900&family=Newsreader:ital@0;1&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">'
      + '<style>' + skinCss(o.skin, acc) + '</style></head><body class="skin-' + esc(o.skin) + '"><div class="wrap">'
      + '<div class="head"><div class="kick">The Ranker’s Masterbook · ' + esc(MODES[o.mode].label) + '</div><div class="ttl">' + esc(o.title) + '</div>'
      + '<div class="bk">' + esc(bookName()) + (bookSub() ? ' · ' + esc(bookSub()) : '') + '</div>'
      + (o.ins ? '<div class="ins">' + esc(o.ins) + '</div>' : '') + clsHtml
      + '<div class="meta">' + metaBits + '</div></div>'
      + parts + keyHtml
      + '<div class="sign">' + sigHtml + '<span>' + esc(date) + '</span></div>'
      + '<div class="noprint" style="text-align:center;margin:22px 0"><button onclick="window.print()" style="font:600 14px Inter;padding:11px 22px;border:0;border-radius:10px;background:' + acc + ';color:#fff;cursor:pointer">Save as PDF / Print</button></div>'
      + '</div></body></html>';

    var w = window.open('', '_blank');
    if (!w) { alert('Please allow pop-ups to generate the sheet.'); return; }
    w.document.open(); w.document.write(html); w.document.close();
    w.onload = function () { setTimeout(function () { try { w.print(); } catch (e) {} }, 700); };
  }

  /* ---- per-chapter download button (opens the builder pre-filled to that chapter) ---- */
  function injectChapterBtn() {
    var m = (location.hash || '').match(/#\/ch\/([a-zA-Z0-9]+)/); if (!m) return;
    var key = m[1], hero = document.querySelector('.chap-hero'); if (!hero || hero.querySelector('.ws-chdl')) return;
    if (!(window.PROBLEMS || []).some(function (p) { return p.theme === key; })) return;
    var b = document.createElement('button'); b.className = 'ws-chdl'; b.innerHTML = '&#8595; Make a DPP from this chapter';
    b.onclick = function () { window.RMB_worksheet(key); };
    hero.appendChild(b);
  }

  ready(function () {
    injectCss();
    var fab = document.createElement('button'); fab.className = 'ws-fab'; fab.onclick = open; document.body.appendChild(fab);
    var view = document.getElementById('view') || document.body;
    new MutationObserver(function () { injectChapterBtn(); }).observe(view, { childList: true, subtree: true });
    window.addEventListener('hashchange', function () { setTimeout(injectChapterBtn, 60); });
    injectChapterBtn();
  });

  // open the full builder, pre-selecting a chapter
  window.RMB_worksheet = function (themeKey) {
    picked = {}; (window.PROBLEMS || []).forEach(function (p) { if (p.theme === themeKey) picked[p._id] = true; });
    open();
  };
  window.RMB_creator = open;
})();
