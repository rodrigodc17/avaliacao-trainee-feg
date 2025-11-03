
// Smooth scroll for internal links (if anchors are added)
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}); }
  });
});

// Reveal on scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.transition = 'transform .7s ease, opacity .7s ease';
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'none';
      io.unobserve(entry.target);
    }
  });
},{threshold:0.14});
document.querySelectorAll('.fade-up, .reveal').forEach(el => io.observe(el));
