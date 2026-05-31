window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
});

function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');

  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const navEl = document.getElementById('nav-' + name);
  if (navEl) navEl.classList.add('active');

  document.querySelectorAll('.mobile-menu a').forEach(a => a.classList.remove('active'));
  const mEl = document.getElementById('mnav-' + name);
  if (mEl) mEl.classList.add('active');

  window.scrollTo({top:0, behavior:'smooth'});
  setTimeout(initReveal, 100);
}
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.toggle('open');
});
function closeMobile(){document.getElementById('mobileMenu').classList.remove('open');}
function showToast(){
  const t=document.getElementById('toast');
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),3500);
}
document.addEventListener('click', e => {
  if(e.target.classList.contains('like-btn')){
    const btn=e.target;
    const count=parseInt(btn.dataset.count);
    if(btn.classList.contains('liked')){
      btn.dataset.count=count-1;
      btn.textContent='❤️ '+(count-1);
      btn.classList.remove('liked');
    } else {
      btn.dataset.count=count+1;
      btn.textContent='❤️ '+(count+1);
      btn.classList.add('liked');
    }
  }
});
function initReveal(){
  const els=document.querySelectorAll('.reveal:not(.visible)');
  const obs=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}
    });
  },{threshold:0.1,rootMargin:'0px 0px -40px 0px'});
  els.forEach(el=>obs.observe(el));
}
initReveal();
window.addEventListener('scroll',initReveal);

const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX+'px'; cursor.style.top = e.clientY+'px';
  cursorRing.style.left = e.clientX+'px'; cursorRing.style.top = e.clientY+'px';
});
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
});

function showPage(name) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');

  // Desktop nav — remove active from all, then set on current
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const navEl = document.getElementById('nav-' + name);
  if (navEl) navEl.classList.add('active');

  // Mobile nav — remove active from all, then set on current
  document.querySelectorAll('.mobile-menu a').forEach(a => a.classList.remove('active'));
  const mEl = document.getElementById('mnav-' + name);
  if (mEl) mEl.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });
  setTimeout(initReveal, 100);
}
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.toggle('open');
});
function closeMobile(){document.getElementById('mobileMenu').classList.remove('open');}
function showToast(){
  const t=document.getElementById('toast'); t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),3500);
}
document.addEventListener('click', e => {
  if(e.target.classList.contains('like-btn')){
    const btn=e.target; const count=parseInt(btn.dataset.count);
    if(btn.classList.contains('liked')){btn.dataset.count=count-1;btn.textContent='❤️ '+(count-1);btn.classList.remove('liked');}
    else{btn.dataset.count=count+1;btn.textContent='❤️ '+(count+1);btn.classList.add('liked');}
  }
});
function initReveal(){
  const els=document.querySelectorAll('.reveal:not(.visible)');
  const obs=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}});
  },{threshold:0.1,rootMargin:'0px 0px -40px 0px'});
  els.forEach(el=>obs.observe(el));
}
initReveal();
