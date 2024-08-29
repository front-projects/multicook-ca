import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../utils/getProduct";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";



export default function ProductPageEn() {
    const { product } = useParams();
    const [activeProduct, setActiveProduct] = useState();
    const swiperRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getProduct(product);
            setActiveProduct(data);
        }
        fetchData();
    }, [product]);

    const goToSlide = (index) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index);
        }
    };
    if (!activeProduct) {
        return (
            <main className="page__main">
                <section className="produce">
                    <div className="container">No product</div>
                </section>
            </main>
        );
    }

    return (
        <main className="page__main">
            <section className="produce">
                <div className="container">
                    <div className="produce__inner">
                        <h2 className="produce-title produce-title--mobile">{activeProduct.title}</h2>
                        <div className="produce__slider">
                            <div className="swiper mySwiper slider-aside produce__slider-aside" id="slider-aside">
                                <ul className="swiper-wrapper slider-aside__wrapper">
                                    {activeProduct.images.map((img, index) => {
                                        return <li className="swiper-slide slider-aside__slide" onClick={() => goToSlide(index)}>
                                            <img src={img} className="slider-aside__img" alt="Image" width="1" height="1" decoding="async" loading="lazy" />
                                        </li>
                                    })}
                                </ul>
                            </div>
                            <Swiper
                                className="swiper mySwiper slider-base"
                                id="slider-base"
                                spaceBetween={10}
                                slidesPerView={1}
                                direction='horizontal'
                                navigation
                                ref={swiperRef}
                                pagination={{ clickable: true }}
                            >
                                {activeProduct.images.map((img, index) => (
                                    <SwiperSlide key={index} className="swiper-slide slider-base__slide">
                                        <img
                                            src={img}
                                            className="slider-base__img"
                                            alt="Bilberry varenyky (dumplings)"
                                            width="1"
                                            height="1"
                                            decoding="async"
                                            loading="lazy"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className="produce__content">
                            <h2 className="produce-title produce-title--desktop">{activeProduct.title}</h2>
                            <div className="produce__reminder reminder">
                                You must
                                <button type="button" className="reminder__link reminder__link--desktop" data-btn="location-desktop">select a city</button>
                                <button type="button" className="reminder__link reminder__link--mobile" data-btn="burger-location">select a city</button>
                                to display the price
                            </div>
                            <div className="produce__description">
                                <h3 className="produce-title produce-title--sm">Description</h3>
                                <p className="produce__text">
                                    <div className="text-[16px]">{activeProduct.description}</div>
                                    {/* <b><span>premium wheat </span><span>flour</span></b><span>, quick-frozen bilberries, drinking water, white sugar, refined sunflower oil, salt.</span> */}
                                </p>
                            </div>
                            <div className="produce__recipy">
                                <h3 className="produce-title produce-title--sm">Recipe</h3>
                                <div className="produce__text">
                                    <div className="text-[16px]">{activeProduct.recipe}</div>
                                    {/* <p>frozen varenyky are put into boiling salted water. They are brought to a boil while stirring and cooked for 5-7 minutes. Cooked varenyky are taken out from the water and dressed to taste (with butter or sour cream).</p>
                                    <p><b>Refreezing is not allowed.</b></p> */}
                                </div>
                            </div>
                            <div className="produce__video">
                                <iframe width="100%" height="355" src={activeProduct.video} frameBorder="0" allowFullScreen=""></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}


