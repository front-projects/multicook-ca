import { Link } from 'react-router-dom';

export default function FooterEn() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <Link href="https://multicook-franchise.com/en" className="logo">
          <svg className="logo__img logo__img--large">
            <use xlinkHref="images/mc-logo-white.svg#mc-logo-white"></use>
          </svg>
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
                    to="/en/franchise"
                    className="footer-list__link hover"
                    data-content="Franchise"
                  >
                    Franchise
                  </Link>
                </li>
                <li>
                  <Link
                    to="/en/blog"
                    className="footer-list__link hover"
                    data-content="Blog"
                  >
                    Blog
                  </Link>
                </li>
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
                    to="/en/menu/standard-menu/vareniki"
                    className="footer-list__link hover"
                    data-content="Varenyky (dumplings)"
                  >
                    Varenyky (dumplings)
                  </Link>
                </li>
                <li>
                  <Link
                    to="/en/menu/standard-menu/sirniki"
                    className="footer-list__link hover"
                    data-content="Syrnyky (cheese pancakes)"
                  >
                    Syrnyky (cheese pancakes)
                  </Link>
                </li>
                <li>
                  <Link
                    to="/en/menu/standard-menu/mlinci"
                    className="footer-list__link hover"
                    data-content="Crepes"
                  >
                    Crepes
                  </Link>
                </li>
                <li>
                  <Link
                    to="/en/menu/standard-menu/deruni-ta-zrazi"
                    className="footer-list__link hover"
                    data-content="Potato fritters (deruny) and Potato zrazy"
                  >
                    Potato fritters (deruny) and Potato zrazy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/en/menu/standard-menu/kovbasa-ta-pastet"
                    className="footer-list__link hover"
                    data-content="Sausage and Pate"
                  >
                    Sausage and Pate
                  </Link>
                </li>
              </ul>
              <ul className="footer-list">
                <li>
                  <Link
                    to="/en/menu/standard-menu/pelmeni"
                    className="footer-list__link hover"
                    data-content="Pelmeni (dumplings)"
                  >
                    Pelmeni (dumplings)
                  </Link>
                </li>
                <li>
                  <Link
                    to="/en/menu/standard-menu/cebureki"
                    className="footer-list__link hover"
                    data-content="Сhebureki"
                  >
                    Сhebureki
                  </Link>
                </li>
                <li>
                  <Link
                    to="/en/menu/standard-menu/kotleti-ta-frikadelki"
                    className="footer-list__link hover"
                    data-content="Cutlets and Meatball"
                  >
                    Cutlets and Meatball
                  </Link>
                </li>
                <li>
                  <Link
                    to="/en/menu/standard-menu/golubci-ta-perec"
                    className="footer-list__link hover"
                    data-content="Cabbage rolls and Stuffed peppers"
                  >
                    Cabbage rolls and Stuffed peppers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/en/menu/standard-menu/inse"
                    className="footer-list__link hover"
                    data-content="Other"
                  >
                    Other
                  </Link>
                </li>
              </ul>
            </dd>
          </div>
          <div className="footer-block">
            <dt className="footer-block__title">Social media</dt>
            <dd className="footer-block__socials">
              <ul className="socials-list">
                <li>
                  <Link
                    href="https://www.youtube.com/channel/UC85Qqq-wFDI1uUThLLGqEdQ"
                    className="socials-list__link"
                    target="_blank"
                  >
                    <svg className="socials-list__icon">
                      <use xlinkHref="images/youtube.svg#youtube"></use>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.facebook.com/multicookfranch"
                    className="socials-list__link"
                    target="_blank"
                  >
                    <svg className="socials-list__icon">
                      <use xlinkHref="images/facebook.svg#facebook"></use>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/multicook_franchise?igshid=OGQ5ZDc2ODk2ZA=="
                    className="socials-list__link"
                    target="_blank"
                  >
                    <svg className="socials-list__icon">
                      <use xlinkHref="images/instagram.svg#instagram"></use>
                    </svg>
                  </Link>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
      <div className="copyright">
        Developed by
        <Link
          href="https://gigaprog.com/"
          className="copyright__img"
          target="_blank"
        >
          <svg>
            <use xlinkHref="images/gigaprog-logo-white.svg#gigaprog-logo-white"></use>
          </svg>
        </Link>
        ©<b>2024</b>
      </div>
    </footer>
  );
}
