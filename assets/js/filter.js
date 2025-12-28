(function(){
  const q = document.querySelector('[data-filter-input]');
  if(!q) return;
  const items = Array.from(document.querySelectorAll('[data-filter-item]'));
  q.addEventListener('input', () => {
    const v = q.value.trim().toLowerCase();
    for (const el of items){
      const hay = (el.getAttribute('data-filter-hay') || '').toLowerCase();
      el.style.display = (!v || hay.includes(v)) ? '' : 'none';
    }
  });
})();
