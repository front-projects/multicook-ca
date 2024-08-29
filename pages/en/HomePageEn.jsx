export default function HomePageEn() {
    return <main className="page__main">
        <section className="banner">
            <div className="container banner__container">
                <div className="banner__content">
                    <h1 className="banner__title title">
                        The most popular dishes at Multi Cook
                    </h1>
                    <p>
                        In order to see the menu with prices, you need to go to the
                        «Menu» section and select a city.
                    </p>
                    <div className="banner__btns btns">
                        <a
                            href="https://multicook-franchise.com/en/franchise"
                            className="btn btn-red"
                        >Buy franchise</a
                        >
                        <a
                            href="https://multicook-franchise.com/en/menu"
                            className="btn btn-transparent"
                        >Go to the menu</a
                        >
                    </div>
                </div>
                <div className="banner-img">
                    <svg className="banner-img__like-red">
                        <use xlinkHref="images/like-red.svg#like-red"></use>
                    </svg>
                    <svg className="banner-img__like-blue">
                        <use xlinkHref="images/like-blue.svg#like-blue"></use>
                    </svg>
                    <svg className="banner-img__shine-direct">
                        <use xlinkHref="images/shine-direct.svg#shine-direct"></use>
                    </svg>
                    <svg
                        className="banner-img__shine-direct banner-img__shine-direct--right"
                    >
                        <use xlinkHref="images/shine-direct.svg#shine-direct"></use>
                    </svg>
                    <svg className="banner-img__shine-wave">
                        <use xlinkHref="images/shine-wave.svg#shine-wave"></use>
                    </svg>
                    <svg className="banner-img__shine-wave banner-img__shine-wave--right">
                        <use xlinkHref="images/shine-wave.svg#shine-wave"></use>
                    </svg>
                    <img
                        src="images/deruny.webp"
                        alt="Plate with deruny"
                        width="1"
                        height="1"
                        decoding="async"
                    />
                </div>
            </div>
        </section>

        <section className="records">
            <div className="records__container container">
                <div className="records__title">
                    <h2 className="title title-md">
                        Every day we set new records for ourselves
                    </h2>
                </div>
                <div className="records__content" data-block="counter-cards">
                    <div className="card-record" data-counter="card">
                        <div className="card-record__title">Shops in Europe</div>
                        <div
                            className="card-record__num"
                            data-counter="num"
                            data-number="700"
                        >
                            700
                        </div>
                        <svg className="card-record__icon card-record__icon--bottom-right">
                            <use xlinkHref="images/shine-wave.svg#shine-wave"></use>
                        </svg>
                    </div>
                    <div className="card-record" data-counter="card">
                        <div className="card-record__title">Workplaces</div>
                        <div
                            className="card-record__num"
                            data-counter="num"
                            data-number="9000"
                        >
                            9000
                        </div>
                        <svg className="card-record__icon card-record__icon--top-left">
                            <use xlinkHref="images/shine-wave.svg#shine-wave"></use>
                        </svg>
                    </div>
                    <div className="card-record" data-counter="card">
                        <div className="card-record__title">Various dishes</div>
                        <div
                            className="card-record__num"
                            data-counter="num"
                            data-number="60"
                        >
                            60
                        </div>
                        <svg className="card-record__icon card-record__icon--bottom-left">
                            <use xlinkHref="images/shine-wave.svg#shine-wave"></use>
                        </svg>
                    </div>
                </div>
            </div>
        </section>

        <section className="menu">
            <div className="menu__container container">
                <h2 className="menu__title title title-lg">Menu Multi Cook</h2>
                <p className="menu__text">
                    In order to see the menu with prices, you need to go to the «Menu»
                    section and select a city
                </p>
                <div className="menu__content">
                    <a
                        href="https://multicook-franchise.com/en/menu/standard-menu/vareniki"
                        className="product"
                    >
                        <img
                            src="images/rN4pZTR6G93tQo6jMtIRiNXSXnQIQf08jt4DxQnL_res600x600_opt.jpg"
                            className="product__img"
                            alt="Varenyky (dumplings)"
                            width="1"
                            height="1"
                            decoding="async"
                        />
                        <h3 className="product__title">Varenyky (dumplings)</h3>
                    </a>
                    <a
                        href="https://multicook-franchise.com/en/menu/standard-menu/pelmeni"
                        className="product"
                    >
                        <img
                            src="images/02FwlQo3P68jvMod1aOgTWcUEBQqQ4DcnCvODpp3_res600x600_opt.jpg"
                            className="product__img"
                            alt="Pelmeni (dumplings)"
                            width="1"
                            height="1"
                            decoding="async"
                        />
                        <h3 className="product__title">Pelmeni (dumplings)</h3>
                    </a>
                    <a
                        href="https://multicook-franchise.com/en/menu/standard-menu/sirniki"
                        className="product"
                    >
                        <img
                            src="images/PcpuyzWZ70FyL0qC4UFEVCESerswuT0FOkx1F08N_res600x600_opt.jpg"
                            className="product__img"
                            alt="Syrnyky (cheese pancakes)"
                            width="1"
                            height="1"
                            decoding="async"
                        />
                        <h3 className="product__title">Syrnyky (cheese pancakes)</h3>
                    </a>
                    <a
                        href="https://multicook-franchise.com/en/menu/standard-menu/cebureki"
                        className="product"
                    >
                        <img
                            src="images/0Z3ffDNAPe7LipYqKyoYcBdlTUDiA6weDgWhDLcO_res600x600_opt.jpg"
                            className="product__img"
                            alt="Сhebureki"
                            width="1"
                            height="1"
                            decoding="async"
                        />
                        <h3 className="product__title">Сhebureki</h3>
                    </a>
                    <a
                        href="https://multicook-franchise.com/en/menu/standard-menu/mlinci"
                        className="product"
                    >
                        <img
                            src="images/y4NMFoSvWWq92C9EJhvJupoNmcHj8EY11OzoYkMY_res600x600_opt.jpg"
                            className="product__img"
                            alt="Crepes"
                            width="1"
                            height="1"
                            decoding="async"
                        />
                        <h3 className="product__title">Crepes</h3>
                    </a>
                    <a
                        href="https://multicook-franchise.com/en/menu/standard-menu/kotleti-ta-frikadelki"
                        className="product"
                    >
                        <img
                            src="images/FjKJOXhNK3YFSJ5XQ4DAsqDZJM6rj0QldceiTGZv_res600x600_opt.jpg"
                            className="product__img"
                            alt="Cutlets and Meatball"
                            width="1"
                            height="1"
                            decoding="async"
                        />
                        <h3 className="product__title">Cutlets and Meatball</h3>
                    </a>
                    <a
                        href="https://multicook-franchise.com/en/menu/standard-menu/deruni-ta-zrazi"
                        className="product"
                    >
                        <img
                            src="images/iTJtKt4nFmR2GBtrPgKHJnCtZ3BlODE3ixymL5PP_res600x600_opt.jpg"
                            className="product__img"
                            alt="Potato fritters (deruny) and Potato zrazy"
                            width="1"
                            height="1"
                            decoding="async"
                        />
                        <h3 className="product__title">
                            Potato fritters (deruny) and Potato zrazy
                        </h3>
                    </a>
                    <a
                        href="https://multicook-franchise.com/en/menu/standard-menu/golubci-ta-perec"
                        className="product"
                    >
                        <img
                            src="images/huDewFg98n7jpEeaW6VdSv7hQ81mEID8M3C7Pj8x_res600x600_opt.jpg"
                            className="product__img"
                            alt="Cabbage rolls and Stuffed peppers"
                            width="1"
                            height="1"
                            decoding="async"
                        />
                        <h3 className="product__title">
                            Cabbage rolls and Stuffed peppers
                        </h3>
                    </a>
                </div>
                <div className="menu__btns">
                    <a
                        href="https://multicook-franchise.com/en/menu"
                        className="menu__btn btn btn-red"
                    >Go to the menu</a
                    >
                </div>
            </div>
        </section>

        <section className="benefits-main">
            <div className="container">
                <h2 className="benefits-main__title title title-lg title--dumpling">
                    Why exactly Multi cook?
                </h2>
            </div>

            <div className="benefits-main__wrapper">
                <div className="benefits-main__slider">
                    <div className="swiper mySwiper slider-round" id="slider-round">
                        <ul className="swiper-wrapper slider-round__wrapper">
                            <li className="swiper-slide">
                                <img
                                    src="images/dumplings-2.webp"
                                    className="slider-round__img"
                                    alt="Dumplings"
                                    width="1"
                                    height="1"
                                    decoding="async"
                                    loading="lazy"
                                />
                            </li>
                            <li className="swiper-slide">
                                <img
                                    src="images/workplace.webp"
                                    className="slider-round__img"
                                    alt="Workplace"
                                    width="1"
                                    height="1"
                                    decoding="async"
                                    loading="lazy"
                                />
                            </li>
                            <li className="swiper-slide">
                                <img
                                    src="images/varenyky.webp"
                                    className="slider-round__img"
                                    alt="Varenyky"
                                    width="1"
                                    height="1"
                                    decoding="async"
                                    loading="lazy"
                                />
                            </li>
                            <li className="swiper-slide">
                                <img
                                    src="images/dumpling-flour.webp"
                                    className="slider-round__img"
                                    alt="Dumplings"
                                    width="1"
                                    height="1"
                                    decoding="async"
                                    loading="lazy"
                                />
                            </li>
                        </ul>
                        <div className="slider-round__actions">
                            <div className="swiper-pagination"></div>
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                        </div>
                    </div>
                </div>

                <div className="benefits-main__content container">
                    <div className="card-benefit">
                        <img
                            src="images/onion.png"
                            className="card-benefit__img"
                            alt="Onion"
                            width="1"
                            height="1"
                            decoding="async"
                            loading="lazy"
                        />
                        <h3 className="card-benefit__title">High quality</h3>
                    </div>
                    <div className="card-benefit">
                        <img
                            src="images/leaf.png"
                            className="card-benefit__img"
                            alt="Leaf"
                            width="1"
                            height="1"
                            decoding="async"
                            loading="lazy"
                        />
                        <h3 className="card-benefit__title">Wide range</h3>
                    </div>
                    <div className="card-benefit">
                        <img
                            src="images/tomato-front.png"
                            className="card-benefit__img"
                            alt="Tomato"
                            width="1"
                            height="1"
                            decoding="async"
                            loading="lazy"
                        />
                        <h3 className="card-benefit__title">Open production</h3>
                    </div>
                </div>
            </div>
            <img
                src="images/basil.png"
                className="benefits-main__basil"
                alt="Basil"
                width="1"
                height="1"
                decoding="async"
                loading="lazy"
            />
        </section>

        <section className="articles">
            <div className="container">
                <div className="articles__top">
                    <h2 className="articles__title title title-lg title--tomato">
                        Our blog
                    </h2>
                    <a
                        href="https://multicook-franchise.com/en/blog"
                        className="articles__link btn hover"
                        data-content="All articles"
                    >All articles</a
                    >
                </div>

                <div className="articles__content">
                    <article className="article">
                        <div className="article__img">
                            <a
                                href="https://multicook-franchise.com/en/blog/multi-cook-braga-portugaliia-daruje-nezabutni-smakovi-vrazennia"
                            >
                                <img
                                    src="images/K6ctBvQPz6ZuXYxrujUTnpnDihZBc3fQUWgeyIQQ.jpg"
                                    alt="MULTI COOK (Braga, Portugal) – gives an unforgettable taste experience"
                                    width="1"
                                    height="1"
                                    decoding="async"
                                    loading="lazy"
                                />
                            </a>
                        </div>
                        <div className="article__content">
                            <a
                                href="https://multicook-franchise.com/en/blog/multi-cook-braga-portugaliia-daruje-nezabutni-smakovi-vrazennia"
                            >
                                <h3 className="article__title">
                                    MULTI COOK (Braga, Portugal) – gives an unforgettable
                                    taste experience
                                </h3>
                            </a>
                            <time className="article__date date" dateTime="2024-08-26"
                            >26.08.2024</time
                            >
                        </div>
                    </article>
                    <article className="article">
                        <div className="article__img">
                            <a
                                href="https://multicook-franchise.com/en/blog/multi-cook-kaunas-litva-gotujetsia-legko-smakuje-neimovirno"
                            >
                                <img
                                    src="images/lc6qfkIsHWjbVHOiqF3sVqaYzp2vtK7JxVKmBA5l.jpg"
                                    alt="MULTI COOK (Kaunas, Lithuania) – easy to prepare, tastes incredible"
                                    width="1"
                                    height="1"
                                    decoding="async"
                                    loading="lazy"
                                />
                            </a>
                        </div>
                        <div className="article__content">
                            <a
                                href="https://multicook-franchise.com/en/blog/multi-cook-kaunas-litva-gotujetsia-legko-smakuje-neimovirno"
                            >
                                <h3 className="article__title">
                                    MULTI COOK (Kaunas, Lithuania) – easy to prepare, tastes
                                    incredible
                                </h3>
                            </a>
                            <time className="article__date date" dateTime="2024-08-26"
                            >26.08.2024</time
                            >
                        </div>
                    </article>
                    <article className="article">
                        <div className="article__img">
                            <a
                                href="https://multicook-franchise.com/en/blog/multi-cook-podgorica-cornogoriia"
                            >
                                <img
                                    src="images/K6EzOJNa2jzGdp5ZluTEL0iWDOfPgih76gEI7ZjK.jpg"
                                    alt="MULTI COOK (Подґоріца, Чорногорія) – домашні страви для сімейного затишку"
                                    width="1"
                                    height="1"
                                    decoding="async"
                                    loading="lazy"
                                />
                            </a>
                        </div>
                        <div className="article__content">
                            <a
                                href="https://multicook-franchise.com/en/blog/multi-cook-podgorica-cornogoriia"
                            >
                                <h3 className="article__title">
                                    MULTI COOK (Подґоріца, Чорногорія) – домашні страви для
                                    сімейного затишку
                                </h3>
                            </a>
                            <time className="article__date date" dateTime="2024-08-10"
                            >10.08.2024</time
                            >
                        </div>
                    </article>
                </div>
                <a
                    href="https://multicook-franchise.com/en/blog"
                    className="articles__btn btn btn-gray"
                >All articles</a
                >
            </div>
        </section>

        <section className="map-main">
            <div className="container">
                <div className="map-main__top">
                    <h2 className="articles__title title title-lg title--tomato">
                        Find a store
                    </h2>
                    <a
                        href="https://multicook-franchise.com/en/shops"
                        className="map-main__btn map-main__btn--desk btn btn-red"
                    >Search</a
                    >
                </div>
                <div className="map-main__content">
                    <div
                        id="mapMain"
                        data-lng="25.296001585900264"
                        data-lat="50.7294701451588"
                        data-route="https://multicook-franchise.com/api/shops/all"
                        data-key="AIzaSyA6CL-_aGE525qGKuZ9Wxd12THO5SHUVGI"
                    ></div>
                </div>

                <a
                    href="https://multicook-franchise.com/en/shops"
                    className="map-main__btn map-main__btn--mobile btn btn-red"
                >Search</a
                >
            </div>
        </section>
    </main>
}