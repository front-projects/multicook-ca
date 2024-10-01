import { useEffect, useState } from 'react';
import { getStores } from '../../utils/requests';
import MapUa from '../../components/Map/MapUa';

export default function ShopsUa() {
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
      <section className="shops min-h-[100dvh]">
        <div className="shops__container container">
          <MapUa search={true} />
          <div className="shops__content">
            <h2 className="title title-lg">Всі магазини</h2>
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
                            <span className="text-[#8f5633]">(Відкриття незабаром) </span>
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
    </main>
  );
}
