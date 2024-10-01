import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function ChangeLanguage() {
  const location = useLocation();

  const [langOpen, setLangOpen] = useState(false);
  const lang = localStorage.getItem('lang');


  return (
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
               to={`${location.pathname.replace(/^\/en/, `/ua`)}${location.search}`}
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
               to={`${location.pathname.replace(/^\/ua/, `/en`)}${location.search}`}
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
  );
}
