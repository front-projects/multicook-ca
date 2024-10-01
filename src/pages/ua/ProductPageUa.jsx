import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { getProduct } from '../../utils/requests';
import { IoChevronBackOutline } from 'react-icons/io5';

import { useLocation } from 'react-router-dom';

export default function ProductPageUa() {
  const { product } = useParams();
  const [activeProduct, setActiveProduct] = useState();
  const location = useLocation();
  const swiperRef = useRef(null);
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get('category');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProduct(category, product);
      setActiveProduct(data);
    };
    fetchData();
  }, [product, location]);

  const goToSlide = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };
  if (!activeProduct) {
    return (
      <main className="page__main">
        <section className="produce min-h-[100vh]">
          <div className="container">Продукт відсутній</div>
        </section>
      </main>
    );
  }

  return (
    <main className="page__main">
      <section className="produce">
        <div className="container">
          <Link to={`/ua/menu/${category}`} className="flex items-center gap-2">
            <IoChevronBackOutline />
            Назад в меню
          </Link>

          <div className="produce__inner">
            <h2 className="produce-title produce-title--mobile">
              {activeProduct.nameUa}
            </h2>
            <div className="produce__slider">
              <div
                className="swiper mySwiper slider-aside produce__slider-aside"
                id="slider-aside"
              >
                <ul className="swiper-wrapper slider-aside__wrapper">
                  {activeProduct.images ? (
                    Object.values(activeProduct.images).map((img, index) => {
                      return (
                        <li
                          className="swiper-slide slider-aside__slide"
                          onClick={() => goToSlide(index)}
                        >
                          <img
                            src={img}
                            className="slider-aside__img"
                            alt="Image"
                            width="1"
                            height="1"
                            decoding="async"
                            loading="lazy"
                          />
                        </li>
                      );
                    })
                  ) : (
                    <div>Відсутні фотографії</div>
                  )}
                </ul>
              </div>
              <Swiper
                className="swiper mySwiper slider-base"
                id="slider-base"
                spaceBetween={10}
                slidesPerView={1}
                direction="horizontal"
                navigation
                ref={swiperRef}
                pagination={{ clickable: true }}
              >
                {activeProduct.images ? (
                  Object.values(activeProduct.images).map((img, index) => (
                    <SwiperSlide
                      key={index}
                      className="swiper-slide slider-base__slide"
                    >
                      <img
                        src={img}
                        className="slider-base__img rounded-md"
                        alt="Bilberry varenyky (dumplings)"
                        width="1"
                        height="1"
                        decoding="async"
                        loading="lazy"
                      />
                    </SwiperSlide>
                  ))
                ) : (
                  <div>Відсутні фотографії</div>
                )}
              </Swiper>
            </div>
            <div className="produce__content">
              <h2 className="produce-title produce-title--desktop font-['Aria']">
                {activeProduct.nameUa}
              </h2>
              <div className="produce__reminder reminder font-['Arial']">
                Ціна: {activeProduct.price}
              </div>
              <div className="produce__description">
                <h3 className="produce-title produce-title--sm">Склад</h3>
                <p className="produce__text">
                  <div className="text-[16px]">
                    {activeProduct.compositionUa}
                  </div>
                  {/* <b><span>premium wheat </span><span>flour</span></b><span>, quick-frozen bilberries, drinking water, white sugar, refined sunflower oil, salt.</span> */}
                </p>
              </div>
              <div className="produce__recipy">
                <h3 className="produce-title produce-title--sm">Спосіб приготування</h3>
                <div className="produce__text">
                  <div className="text-[16px]">{activeProduct.coockingUa}</div>
                  {/* <p>frozen varenyky are put into boiling salted water. They are brought to a boil while stirring and cooked for 5-7 minutes. Cooked varenyky are taken out from the water and dressed to taste (with butter or sour cream).</p>
                                    <p><b>Refreezing is not allowed.</b></p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
