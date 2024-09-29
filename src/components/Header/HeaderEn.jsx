import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function HeaderEn() {
  const [open, setOpen] = useState();
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();
  const lang = localStorage.getItem('lang');
  useEffect(() => {
    // Розділяємо хеш, якщо він містить додатковий елемент після маршруту
    const hashParts = location.hash.split('#');
    if (hashParts.length > 1) {
      const elementId = hashParts[1]; // Отримуємо ID елемента
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <header className={`header ${open ? 'open' : ''}`} data-block="header">
      <nav className="header__container container nav">
        <Link to="/en" className="logo" onClick={() => scrollTo(0, 0)}>
          <img
            alt="Головна"
            decoding="async"
            src="images/gb_logo.svg"
            className="w-[60px] h-[60px] max-sm:w-[50px] max-sm:h-[50px]"
          />

          {/* <svg className="logo__img">
            <use xlinkHref="images/mc-logo-white.svg#mc-logo-white"></use>
          </svg> */}
        </Link>

        <ul className="header__list nav-list">
          <li>
            <NavLink
              to="/en/shops"
              className={`nav-list__link hover ${({ isActive }) => (isActive ? 'text-red-600 font-bold' : '')}`}
            >
              Shops
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/en/menu"
              className={`nav-list__link hover ${({ isActive }) => (isActive ? 'text-red-600' : '')}`}
            >
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/en#about-us" className={`nav-list__link hover`} id="about-us-link">
              About<span className="ml-2">Us</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/en/contacts"
              className={`nav-list__link hover ${({ isActive }) => (isActive ? 'text-red-600' : '')}`}
            >
              Contacts
            </NavLink>
          </li>
        </ul>

        <div className="header__actions">
          <div
            className={`languages ${langOpen ? 'open' : ''}`}
            data-block="languages"
          >
            <button
              type="button"
              className="languages__placeholder"
              onClick={() => setLangOpen(!langOpen)}
            >
              <svg className="languages__icon icon">
                <use xlinkHref="images/arrow.svg#arrow"></use>
              </svg>
              {lang ? lang : 'en'}
            </button>

            <div className="languages-list" data-languages="list">
              <ul className="languages-list__content">
                <li className="languages-list__item">
                  <Link
                    to="/ua"
                    onClick={() => {
                      localStorage.setItem('lang', 'ua');
                      setLangOpen(false);
                    }}
                    className="languages-list__link"
                  >
                    uk
                  </Link>
                </li>
                <li className="languages-list__item">
                  <Link
                    to="/en"
                    onClick={() => {
                      localStorage.setItem('lang', 'en');
                      setLangOpen(false);
                    }}
                    className="languages-list__link"
                  >
                    en
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="header__burger"
          data-btn="burger"
          onClick={() => setOpen(!open)}
        >
          <button className="burger" aria-label="burger">
            <span className="burger__line burger__line--first"></span>
            <span className="burger__line burger__line--second"></span>
          </button>
        </div>

        <div className="header-mobile">
          <div
            className="header-mobile__content header-mobile__content--visible"
            data-content="main"
          >
            <ul className="nav-list" onClick={() => setOpen(false)}>
              <li>
                <NavLink
                  to="/en/shops"
                  className={`nav-list__link hover ${({ isActive }) => (isActive ? 'text-red-600' : '')}`}
                  data-content="Shops"
                >
                  Shops
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/en/menu"
                  className={`nav-list__link hover ${({ isActive }) => (isActive ? 'text-red-600' : '')}`}
                  data-content="Menu"
                >
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/en#about-us"
                  className={`nav-list__link hover ${({ isActive }) => (isActive ? 'text-red-600' : '')}`} id="about-us-link-mob"
                  data-content="About Us"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/en/contacts"
                  className={`nav-list__link hover ${({ isActive }) => (isActive ? 'text-red-600' : '')}`}
                  data-content="Contacts"
                >
                  Contacts
                </NavLink>
              </li>
            </ul>

            <div className="header-mobile__actions">
              <div
                className={`languages ${langOpen ? 'open' : ''}`}
                data-block="languages"
              >
                <button
                  type="button"
                  className="languages__placeholder"
                  onClick={() => setLangOpen(!langOpen)}
                >
                  <svg className="languages__icon icon">
                    <use xlinkHref="images/arrow.svg#arrow"></use>
                  </svg>
                  {lang ? lang : 'en'}
                </button>

                <div className="languages-list" data-languages="list">
                  <ul className="languages-list__content">
                    <li className="languages-list__item">
                      <Link
                        to="/ua"
                        onClick={() => {
                          localStorage.setItem('lang', 'ua');
                          setLangOpen(false);
                        }}
                        className="languages-list__link"
                      >
                        uk
                      </Link>
                    </li>
                    <li className="languages-list__item">
                      <Link
                        to="/en"
                        onClick={() => {
                          localStorage.setItem('lang', 'en');
                          setLangOpen(false);
                        }}
                        className="languages-list__link"
                      >
                        en
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="header__overlay" data-btn="close"></div>
    </header>
  );
}
