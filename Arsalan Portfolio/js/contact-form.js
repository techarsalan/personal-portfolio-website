/* Contact form: validates, then opens a pre-filled email draft (mailto) addressed to the site owner. */
(function(){
  'use strict';
  var TO='arsalanjmi87@gmail.com';
  var form=document.getElementById('contact-form');
  if(!form)return;
  var status=document.getElementById('c-status');
  var btn=form.querySelector('.c-submit');
  var key=form.elements.access_key.value;
  var sending=false;
  var svc=form.elements.service;

  /* Pre-select the service when arriving from a service card (contact.html?service=erp-business). */
  (function(){
    if(!svc)return;
    var m=/[?&]service=([^&#]*)/.exec(location.search);
    if(!m)return;
    var key=decodeURIComponent(m[1]);
    [].forEach.call(svc.options,function(o){if(o.getAttribute('data-key')===key)svc.value=o.value});
  })();

  function say(msg,type){status.textContent=msg;status.className='c-status'+(type?' '+type:'')}

  function check(field){
    var wrap=field.closest('.c-field'),out=wrap.querySelector('.c-err'),msg='';
    if(field.validity.valueMissing)msg='This field is required.';
    else if(field.validity.typeMismatch)msg='Please enter a valid email address.';
    else if(field.validity.tooShort)msg='Please write at least '+field.minLength+' characters.';
    out.textContent=msg;wrap.classList.toggle('invalid',!!msg);
    field.setAttribute('aria-invalid',msg?'true':'false');
    return !msg;
  }
  [].forEach.call(form.querySelectorAll('input[name=name],input[name=email],textarea'),function(f){
    f.addEventListener('blur',function(){check(f)});
    f.addEventListener('input',function(){if(f.closest('.c-field').classList.contains('invalid'))check(f)});
  });

  function mailtoFallback(d){
    var body='Name: '+d.name+'\nEmail: '+d.email+'\nRegarding: '+d.service+'\n\n'+d.message;
    window.location.href='mailto:'+TO+'?subject='+encodeURIComponent('Portfolio enquiry: '+d.service)+'&body='+encodeURIComponent(body);
  }

  form.addEventListener('submit',function(e){
    e.preventDefault();
    if(sending)return;
    var fields=[].slice.call(form.querySelectorAll('input[name=name],input[name=email],textarea'));
    var valid=fields.map(check).every(Boolean);
    if(!valid){var bad=form.querySelector('.invalid input,.invalid textarea');if(bad)bad.focus();return}
    if(form.elements.botcheck.checked)return; /* bots */

    var data={name:form.elements.name.value.trim(),email:form.elements.email.value.trim(),message:form.elements.message.value.trim(),service:svc?svc.value:'General message'};

    /* Create an email draft in the visitor's mail app, addressed to me and pre-filled with their message. */
    say('Opening your email app with your message ready to send…','ok');
    mailtoFallback(data);
    setTimeout(function(){say('If nothing opened, please email me directly at '+TO+'.')},2500);
  });
})();
