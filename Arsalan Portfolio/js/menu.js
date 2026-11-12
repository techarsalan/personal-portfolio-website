/* Mobile menu: opens and closes the navigation panel. */
(function(){
  'use strict';
  var nav=document.querySelector('header.nav'),btn=nav&&nav.querySelector('.menu-btn');
  if(!btn)return;
  function set(open){
    nav.classList.toggle('open',open);
    btn.setAttribute('aria-expanded',open?'true':'false');
    btn.setAttribute('aria-label',open?'Close menu':'Open menu');
  }
  btn.addEventListener('click',function(){set(!nav.classList.contains('open'))});
  nav.addEventListener('click',function(e){if(e.target.closest('.navlinks a'))set(false)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&nav.classList.contains('open')){set(false);btn.focus()}});
  document.addEventListener('click',function(e){if(nav.classList.contains('open')&&!nav.contains(e.target))set(false)});
  window.addEventListener('resize',function(){if(window.innerWidth>820)set(false)});
})();
