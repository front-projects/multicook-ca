import { Link } from 'react-router-dom';
import Map from '../../components/Map/Map';
import HomeMenuItem from '../../components/Home/HomeMenuItem';
import {
  AdvFirst,
  AdvSecond,
  AdvThird,
  MenuIconChebureki,
  MenuIconChef,
  MenuIconGolubci,
  MenuIconKotleti,
  MenuIconMlinci,
  MenuIconPelm,
  MenuIconSirniki,
  MenuIconVareniki,
} from '../../components/UI/icons';
import Advantage from '../../components/Home/Advantage';
import { useEffect, useState } from 'react';
import { getStores } from '../../utils/requests';

export default function HomePageEn() {
  const [stores, setStores] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getStores();
      const array = Object.entries(data).map(([key, value]) => {
        return {
          ...value,
          id: key,
        };
      });
      setStores(array);
    };
    fetchData();
  }, []);

  const groupedData = stores
    ? stores.reduce((acc, item) => {
        if (!acc[item.city]) {
          acc[item.city] = [];
        }
        acc[item.city].push({
          address: item.address,
          open: item.open,
        });
        return acc;
      }, {})
    : [];

  return (
    <main className="page__main">
      <section className="banner">
        <div className="container banner__container">
          <div className="banner__content">
            <h1 className="banner__title title">
              Delivery of homemade semi-finished products
            </h1>
            <p className="text-[24px] mt-10">
              Homemade semi-finished products from Multicook. We cook - you
              relax
            </p>
            <p className="mt-2 font-bold">2340 Lake Shore Blvd West, Toronto</p>
            <div className="banner__btns btns">
              <a
                target='_blanc'
                href="https://www.ubereats.com/ca/store/multicook/P918tAFBUVCuJ9902TKoZw?srsltid=AfmBOorHF1C3pyS2ZCfXSqbIlp3E-dcW9_cYT7wtwisZF94s5JDwMSDx"
                className="btn hover:bg-[#8f5633]/50 rounded-xl bg-[#8f5633]"
              >
                Order delivery
              </a>
              <Link to="/en/menu" className=" text-black">
                Go to the menu
              </Link>
            </div>
          </div>
          <div className="banner-img rounded-[54px] mt-[-40px]">
            <img
              src="/images/photo-main-screen.jpg"
              alt=""
              className="rounded-[14px] max-sm:rounded-[34px]"
              decoding="async"
            />
          </div>
        </div>
      </section>
      <section className="menu mb-10">
        <div className="menu__container container">
          <div className="shops__content">
            <h2 className="title title-lg">Our stores</h2>
            <div>
              {Object.entries(groupedData).map(([key, value]) => {
                return (
                  <div key={key}>
                    <h3 className="shops__city">{key}</h3>
                    <ul className="shops__list">
                      {value.map((street) => (
                        <li key={street.address} className="shops__item">
                          {street.address}{' '}
                          {!street.open && (
                            <span className="text-[#8f5633]">(Open soon) </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="menu">
        <div className="menu__container container">
          <h2 className="menu__title title title-lg">Menu Multicook</h2>
          <p className="menu__text">
            In order to see the menu with prices, you need to go to the «Menu»
          </p>
          <div className="menu__content">
            <div className="grid grid-cols-4 w-full gap-4 max-lg:grid-cols-3 max-sm:grid-cols-2">
              <HomeMenuItem
                title="Varenyky"
                icon={<MenuIconVareniki />}
                to="/en/menu/pierogy"
              />
              <HomeMenuItem
                title="Dumplings"
                icon={<MenuIconPelm />}
                to="/en/menu/dumplings"
              />
              <HomeMenuItem
                title="Syrnyky"
                icon={<MenuIconSirniki />}
                to="/en/menu/syrnyky"
              />
              <HomeMenuItem
                title="Cabbage rolls"
                icon={<MenuIconGolubci />}
                to="/en/menu/cabbage-rolls"
              />
              <HomeMenuItem
                title="Other"
                icon={<MenuIconChef />}
                to="/en/menu/other"
              />
              <HomeMenuItem
                title="Chebureki"
                icon={<MenuIconChebureki />}
                to="/en/menu/chebureki"
              />
              <HomeMenuItem
                title="Crepes"
                icon={<MenuIconMlinci />}
                to="/en/menu/crepes"
              />
              <HomeMenuItem
                title="Cutles"
                icon={<MenuIconKotleti />}
                to="/en/menu/cutlets"
              />
            </div>
          </div>
          <div className="menu__btns">
            <Link
              to="/en/menu"
              className="menu__btn btn bg-[#8f5633] hover:bg-[#8f5633]/50 rounded-xl"
            >
              Go to the menu
            </Link>
          </div>
        </div>
      </section>
      {/* <div  className='h-[10px]'></div> */}
      <section className="records" id="about-us">
        <div className="records__container container">
          <div className="records__title">
            <h2 className="title title-md">Our advantages</h2>
          </div>
          <div className="records__content" data-block="counter-cards">
            <Advantage
              title="Open production"
              icon={<AdvFirst />}
              desc="Cooking behind glass in the
in the open kitchen"
            />
            <Advantage
              title="Wide range of products"
              icon={<AdvSecond />}
              desc="A variety of breakfast, lunch and dinner options"
            />
            <Advantage
              title="High quality"
              icon={<AdvThird />}
              desc="We use only natural fresh products"
            />
          </div>
        </div>
      </section>

      <section className="w-screen flex items-center justify-center mt-[140px]">
        <div className="w-[1160px] max-[1160px]:w-[960px] max-sm:w-[90vw]">
          <h2 className="title title-md">About Us</h2>
          <div className="flex w-full mt-10 text-[18px] max-sm:flex-col max-sm:gap-4">
            <div className="border-l-2 border-[#AD8865] w-1/2 pl-4 pr-10 flex flex-col gap-4 max-sm:w-full">
              <p>
                Our Multicook stores are stores of real homemade
                semi-finished products.
              </p>
              <p>
                Our peculiarity is that everyone can see the cooking process
                with their own eyes, because the workshops are located directly
                in the stores behind the glass.
              </p>
              <p>
                The raw materials for our semi-finished products are delivered
                daily, and the finished products do not stay in cold storage for
                long.
              </p>
            </div>
            <div className="border-l-2 border-[#AD8865] w-1/2 pl-4 pr-10 flex flex-col gap-4 max-sm:w-full">
              <p>
                We use only natural ingredients for our products. And our
                professional chefs make your favorite dishes with their own
                hands according to home recipes.
              </p>
              <p>
                We do not prepare a lot of stock. To keep everything fresh, the
                workshops work every day.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-14 max-sm:grid-cols-1">
            <div className="w-full relative h-[200px]">
              <img
                src="/images/onas_image2.jpg"
                alt=""
                className="object-cover rounded-xl"
              />
            </div>
            <div className="w-full relative h-[200px]">
              <img
                src="/images/onas_image3.jpg"
                alt=""
                className="object-cover rounded-xl"
              />
            </div>
            <div className="w-full relative h-[200px] max-sm:hidden">
              <img
                src="/images/onas_image1.jpg"
                alt=""
                className="object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="w-full mt-20">
            <h2 className="title title-md ">
              See the cooking process with your own eyes
            </h2>
            <div className="w-1/2 h-[360px] mt-10 max-sm:w-full">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/8Luq_Bn8uzU?si=MHH7lv5qiy3-KJGn"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Map />
    </main>
  );
}
