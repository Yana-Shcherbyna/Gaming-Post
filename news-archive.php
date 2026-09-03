<!DOCTYPE html>
<html lang="uk">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Новини — GamingPost</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
      rel="stylesheet"
    />

    <!-- Bootstrap -->
    <link rel="stylesheet" href="css/bootstrap.min.css" />
    <!-- Style -->
    <link rel="stylesheet" href="css/style.css" />
  </head>

  <body class="dark_theme">
    <!-- Preloader -->
    <div class="page_preloader">
      <div class="page_preloader_spinner"></div>
    </div>

    <div class="wrapper">
      <!-- Header -->
      <header class="header no-scroll"></header>

      <main class="content">
        <div class="news_archive_page">
          <!-- Breadcrumbs -->
          <nav class="news_breadcrumbs" aria-label="Хлібні крихти">
            <div class="container">
              <ol class="news_breadcrumbs_list">
                <li class="news_breadcrumbs_item">
                  <a
                    class="news_breadcrumbs_home"
                    href="index.html"
                    aria-label="Головна сторінка"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        d="M12 3.1 3.5 10v10.4h6v-6.2h5v6.2h6V10L12 3.1Zm0 2.5 6.5 5.3v7.5h-2v-6.2h-9v6.2h-2v-7.5L12 5.6Z"
                      />
                    </svg>
                  </a>
                </li>
                <li
                  class="news_breadcrumbs_item news_breadcrumbs_separator"
                  aria-hidden="true"
                >
                  ›
                </li>
                <li
                  class="news_breadcrumbs_item news_breadcrumbs_current"
                  aria-current="page"
                >
                  Новини
                </li>
              </ol>
            </div>
          </nav>

          <!-- News intro -->
          <section
            class="news_archive section"
            aria-labelledby="newsArchiveTitle"
          >
            <div class="container">
              <header class="news_archive_header">
                <h1 class="news_archive_title" id="newsArchiveTitle">
                  Новини
                </h1>
                <p class="news_archive_description">
                  Актуальні новини української та світової геймінг індустрії:
                  законодавство, регулювання, ліцензування, технології, ринок,
                  компанії та ключові події.
                </p>
              </header>

              <div class="row g-3 news_archive_grid">
                <div class="col-12 col-lg-6">
                  <article class="news_card news_card_featured">
                    <a class="news_card_link" href="#">
                      <div class="news_card_media">
                        <span class="news_card_badge">Головна новина</span>
                        <img
                          src="https://loremflickr.com/900/360/casino,gambling?lock=11"
                          alt="Клавіатура та елементи грального бізнесу"
                          width="900"
                          height="360"
                          fetchpriority="high"
                        />
                      </div>

                      <div class="news_card_content">
                        <h2 class="news_card_title">
                          Грецька регуляторна рада: країна перетворюється на
                          модель прозорого грального ринку
                        </h2>
                        <p class="news_card_excerpt">
                          Грецька регуляторна рада: країна перетворюється на
                          модель прозорого грального ринку, країна перетворюється
                          на модель...
                        </p>
                        <div class="news_card_meta">
                          <time datetime="2025-05-08T19:05">
                            08.05.2025 &#183; 19:05
                          </time>
                        </div>
                      </div>
                    </a>
                  </article>
                </div>

                <div class="col-12 col-sm-6 col-lg-2">
                  <article class="news_card news_card_standard">
                    <a class="news_card_link" href="#">
                      <div class="news_card_media">
                        <img
                          src="https://loremflickr.com/480/280/europe,flag?lock=12"
                          alt="Прапор Європейського Союзу"
                          width="480"
                          height="280"
                          loading="lazy"
                        />
                      </div>

                      <div class="news_card_content">
                        <h2 class="news_card_title">
                          У ЄС набуває чинності Директива щодо захисту споживачів
                          онлайн-гемблінгу
                        </h2>
                        <div class="news_card_meta">
                          <time datetime="2025-05-08T19:05">
                            08.05.2025 &#183; 19:05
                          </time>
                        </div>
                      </div>
                    </a>
                  </article>
                </div>

                <div class="col-12 col-sm-6 col-lg-2">
                  <article class="news_card news_card_standard">
                    <a class="news_card_link" href="#">
                      <div class="news_card_media">
                        <img
                          src="https://loremflickr.com/480/280/web3,technology?lock=13"
                          alt="Візуалізація технології Web3"
                          width="480"
                          height="280"
                          loading="lazy"
                        />
                      </div>

                      <div class="news_card_content">
                        <h2 class="news_card_title">
                          Web3 і гральний бізнес: як блокчейн змінює правила
                          взаємодії
                        </h2>
                        <div class="news_card_meta">
                          <time datetime="2025-05-08T19:05">
                            08.05.2025 &#183; 19:05
                          </time>
                        </div>
                      </div>
                    </a>
                  </article>
                </div>

                <div class="col-12 col-sm-6 col-lg-2">
                  <article class="news_card news_card_standard">
                    <a class="news_card_link" href="#">
                      <div class="news_card_media">
                        <img
                          src="https://loremflickr.com/480/280/ukraine,flag?lock=14"
                          alt="Прапор України"
                          width="480"
                          height="280"
                          loading="lazy"
                        />
                      </div>

                      <div class="news_card_content">
                        <h2 class="news_card_title">
                          Ринок ставок в Україні: ключові показники за квітень
                          2025 року
                        </h2>
                        <div class="news_card_meta">
                          <time datetime="2025-05-08T19:05">
                            08.05.2025 &#183; 19:05
                          </time>
                        </div>
                      </div>
                    </a>
                  </article>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <!-- Footer -->
      <footer class="footer"></footer>
    </div>

    <button class="back_to_top" id="js-backToTop" aria-label="Повернутися вгору">
      <svg width="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
        <path
          d="M297.4 169.4C309.9 156.9 330.2 156.9 342.7 169.4L534.7 361.4C547.2 373.9 547.2 394.2 534.7 406.7C522.2 419.2 501.9 419.2 489.4 406.7L320 237.3L150.6 406.6C138.1 419.1 117.8 419.1 105.3 406.6C92.8 394.1 92.8 373.8 105.3 361.3L297.3 169.3z"
        />
      </svg>
    </button>

    <!-- Script -->
    <script type="module" defer src="js/include.js"></script>
    <!-- Bootstrap -->
    <script src="js/bootstrap.bundle.min.js"></script>
    <!-- Custom script -->
    <script defer src="js/main.js"></script>
  </body>
</html>
