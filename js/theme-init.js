/* Runs before first paint: sets the "js" class and the saved / preferred theme to avoid a flash. */
(function(){var r=document.documentElement;r.classList.add('js');var t;try{t=localStorage.getItem('theme')}catch(e){}if(t!=='dark'&&t!=='light')t=window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';r.setAttribute('data-theme',t)})()
