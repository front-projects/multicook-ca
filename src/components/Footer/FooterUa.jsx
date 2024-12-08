import { Link } from 'react-router-dom';

export default function FooterUa() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        {/* <Link href="https://multicook-franchise.com/en" className="logo">
          <svg className="logo__img logo__img--large">
            <use xlinkHref="images/mc-logo-white.svg#mc-logo-white"></use>
          </svg>
        </Link> */}
        <Link to="/ua" className="logo" onClick={() => scrollTo(0, 0)}>
          <img
            alt="Головна"
            decoding="async"
            src="images/gb_logo.svg"
            className="w-[120px] h-[120px] max-sm:w-[80px] max-sm:h-[80px]"
          />

          {/* <svg className="logo__img">
            <use xlinkHref="images/mc-logo-white.svg#mc-logo-white"></use>
          </svg> */}
        </Link>

        <dl className="footer__content">
          <div className="footer-block">
            <dt className="footer-block__title">Навігація</dt>
            <dd className="footer-block__list">
              <ul className="footer-list footer-list--col">
                <li>
                  <Link
                    to="/ua/shops"
                    className="footer-list__link hover"
                    data-content="Магазини"
                  >
                    Магазини
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ua/menu"
                    className="footer-list__link hover"
                    data-content="Меню"
                  >
                    Меню
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ua#about-us"
                    className="footer-list__link hover"
                    data-content="Про нас"
                  >
                    Про нас
                  </Link>
                </li>
                {/* <li>
                  <Link
                    to="/en/blog"
                    className="footer-list__link hover"
                    data-content="Blog"
                  >
                    Blog
                  </Link>
                </li> */}
                <li>
                  <Link
                    to="/ua/contacts"
                    className="footer-list__link hover"
                    data-content="Контакти"
                  >
                    Контакти
                  </Link>
                </li>
              </ul>
            </dd>
          </div>
          <div className="footer-block">
            <dt className="footer-block__title">Каталог</dt>
            <dd className="footer-block__list">
              <ul className="footer-list">
                <li>
                  <Link
                    to="/ua/menu/pierogy"
                    className="footer-list__link hover"
                    data-content="Вареники"
                  >
                    Вареники
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ua/menu/sirniki"
                    className="footer-list__link hover"
                    data-content="Сирники"
                  >
                    Сирники
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ua/menu/crepes"
                    className="footer-list__link hover"
                    data-content="Млинці"
                  >
                    Млинці
                  </Link>
                </li>
              
                {/* <li>
                  <Link
                    to="/en/menu/other"
                    className="footer-list__link hover"
                    data-content="Sausage and Pate"
                  >
                    Sausage and Pate
                  </Link>
                </li> */}
              </ul>
              <ul className="footer-list">
                <li>
                  <Link
                    to="/ua/menu/dumplings"
                    className="footer-list__link hover"
                    data-content="Пельмені"
                  >
                    Пельмені
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ua/menu/chebureki"
                    className="footer-list__link hover"
                    data-content="Чебуреки"
                  >
                    Чебуреки
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ua/menu/cutlets"
                    className="footer-list__link hover"
                    data-content="Котлети"
                  >
                    Котлети
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ua/menu/cabbage-rolls"
                    className="footer-list__link hover"
                    data-content="Голубці"
                  >
                    Голубці
                  </Link>
                </li>
                {/* <li>
                  <Link
                    to="/en/menu/other"
                    className="footer-list__link hover"
                    data-content="Other"
                  >
                    Other
                  </Link>
                </li> */}
              </ul>
            </dd>
          </div>
          <div className="footer-block">
            <dt className="footer-block__title">Соціальні мережі</dt>
            <dd className="footer-block__socials">
              <ul className="socials-list">
                <li>
                  <a
                    href="https://www.youtube.com/channel/UC85Qqq-wFDI1uUThLLGqEdQ"
                    className="socials-list__link"
                    target="_blank"
                  >
                    <svg className="socials-list__icon">
                      <use xlinkHref="images/youtube.svg#youtube"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/share/g/14JzSZjMhw/?mibextid=K35XfP"
                    className="socials-list__link"
                    target="_blank"
                  >
                    <svg className="socials-list__icon">
                      <use xlinkHref="images/facebook.svg#facebook"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/multicook.ca/profilecard/?igsh=OXJ3bHphOTBuY3U3"
                    className="socials-list__link"
                    target="_blank"
                  >
                    <svg className="socials-list__icon">
                      <use xlinkHref="images/instagram.svg#instagram"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
      <div className="copyright">
        Multicook
        ©<b>2024</b>
      </div>
    </footer>
  );
}
