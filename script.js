
function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tab-menu li');
  const tabContent = document.querySelectorAll('.js-tab-content section');
  
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');

    function activeTab(index){
      tabContent.forEach((section) => {section.classList.remove('ativo')})
      
      tabContent[index].classList.add('ativo');
    }
    
    tabMenu.forEach((li, index) => {
      li.addEventListener('click', () => {
        activeTab(index);
      })
    })
  }
}

function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const ativoClass = 'ativo';

  accordionList[0].classList.add(ativoClass);
  accordionList[0].nextElementSibling.classList.add(ativoClass);
  
  function activeAccordion() {

    this.classList.toggle(ativoClass);
    this.nextElementSibling.classList.toggle(ativoClass);
  }

  accordionList.forEach((dt) => {
    dt.addEventListener('click', activeAccordion)
  })
}

function initScrollToSection() {
  const linksInterno = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(e) {
    e.preventDefault();

    const href = e.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    //forma alternativa
    /* window.scrollTo({
      top: topo,
      behavior: 'smooth'
    }); */


  }

  linksInterno.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  })
}

function initScrollSuave() {
  const sections = document.querySelectorAll('.js-scroll');

  if (!sections.length) {
    return;
  }

  const windowMetade = window.innerHeight * 0.6

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - windowMetade) < 0;

      if (isSectionVisible) {
        section.classList.add('ativo');
      }
    })
  }

  window.addEventListener('scroll', animaScroll)

  animaScroll();
}

initTabNav();
initAccordion();
initScrollToSection();
initScrollSuave();