export default function ContactsEn() {
  return <main class="page__main">
    <section class="contacts-page">
      <div class="container">

        <div class="contacts-page__content">
          <h2 class="contacts-page__title contacts-page__title--mobile title">Our Contacts</h2>
          <div class="contacts-page__img">
            <img src="./images/shop.webp" alt="Shop Multi Cook" width="1" height="1" decoding="async" />
          </div>

          <div class="contacts-page__inner">
            <h2 class="contacts-page__title contacts-page__title--desktop title">Our Contacts</h2>

            <dl class="contacts-blocks contacts-page__blocks">

              <div class="contacts-block">
                <dt class="contacts-block__title">Email</dt>
                <dd class="contacts-block__desc">
                  <a href="mailto:multicook.franch@gmail.com">multicook.franch@gmail.com</a>
                </dd>
              </div>

              <div class="contacts-block">
                <dt class="contacts-block__title">Work schedule</dt>
                <dd class="contacts-block__desc">
                  <br />

                </dd>
              </div>

              <div class="contacts-block">
                <dt class="contacts-block__title">Telephone number</dt>
                <dd class="contacts-block__desc">
                  <a href="tel:+380660123865">+380660123865</a>
                </dd>
              </div>

              <div class="contacts-block">
                <dt class="contacts-block__title">Social media</dt>

                <dd>

                  <ul class="socials-list">
                    <li>
                      <a href="https://www.youtube.com/channel/UC85Qqq-wFDI1uUThLLGqEdQ" class="socials-list__link" target="_blank">
                        <svg class="socials-list__icon socials-list__icon--red" xmlns="http://www.w3.org/2000/svg">
                          <use xlink:href="/build/assets/site/img/socials/youtube.svg#youtube">
                          </use>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/multicookfranch" class="socials-list__link" target="_blank">
                        <svg class="socials-list__icon socials-list__icon--red" xmlns="http://www.w3.org/2000/svg">
                          <use xlink:href="/build/assets/site/img/socials/facebook.svg#facebook">
                          </use>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/multicook_franchise?igshid=OGQ5ZDc2ODk2ZA==" class="socials-list__link" target="_blank">
                        <svg class="socials-list__icon socials-list__icon--red" xmlns="http://www.w3.org/2000/svg">
                          <use xlink:href="/build/assets/site/img/socials/instagram.svg#instagram">
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
