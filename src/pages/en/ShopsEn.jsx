import { useEffect, useState } from 'react';
import Map from '../../components/Map/Map';
import { getStores } from '../../utils/getStores';

export default function ShopsEn() {
  const [stores, setStores] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getStores();
      setStores(data);
    };
    fetchData();
  }, []);

  const groupedData = stores
    ? stores.reduce((acc, item) => {
        if (!acc[item.city]) {
          acc[item.city] = [];
        }
        acc[item.city].push(item.address);
        return acc;
      }, {})
    : [];

  console.log(groupedData);

  return (
    <main className="page__main">
      <section className="shops">
        <div className="shops__container container">
          <Map search={true} />
          <div className="shops__content">
            <h2 className="title title-lg">All stores</h2>
            <div>
              {Object.entries(groupedData).map(([key, value]) => {
                return (
                  <div key={key}>
                    <h3 className="shops__city">{key}</h3>
                    <ul className="shops__list">
                      {value.map((street) => (
                        <li key={street} className="shops__item">
                          {street}
                        </li>
                      ))}
                      {/* <li className="shops__item">Produkcyjna, 84 lok. 50</li> */}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
