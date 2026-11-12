/* Light / dark theme toggle. */
(function(){
  'use strict';var r=document.documentElement,bs=[].slice.call(document.querySelectorAll('.tt'));
function sync(){var d=r.getAttribute('data-theme')==='dark';bs.forEach(function(b){b.setAttribute('aria-pressed',d);b.setAttribute('aria-label',d?'Switch to light mode':'Switch to dark mode')})}
bs.forEach(function(b){b.addEventListener('click',function(){var n=r.getAttribute('data-theme')==='dark'?'light':'dark';r.classList.add('theme-anim');r.setAttribute('data-theme',n);try{localStorage.setItem('theme',n)}catch(e){}sync();setTimeout(function(){r.classList.remove('theme-anim')},450)})});
if(window.matchMedia){var mq=matchMedia('(prefers-color-scheme: dark)');if(mq.addEventListener)mq.addEventListener('change',function(e){try{if(localStorage.getItem('theme'))return}catch(x){}r.setAttribute('data-theme',e.matches?'dark':'light');sync()})}
sync()})();
