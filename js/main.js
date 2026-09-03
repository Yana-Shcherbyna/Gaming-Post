function initHeaderControls() {
  const header = document.querySelector('.header');

  if (!header || header.dataset.controlsInitialized === 'true') return;

  const themeToggleBtn = header.querySelector('.header_settings_theme');
  const searchToggleBtn = header.querySelector('.header_search_toggle');
  const searchForm = header.querySelector('.header_search_form');
  const searchInput = header.querySelector('.header_search_input');

  if (!themeToggleBtn) return;

  header.dataset.controlsInitialized = 'true';

  const bodyElement = document.body;
  const menuToggleBtn = header.querySelector('.menu_burger');
  const mainMenu = header.querySelector('.header_menu');

  function setHeaderMenuOpen(shouldOpen) {
    if (!menuToggleBtn || !mainMenu) return;

    menuToggleBtn.classList.toggle('active', shouldOpen);
    mainMenu.classList.toggle('active', shouldOpen);
    menuToggleBtn.setAttribute('aria-expanded', String(shouldOpen));
    menuToggleBtn.setAttribute(
      'aria-label',
      shouldOpen ? 'Закрити меню' : 'Відкрити меню'
    );
    bodyElement.classList.toggle('lock', shouldOpen);
    document.documentElement.classList.toggle('lock', shouldOpen);
  }

  if (menuToggleBtn && mainMenu) {
    menuToggleBtn.addEventListener('click', () => {
      setHeaderMenuOpen(!mainMenu.classList.contains('active'));
    });

    mainMenu.addEventListener('click', event => {
      if (event.target.closest('.header_menu_link')) {
        setHeaderMenuOpen(false);
      }
    });

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && mainMenu.classList.contains('active')) {
        setHeaderMenuOpen(false);
        menuToggleBtn.focus();
      }
    });

    const desktopMenuQuery = window.matchMedia('(min-width: 1100px)');
    desktopMenuQuery.addEventListener('change', event => {
      if (event.matches) setHeaderMenuOpen(false);
    });
  }

  const storageKey = 'siteTheme';
  const availableThemes = ['light_theme', 'dark_theme'];

  function updateThemeButton(theme) {
    const isLightTheme = theme === 'light_theme';
    const label = isLightTheme
      ? 'Увімкнути темну тему'
      : 'Увімкнути світлу тему';

    themeToggleBtn.setAttribute('aria-pressed', String(isLightTheme));
    themeToggleBtn.setAttribute('aria-label', label);
    themeToggleBtn.setAttribute('title', label);
  }

  function applyTheme(theme) {
    const selectedTheme = availableThemes.includes(theme)
      ? theme
      : 'dark_theme';

    bodyElement.classList.remove(...availableThemes);
    bodyElement.classList.add(selectedTheme);
    updateThemeButton(selectedTheme);
  }

  function getSavedTheme() {
    try {
      return localStorage.getItem(storageKey);
    } catch (error) {
      return null;
    }
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem(storageKey, theme);
    } catch (error) {
      // The theme still changes when browser storage is unavailable.
    }
  }

  const initialTheme = getSavedTheme()
    || availableThemes.find(theme => bodyElement.classList.contains(theme))
    || 'dark_theme';

  applyTheme(initialTheme);

  themeToggleBtn.addEventListener('click', () => {
    const newTheme = bodyElement.classList.contains('dark_theme')
      ? 'light_theme'
      : 'dark_theme';

    applyTheme(newTheme);
    saveTheme(newTheme);
  });

  if (!searchToggleBtn || !searchForm || !searchInput) return;

  function closeHeaderSearch() {
    searchForm.hidden = true;
    header.classList.remove('header_search_open');
    searchToggleBtn.setAttribute('aria-expanded', 'false');
  }

  searchToggleBtn.addEventListener('click', () => {
    const shouldOpen = searchForm.hidden;

    searchForm.hidden = !shouldOpen;
    header.classList.toggle('header_search_open', shouldOpen);
    searchToggleBtn.setAttribute('aria-expanded', String(shouldOpen));

    if (shouldOpen) searchInput.focus();
  });

  searchForm.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;

    closeHeaderSearch();
    searchToggleBtn.focus();
  });

  document.addEventListener('click', event => {
    if (!searchForm.hidden && !header.contains(event.target)) {
      closeHeaderSearch();
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHeaderControls);
} else {
  initHeaderControls();
}

document.addEventListener('includesLoaded', initHeaderControls);

// Замінити цей виклик функції на 'DOMContentLoaded' під час інтеграції
['DOMContentLoaded', 'includesLoaded'].forEach(evt => {
  document.addEventListener(evt, () => {  // прибрати під час інтеграції

    // document.addEventListener('DOMContentLoaded', function () {  //Додати під час інтеграції
    // ***********************************************************
    // Header controls are initialized separately for static includes and WordPress.


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
    // const popupBtn = document.querySelector('.btn_popup');
    // const overlay = document.querySelector('.overlay');
    // const closeBtn = document.querySelector('.popup_close');

    // // Popup
    // if (popupBtn) {
    //   popupBtn.addEventListener('click', () => {
    //     overlay.classList.add('open');
    //     lockScroll();
    //   });

    //   closeBtn.addEventListener('click', () => {
    //     overlay.classList.remove('open');
    //     unlockScroll();
    //   });

    //   overlay.addEventListener('click', e => {
    //     if (e.target === overlay) overlay.classList.remove('open');
    //   });
    // }

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