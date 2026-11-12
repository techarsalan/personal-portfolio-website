/* Highlights the current section in the top navigation. */
(function(){
  'use strict';
  var links=[].slice.call(document.querySelectorAll('.navlinks a[href^="#"]')),ids=links.map(function(a){return a.getAttribute('href').slice(1)}),tick=false;
  function set(id){links.forEach(function(a){if(a.getAttribute('href')==='#'+id)a.setAttribute('aria-current','true');else a.removeAttribute('aria-current')})}
  function upd(){tick=false;var line=window.innerHeight*.35,cur=ids[0];
    ids.forEach(function(id){var el=document.getElementById(id);if(el&&el.getBoundingClientRect().top<=line)cur=id});
    if(window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-4)cur=ids[ids.length-1];
    set(cur)}
  window.addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(upd)}},{passive:true});
  window.addEventListener('resize',upd);window.addEventListener('hashchange',upd);upd();
})();

/* Keeps the address bar clean: "#home" is dropped from the URL. */
(function(){
  'use strict';
  function clean(){if(location.hash==='#home'&&window.history&&history.replaceState)history.replaceState(null,'',location.pathname+location.search)}
  window.addEventListener('hashchange',clean);document.addEventListener('click',function(e){if(e.target.closest&&e.target.closest('a[href="#home"]'))setTimeout(clean,0)});clean();
})();
