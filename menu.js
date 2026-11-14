(()=>{
  const b=document.querySelector('.menu-toggle'),n=document.getElementById('site-menu');
  if(b&&n){
    function close(focus){n.classList.remove('is-open');b.setAttribute('aria-expanded','false');if(focus)b.focus()}
    b.addEventListener('click',()=>{const open=b.getAttribute('aria-expanded')!=='true';b.setAttribute('aria-expanded',String(open));n.classList.toggle('is-open',open)});
    n.addEventListener('click',e=>{if(e.target.closest('a'))close(false)});
    document.addEventListener('keydown',e=>{if(e.key==='Escape')close(true)});
    document.addEventListener('click',e=>{if(!e.target.closest('.site-header'))close(false)});
    matchMedia('(min-width:981px)').addEventListener('change',()=>close(false));
  }
  document.querySelectorAll('.article-card').forEach(card=>{
    card.addEventListener('click',e=>{
      const link=card.querySelector('a');
      if(link && e.target!==link && !e.target.closest('a')){
        link.click();
      }
    });
  });
})();