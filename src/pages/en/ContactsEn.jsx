export default function ContactsEn() {
  return <main className="page__main">
    <section className="contacts-page">
      <div className="container">

        <div className="contacts-page__content">
          <h2 className="contacts-page__title contacts-page__title--mobile title">Our Contacts</h2>
          <div className="contacts-page__img">
            <img src="./images/shop.webp" alt="Shop Multi Cook" width="1" height="1" decoding="async" />
          </div>

          <div className="contacts-page__inner">
            <h2 className="contacts-page__title contacts-page__title--desktop title">Our Contacts</h2>

            <dl className="contacts-blocks contacts-page__blocks">

              <div className="contacts-block">
                <dt className="contacts-block__title">Email</dt>
                <dd className="contacts-block__desc">
                  <a href="mailto:multicook.franch@gmail.com">multicook.franch@gmail.com</a>
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
                        <svg className="socials-list__icon socials-list__icon--red" xmlns="http://www.w3.org/2000/svg">
                          <use xlinkHref="./images/youtube.svg#youtube">
                          </use>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/multicookfranch" className="socials-list__link" target="_blank">
                        <svg className="socials-list__icon socials-list__icon--red" xmlns="http://www.w3.org/2000/svg">
                          <use xlinkHref="./images/facebook.svg#facebook">
                          </use>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/multicook_franchise?igshid=OGQ5ZDc2ODk2ZA==" className="socials-list__link" target="_blank">
                        <svg className="socials-list__icon socials-list__icon--red" xmlns="http://www.w3.org/2000/svg">
                          <use xlinkHref="./images/instagram.svg#instagram">
                          </use>
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
}
