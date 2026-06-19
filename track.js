/* ============================================================
   Ranker's Masterbooks — student tracking & growth (track.js)
   Self-contained. Add to a book with:
     <script defer src="../tracker-config.js"></script>
     <script defer src="../track.js"></script>
   Works with no config (local-only). With Supabase config it also
   logs events to your project. No external dependencies.
   ============================================================ */
(function () {
  'use strict';
  var CFG = window.TRACKER || {};
  var LIVE = CFG.enabled === true
    && /^https:\/\/.+\.supabase\.co\/?$/.test(CFG.url || '')
    && (CFG.anonKey || '').length > 40
    && !/YOUR-/.test((CFG.url || '') + (CFG.anonKey || ''));

  var BOOK = (location.pathname.match(/([a-z0-9]+-masterbook)/) || [])[1] || 'masterbook';
  var SKEY = 'rmb_student', LKEY = 'rmb_events';

  function rid(){ return 'd_' + Math.random().toString(36).slice(2) + Date.now().toString(36); }
  function getStudent(){ try { return JSON.parse(localStorage.getItem(SKEY) || 'null'); } catch (e) { return null; } }
  function setStudent(s){ localStorage.setItem(SKEY, JSON.stringify(s)); }
  function localEvents(){ try { return JSON.parse(localStorage.getItem(LKEY) || '[]'); } catch (e) { return []; } }
  function pushLocal(ev){ var a = localEvents(); a.push(ev); if (a.length > 3000) a = a.slice(-3000); localStorage.setItem(LKEY, JSON.stringify(a)); }
  function esc(s){ return String(s == null ? '' : s).replace(/[&<>"]/g, function (c){ return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'})[c]; }); }

  // map rendered problem id -> {theme,title,difficulty}
  function pinfo(id){
    var P = window.PROBLEMS || [], i;
    for (i = 0; i < P.length; i++) if (P[i]._id === id) return P[i];
    return null;
  }

  function logEvent(kind, opts){
    opts = opts || {};
    var st = getStudent(); if (!st) return;
    var ev = { device_id: st.device_id, name: st.name, class_code: st.class_code, book: BOOK,
      problem_id: (opts.problem_id != null ? String(opts.problem_id) : null), theme: opts.theme || null,
      kind: kind, value: (opts.value != null ? opts.value : null), note: opts.note || null,
      created_at: new Date().toISOString() };
    pushLocal(ev);
    if (LIVE) {
      try {
        fetch(CFG.url.replace(/\/$/, '') + '/rest/v1/events', {
          method: 'POST', keepalive: true,
          headers: { 'apikey': CFG.anonKey, 'Authorization': 'Bearer ' + CFG.anonKey,
            'Content-Type': 'application/json', 'Prefer': 'return=minimal' },
          body: JSON.stringify([{ device_id: ev.device_id, name: ev.name, class_code: ev.class_code,
            book: ev.book, problem_id: ev.problem_id, theme: ev.theme, kind: ev.kind, value: ev.value, note: ev.note }])
        }).catch(function () {});
      } catch (e) {}
    }
  }

  // ---------- styles ----------
  var css = ''
    + '.rmb-fb{margin-top:14px;padding:12px 14px;border:1px dashed currentColor;border-radius:12px;opacity:.92;'
    +   'display:flex;flex-wrap:wrap;gap:10px 16px;align-items:center;font-size:13.5px;font-family:inherit}'
    + '.rmb-fb .rmb-lab{font-weight:700;opacity:.7;letter-spacing:.02em}'
    + '.rmb-fb button{font:inherit;cursor:pointer;border:1px solid currentColor;background:transparent;color:inherit;'
    +   'border-radius:999px;padding:5px 12px;opacity:.75;transition:.15s}'
    + '.rmb-fb button:hover{opacity:1}'
    + '.rmb-fb button.on{background:currentColor;opacity:1}'
    + '.rmb-fb button.on span{color:#fff;mix-blend-mode:difference}'
    + '.rmb-stars{display:inline-flex;gap:2px}'
    + '.rmb-stars i{cursor:pointer;font-style:normal;font-size:19px;line-height:1;opacity:.45;transition:.12s}'
    + '.rmb-stars i.lit{opacity:1}'
    + '.rmb-bar{position:fixed;right:14px;bottom:14px;z-index:9000;display:flex;gap:8px;align-items:center;'
    +   'font-family:system-ui,-apple-system,Inter,sans-serif}'
    + '.rmb-bar button{cursor:pointer;border:1px solid rgba(128,128,128,.5);background:rgba(127,127,127,.14);'
    +   'backdrop-filter:blur(6px);color:inherit;font:600 12.5px/1 inherit;padding:9px 13px;border-radius:999px;'
    +   'box-shadow:0 4px 14px rgba(0,0,0,.12)}'
    + '.rmb-bar button:hover{filter:brightness(1.08)}'
    + '.rmb-chip{font-weight:700;opacity:.7;font-size:12px;padding:0 4px}'
    + '.rmb-modal{position:fixed;inset:0;z-index:9500;display:flex;align-items:center;justify-content:center;'
    +   'background:rgba(10,8,4,.55);backdrop-filter:blur(3px);font-family:system-ui,-apple-system,Inter,sans-serif}'
    + '.rmb-card{background:#fffdf8;color:#1c1a16;max-width:430px;width:calc(100% - 32px);border-radius:18px;'
    +   'padding:26px 26px 22px;box-shadow:0 24px 70px rgba(0,0,0,.35);max-height:88vh;overflow:auto}'
    + '@media(prefers-color-scheme:dark){.rmb-card{background:#1c1a15;color:#efe8d8}}'
    + '.rmb-card h3{font:800 21px/1.2 Georgia,serif;margin:0 0 4px}'
    + '.rmb-card p.sub{margin:0 0 16px;opacity:.7;font-size:13.5px}'
    + '.rmb-card label{display:block;font-size:12px;font-weight:700;opacity:.7;margin:12px 0 5px;text-transform:uppercase;letter-spacing:.06em}'
    + '.rmb-card input,.rmb-card textarea{width:100%;box-sizing:border-box;font:inherit;font-size:15px;padding:10px 12px;'
    +   'border:1px solid rgba(128,128,128,.4);border-radius:10px;background:transparent;color:inherit}'
    + '.rmb-card .row{display:flex;gap:10px;margin-top:18px}'
    + '.rmb-card .btn{flex:1;cursor:pointer;border:0;border-radius:11px;padding:12px;font:700 14px/1 inherit;color:#fff;background:#0e7490}'
    + '.rmb-card .btn.ghost{background:rgba(128,128,128,.18);color:inherit}'
    + '.rmb-q{margin:14px 0}.rmb-q>span{display:block;font-size:14px;margin-bottom:6px;font-weight:600}'
    + '.rmb-grow .g{display:flex;justify-content:space-between;padding:7px 0;border-bottom:1px solid rgba(128,128,128,.18);font-size:14px}'
    + '.rmb-grow .g b{font-weight:800}'
    + '.rmb-note{margin-top:14px;padding:11px 13px;border-radius:11px;background:rgba(14,116,144,.12);font-size:13.5px;line-height:1.5}'
    + '.rmb-foc{margin-top:10px;font-size:13px;opacity:.85}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  // ---------- modal helper ----------
  function modal(html){
    var ov = document.createElement('div'); ov.className = 'rmb-modal';
    ov.innerHTML = '<div class="rmb-card">' + html + '</div>';
    ov.addEventListener('click', function (e){ if (e.target === ov) close(); });
    function close(){ ov.remove(); }
    document.body.appendChild(ov);
    return { el: ov, close: close };
  }
  function starRow(initial, onPick){
    var wrap = document.createElement('span'); wrap.className = 'rmb-stars';
    var cur = initial || 0;
    function paint(n){ [].forEach.call(wrap.children, function (s, i){ s.classList.toggle('lit', i < n); }); }
    for (var i = 1; i <= 5; i++) (function (n){
      var s = document.createElement('i'); s.textContent = '★';
      s.addEventListener('mouseenter', function (){ paint(n); });
      s.addEventListener('click', function (){ cur = n; paint(n); onPick && onPick(n); });
      wrap.appendChild(s);
    })(i);
    wrap.addEventListener('mouseleave', function (){ paint(cur); });
    paint(cur);
    return wrap;
  }

  // ---------- sign in ----------
  function signIn(force){
    var s = getStudent();
    if (s && !force) return;
    var m = modal(
      '<h3>Welcome to the Ranker’s Masterbooks</h3>' +
      '<p class="sub">Enter your name and the class code your teacher gave you. This keeps your progress and lets your teacher support your growth.</p>' +
      '<label>Your name</label><input id="rmb-n" autocomplete="off" placeholder="e.g. Aarav" value="' + esc(s ? s.name : '') + '">' +
      '<label>Class code</label><input id="rmb-c" autocomplete="off" placeholder="e.g. JEE25" value="' + esc(s ? s.class_code : '') + '">' +
      '<div class="row"><button class="btn" id="rmb-go">Start learning →</button></div>'
    );
    m.el.querySelector('#rmb-go').addEventListener('click', function (){
      var n = m.el.querySelector('#rmb-n').value.trim(), c = m.el.querySelector('#rmb-c').value.trim();
      if (!n || !c) { m.el.querySelector('#rmb-n').focus(); return; }
      var prev = getStudent();
      setStudent({ device_id: (prev && prev.device_id) || rid(), name: n, class_code: c });
      m.close(); renderChip(); logEvent('signin', {});
    });
    setTimeout(function (){ var i = m.el.querySelector('#rmb-n'); i && i.focus(); }, 60);
  }

  // ---------- per-problem feedback strip ----------
  function priorFor(id){
    var u = null, c = null, evs = localEvents();
    for (var i = evs.length - 1; i >= 0; i--) {
      var e = evs[i]; if (e.book !== BOOK || e.problem_id != String(id)) continue;
      if (u === null && e.kind === 'understood') u = e.value;
      if (c === null && e.kind === 'confidence') c = e.value;
      if (u !== null && c !== null) break;
    }
    return { u: u, c: c };
  }
  function injectFeedback(card){
    if (card.querySelector('.rmb-fb')) return;
    var id = parseInt((card.id || '').replace(/^q/, ''), 10); if (!id) return;
    var info = pinfo(id) || {}, theme = info.theme || null;
    var prior = priorFor(id);
    var fb = document.createElement('div'); fb.className = 'rmb-fb';
    fb.innerHTML = '<span class="rmb-lab">Did you get it?</span>'
      + '<button data-u="1"' + (prior.u == 1 ? ' class="on"' : '') + '><span>👍 Got it</span></button>'
      + '<button data-u="0"' + (prior.u == 0 ? ' class="on"' : '') + '><span>🤔 Not yet</span></button>'
      + '<span class="rmb-lab" style="margin-left:6px">Confidence</span>';
    fb.querySelectorAll('button[data-u]').forEach(function (b){
      b.addEventListener('click', function (){
        fb.querySelectorAll('button[data-u]').forEach(function (x){ x.classList.remove('on'); });
        b.classList.add('on');
        logEvent('understood', { problem_id: id, theme: theme, value: parseInt(b.getAttribute('data-u'), 10) });
      });
    });
    fb.appendChild(starRow(prior.c || 0, function (n){ logEvent('confidence', { problem_id: id, theme: theme, value: n }); }));
    card.appendChild(fb);
  }

  // ---------- solved hook (delegated; app.js toggles .solvebtn) ----------
  document.addEventListener('click', function (e){
    var b = e.target.closest && e.target.closest('.solvebtn'); if (!b) return;
    var card = b.closest('.q.card'); if (!card) return;
    var id = parseInt((card.id || '').replace(/^q/, ''), 10); if (!id) return;
    var info = pinfo(id) || {};
    setTimeout(function (){
      logEvent(card.classList.contains('solved') ? 'solved' : 'unsolved', { problem_id: id, theme: info.theme || null });
    }, 0);
  }, true);

  // ---------- session satisfaction / confidence check-in ----------
  function checkIn(){
    if (!getStudent()) { signIn(); return; }
    var sat = 0, conf = 0;
    var m = modal(
      '<h3>Quick check-in</h3><p class="sub">A few seconds — this helps your teacher support you and lets you see your own growth.</p>' +
      '<div class="rmb-q"><span>How satisfied are you with this session?</span><span id="rmb-sat"></span></div>' +
      '<div class="rmb-q"><span>How confident do you feel on this topic now?</span><span id="rmb-conf"></span></div>' +
      '<label>Anything you found hard or want more of? (optional)</label><textarea id="rmb-note" rows="2"></textarea>' +
      '<div class="row"><button class="btn ghost" id="rmb-skip">Later</button><button class="btn" id="rmb-save">Save</button></div>'
    );
    m.el.querySelector('#rmb-sat').appendChild(starRow(0, function (n){ sat = n; }));
    m.el.querySelector('#rmb-conf').appendChild(starRow(0, function (n){ conf = n; }));
    m.el.querySelector('#rmb-skip').addEventListener('click', m.close);
    m.el.querySelector('#rmb-save').addEventListener('click', function (){
      var note = m.el.querySelector('#rmb-note').value.trim();
      if (sat) logEvent('satisfaction', { value: sat });
      if (conf) logEvent('topic_confidence', { value: conf, note: note || null });
      else if (note) logEvent('satisfaction', { note: note });
      m.close();
      toast('Thanks — saved. Keep going 🚀');
    });
  }

  // ---------- student growth panel ----------
  function growth(){
    if (!getStudent()) { signIn(); return; }
    var evs = localEvents().filter(function (e){ return e.book === BOOK; });
    var solved = {}, gotIt = {}, conf = [], byTheme = {};
    evs.forEach(function (e){
      if (e.kind === 'solved') solved[e.problem_id] = 1;
      if (e.kind === 'unsolved') delete solved[e.problem_id];
      if (e.kind === 'understood') { gotIt[e.problem_id] = e.value; tally(byTheme, e.theme, 'u', e.value); }
      if (e.kind === 'confidence') { conf.push(e.value); tally(byTheme, e.theme, 'c', e.value); }
    });
    function tally(o, t, k, v){ if (!t) return; o[t] = o[t] || { u: [], c: [] }; o[t][k].push(v); }
    var nSolved = Object.keys(solved).length;
    var gv = Object.keys(gotIt).map(function (k){ return gotIt[k]; });
    var gotPct = gv.length ? Math.round(100 * gv.filter(function (x){ return x == 1; }).length / gv.length) : null;
    var avgConf = conf.length ? (conf.reduce(function (a, b){ return a + b; }, 0) / conf.length) : null;
    // weakest theme = lowest (gotIt rate, then confidence)
    var weak = null, weakScore = 2;
    Object.keys(byTheme).forEach(function (t){
      var d = byTheme[t];
      var ur = d.u.length ? d.u.filter(function (x){ return x == 1; }).length / d.u.length : 1;
      var cr = d.c.length ? (d.c.reduce(function (a, b){ return a + b; }, 0) / d.c.length) / 5 : 1;
      var sc = Math.min(ur, cr);
      if (sc < weakScore) { weakScore = sc; weak = t; }
    });
    var label = themeLabel(weak);
    var msg = nSolved === 0
      ? 'You’re just getting started. Solve a few and rate how you feel — your growth will show up here.'
      : (gotPct != null && gotPct >= 75 ? 'Strong understanding — keep stretching into the hardest problems. 🔥'
        : 'Good momentum. The more you rate honestly, the better this guides you. 💪');
    modal(
      '<h3>📈 My growth</h3><p class="sub">' + esc(BOOK.replace('-masterbook', '').replace(/^\w/, function (c){ return c.toUpperCase(); })) + '</p>' +
      '<div class="rmb-grow">' +
        row('Problems solved', nSolved) +
        row('“Got it” rate', gotPct == null ? '—' : gotPct + '%') +
        row('Average confidence', avgConf == null ? '—' : avgConf.toFixed(1) + ' / 5') +
      '</div>' +
      (weak ? '<div class="rmb-foc"><b>Focus next:</b> ' + esc(label) + ' — your toughest area so far.</div>' : '') +
      '<div class="rmb-note">' + msg + '</div>' +
      '<div class="row"><button class="btn" id="rmb-ok">Keep going →</button></div>'
    ).el.querySelector('#rmb-ok').addEventListener('click', function (){ this.closest('.rmb-modal').remove(); });
    function row(k, v){ return '<div class="g"><span>' + k + '</span><b>' + v + '</b></div>'; }
  }
  function themeLabel(t){
    var P = window.PROBLEMS || [], i;
    for (i = 0; i < P.length; i++) if (P[i].theme === t) return P[i].themeLabel || t;
    return t || '';
  }

  // ---------- toast ----------
  function toast(txt){
    var t = document.createElement('div'); t.textContent = txt;
    t.style.cssText = 'position:fixed;left:50%;bottom:64px;transform:translateX(-50%);z-index:9600;'
      + 'background:#0e7490;color:#fff;padding:11px 18px;border-radius:999px;font:600 13.5px system-ui;box-shadow:0 8px 24px rgba(0,0,0,.3)';
    document.body.appendChild(t); setTimeout(function (){ t.style.transition = '.4s'; t.style.opacity = '0'; }, 1900);
    setTimeout(function (){ t.remove(); }, 2400);
  }

  // ---------- floating bar ----------
  function renderChip(){
    var bar = document.getElementById('rmb-bar');
    if (!bar) { bar = document.createElement('div'); bar.id = 'rmb-bar'; bar.className = 'rmb-bar'; document.body.appendChild(bar); }
    var s = getStudent();
    bar.innerHTML = (s ? '<span class="rmb-chip" title="Click to switch">👤 ' + esc(s.name) + '</span>' : '')
      + '<button id="rmb-grow">📈 My growth</button>'
      + '<button id="rmb-fin">✓ Check-in</button>';
    bar.querySelector('#rmb-grow').addEventListener('click', growth);
    bar.querySelector('#rmb-fin').addEventListener('click', checkIn);
    var chip = bar.querySelector('.rmb-chip'); if (chip) chip.style.cursor = 'pointer', chip.addEventListener('click', function (){ signIn(true); });
  }

  // ---------- observe problem cards ----------
  function scan(){ document.querySelectorAll('.q.card').forEach(injectFeedback); }
  function start(){
    renderChip();
    if (!getStudent()) signIn();
    var view = document.getElementById('view') || document.body;
    new MutationObserver(function (){ scan(); }).observe(view, { childList: true, subtree: true });
    scan();
    // gentle check-in prompt after sustained activity
    var acted = 0;
    document.addEventListener('click', function (e){
      if (e.target.closest && (e.target.closest('.rmb-fb') || e.target.closest('.solvebtn'))) {
        acted++; if (acted === 8 && !sessionStorage.getItem('rmb_checked')) { sessionStorage.setItem('rmb_checked', '1'); setTimeout(checkIn, 800); }
      }
    }, true);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
