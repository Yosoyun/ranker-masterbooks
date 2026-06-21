const katex=require('katex'); global.window={}; require(process.argv[2]);
const P=window.PROBLEMS; let e=[];
const rt=(t,m,c)=>{try{katex.renderToString(t,{displayMode:m,throwOnError:true,strict:false})}catch(x){e.push(c+': '+(x.message||x).split('\n')[0]+'  ← '+String(t).slice(0,60))}};
const delim=(s,c)=>{String(s).replace(/\$\$([\s\S]+?)\$\$/g,(m,g)=>{rt(g,1,c);return' '}).replace(/\\\[([\s\S]+?)\\\]/g,(m,g)=>{rt(g,1,c);return' '}).replace(/\$([^$]+?)\$/g,(m,g)=>{rt(g,0,c);return' '}).replace(/\\\(([\s\S]+?)\\\)/g,(m,g)=>{rt(g,0,c);return' '})};
const stmt=(s,c)=>{if(!s)return;s=String(s);if(/\$|\\\[|\\\(/.test(s))delim(s,c);else rt(s,1,c)};
P.forEach((p,i)=>{const id='#'+(i+1)+'('+p.theme+')';stmt(p.statement,id+'.stmt');stmt(p.answer,id+'.ans');delim(p.trap||'',id+'.trap');delim(p.remark||'',id+'.rem');(p.solutions||[]).forEach((s,si)=>(s.steps||[]).forEach(st=>delim(st||'',id+'.s'+(si+1))))});
console.log('problems:',P.length,'| KaTeX errors:',e.length);e.slice(0,25).forEach(x=>console.log('  '+x));
