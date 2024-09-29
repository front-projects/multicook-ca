import { useEffect, useState } from 'react';
import Map from '../../components/Map/Map';
import { getStores } from '../../utils/requests';

export default function ShopsEn() {
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
    </main>
  );
}
