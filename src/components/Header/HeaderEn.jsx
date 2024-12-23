import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import ChangeLanguage from './ChangeLanguage';

export default function HeaderEn() {
  const [open, setOpen] = useState();
  const location = useLocation();
  
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
            <NavLink
              to="/en#about-us"
              className={`nav-list__link hover`}
              id="about-us-link"
            >
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
          <a
            href="https://www.instagram.com/multicook.ca/profilecard/?igsh=OXJ3bHphOTBuY3U3"
            className="socials-list__link"
            target="_blank"
          >
            <svg
              className="socials-list__icon socials-list__icon--red"
              xmlns="http://www.w3.org/2000/svg"
            >
              <use xlinkHref="./images/instagram.svg#instagram"></use>
            </svg>
          </a>
          <ChangeLanguage />
        </div>

        <div className="flex gap-4 items-center ">
          <a
            href="https://www.instagram.com/multicook.ca/profilecard/?igsh=OXJ3bHphOTBuY3U3"
            className="socials-list__link sm:hidden"
            target="_blank"
          >
            <svg
              className="socials-list__icon socials-list__icon--red"
              xmlns="http://www.w3.org/2000/svg"
            >
              <use xlinkHref="./images/instagram.svg#instagram"></use>
            </svg>
          </a>
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
                  className={`nav-list__link hover`}
                  id="about-us-link-mob"
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
              <ChangeLanguage />
            </div>
          </div>
        </div>
      </nav>
      <div className="header__overlay" data-btn="close"></div>
    </header>
  );
}
