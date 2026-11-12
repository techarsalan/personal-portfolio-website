/* Photo / poster viewer with keyboard support and focus trap. */
(function(){
  'use strict';
  var lb=document.getElementById('lb'),im=document.getElementById('lb-img'),cap=document.getElementById('lb-cap');
  var all=[].slice.call(document.querySelectorAll('.pimg')),tiles=[],cur=0,last=null;
  function title(t){var f=t.parentNode.querySelector('figcaption');var r=f.querySelector('.rt');return (r?r.textContent:f.textContent).replace(/\s+/g,' ').trim()}
  function show(i){cur=(i+tiles.length)%tiles.length;var t=tiles[cur].querySelector('img');im.src=t.getAttribute('src');im.alt=t.alt;cap.textContent=title(tiles[cur])+'  ·  '+(cur+1)+' / '+tiles.length}
  function open(t){last=document.activeElement;var g=t.closest('.entry-body');tiles=all.filter(function(x){return x.closest('.entry-body')===g});show(tiles.indexOf(t));lb.hidden=false;document.body.style.overflow='hidden';lb.querySelector('.lb-close').focus()}
  function close(){lb.hidden=true;document.body.style.overflow='';if(last)last.focus()}
  all.forEach(function(t){
    t.addEventListener('click',function(){open(t)});
  });
  lb.querySelector('.lb-close').addEventListener('click',close);
  lb.querySelector('.lb-prev').addEventListener('click',function(e){e.stopPropagation();show(cur-1)});
  lb.querySelector('.lb-next').addEventListener('click',function(e){e.stopPropagation();show(cur+1)});
  lb.addEventListener('click',function(e){if(e.target===lb||e.target===im)close()});
  document.addEventListener('keydown',function(e){
    if(lb.hidden)return;
    if(e.key==='Escape')close();else if(e.key==='ArrowLeft')show(cur-1);else if(e.key==='ArrowRight')show(cur+1);
    else if(e.key==='Tab'){var f=[].slice.call(lb.querySelectorAll('button')),i=f.indexOf(document.activeElement);e.preventDefault();f[(i+(e.shiftKey?-1:1)+f.length)%f.length].focus()}
  });
})();
