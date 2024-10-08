import { Link } from 'react-router-dom';

export default function FooterEn() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        {/* <Link href="https://multicook-franchise.com/en" className="logo">
          <svg className="logo__img logo__img--large">
            <use xlinkHref="images/mc-logo-white.svg#mc-logo-white"></use>
          </svg>
        </Link> */}
        <Link to="/en" className="logo" onClick={() => scrollTo(0, 0)}>
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
            <dt className="footer-block__title">Navigation</dt>
            <dd className="footer-block__list">
              <ul className="footer-list footer-list--col">
                <li>
                  <Link
                    to="/en/shops"
                    className="footer-list__link hover"
                    data-content="Shops"
                  >
                    Shops
                  </Link>
                </li>
                <li>
                  <Link
                    to="/en/menu"
                    className="footer-list__link hover"
                    data-content="Menu"
                  >
                    Menu
                  </Link>
                </li>
                <li>
                  <Link
                    to="/en#about-us"
                    className="footer-list__link hover"
                    data-content="About Us"
                  >
                    About Us
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
                    to="/en/contacts"
                    className="footer-list__link hover"
                    data-content="Contacts"
                  >
                    Contacts
                  </Link>
                </li>
              </ul>
            </dd>
          </div>
          <div className="footer-block">
            <dt className="footer-block__title">Catalog</dt>
            <dd className="footer-block__list">
              <ul className="footer-list">
                <li>
                  <Link
                    to="/en/menu/pierogy"
                    className="footer-list__link hover"
                    data-content="Varenyky"
                  >
                    Varenyky
                  </Link>
                </li>
                <li>
                  <Link
                    to="/en/menu/sirniki"
                    className="footer-list__link hover"
                    data-content="Syrnyky (cheese pancakes)"
                  >
                    Syrnyky (cheese pancakes)
                  </Link>
                </li>
                <li>
                  <Link
                    to="/en/menu/crepes"
                    className="footer-list__link hover"
                    data-content="Crepes"
                  >
                    Crepes
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
                    to="/en/menu/dumplings"
                    className="footer-list__link hover"
                    data-content="Pelmeni (dumplings)"
                  >
                    Pelmeni (dumplings)
                  </Link>
                </li>
                <li>
                  <Link
                    to="/en/menu/chebureki"
                    className="footer-list__link hover"
                    data-content="Сhebureki"
                  >
                    Сhebureki
                  </Link>
                </li>
                <li>
                  <Link
                    to="/en/menu/cutlets"
                    className="footer-list__link hover"
                    data-content="Cutlets and Meatball"
                  >
                    Cutlets and Meatball
                  </Link>
                </li>
                <li>
                  <Link
                    to="/en/menu/cabbage-rolls"
                    className="footer-list__link hover"
                    data-content="Cabbage rolls"
                  >
                    Cabbage rolls
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
            <dt className="footer-block__title">Social media</dt>
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
                    href="https://m.facebook.com/61561417168302/"
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
                    href="https://www.instagram.com/multicook.ca?igsh=OXJ3bHphOTBuY3U3&utm_source=qr"
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
