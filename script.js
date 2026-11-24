const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');
const header = document.querySelector('.header');
function closeMenu(){menu.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Abrir menu');}
menuButton.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');});
menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
const whatsapp='https://wa.me/5589981506852';
const serviceDetails={
  suporte:{title:'Suporte técnico',intro:'Conte com uma equipe especializada para manter sua operação funcionando e resolver problemas de tecnologia com rapidez.',items:['Suporte técnico remoto e presencial','Diagnóstico de problemas e correções','Manutenção preventiva e corretiva','Relatórios de atendimento e acompanhamento']},
  infraestrutura:{title:'Infraestrutura e redes',intro:'Uma base de TI preparada para o trabalho, com conectividade, organização e segurança para sua empresa.',items:['Gestão de redes e conectividade','Instalação e configuração de equipamentos','Acompanhamento do ambiente de TI','Soluções personalizadas para sua estrutura']},
  monitoramento:{title:'Monitoramento e manutenção',intro:'Prevenção para sua empresa não parar: cuidamos do desempenho, da segurança e da vida útil dos seus equipamentos.',items:['Visitas programadas e diagnóstico de problemas','Manutenção preventiva, correções e ajustes','Suporte técnico especializado','Mais disponibilidade e menos custos inesperados']},
  computadores:{title:'Computadores e upgrades',intro:'Tecnologia para a sua empresa com orientação técnica para escolher, melhorar e manter seus equipamentos.',items:['Notebooks e computadores','Monitores e periféricos','SSDs e memórias','Peças, acessórios e instalação']},
  impressoras:{title:'Impressoras e suprimentos',intro:'Manutenção, suprimentos e equipamentos de impressão com suporte especializado para manter seu dia a dia confiável.',items:['Manutenção preventiva e corretiva','Limpeza e desentupimento de cabeçotes','Correção de falhas e alimentação de papel','Toners, tintas, kits e peças de reposição']},
  chat:{title:'ConectaChat',intro:'Automatize o atendimento, melhore o relacionamento com seus clientes e ganhe mais agilidade nos processos.',items:['Atendimento automatizado','Integração com WhatsApp','Respostas rápidas e personalizadas','Mais agilidade e redução de custos operacionais']}
};
const modal=document.querySelector('#service-modal');
const dialogTitle=document.querySelector('#service-modal-title');
const dialogIntro=document.querySelector('#service-modal-intro');
const dialogList=document.querySelector('#service-modal-list');
const dialogWhatsapp=document.querySelector('#service-modal-whatsapp');
let lastTrigger=null;
const serviceIds=['suporte','infraestrutura','monitoramento','computadores','impressoras','chat'];
document.querySelectorAll('.services .service').forEach((card,index)=>{card.dataset.serviceId=serviceIds[index];card.setAttribute('aria-haspopup','dialog');});
function openService(id,trigger){const data=serviceDetails[id];if(!data)return;lastTrigger=trigger;dialogTitle.textContent=data.title;dialogIntro.textContent=data.intro;dialogList.innerHTML=data.items.map(item=>'<li>'+item+'</li>').join('');dialogWhatsapp.href=whatsapp+'?text='+encodeURIComponent('Olá, Conecta! Gostaria de saber mais sobre '+data.title+'.');modal.hidden=false;modal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');requestAnimationFrame(()=>modal.classList.add('is-open'));modal.querySelector('.modal-close').focus();}
function closeService(){modal.classList.remove('is-open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');setTimeout(()=>{modal.hidden=true;if(lastTrigger)lastTrigger.focus();},180);}
document.querySelectorAll('.service-trigger,.services .service').forEach(card=>card.addEventListener('click',event=>{event.preventDefault();openService(card.dataset.serviceId,card);}));
modal.querySelectorAll('[data-modal-close]').forEach(element=>element.addEventListener('click',closeService));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&modal.classList.contains('is-open'))closeService();if(event.key==='Escape'&&menu.classList.contains('open')){closeMenu();menuButton.focus();}});
document.querySelectorAll('[data-contact]').forEach(link=>{link.href=whatsapp+'?text='+encodeURIComponent('Olá, Conecta! Vim pelo site e gostaria de conversar sobre uma solução de TI.');});
const revealItems=document.querySelectorAll('.section-heading,.service,.showcase-heading,.gallery-card,.instagram-cta,.about-art,.about-copy,.chat-panel,.faq-section,.contact');
revealItems.forEach((item,index)=>{item.classList.add('reveal');item.style.setProperty('--delay',(index%4)*70+'ms');});
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:.12});revealItems.forEach(item=>observer.observe(item));}else revealItems.forEach(item=>item.classList.add('is-visible'));
const syncHeader=()=>header.classList.toggle('scrolled',window.scrollY>12);
syncHeader();window.addEventListener('scroll',syncHeader,{passive:true});
document.querySelector('#year').textContent=new Date().getFullYear();
