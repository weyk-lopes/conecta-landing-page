const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');
const header = document.querySelector('.header');
function closeMenu(){menu.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Abrir menu');}
menuButton.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');});
menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menu.classList.contains('open')){closeMenu();menuButton.focus();}});
document.querySelectorAll('[data-contact],[data-service]').forEach(link=>{const message=link.dataset.service ? 'Olá, Conecta! Gostaria de saber mais sobre '+link.dataset.service+'.' : 'Olá, Conecta! Vim pelo site e gostaria de conversar sobre uma solução de TI.';link.href='https://wa.me/5589981506852?text='+encodeURIComponent(message);});

const revealItems=document.querySelectorAll('.section-heading,.service,.about-art,.about-copy,.chat-panel,.faq-section,.contact');
revealItems.forEach(item=>item.classList.add('reveal'));
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:.12});revealItems.forEach(item=>observer.observe(item));}else revealItems.forEach(item=>item.classList.add('is-visible'));
const syncHeader=()=>header.classList.toggle('scrolled',window.scrollY>12);
syncHeader();window.addEventListener('scroll',syncHeader,{passive:true});
document.querySelector('#year').textContent=new Date().getFullYear();
