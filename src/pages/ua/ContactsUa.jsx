export default function ContactsUa() {
  return (
    <main className="page__main">
      <section className="contacts-page">
        <div className="container">
          <div className="contacts-page__content">
            <h2 className="contacts-page__title contacts-page__title--mobile title-ua">
              Наші контакти
            </h2>
            <div className="contacts-page__img">
              <img
                src="/images/contacts.png"
                alt="Shop Multi Cook"
                width="1"
                height="1"
                decoding="async"
              />
            </div>

            <div className="contacts-page__inner">
              <h2 className="contacts-page__title contacts-page__title--desktop title-ua">
                Наші контакти
              </h2>

              <dl className="contacts-blocks contacts-page__blocks">
                <div className="contacts-block">
                  <dt className="contacts-block__title">Електронна пошта</dt>
                  <dd className="contacts-block__desc">
                    <a href="mailto:multicookmain@gmail.com">
                      multicookmain@gmail.com
                    </a>
                  </dd>
                </div>

                <div className="contacts-block">
                  {/* <dt className="contacts-block__title">Work schedule</dt> */}
                  <dd className="contacts-block__desc">
                    <br />
                  </dd>
                </div>

                <div className="contacts-block">
                  <dt className="contacts-block__title">Номер телефону</dt>
                  <dd className="contacts-block__desc">
                    <a href="tel:+1(647)234-0666">+1 (647) 234-0666</a>
                    <a href="tel:+1(437)962-1141">+1 (437) 962-1141</a>
                  </dd>
                </div>

                <div className="contacts-block">
                  <dt className="contacts-block__title">Соціальні мережі</dt>

                  <dd>
                    <ul className="socials-list">
                      <li>
                        <a
                          href="https://www.youtube.com/channel/UC85Qqq-wFDI1uUThLLGqEdQ"
                          className="socials-list__link"
                          target="_blank"
                        >
                          <svg
                            className="socials-list__icon socials-list__icon--red"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <use xlinkHref="./images/youtube.svg#youtube"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.facebook.com/share/g/14JzSZjMhw/?mibextid=K35XfP"
                          className="socials-list__link"
                          target="_blank"
                        >
                          <svg
                            className="socials-list__icon socials-list__icon--red"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <use xlinkHref="./images/facebook.svg#facebook"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
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
                      </li>
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
