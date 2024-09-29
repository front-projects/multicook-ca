import { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import MenuNavigation from '../../components/Menu/Navigation';
import { CategoriesIcon } from '../../components/UI/icons';

export default function StandardMenu() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  return (
    <main className="page__main">
      <section className="menu-page">
        <div className="container">
          <div className="menu-page__top">
            <h2 className="title title-lg">Menu Galya Baluvana</h2>
          </div>

          <div className="flex mt-10 gap-4 max-sm:flex-col">
            <MenuNavigation open={open} onClose={()=> setOpen(false)}/>
            <div className="flex items-center gap-2 sm:hidden" onClick={()=> setOpen(!open)}>
              <CategoriesIcon />
              Categories
            </div>
            <div className="grid grid-cols-3 w-max gap-10 h-max max-[1200px]:grid-cols-2 max-sm:w-[90vw]">
              <Outlet />
            </div>
          </div>
          {/* <div className="menu-page__categories">
            <div
              className={`menu-page-mobile ${open ? 'open' : ''}`}
              data-block="modal"
              data-modal="categories"
            >
              <div className="menu-page-mobile__container">
                <div
                  className="menu-page-mobile__top"
                  onClick={() => setOpen(false)}
                >
                  <button
                    data-close="modal"
                    className="menu-page-mobile__icon"
                    aria-label="close"
                  >
                    <svg className="icon">
                      <use xlinkHref="images/arrow-left.svg#arrow-left"></use>
                    </svg>
                  </button>
                  Choose category
                </div>
                <ul
                  className="menu-page-mobile__tabs tabs-pills"
                  onClick={() => setOpen(false)}
                >
                  <li>
                    <NavLink
                      to="/en/menu/standard-menu/vareniki"
                      className="w-full"
                    >
                      <button
                        className={`tabs-pills__btn ${pathname.includes('vareniki') ? 'active' : ''}`}
                      >
                        Varenyky (dumplings){' '}
                      </button>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/en/menu/standard-menu/pelmeni"
                      className="w-full"
                    >
                      <button
                        className={`tabs-pills__btn ${pathname.includes('pelmeni') ? 'active' : ''}`}
                      >
                        Pelmeni (dumplings){' '}
                      </button>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/en/menu/standard-menu/sirniki"
                      className="w-full"
                    >
                      <button
                        className={`tabs-pills__btn ${pathname.includes('sirniki') ? 'active' : ''}`}
                      >
                        Syrnyky (cheese pancakes){' '}
                      </button>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/en/menu/standard-menu/cebureki"
                      className="w-full"
                    >
                      <button
                        className={`tabs-pills__btn ${pathname.includes('cebureki') ? 'active' : ''}`}
                      >
                        Сhebureki{' '}
                      </button>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/en/menu/standard-menu/mlinci"
                      className="w-full"
                    >
                      <button
                        className={`tabs-pills__btn ${pathname.includes('mlinci') ? 'active' : ''}`}
                      >
                        Crepes{' '}
                      </button>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/en/menu/standard-menu/kotleti-ta-frikadelki"
                      className="w-full"
                    >
                      <button
                        className={`tabs-pills__btn ${pathname.includes('kotleti-ta-frikadelki') ? 'active' : ''}`}
                      >
                        Cutlets and Meatball{' '}
                      </button>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/en/menu/standard-menu/deruni-ta-zrazi"
                      className="w-full"
                    >
                      <button
                        className={`tabs-pills__btn ${pathname.includes('deruni-ta-zrazi') ? 'active' : ''}`}
                      >
                        Potato fritters (deruny) and Potato zrazy{' '}
                      </button>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/en/menu/standard-menu/golubci-ta-perec"
                      className="w-full"
                    >
                      <button
                        className={`tabs-pills__btn ${pathname.includes('golubci-ta-perec') ? 'active' : ''}`}
                      >
                        Cabbage rolls and Stuffed peppers{' '}
                      </button>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/en/menu/standard-menu/kovbasa-ta-pastet"
                      className="w-full"
                    >
                      <button
                        className={`tabs-pills__btn ${pathname.includes('kovbasa-ta-pastet') ? 'active' : ''}`}
                      >
                        Sausage and Pate{' '}
                      </button>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/en/menu/standard-menu/inse"
                      className="w-full"
                    >
                      <button
                        className={`tabs-pills__btn ${pathname.includes('inse') ? 'active' : ''}`}
                      >
                        Other{' '}
                      </button>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            <div className="menu-page-actions">
              <button
                onClick={() => setOpen(true)}
                className="menu-page-actions__btn btn btn-gray"
                data-btn="categories"
              >
                <svg className="icon">
                  <use xlinkHref="images/filter.svg#filter"></use>
                </svg>
                Filter
              </button>

              <div className="menu-page-actions__selected">Menu</div>
            </div>
          </div> */}

          {/* <div className="menu-page__content">
            <Outlet />
          </div> */}
        </div>
      </section>
    </main>
  );
}
