/* Hash router: shows the case-study pages and the "All work" page. */
(function(){
  'use strict';
  var pages={'all-work':['case-all','All work'],'arrius-case-study':['case-arrius','Arrius Impex'],'iiisc-case-study':['case-iiisc','IIISC Delhi'],'rcc-erp-case-study':['case-rcc','RCC Developers ERP']},root=document.documentElement,title=document.title,was=false,prev='',from='';
    function route(){
    var key=location.hash.slice(1),pg=pages[key],on=!!pg;
    if(on&&key!=='all-work'&&prev==='all-work')from='all-work';
    if(!on||key==='all-work')from='';
    prev=key;
    document.querySelectorAll('.case-page:not(#case-all) .cs-bar .back,.case-page:not(#case-all) .cs-foot a').forEach(function(a){
      if(!a.dataset.t)a.dataset.t=a.textContent;
      a.setAttribute('href',from?'#all-work':'#projects');
      a.textContent=from?a.dataset.t.replace('portfolio','all work'):a.dataset.t;
    });
    root.classList.remove('case','case-all','case-arrius','case-iiisc','case-rcc');
    if(on)root.classList.add('case',pg[0]);
    document.title=on?pg[1]+' – Case study | Arsalan Ahmad':title;
    if(on)window.scrollTo(0,0);
    else if(was){var el=document.getElementById('projects');if(el)el.scrollIntoView();}
    was=on;
  }
  window.addEventListener('hashchange',route);route();
})();
