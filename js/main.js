// Замінити цей виклик функції на 'DOMContentLoaded' під час інтеграції
['DOMContentLoaded', 'includesLoaded'].forEach(evt => {
  document.addEventListener(evt, () => {  // прибрати під час інтеграції

    // document.addEventListener('DOMContentLoaded', function () {  //Додати під час інтеграції
    // ***********************************************************

    // Preloader
    const preloader = document.querySelector('.page_preloader');
    if (!preloader) return;

    // Ховаємо після повного завантаження сторінки
    window.addEventListener('load', () => {
      preloader.classList.add('is_hidden');
    });

    // Фікс для Safari / back-forward cache
    window.addEventListener('pageshow', (event) => {
      if (event.persisted) {
        preloader.classList.add('is_hidden');
      }
    });

    // Burger menu
    const burger = document.querySelector('.menu_burger');
    const headerMenu = document.querySelector('.header_menu');

    if (burger) {
      burger.addEventListener('click', function () {
        burger.classList.toggle('active');
        headerMenu.classList.toggle('active');
        document.body.classList.toggle('lock');
        document.documentElement.classList.toggle('lock');
      });
    }

    // Anchor to top
    const backToTopBtn = document.getElementById('js-backToTop');
    const scrollThreshold = 200;

    function handleScroll() {
      if (window.scrollY > scrollThreshold) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }

    window.addEventListener('scroll', handleScroll);
    backToTopBtn.addEventListener('click', scrollToTop);


    //  Scroll effects (header change)
    function initHeaderScroll() {
      const header = document.querySelector('.header');

      if (!header) return;

      window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
          header.classList.remove('no-scroll');
        } else {
          header.classList.add('no-scroll');
        }
      });
    }

    initHeaderScroll();

    // Slider in front page
    // const homeSwiper = new Swiper('.home_slider', {
    //   navigation: {
    //     nextEl: '.swiper_button_next.arrow',
    //     prevEl: '.swiper_button_prev.arrow',
    //   },
    //   keyboard: {
    //     enabled: true,
    //     onlyInViewport: true,
    //     pageUpDown: true,
    //   },
    //   slidesPerView: 1,
    //   spaceBetween: 30,
    //   watchOverflow: true,
    // });

    // Fade for blocks
    const sections = document.querySelectorAll('.fade');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {

        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));

    // Popup+overlay
    const popupBtn = document.querySelector('.btn_popup');
    const overlay = document.querySelector('.overlay');
    const closeBtn = document.querySelector('.popup_close');

    // Popup
    if (popupBtn) {
      popupBtn.addEventListener('click', () => {
        overlay.classList.add('open');
        lockScroll();
      });

      closeBtn.addEventListener('click', () => {
        overlay.classList.remove('open');
        unlockScroll();
      });

      overlay.addEventListener('click', e => {
        if (e.target === overlay) overlay.classList.remove('open');
      });
    }

    // Delegation
    document.body.addEventListener('click', onBodyClick);

    // ***************************************************
  }); // прибрати після зміни функції на 'DOMContentLoaded' під час інтеграції
  // ***********************************
});

// 1. Оголошуємо функцію-обробник
function onBodyClick(event) {
  // event.target — елемент, по якому натиснули
  console.log('Клік зафіксовано на:', event.target);

  // приклад делегування: відкриття/закриття деталей замовлення
  // const toggleBtn = event.target.closest('.account_order_show_btn');
  // if (toggleBtn) {
  //   const isDesktop = window.innerWidth >= 767;
  //   const container = isDesktop
  //     ? toggleBtn.closest('.account_order_row')
  //     : toggleBtn.closest('.account_order_item');

  //   if (!container) return;

  //   const details = container.querySelector('.account_order_item_details');
  //   toggleBtn.classList.toggle('open');
  //   container.classList.toggle('open');
  //   if (details) details.classList.toggle('open');
  // }

  // сюди можна додати інші перевірки/обробники по тому ж принципу
}

// 2. Прив’язуємо обробник до <body>
document.body.addEventListener('click', onBodyClick);

// Document body lock scroll
function lockScroll() {
  document.body.classList.add('lock')
  document.documentElement.classList.add('lock')
}

function unlockScroll() {
  document.body.classList.remove('lock')
  document.documentElement.classList.remove('lock')
}

// Accordion
document.addEventListener('DOMContentLoaded', () => {
  const accordionItems = document.querySelectorAll('.accordion_item');

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion_header');
    const body = item.querySelector('.accordion_body');

    if (!header || !body) return;

    header.addEventListener('click', (e) => {
      // const isOpen = body.classList.contains('open');

      body.classList.toggle('open');
      header.classList.toggle('active');

      // закриваємо всі інші
      // accordionItems.forEach(otherItem => {
      //   const otherBody = otherItem.querySelector('.accordion_body');
      //   const otherHeader = otherItem.querySelector('.accordion_header');

      //   otherBody?.classList.remove('open');
      //   otherHeader?.classList.remove('active');
      // });

      // відкриваємо тільки потрібний
      // if (!isOpen) {
      //   body.classList.add('open');
      //   header.classList.add('active');
      // }
    });
  });
});