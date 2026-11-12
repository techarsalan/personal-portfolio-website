/* Scroll reveal for sections and the reading progress bar. */
(function(){
  'use strict';
  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var sel=['section.s > .wrap > h2','section.s > .wrap > .intro','.work-head','.card','.exp','.proj','.entry','.pcard','.dcard','.sel','#about .lede','.about-fig','.cs-meta','.cs-sec','.cs-card','.cs-cta','.svc','.svc-gh','.svc-cta','.run-lead','.run-total','footer .wrap'].join(',');
  var els=[].slice.call(document.querySelectorAll(sel)).filter(function(e){return !e.closest('.how')&&!e.closest('.hero')});
  els.forEach(function(el){
    var sibs=[].slice.call(el.parentNode.children).filter(function(n){return n.className===el.className});
    var i=Math.max(0,sibs.indexOf(el));
    el.style.setProperty('--rd',((i%4)*0.09)+'s');
    el.classList.add('rv');
  });
  if(reduce||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')})}
  else{
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}});
    },{threshold:.12,rootMargin:'0px 0px -6% 0px'});
    els.forEach(function(e){io.observe(e)});
    setTimeout(function(){els.forEach(function(e){if(!e.classList.contains('in')){var r=e.getBoundingClientRect();if(r.top<window.innerHeight&&r.bottom>0)e.classList.add('in')}})},1500);
  }
  var bar=document.getElementById('progress'),nav=document.querySelector('header.nav'),tick=false;
  function upd(){
    tick=false;
    var h=document.documentElement.scrollHeight-window.innerHeight,y=window.scrollY||0;
    if(bar)bar.style.transform='scaleX('+(h>0?Math.min(1,y/h):0)+')';
    if(nav)nav.classList.toggle('scrolled',y>8);
  }
  window.addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(upd)}},{passive:true});
  window.addEventListener('resize',upd);upd();
})();
