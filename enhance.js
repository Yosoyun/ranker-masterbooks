/* ============================================================
   Ranker's Masterbooks — shared UX enhancement layer (enhance.js)
   Loaded by every book via  <script defer src="../enhance.js"></script>
   Adds (no dependencies, no app.js changes needed):
     • a persistent Home ("← 21 books") link in the top bar
     • a prominent "Create" button (opens the worksheet/DPP builder)
     • clickable tags → an overlay listing every problem with that tag
     • a clearer, auto-scrolled worked-solution reveal
   Safe to load on any book; degrades gracefully if elements are absent.
   ============================================================ */
(function () {
  'use strict';
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]; }); }

  /* ---- top bar: Home + Create ---- */
  function buildTopbar() {
    var tb = document.getElementById('topbar');
    if (!tb || tb.querySelector('.rmb-home')) return;
    var home = el('a', 'rmb-home', '<span aria-hidden="true">←</span> <span class="lbl">21 books</span>');
    home.href = '../index.html'; home.title = 'All 21 books';
    tb.insertBefore(home, tb.firstChild);

    var create = el('button', 'rmb-create', '<span aria-hidden="true">✚</span> <span class="lbl">Create</span>');
    create.type = 'button'; create.title = 'Create a DPP / assignment / question paper';
    create.addEventListener('click', openCreator);
    var theme = document.getElementById('themeBtn');
    if (theme && theme.parentNode === tb) tb.insertBefore(create, theme); else tb.appendChild(create);
  }
  function openCreator() {
    var fab = document.querySelector('.ws-fab');
    if (fab) { fab.click(); return; }
    // fallback: if the builder isn't ready yet, try the per-book global
    if (window.RMB_openCreator) window.RMB_openCreator();
  }

  /* ---- clickable tags → overlay ---- */
  function markTags() {
    document.querySelectorAll('.q-tags .tag').forEach(function (t) {
      var x = (t.textContent || '').trim();
      if (!/^Ch\b/.test(x)) t.classList.add('enh-tag');
    });
  }
  document.addEventListener('click', function (e) {
    var t = e.target.closest && e.target.closest('.q-tags .tag.enh-tag');
    if (!t) return;
    e.preventDefault();
    openTag((t.textContent || '').trim());
  });
  function openTag(tag) {
    var P = window.PROBLEMS || [];
    var low = tag.toLowerCase();
    var matches = P.filter(function (p) { return (p.tags || []).some(function (x) { return String(x).toLowerCase() === low; }); });
    var rows = matches.map(function (p) {
      return '<a class="enh-row" href="#/p/' + p._id + '">'
        + '<div class="er-t">' + esc(p.title || ('Problem ' + p._id)) + '</div>'
        + '<div class="er-m">' + esc(p.themeLabel || '') + ' · L' + (p.difficulty || 3) + '</div></a>';
    }).join('') || '<p class="enh-sub" style="padding:6px 12px 14px">No problems with this tag in this book.</p>';
    var ov = el('div', 'enh-modal',
      '<div class="enh-card"><button class="enh-x" aria-label="Close">×</button>'
      + '<h3>Tag · ' + esc(tag) + '</h3>'
      + '<p class="enh-sub">' + matches.length + ' problem' + (matches.length === 1 ? '' : 's') + ' in this book</p>'
      + '<div class="enh-list">' + rows + '</div></div>');
    function close() { ov.remove(); }
    ov.addEventListener('click', function (e) {
      if (e.target === ov || (e.target.closest && e.target.closest('.enh-x'))) { close(); return; }
      if (e.target.closest && e.target.closest('.enh-row')) setTimeout(close, 30);
    });
    document.addEventListener('keydown', function esc2(ev) { if (ev.key === 'Escape') { close(); document.removeEventListener('keydown', esc2); } });
    document.body.appendChild(ov);
  }

  /* ---- prominent, auto-scrolled solution reveal ---- */
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('.q-actions button');
    if (!b) return;
    var txt = (b.textContent || '').trim();
    if (!/solution/i.test(txt)) return;
    var card = b.closest('.q.card'); if (!card) return;
    setTimeout(function () {
      var reveals = card.querySelectorAll('.reveal');
      var sol = reveals[reveals.length - 1];
      if (sol && sol.classList.contains('open')) {
        if (!sol.querySelector('.enh-sol-label')) sol.insertBefore(el('div', 'enh-sol-label', 'Worked solution — all methods'), sol.firstChild);
        sol.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }, 50);
  });

  /* ===================== Phase 4: discovery / share / feedback ===================== */
  var FEEDBACK_EMAIL = 'vandanay2012@gmail.com';
  function bookSlug() { return (location.pathname.match(/([a-z0-9]+-masterbook)/) || [])[1] || 'masterbook'; }
  function pById() { var m = {}; (window.PROBLEMS || []).forEach(function (p) { m[p._id] = p; }); return m; }
  function toast(msg) { var t = el('div', 'enh-toast', esc(msg)); document.body.appendChild(t); requestAnimationFrame(function () { t.classList.add('go'); }); setTimeout(function () { t.classList.remove('go'); setTimeout(function () { t.remove(); }, 300); }, 2000); }
  function copyText(t) { if (navigator.clipboard && navigator.clipboard.writeText) return navigator.clipboard.writeText(t); try { var ta = document.createElement('textarea'); ta.value = t; ta.style.position = 'fixed'; ta.style.opacity = '0'; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove(); return Promise.resolve(); } catch (e) { return Promise.reject(e); } }
  function shareLink(id) { return location.origin + location.pathname + '#/p/' + id; }
  function similarTo(p) {
    var tags = p.tags || []; if (!tags.length) return [];
    var scored = (window.PROBLEMS || []).filter(function (q) { return q._id !== p._id; }).map(function (q) {
      return { q: q, s: (q.tags || []).filter(function (t) { return tags.indexOf(t) >= 0; }).length };
    }).filter(function (o) { return o.s > 0; });
    scored.sort(function (a, b) { return b.s - a.s || a.q._id - b.q._id; });
    return scored.slice(0, 5).map(function (o) { return o.q; });
  }

  function enhanceCard(card) {
    if (card.__enh) return; var id = parseInt((card.id || '').replace(/^q/, ''), 10); if (!id) return;
    var p = pById()[id]; if (!p) return; card.__enh = true;
    var foot = el('div', 'enh-foot',
      '<button class="enh-act" data-act="similar">↪ More like this</button>'
      + '<button class="enh-act" data-act="share">⤴ Share</button>'
      + '<button class="enh-act" data-act="qr">▦ QR</button>'
      + '<button class="enh-act enh-rep" data-act="report">⚐ Report an error</button>');
    foot.addEventListener('click', function (e) {
      var b = e.target.closest('.enh-act'); if (!b) return; var act = b.getAttribute('data-act');
      if (act === 'similar') openSimilar(p);
      else if (act === 'share') copyText(shareLink(id)).then(function () { toast('Link copied to clipboard'); }).catch(function () { prompt('Copy this link:', shareLink(id)); });
      else if (act === 'qr') showQR(shareLink(id));
      else if (act === 'report') reportError(p);
    });
    card.appendChild(foot);
  }
  function enhanceCards() { document.querySelectorAll('.q.card').forEach(enhanceCard); }

  function openSimilar(p) {
    var sim = similarTo(p);
    var rows = sim.map(function (q) {
      var shared = (q.tags || []).filter(function (t) { return (p.tags || []).indexOf(t) >= 0; }).length;
      return '<a class="enh-row" href="#/p/' + q._id + '"><div class="er-t">' + esc(q.title || ('Problem ' + q._id)) + '</div><div class="er-m">' + esc(q.themeLabel || '') + ' · L' + (q.difficulty || 3) + ' · shares ' + shared + ' tag' + (shared === 1 ? '' : 's') + '</div></a>';
    }).join('') || '<p class="enh-sub" style="padding:6px 12px 14px">No closely related problems found.</p>';
    var ov = el('div', 'enh-modal', '<div class="enh-card"><button class="enh-x" aria-label="Close">×</button><h3>More like this</h3><p class="enh-sub">Closest problems by shared concepts</p><div class="enh-list">' + rows + '</div></div>');
    ov.addEventListener('click', function (e) { if (e.target === ov || (e.target.closest && e.target.closest('.enh-x'))) { ov.remove(); return; } if (e.target.closest && e.target.closest('.enh-row')) setTimeout(function () { ov.remove(); }, 30); });
    document.body.appendChild(ov);
  }

  function reportError(p) {
    var slug = bookSlug();
    sendFeedback({ kind: 'report', book: slug, problem_id: p._id, title: p.title || '', link: shareLink(p._id) },
      'Error report — ' + slug + ' #' + p._id,
      'Book: ' + slug + '\nProblem #' + p._id + ': ' + (p.title || '') + '\nLink: ' + shareLink(p._id) + '\n\nWhat looks wrong?\n');
  }
  function sendFeedback(payload, subject, body) {
    var ep = window.RMB_FEEDBACK_ENDPOINT || '';
    if (ep) { try { fetch(ep, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload), keepalive: true }).catch(function () {}); toast('Thank you — sent'); return; } catch (e) {} }
    location.href = 'mailto:' + FEEDBACK_EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body || '');
  }

  /* QR — lazy-load a tiny generator (same CDN as KaTeX); graceful fallback to copy */
  function showQR(text) {
    function render() {
      try {
        var q = window.qrcode(0, 'M'); q.addData(text); q.make();
        var ov = el('div', 'enh-modal enh-qr', '<div class="enh-card enh-qrcard"><button class="enh-x" aria-label="Close">×</button><h3>Scan to open</h3><div class="enh-qrimg">' + q.createImgTag(5, 10) + '</div><p class="enh-sub" style="text-align:center;padding:0 0 16px;word-break:break-all">' + esc(text) + '</p></div>');
        ov.addEventListener('click', function (e) { if (e.target === ov || (e.target.closest && e.target.closest('.enh-x'))) ov.remove(); });
        document.body.appendChild(ov);
      } catch (e) { copyText(text).then(function () { toast('Link copied'); }); }
    }
    if (window.qrcode) { render(); return; }
    var s = document.createElement('script'); s.src = 'https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.js';
    s.onload = render; s.onerror = function () { copyText(text).then(function () { toast('QR unavailable — link copied'); }); };
    document.head.appendChild(s);
  }

  /* general feedback link in the sidebar footer */
  function addFeedbackLink() {
    var foot = document.querySelector('.sidebar-foot'); if (!foot || foot.querySelector('.enh-fblink')) return;
    var a = el('a', 'enh-fblink', '✍ Feedback / report an error'); a.href = '#';
    a.addEventListener('click', function (e) { e.preventDefault(); sendFeedback({ kind: 'feedback', book: bookSlug() }, 'Masterbooks feedback — ' + bookSlug(), 'Book: ' + bookSlug() + '\n\nYour feedback:\n'); });
    foot.appendChild(a);
  }

  /* PWA: register the shared service worker (offline) */
  function registerSW() { if ('serviceWorker' in navigator) { try { navigator.serviceWorker.register('../sw.js'); } catch (e) {} } }

  /* ---- boot ---- */
  function boot() {
    buildTopbar(); markTags(); enhanceCards(); addFeedbackLink();
    var v = document.getElementById('view') || document.body;
    new MutationObserver(function () { markTags(); enhanceCards(); }).observe(v, { childList: true, subtree: true });
    registerSW();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
