/* ============================================================
   Ranker's Masterbooks — Worksheet / DPP builder (worksheet.js)
   Self-contained. Add to a book with:
     <script defer src="../worksheet.js"></script>
   Lets a teacher mix any chapters / problems, choose problems-only
   or with-solutions, and Save-as-PDF a premium, signed sheet.
   No backend. Renders math with per-segment KaTeX (bulletproof).
   ============================================================ */
(function () {
  'use strict';
  var SIGN = 'Indrajeet Yadav';

  function ready(fn){ if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn); else fn(); }
  function esc(s){ return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

  // ---- per-segment KaTeX (same robustness as the app) ----
  function tex(s){
    if (s == null) return '';
    var str = String(s).replace(/\\par\b\s*/g, '');
    var re = /\$\$([\s\S]+?)\$\$|\\\[([\s\S]+?)\\\]|\$([^$]+?)\$|\\\(([\s\S]+?)\\\)/g;
    function prose(t){ return esc(t).replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>').replace(//g,'<span class="pb"></span>'); }
    var out='', last=0, m;
    while((m=re.exec(str))){
      out += prose(str.slice(last,m.index));
      var t = m[1]!=null?m[1]:(m[2]!=null?m[2]:(m[3]!=null?m[3]:m[4]));
      var disp = (m[1]!=null||m[2]!=null);
      try { out += (window.katex ? katex.renderToString(t,{throwOnError:false,displayMode:disp}) : esc(t)); }
      catch(e){ out += '<code>'+esc(t)+'</code>'; }
      last = re.lastIndex;
    }
    out += prose(str.slice(last));
    return out;
  }

  // ---- chapters from window.PROBLEMS (first-appearance order) ----
  function chapters(){
    var P = window.PROBLEMS || [], order = [], map = {};
    P.forEach(function(p){ var t=p.theme||'misc'; if(!map[t]){ map[t]={key:t,label:p.themeLabel||t,problems:[]}; order.push(map[t]); } map[t].problems.push(p); });
    return order;
  }
  function bookName(){ var h=document.querySelector('.brand h1'); return (h?h.textContent:document.title.split('·')[0]||'').trim().replace(/\.$/,''); }
  function bookSub(){ var s=document.querySelector('.brand .sub'); return s?s.textContent.trim():''; }
  function accent(){
    var el=document.querySelector('.scorechip b, .open, .navgroup');
    try{ var c=getComputedStyle(document.documentElement).getPropertyValue('--accent')|| ''; if(c.trim()) return c.trim(); }catch(e){}
    return '#a4642a';
  }

  // ---- styles for the builder ----
  var css = ''
    + '.ws-fab{position:fixed;left:14px;bottom:14px;z-index:9000;cursor:pointer;border:1px solid rgba(128,128,128,.5);'
    +   'background:rgba(127,127,127,.14);backdrop-filter:blur(6px);color:inherit;font:600 12.5px/1 system-ui,Inter,sans-serif;'
    +   'padding:10px 14px;border-radius:999px;box-shadow:0 4px 14px rgba(0,0,0,.14);display:flex;gap:7px;align-items:center}'
    + '.ws-fab:hover{filter:brightness(1.08)}'
    + '.ws-modal{position:fixed;inset:0;z-index:9600;display:flex;align-items:center;justify-content:center;background:rgba(10,8,4,.55);backdrop-filter:blur(3px);font-family:system-ui,-apple-system,Inter,sans-serif}'
    + '.ws-card{background:#fffdf8;color:#1c1a16;width:min(620px,calc(100% - 28px));max-height:90vh;display:flex;flex-direction:column;border-radius:18px;box-shadow:0 24px 70px rgba(0,0,0,.4)}'
    + '@media(prefers-color-scheme:dark){.ws-card{background:#1c1a15;color:#efe8d8}}'
    + '.ws-hd{padding:20px 22px 12px;border-bottom:1px solid rgba(128,128,128,.18)}'
    + '.ws-hd h3{margin:0;font:800 20px/1.2 Georgia,serif}.ws-hd p{margin:4px 0 0;opacity:.7;font-size:13px}'
    + '.ws-bd{padding:14px 22px;overflow:auto}'
    + '.ws-ft{padding:14px 22px;border-top:1px solid rgba(128,128,128,.18);display:flex;gap:10px;align-items:center}'
    + '.ws-row{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:10px}'
    + '.ws-row>label{flex:1;min-width:200px}'
    + 'label.ws-lab{display:block;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;opacity:.6;margin:8px 0 4px}'
    + '.ws-card input[type=text],.ws-card textarea{width:100%;box-sizing:border-box;font:inherit;font-size:14px;padding:9px 11px;border:1px solid rgba(128,128,128,.4);border-radius:9px;background:transparent;color:inherit}'
    + '.ws-seg{display:inline-flex;border:1px solid rgba(128,128,128,.4);border-radius:9px;overflow:hidden}'
    + '.ws-seg button{font:600 13px system-ui;padding:8px 14px;border:0;background:transparent;color:inherit;cursor:pointer;opacity:.6}'
    + '.ws-seg button.on{background:#a4642a;color:#fff;opacity:1}'
    + '.ws-ch{border:1px solid rgba(128,128,128,.2);border-radius:11px;margin:7px 0;overflow:hidden}'
    + '.ws-ch>.h{display:flex;align-items:center;gap:9px;padding:9px 12px;cursor:pointer}'
    + '.ws-ch>.h:hover{background:rgba(164,100,42,.07)}'
    + '.ws-ch .nm{font-weight:700;font-size:14px;flex:1}.ws-ch .ct{font-size:12px;opacity:.6}'
    + '.ws-ch .exp{font-size:12px;opacity:.55;cursor:pointer;padding:2px 6px;border-radius:6px}'
    + '.ws-ch .exp:hover{background:rgba(128,128,128,.15)}'
    + '.ws-plist{display:none;padding:2px 12px 10px 38px}'
    + '.ws-plist.open{display:block}'
    + '.ws-plist label{display:flex;gap:8px;align-items:flex-start;padding:4px 0;font-size:13px;cursor:pointer;opacity:.9}'
    + '.ws-cb{width:17px;height:17px;accent-color:#a4642a;cursor:pointer;flex:0 0 auto;margin-top:1px}'
    + '.ws-btn{cursor:pointer;border:0;border-radius:10px;padding:11px 18px;font:700 14px system-ui;color:#fff;background:#a4642a}'
    + '.ws-btn.ghost{background:rgba(128,128,128,.18);color:inherit}'
    + '.ws-count{flex:1;font-size:13px;opacity:.75}';
  function injectCss(){ if(document.getElementById('ws-css')) return; var st=document.createElement('style'); st.id='ws-css'; st.textContent=css.replace(/#a4642a/g, accent()||'#a4642a'); document.head.appendChild(st); }

  // ---- state ----
  var picked = {};   // problem _id -> true

  function open(){
    injectCss();
    var chs = chapters();
    var ov = document.createElement('div'); ov.className='ws-modal';
    var rows = chs.map(function(c,ci){
      var pl = c.problems.map(function(p){
        return '<label><input type="checkbox" class="ws-cb" data-pid="'+p._id+'" '+(picked[p._id]?'checked':'')+'>'
          + '<span>№'+p._id+' · '+esc(p.title||'Untitled')+' <span style="opacity:.5">· L'+(p.difficulty||'')+'</span></span></label>';
      }).join('');
      return '<div class="ws-ch" data-ci="'+ci+'">'
        + '<div class="h"><input type="checkbox" class="ws-cb ws-all" data-ci="'+ci+'"><span class="nm">'+esc(c.label)+'</span>'
        + '<span class="ct">'+c.problems.length+' problems</span><span class="exp" data-ci="'+ci+'">select problems ▾</span></div>'
        + '<div class="ws-plist" data-ci="'+ci+'">'+pl+'</div></div>';
    }).join('');
    ov.innerHTML = '<div class="ws-card">'
      + '<div class="ws-hd"><h3>Build a worksheet</h3><p>Mix any chapters or pick individual problems — then Save as PDF. '+esc(bookName())+'.</p></div>'
      + '<div class="ws-bd">'
      +   '<div class="ws-row"><label><span class="ws-lab">Worksheet title</span><input type="text" id="ws-title" placeholder="e.g. DPP — '+esc(bookName())+' · Practice Set 1"></label></div>'
      +   '<label class="ws-lab">Instructions (optional)</label><textarea id="ws-ins" rows="2" placeholder="e.g. Attempt all questions. Time: 60 min."></textarea>'
      +   '<label class="ws-lab">Include</label><div class="ws-seg" id="ws-mode"><button data-m="problems" class="on">Problems only</button><button data-m="solutions">With solutions</button></div>'
      +   '<label class="ws-lab">Choose chapters &amp; problems</label>'
      +   '<div style="margin-bottom:8px"><button class="ws-btn ghost" id="ws-selall" style="padding:6px 12px;font-size:12px">Select all</button> <button class="ws-btn ghost" id="ws-clr" style="padding:6px 12px;font-size:12px">Clear</button></div>'
      +   rows
      + '</div>'
      + '<div class="ws-ft"><span class="ws-count" id="ws-count">0 problems selected</span>'
      +   '<button class="ws-btn ghost" id="ws-cancel">Cancel</button><button class="ws-btn" id="ws-gen">Generate &amp; print →</button></div>'
      + '</div>';
    document.body.appendChild(ov);
    var mode='problems';
    function refresh(){
      var n=Object.keys(picked).length; ov.querySelector('#ws-count').textContent = n+' problem'+(n===1?'':'s')+' selected';
      // sync chapter "all" boxes
      chs.forEach(function(c,ci){ var all=c.problems.every(function(p){return picked[p._id];}); var box=ov.querySelector('.ws-all[data-ci="'+ci+'"]'); if(box) box.checked = all && c.problems.length>0; });
    }
    ov.addEventListener('click', function(e){ if(e.target===ov) ov.remove(); });
    ov.querySelector('#ws-cancel').onclick=function(){ ov.remove(); };
    ov.querySelectorAll('#ws-mode button').forEach(function(b){ b.onclick=function(){ ov.querySelectorAll('#ws-mode button').forEach(function(x){x.classList.remove('on');}); b.classList.add('on'); mode=b.getAttribute('data-m'); }; });
    ov.querySelectorAll('.exp').forEach(function(x){ x.onclick=function(){ var pl=ov.querySelector('.ws-plist[data-ci="'+x.getAttribute('data-ci')+'"]'); pl.classList.toggle('open'); x.textContent = pl.classList.contains('open')?'hide problems ▴':'select problems ▾'; }; });
    ov.querySelectorAll('.ws-all').forEach(function(b){ b.onclick=function(){ var ci=+b.getAttribute('data-ci'); chs[ci].problems.forEach(function(p){ if(b.checked) picked[p._id]=true; else delete picked[p._id]; }); ov.querySelectorAll('.ws-cb[data-pid]').forEach(function(cb){ var pid=+cb.getAttribute('data-pid'); cb.checked=!!picked[pid]; }); refresh(); }; });
    ov.querySelectorAll('.ws-cb[data-pid]').forEach(function(cb){ cb.onclick=function(){ var pid=+cb.getAttribute('data-pid'); if(cb.checked) picked[pid]=true; else delete picked[pid]; refresh(); }; });
    ov.querySelector('#ws-selall').onclick=function(){ (window.PROBLEMS||[]).forEach(function(p){ picked[p._id]=true; }); ov.querySelectorAll('.ws-cb').forEach(function(cb){ cb.checked=true; }); refresh(); };
    ov.querySelector('#ws-clr').onclick=function(){ picked={}; ov.querySelectorAll('.ws-cb').forEach(function(cb){ cb.checked=false; }); refresh(); };
    ov.querySelector('#ws-gen').onclick=function(){
      var ids=Object.keys(picked).map(Number); if(!ids.length){ alert('Select at least one problem.'); return; }
      var title=(ov.querySelector('#ws-title').value||('Worksheet — '+bookName())).trim();
      var ins=ov.querySelector('#ws-ins').value.trim();
      generate(title, ins, mode, ids); ov.remove();
    };
    refresh();
  }

  // ---- generate the premium print document ----
  function generate(title, ins, mode, ids){
    var P = window.PROBLEMS || [];
    var byId={}; P.forEach(function(p){ byId[p._id]=p; });
    var sel = ids.map(function(id){return byId[id];}).filter(Boolean).sort(function(a,b){return a._id-b._id;});
    var withSol = (mode==='solutions');
    var acc = accent()||'#a4642a';
    var d = new Date();
    var date = d.toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'});
    var parts = sel.map(function(p,i){
      var sol='';
      if(withSol){
        var methods=(p.solutions||[]).map(function(s){
          return '<div class="m"><div class="mn">'+esc(s.name||'Method')+'</div><ol>'+(s.steps||[]).map(function(st){return '<li>'+tex(st)+'</li>';}).join('')+'</ol></div>';
        }).join('');
        sol='<div class="sol"><div class="ans"><b>Answer.</b> '+tex(p.answer)+'</div>'
          + (p.trap?'<div class="trap"><b>The Trap.</b> '+tex(p.trap)+'</div>':'')
          + methods + (p.remark?'<div class="rem"><b>Insight.</b> '+tex(p.remark)+'</div>':'') + '</div>';
      }
      return '<div class="q"><div class="qh"><span class="qn">'+(i+1)+'.</span>'
        + '<span class="qt">'+esc(p.title||'')+'</span><span class="ql">L'+(p.difficulty||'')+'</span></div>'
        + '<div class="qtask">'+esc(p.task||'Solve')+'</div>'
        + '<div class="qbody">'+tex(p.statement)+'</div>'+sol+'</div>';
    }).join('');

    var html = '<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+esc(title)+'</title>'
      + '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css">'
      + '<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700;9..144,900&family=Newsreader:ital@0;1&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">'
      + '<style>'
      + '@page{size:A4;margin:18mm 16mm 20mm}'
      + '*{box-sizing:border-box}body{font-family:Inter,system-ui,sans-serif;color:#201c16;font-size:11pt;line-height:1.55;margin:0}'
      + '.katex{font-size:1.05em}.pb{display:block;height:.5em}'
      + '.wrap{max-width:760px;margin:0 auto;padding:8px}'
      + '.head{border-bottom:2.5px solid '+acc+';padding-bottom:12px;margin-bottom:6px;position:relative}'
      + '.kick{font:700 9pt/1 Inter;letter-spacing:.28em;text-transform:uppercase;color:'+acc+'}'
      + '.bk{font:500 italic 12pt/1.2 Newsreader,serif;color:#7a7060;margin-top:3px}'
      + '.ttl{font:900 23pt/1.1 Fraunces,Georgia,serif;margin:7px 0 2px}'
      + '.ins{font:italic 11pt/1.4 Newsreader,serif;color:#5a5346;margin-top:4px}'
      + '.meta{font:600 8.5pt/1 Inter;letter-spacing:.04em;color:#8b8474;margin-top:8px;text-transform:uppercase}'
      + '.q{padding:11px 0;border-bottom:1px solid #ece3d0;break-inside:avoid}'
      + '.qh{display:flex;align-items:baseline;gap:8px}'
      + '.qn{font:900 12pt Fraunces,serif;color:'+acc+'}'
      + '.qt{font:700 12pt Fraunces,serif;flex:1}'
      + '.ql{font:700 7.5pt Inter;letter-spacing:.06em;color:#8b8474}'
      + '.qtask{font:800 7.5pt Inter;letter-spacing:.13em;text-transform:uppercase;color:'+acc+';margin:3px 0 2px}'
      + '.qbody{margin-top:2px}'
      + '.sol{margin-top:8px;padding:9px 12px;background:#faf6ee;border-left:3px solid '+acc+';border-radius:6px;font-size:10.5pt}'
      + '.sol .ans{margin-bottom:4px}.sol .trap{color:#9a3a2a;margin-bottom:5px}.sol .rem{font-style:italic;color:#5a5346;margin-top:5px}'
      + '.sol .m{margin:5px 0}.sol .mn{font-weight:700;font-size:9.5pt;color:'+acc+'}'
      + '.sol ol{margin:3px 0 0;padding-left:20px}.sol li{margin:2px 0}'
      + '.sign{margin-top:18px;padding-top:10px;border-top:1px solid #ddd2bc;display:flex;justify-content:space-between;align-items:baseline;font-size:9pt;color:#8b8474}'
      + '.sign b{font:600 italic 12pt Newsreader,serif;color:#201c16}'
      + '@media print{.noprint{display:none}}'
      + '</style></head><body><div class="wrap">'
      + '<div class="head"><div class="kick">The Ranker’s Masterbook</div><div class="ttl">'+esc(title)+'</div>'
      +   '<div class="bk">'+esc(bookName())+(bookSub()?' · '+esc(bookSub()):'')+'</div>'
      +   (ins?'<div class="ins">'+esc(ins)+'</div>':'')
      +   '<div class="meta">'+sel.length+' question'+(sel.length===1?'':'s')+' · '+(withSol?'with full solutions':'problems only')+'</div></div>'
      + parts
      + '<div class="sign"><span>Compiled by <b>'+esc(SIGN)+'</b></span><span>'+esc(date)+'</span></div>'
      + '<div class="noprint" style="text-align:center;margin:22px 0"><button onclick="window.print()" style="font:600 14px Inter;padding:11px 22px;border:0;border-radius:10px;background:'+acc+';color:#fff;cursor:pointer">Save as PDF / Print</button></div>'
      + '</div></body></html>';

    var w = window.open('', '_blank');
    if(!w){ alert('Please allow pop-ups to generate the worksheet.'); return; }
    w.document.open(); w.document.write(html); w.document.close();
    w.onload = function(){ setTimeout(function(){ try{ w.print(); }catch(e){} }, 600); };
  }

  // ---- mount ----
  ready(function(){
    injectCss();
    var fab = document.createElement('button');
    fab.className='ws-fab'; fab.innerHTML='&#128196; Build a worksheet';
    fab.title='Mix chapters / problems → premium PDF';
    fab.onclick=open;
    document.body.appendChild(fab);
  });

  // expose for a per-chapter download button (app can call window.RMB_worksheet(chapterKey))
  window.RMB_worksheet = function(themeKey){
    injectCss();
    var P=window.PROBLEMS||[]; picked={};
    P.forEach(function(p){ if(p.theme===themeKey) picked[p._id]=true; });
    var lab=(P.find(function(p){return p.theme===themeKey;})||{}).themeLabel||themeKey;
    generate('DPP — '+lab, '', 'problems', Object.keys(picked).map(Number));
  };
})();
