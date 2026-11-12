/* "Beyond Tech" toggles (creative work, running, photography). */
(function(){
  'use strict';
  var btns=[].slice.call(document.querySelectorAll('.dlogo'));
  function setState(b,open){
    var l=document.getElementById(b.getAttribute('aria-controls'));
    var name=b.parentNode.querySelector('h3').textContent;
    l.hidden=!open;
    b.setAttribute('aria-expanded',open?'true':'false');
    b.setAttribute('aria-label',(open?'Hide ':'Show ')+name);
  }
  btns.forEach(function(b){
    b.addEventListener('click',function(){
      var willOpen=b.getAttribute('aria-expanded')!=='true';
      btns.forEach(function(o){setState(o,false)});
      if(willOpen)setState(b,true);
    });
  });
})();
