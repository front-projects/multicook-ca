import { Link } from "react-router-dom";

export default function FranchiseEn() {
    return <main className="page__main">
        <section className="banner-aside">
            <div className="banner-aside__wrapper">
                <div className="container banner-aside__container">
                    <div className="banner-aside__content banner-aside__content--left">
                        <h1 className="banner-aside__title title title--varenyk">Our value is the trust of our partners</h1>
                        <p>
                            In order to see the menu with prices, you need to go to the Menu section and select a city
                        </p>
                        <div className="banner-aside__btns btns">
                            <button data-btn="buy-franchise" className="btn btn-red">Buy franchise</button>
                            <Link to="/en/menu" className="btn btn-transparent">Go to the menu</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner-aside__round">
                <svg className="banner-aside__shine-direct">
                    <use xlinkHref="images/shine-direct.svg#shine-direct"></use>
                </svg>
                <svg className="banner-aside__shine-wave">
                    <use xlinkHref="images/shine-wave.svg#shine-wave"></use>
                </svg>
                <div className="banner-aside__photo">
                    <img src="images/shop.webp" alt="Multi Cook shop" width="1" height="1" decoding="async" />
                </div>
            </div>
        </section>
        <section className="benefits  benefits--less ">
            <h2 className="hide">Benefits</h2>
            <div className="container benefits__container">
                <div className="benefits__inner">
                    <div className="benefits__content">
                        <img src="images/mc-round.svg" className="benefits__mc" alt="Multi cook" width="1" height="1" decoding="async" />
                        <img src="images/dumpling.webp" className="benefits__dumpling" alt="Plate with dumplings" width="1" height="1" decoding="async" />
                        <div className="benefits__item">Quick payback</div>
                        <div className="benefits__item">Easy start</div>
                        <div className="benefits__item">Famous brand</div>
                    </div>
                </div>
                <img src="images/cheesecakes.webp" className="benefits__cheesecakes" alt="Plate with cheesecakes" width="1" height="1" decoding="async" />
            </div>
        </section>
        <section className="cooperation" data-content="buy-franchise">
            <div className="cooperation__photo cooperation__photo--left">
                <div className="cooperation__photo-wrapper cooperation__photo-wrapper--left">
                    <img src="images/workplace.webp" alt="Workplace" width="1" height="1" decoding="async" />
                </div>
            </div>

            <div className="cooperation__container">
                <div className="cooperation__content" data-content="form">
                    <h2 className="cooperation__title title title-md">
                        Multi cook is your
                        <span className="title__foods">assistant</span>
                    </h2>


                    <form className="cooperation__form form">
                        <input type="hidden" name="_franchise" value="franchise" />        <label className="field ">
                            <span className="hide">Name</span>
                            <input type="text" className="field__input" placeholder="Name" />
                        </label>

                        <div className="form__row form__field">

                            <label className="field ">
                                <span className="hide">City</span>
                                <input type="text" className="field__input" placeholder="City" />
                            </label>
                        </div>
                        <label className="field form__field ">
                            <span className="hide">Telephone number</span>
                            <input type="tel" name="phone" className="field__input field__input--right" placeholder="Telephone number" />
                        </label>

                        <button type="submit" className="cooperation__btn btn btn-red ">
                            Send an application
                        </button>
                    </form>
                </div>

            </div>


            <div className="cooperation__photo cooperation__photo--right">
                <div className="cooperation__photo-wrapper cooperation__photo-wrapper--right">
                    <img src="images/dumplings-1.webp" alt="Plate with dumplings" width="1" height="1" decoding="async" />
                </div>
            </div>
        </section>
        <section className="contacts-section">
            <div className="contacts-section__container container">
                <h2 className="title title-lg">Our contacts</h2>

                <dl className="contacts-blocks contacts-section__blocks">

                    <div className="contacts-block">
                        <dt className="contacts-block__title">Email</dt>
                        <dd className="contacts-block__desc">
                            <a href="/cdn-cgi/l/email-protection#dcb1a9b0a8b5bfb3b3b7f2baaebdb2bfb49cbbb1bdb5b0f2bfb3b1"><span className="__cf_email__" data-cfemail="44293128302d272b2b2f6a2236252a272c042329252d286a272b29">multicook.franch@gmail.com</span></a>
                        </dd>
                    </div>

                    <div className="contacts-block">
                        <dt className="contacts-block__title">Work schedule</dt>
                        <dd className="contacts-block__desc">
                            <br />

                        </dd>
                    </div>

                    <div className="contacts-block">
                        <dt className="contacts-block__title">Telephone number</dt>
                        <dd className="contacts-block__desc">
                            <a href="tel:+380660123865">+380660123865</a>
                        </dd>
                    </div>

                    <div className="contacts-block">
                        <dt className="contacts-block__title">Social media</dt>

                        <dd>

                            <ul className="socials-list">
                                <li>
                                    <a href="https://www.youtube.com/channel/UC85Qqq-wFDI1uUThLLGqEdQ" className="socials-list__link" target="_blank">
                                        <svg className="socials-list__icon socials-list__icon--red">
                                            <use xlinkHref="images/youtube.svg#youtube">
                                            </use>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/multicookfranch" className="socials-list__link" target="_blank">
                                        <svg className="socials-list__icon socials-list__icon--red">
                                            <use xlinkHref="images/facebook.svg#facebook">
                                            </use>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/multicook_franchise?igshid=OGQ5ZDc2ODk2ZA==" className="socials-list__link" target="_blank">
                                        <svg className="socials-list__icon socials-list__icon--red">
                                            <use xlinkHref="images/instagram.svg#instagram">
                                            </use>
                                        </svg>
                                    </a>
                                </li>
                            </ul>

                        </dd>

                    </div>

                </dl>
            </div>
        </section>
    </main >
}