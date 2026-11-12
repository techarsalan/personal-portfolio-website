/* Animated running track. */
(function(){
  'use strict';
  var btn=document.getElementById('running-toggle'),track=document.getElementById('track'),fill=document.getElementById('track-fill'),runner=document.getElementById('runner');
  if(!btn||!track)return;
  var marks=[].slice.call(track.querySelectorAll('.mk:not(.next)')),reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches,timers=[];
  function reset(){timers.forEach(clearTimeout);timers=[];track.classList.remove('go');marks.forEach(function(m){m.classList.remove('hit')});fill.style.transform='scaleX(0)';runner.style.left='0%'}
  function play(){
    reset();
    if(reduce){fill.style.transform='scaleX(1)';runner.style.left='50%';track.classList.add('go');marks.forEach(function(m){m.classList.add('hit')});return}
    void track.offsetWidth;
    track.classList.add('go');fill.style.transform='scaleX(1)';runner.style.left='50%';
    [11.85,23.7,50].forEach(function(p,i){timers.push(setTimeout(function(){marks[i].classList.add('hit')},1800*(p/50)*.95))});
  }
  btn.addEventListener('click',function(){if(btn.getAttribute('aria-expanded')==='true')play();else reset()});
  document.querySelectorAll('.dlogo').forEach(function(b){if(b!==btn)b.addEventListener('click',reset)});
})();
