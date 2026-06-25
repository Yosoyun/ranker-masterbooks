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

  /* ---- boot ---- */
  function boot() {
    buildTopbar(); markTags();
    var v = document.getElementById('view') || document.body;
    new MutationObserver(markTags).observe(v, { childList: true, subtree: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
