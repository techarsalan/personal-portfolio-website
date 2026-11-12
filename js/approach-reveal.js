/* Scroll reveal for the approach section. */
(function(){
  'use strict';
/* Approach section reveal */

  var how=document.querySelector('.how');
  if(how){
    how.querySelectorAll('.step').forEach(function(s,i){
      s.style.setProperty('--d',(0.15+i*0.18)+'s');
      s.querySelectorAll('svg path,svg circle:not(.b):not(.t),svg rect:not(.t)').forEach(function(el){el.setAttribute('pathLength','1');el.classList.add('dr')});
    });
    if('IntersectionObserver' in window){
      var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){how.classList.add('in');io.disconnect()}})},{threshold:.18,rootMargin:'0px 0px -8% 0px'});
      io.observe(how);
    }else how.classList.add('in');
  }
})();
