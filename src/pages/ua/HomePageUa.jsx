import { Link } from 'react-router-dom';
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
import MapUa from '../../components/Map/MapUa';

export default function HomePageUa() {
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
            <h1 className="banner__title-ua title-ua">
              Доставка домашніх напівфабрикатів
            </h1>
            <p className="text-[22px] mt-10 text-gray-600">
              Домашні напівфабрикати від Multicook. Ми готуємо — ви
              відпочиваєте!
            </p>
            <p className="mt-2 font-bold">unit 9-11, 1900 Dundas St E, Mississauga</p>
            <div className="banner__btns btns">
              <a
                target="_blanc"
                href="https://www.ubereats.com/ca/store/multicook-dundas/94Mt1Zo1VQCN5GR7qDU8MQ?srsltid=AfmBOorz2sz6SPDa9LmdoN47ohl2j-P1H4NKT_oBFix-u7Xi8lMFoJPg"
                className="btn hover:bg-[#8f5633]/50 rounded-xl bg-[#8f5633]"
              >
                Замовити доставку
              </a>
              <Link to="/ua/menu" className=" text-black">
                Перейти в меню
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
            <h2 className="title-ua title-lg">Наші магазини</h2>
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
                            <span className="text-[#8f5633] max-sm:text-[12px]">
                              (Відкриття незабаром){' '}
                            </span>
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
          <h2 className="menu__title title-ua title-lg">Меню Multicook</h2>
          <p className="menu__text mt-2">
            Для того, щоб побачити меню з цінами, потрібно перейти в розділ
            «Меню»
          </p>
          <div className="menu__content">
            <div className="grid grid-cols-4 w-full gap-4 max-lg:grid-cols-3 max-sm:grid-cols-2">
              <HomeMenuItem
                title="Вареники"
                icon={<MenuIconVareniki />}
                to="/ua/menu/pierogy"
              />
              <HomeMenuItem
                title="Пельмені"
                icon={<MenuIconPelm />}
                to="/ua/menu/dumplings"
              />
              <HomeMenuItem
                title="Сирники"
                icon={<MenuIconSirniki />}
                to="/ua/menu/syrnyky"
              />
              <HomeMenuItem
                title="Голубці"
                icon={<MenuIconGolubci />}
                to="/ua/menu/cabbage-rolls"
              />
              <HomeMenuItem
                title="Деруни"
                icon={<MenuIconChef />}
                to="/ua/menu/deruny"
              />
              <HomeMenuItem
                title="Чебуреки"
                icon={<MenuIconChebureki />}
                to="/ua/menu/chebureki"
              />
              <HomeMenuItem
                title="Млинці"
                icon={<MenuIconMlinci />}
                to="/ua/menu/crepes"
              />
              <HomeMenuItem
                title="Котлети"
                icon={<MenuIconKotleti />}
                to="/ua/menu/cutlets"
              />
            </div>
          </div>
          <div className="menu__btns">
            <Link
              to="/ua/menu"
              className="menu__btn btn bg-[#8f5633] hover:bg-[#8f5633]/50 rounded-xl"
            >
              Перейти в меню
            </Link>
          </div>
        </div>
      </section>
      {/* <div  className='h-[10px]'></div> */}
      <section className="records" id="about-us">
        <div className="records__container container">
          <div className="records__title">
            <h2 className="title-ua title-md">Наші переваги</h2>
          </div>
          <div className="records__content" data-block="counter-cards">
            <Advantage
              title="Відкрите виробництво"
              icon={<AdvFirst />}
              desc="Готуємо за склом на відкритій кухні"
            />
            <Advantage
              title="Широкий асортимент"
              icon={<AdvSecond />}
              desc="Різноманітні варіанти сніданків, обідів та вечерь"
            />
            <Advantage
              title="Висока якість"
              icon={<AdvThird />}
              desc="Використовуємо лише натуральні свіжі продукти"
            />
          </div>
        </div>
      </section>

      <section className="w-screen flex items-center justify-center mt-[140px]">
        <div className="w-[1160px] max-[1160px]:w-[960px] max-sm:w-[90vw]">
          <h2 className="title-ua title-md">Про нас</h2>
          <div className="flex w-full mt-10 text-[16px] max-sm:flex-col max-sm:gap-4">
            <div className="border-l-2 border-[#AD8865] w-1/2 pl-4 pr-10 flex flex-col gap-4 max-sm:w-full">
              <p>
                Наші магазини Multicook – це магазини справжніх домашніх
                напівфабрикатів.
              </p>
              <p>
                Нашою особливістю є те, що кожен може побачити процес
                приготування страв на власні очі, адже цехи розташовані
                безпосередньо у магазинах за склом.
              </p>
              <p>
                Сировина для наших напівфабрикатів постачається щоденно, а
                готові вироби довго не затримуються навіть у холодильних
                камерах.
              </p>
            </div>
            <div className="border-l-2 border-[#AD8865] w-1/2 pl-4 pr-10 flex flex-col gap-4 max-sm:w-full">
              <p>
                Для виробництва продукції ми використовуємо тільки натуральні
                інгредієнти. А професійні кухарі власноруч виготовляють ваші
                улюблені страви за домашніми рецептами.
              </p>
              <p>
                Ми не готуємо багато запасів. Щоб усе було свіже, цехи працюють
                щодня.
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
            <h2 className="title-ua title-md ">
              Побачте процес приготування страв на власні очі
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

      <MapUa />
    </main>
  );
}
