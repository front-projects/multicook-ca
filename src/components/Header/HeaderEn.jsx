import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function HeaderEn() {
  const [open, setOpen] = useState();
  const [langOpen, setLangOpen] = useState(false);

  const lang = localStorage.getItem('lang');

  return (
    <header className={`header ${open ? 'open' : ''}`} data-block="header">
      <nav className="header__container container nav">
        <Link to="/en" className="logo" onClick={() => scrollTo(0, 0)}>
          <svg className="logo__img">
            <use xlinkHref="images/mc-logo-white.svg#mc-logo-white"></use>
          </svg>
        </Link>

        <ul className="header__list nav-list">
          <li>
            <NavLink
              to="/en/shops"
              className={`nav-list__link hover ${({ isActive }) => (isActive ? 'text-red-600' : '')}`}
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
              to="/en/franchise"
              className={`nav-list__link hover ${({ isActive }) => (isActive ? 'text-red-600' : '')}`}
            >
              Franchise
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/en/blog"
              className={`nav-list__link hover ${({ isActive }) => (isActive ? 'text-red-600' : '')}`}
            >
              Blog
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
          <div className={`languages ${langOpen ? 'open' : ''}`} data-block="languages">
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
                      localStorage.setItem('lang', 'ua')
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
                      localStorage.setItem('lang', 'en')
                      setLangOpen(false);
                    }}
                    className="languages-list__link"
                  >
                    en
                  </Link>
                </li>
              </ul>
              {/* <button className="languages-list__btn" data-languages="btn">
                <svg className="icon">
                  <use xlinkHref="images/arrow.svg#arrow"></use>
                </svg>
              </button> */}
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
                  to="/en/franchise"
                  className={`nav-list__link hover ${({ isActive }) => (isActive ? 'text-red-600' : '')}`}
                  data-content="Franchise"
                >
                  Franchise
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/en/blog"
                  className={`nav-list__link hover ${({ isActive }) => (isActive ? 'text-red-600' : '')}`}
                  data-content="Blog"
                >
                  Blog
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
            {/* <a
              href="https://multicook-franchise.com/en/login"
              className="header-mobile__btn btn btn-red"
            >
              Log in
            </a> */}

            <div className="header-mobile__actions">
              {/* <button className="header-mobile__action" data-btn="location">
                <svg className="header-mobile__icon icon">
                  <use xlinkHref="images/pin.svg#pin"></use>
                </svg>
                <span data-content="Choose city">Choose city</span>
                <svg className="header-mobile__arrow icon">
                  <use xlinkHref="images/arrow.svg#arrow"></use>
                </svg>
              </button> */}
              <div className={`languages ${langOpen ? 'open' : ''}`} data-block="languages">
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
                          localStorage.setItem('lang', 'ua')
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
                          localStorage.setItem('lang', 'en')
                          setLangOpen(false);
                        }}
                        className="languages-list__link"
                      >
                        en
                      </Link>
                    </li>
                  </ul>
                  {/* <button className="languages-list__btn" data-languages="btn">
                <svg className="icon">
                  <use xlinkHref="images/arrow.svg#arrow"></use>
                </svg>
              </button> */}
                </div>
              </div>

              {/* <button className="header-mobile__action" data-btn="language">
                <svg className="header-mobile__icon icon">
                  <use xlinkHref="images/globe.svg#globe"></use>
                </svg>
                <span data-content="English">English</span>
                <svg className="header-mobile__arrow icon">
                  <use xlinkHref="images/arrow.svg#arrow"></use>
                </svg>
              </button> */}
            </div>
          </div>

          <div
            className="header-mobile__wrapper"
            data-content="location"
            data-url-cities="https://multicook-franchise.com/api/cities/get"
          >
            <input type="hidden" name="country_id" />

            <div className="header-mobile__title">
              <svg className="icon">
                <use xlinkHref="images/pin.svg#pin"></use>
              </svg>
              Choose location
            </div>

            <div className="header-mobile__inner">
              <div className="header-mobile__countries" data-menu="countries">
                <div className="field">
                  <label htmlFor="search_location" className="hide">
                    Choose country
                  </label>
                  <input
                    id="search_location"
                    type="text"
                    className="field__input field__input--light field__input--right"
                    placeholder="Choose country"
                  />
                  <button
                    className="field__btn"
                    type="button"
                    aria-label="search"
                  >
                    <svg className="field__icon icon">
                      <use xlinkHref="images/search.svg#search"></use>
                    </svg>
                  </button>
                </div>

                <form
                  method="post"
                  action="https://multicook-franchise.com/en/city/chose"
                >
                  <input
                    type="hidden"
                    name="_token"
                    value="8r1GCLom3iFLuhZttcRJiaZuRWj3j7RSYNU1fuyn"
                  />
                  <input type="hidden" required="" name="city_id" value="" />
                </form>

                <div
                  className="header-mobile__checked hide"
                  data-choose="country"
                >
                  <span> , </span>
                  <svg className="icon">
                    <use xlinkHref="images/check.svg#check"></use>
                  </svg>
                </div>

                <ul className="header-mobile__list">
                  <li>
                    <button
                      type="button"
                      className="header-mobile__link hover"
                      data-content="Ukraine"
                      data-id="1"
                    >
                      Ukraine
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="header-mobile__link hover"
                      data-content="Poland"
                      data-id="2"
                    >
                      Poland
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="header-mobile__link hover"
                      data-content="Germany"
                      data-id="3"
                    >
                      Germany
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="header-mobile__link hover"
                      data-content="Czech Republic"
                      data-id="4"
                    >
                      Czech Republic
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="header-mobile__link hover"
                      data-content="Spain"
                      data-id="5"
                    >
                      Spain
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="header-mobile__link hover"
                      data-content="Bulgaria"
                      data-id="6"
                    >
                      Bulgaria
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="header-mobile__link hover"
                      data-content="Latvia"
                      data-id="7"
                    >
                      Latvia
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="header-mobile__link hover"
                      data-content="Great Britain"
                      data-id="8"
                    >
                      Great Britain
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="header-mobile__link hover"
                      data-content="Greece"
                      data-id="9"
                    >
                      Greece
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="header-mobile__link hover"
                      data-content="Cyprus"
                      data-id="10"
                    >
                      Cyprus
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="header-mobile__link hover"
                      data-content="Lithuania"
                      data-id="11"
                    >
                      Lithuania
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="header-mobile__link hover"
                      data-content="Turkey"
                      data-id="12"
                    >
                      Turkey
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="header-mobile__link hover"
                      data-content="Hungary"
                      data-id="13"
                    >
                      Hungary
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="header-mobile__link hover"
                      data-content="Estonia"
                      data-id="14"
                    >
                      Estonia
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="header-mobile__link hover"
                      data-content="Хорватія"
                      data-id="15"
                    >
                      Хорватія
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="header-mobile__link hover"
                      data-content="Romania"
                      data-id="16"
                    >
                      Romania
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="header-mobile__link hover"
                      data-content="Slovakia"
                      data-id="17"
                    >
                      Slovakia
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="header-mobile__link hover"
                      data-content="Moldova"
                      data-id="18"
                    >
                      Moldova
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="header-mobile__link hover"
                      data-content="Portugal"
                      data-id="19"
                    >
                      Portugal
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="header-mobile__link hover"
                      data-content="France"
                      data-id="20"
                    >
                      France
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="header-mobile__link hover"
                      data-content="Austria"
                      data-id="21"
                    >
                      Austria
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="header-mobile__link hover"
                      data-content="Belgium"
                      data-id="22"
                    >
                      Belgium
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="header-mobile__link hover"
                      data-content="Canada"
                      data-id="23"
                    >
                      Canada
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="header-mobile__link hover"
                      data-content="Netherlands"
                      data-id="24"
                    >
                      Netherlands
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="header-mobile__link hover"
                      data-content="USA"
                      data-id="25"
                    >
                      USA
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="header-mobile__link hover"
                      data-content="Switzerland"
                      data-id="26"
                    >
                      Switzerland
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="header-mobile__link hover"
                      data-content="Sweden"
                      data-id="27"
                    >
                      Sweden
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="header-mobile__link hover"
                      data-content="Ireland"
                      data-id="28"
                    >
                      Ireland
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="header-mobile__link hover"
                      data-content="Slovenia"
                      data-id="29"
                    >
                      Slovenia
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="header-mobile__link hover"
                      data-content="Finland"
                      data-id="30"
                    >
                      Finland
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="header-mobile__link hover"
                      data-content="Chornohoriya"
                      data-id="31"
                    >
                      Chornohoriya
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="header-mobile__link hover"
                      data-content="Georgia"
                      data-id="32"
                    >
                      Georgia
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="header-mobile__link hover"
                      data-content="Israel"
                      data-id="33"
                    >
                      Israel
                    </button>
                  </li>
                </ul>
              </div>

              <div className="header-mobile__cities hide" data-menu="cities">
                <div className="field">
                  <label htmlFor="search_city" className="hide">
                    Choose city
                  </label>
                  <input
                    id="search_city"
                    type="text"
                    className="field__input field__input--light field__input--right"
                    placeholder="Choose city"
                  />
                  <button
                    className="field__btn"
                    type="button"
                    aria-label="search"
                  >
                    <svg className="field__icon icon">
                      <use xlinkHref="images/search.svg#search"></use>
                    </svg>
                  </button>
                </div>

                <ul className="header-mobile__list"></ul>
              </div>
            </div>
          </div>
          <div className="header-mobile__wrapper" data-content="language">
            <div className="header-mobile__title">
              <svg className="header-mobile__icon icon">
                <use xlinkHref="images/globe.svg#globe"></use>
              </svg>
              Choose language
            </div>
            <div className="header-mobile__inner">
              <div className="header-mobile__checked">
                English
                <svg className="icon">
                  <use xlinkHref="images/check.svg#check"></use>
                </svg>
              </div>

              <ul className="header-mobile__list">
                <li className="languages-list__item">
                  <a
                    href="https://multicook-franchise.com/uk"
                    className="header-mobile__link hover"
                    data-content="Українська"
                  >
                    Українська
                  </a>
                </li>
                <li className="languages-list__item">
                  <a
                    href="https://multicook-franchise.com/bg"
                    className="header-mobile__link hover"
                    data-content="Български"
                  >
                    Български
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="header__overlay" data-btn="close"></div>
    </header >
  );
}
