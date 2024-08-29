import { NavLink, Outlet, useLocation } from "react-router-dom";

export default function StandardMenu() {
    const location = useLocation();
    const { pathname } = location;
    console.log(pathname)

    return <main className="page__main">

        <section className="menu-page">
            <div className="container">
                <div className="menu-page__top">
                    <h2 className="title title-lg">Menu Multi Cook</h2>

                </div>
                <div className="menu-page__categories">
                    <div className="menu-page-mobile" data-block="modal" data-modal="categories">
                        <div className="menu-page-mobile__container">
                            <div className="menu-page-mobile__top">
                                <button data-close="modal" className="menu-page-mobile__icon" aria-label="close">
                                    <svg className="icon">
                                        <use xlinkHref="images/arrow-left.svg#arrow-left"></use>
                                    </svg>
                                </button>
                                Choose category
                            </div>
                            <ul className="menu-page-mobile__tabs tabs-pills">
                                <li>
                                    <NavLink to="/en/menu/standard-menu/vareniki" className="w-full"><button className={`tabs-pills__btn ${pathname.includes("vareniki") ? "active" : ""}`} >Varenyky (dumplings) </button></NavLink>
                                </li>
                                <li >
                                    <NavLink to="/en/menu/standard-menu/pelmeni" className="w-full"><button className={`tabs-pills__btn ${pathname.includes("pelmeni") ? "active" : ""}`}>Pelmeni (dumplings) </button></NavLink>
                                </li>
                                <li >
                                    <NavLink to="/en/menu/standard-menu/sirniki" className="w-full"><button className={`tabs-pills__btn ${pathname.includes("sirniki") ? "active" : ""}`}>Syrnyky (cheese pancakes) </button></NavLink>
                                </li>
                                <li >
                                    <NavLink to="/en/menu/standard-menu/cebureki" className="w-full"><button className={`tabs-pills__btn ${pathname.includes("cebureki") ? "active" : ""}`}>Сhebureki </button></NavLink>
                                </li>
                                <li >
                                    <NavLink to="/en/menu/standard-menu/mlinci" className="w-full" ><button className={`tabs-pills__btn ${pathname.includes("mlinci") ? "active" : ""}`}>Crepes </button></NavLink>
                                </li>
                                <li >
                                    <NavLink to="/en/menu/standard-menu/kotleti-ta-frikadelki" className="w-full" ><button className={`tabs-pills__btn ${pathname.includes("kotleti-ta-frikadelki") ? "active" : ""}`}>Cutlets and Meatball </button></NavLink>
                                </li>
                                <li >
                                    <NavLink to="/en/menu/standard-menu/deruni-ta-zrazi" className="w-full" ><button className={`tabs-pills__btn ${pathname.includes("deruni-ta-zrazi") ? "active" : ""}`}>Potato fritters (deruny) and Potato zrazy </button></NavLink>
                                </li>
                                <li >
                                    <NavLink to="/en/menu/standard-menu/golubci-ta-perec" className="w-full" ><button className={`tabs-pills__btn ${pathname.includes("golubci-ta-perec") ? "active" : ""}`}>Cabbage rolls and Stuffed peppers </button></NavLink>
                                </li>
                                <li >
                                    <NavLink to="/en/menu/standard-menu/kovbasa-ta-pastet" className="w-full" ><button className={`tabs-pills__btn ${pathname.includes("kovbasa-ta-pastet") ? "active" : ""}`}>Sausage and Pate </button></NavLink>
                                </li>
                                <li >
                                    <NavLink to="/en/menu/standard-menu/inse" className="w-full" ><button className={`tabs-pills__btn ${pathname.includes("inse") ? "active" : ""}`}>Other </button></NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="menu-page-actions">
                        <button className="menu-page-actions__btn btn btn-gray" data-btn="categories">
                            <svg className="icon">
                                <use xlinkHref="images/filter.svg#filter"></use>
                            </svg>
                            Filter
                        </button>

                        <div className="menu-page-actions__selected">
                            Varenyky (dumplings)
                        </div>
                    </div>
                </div>

                <div className="menu-page__content">
                    <Outlet />
                </div>
                <div className="menu-page__premium">
                    <h2 className="menu-page__title title">Premium menu</h2>
                    <div className="menu-page__content menu-page__content--higher">
                        <a href="https://multicook-franchise.com/en/menu/chef-menu" className="product">
                            <img src="images/rm2651nPFIL1XId33gKqcmNcVI0D5RTA0daUu6ld_res600x600_opt.jpg" className="product__img" alt="Panckes" width="1" height="1" decoding="async" />
                            <h3 className="product__title">Chef menu</h3>
                        </a>
                        <a href="https://multicook-franchise.com/en/menu/pizza-and-sushi" className="product">
                            <img src="images/1c8QtYVh6dv4lClB9BRoxqPdpTDxGESg64dywLYY_res600x600_opt.jpg" className="product__img" alt="Panckes" width="1" height="1" decoding="async" />
                            <h3 className="product__title">Pizza and sushi</h3>
                        </a>
                        <a href="https://multicook-franchise.com/en/menu/ice-cream" className="product">
                            <img src="images/kPYqMZlnZ7LzOd43F11sZrcsBuJnnpxXNifbAT0P_res600x600_opt.jpg" className="product__img" alt="Panckes" width="1" height="1" decoding="async" />
                            <h3 className="product__title">Ice cream</h3>
                        </a>
                        <a href="https://multicook-franchise.com/en/menu/confectionery" className="product">
                            <img src="images/bhB4uTgTHGkot5nH1AWKzjS1hiPQqcx949x0vZ0X_res600x600_opt.jpg" className="product__img" alt="Panckes" width="1" height="1" decoding="async" />
                            <h3 className="product__title">Confectionery</h3>
                        </a>
                        <a href="https://multicook-franchise.com/en/menu/nacionalni-stravi" className="product">
                            <img src="images/ZJc79kilQYsQkAqG5g8jX6N9NsckOHkd094TjhFp_res600x600_opt.jpg" className="product__img" alt="Panckes" width="1" height="1" decoding="async" />
                            <h3 className="product__title">National dishes</h3>
                        </a>
                        <a href="https://multicook-franchise.com/en/menu/meniu-bez-svinnogo-sala" className="product">
                            <img src="images/8wNmYLnnvI3YhQlr2vKmqH4a9tmdDoAz9mOlTErX_res600x600_opt.jpg" className="product__img" alt="Panckes" width="1" height="1" decoding="async" />
                            <h3 className="product__title">Топ меню (без свинини)</h3>
                        </a>
                        <a href="https://multicook-franchise.com/en/menu/napoyi" className="product">
                            <img src="images/uD1nOZNHw9qQqG4DlvK7oGwynFNJTtOWVFzM6KCc_res600x600_opt.jpg" className="product__img" alt="Panckes" width="1" height="1" decoding="async" />
                            <h3 className="product__title">Напої</h3>
                        </a>
                        <a href="https://multicook-franchise.com/en/menu/sousa" className="product">
                            <img src="images/5RknVr9fXOFgcOqWnRTplfvrt2uDdCYG3GL9tczB_res600x600_opt.jpg" className="product__img" alt="Panckes" width="1" height="1" decoding="async" />
                            <h3 className="product__title">Соуса</h3>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </main >
}