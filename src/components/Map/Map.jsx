import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Link } from 'react-router-dom';
import { darkTheme } from './DarkTheme';
import { useEffect, useState } from 'react';
import { getStores } from '../../utils/requests';
import Select from 'react-select';
import { customStyles } from './CustomStyles';
import { CiSearch } from 'react-icons/ci';

const API_KEY = import.meta.env.GOOGLE_API_KEY;

export default function Map({ search }) {
  console.log(API_KEY)
  const [markers, setMarkers] = useState();
  const [options, setOptions] = useState();

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
  });

  const [map, setMap] = useState(null);
  const containerStyle = {
    width: '100%',
    height: '525px',
    borderRadius: '50px',
    marginTop: '20px',
  };
  const center = { lat: 43.61663452743724, lng: -79.48799478021704 };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getStores();
      let arr = [];
      const array = Object.entries(data).map(([key, value]) => {
        return {
          id: key,
          ...value,
          position: {
            lat: +value.lat,
            lng: +value.lan,
          },
        };
      });

      array.forEach((store) => {
        arr.push({
          value: {
            lat: +store.lat,
            lng: +store.lan,
          },
          label: `${store.city}, ${store.address}`,
        });
      });
      setOptions(arr);
      setMarkers(array);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (map && markers) {
      markers.forEach((marker) => {
        const googleMarker = new google.maps.Marker({
          position: marker.position,
          map,
          zIndex: 5,
          icon: './marker.svg',
        });
        googleMarker.addListener('click', () => {
          map.setCenter(marker.position);
          map.setZoom(15);
        });
      });
    }
  }, [map, markers]);

  const changeStore = (e) => {
    map.setCenter(e.value);
    map.setZoom(15);
  };

  return (
    <section className="map-main max-md:mt-2">
      <div className="container max-sm:px-0">
        <div className="map-main__top">
          <h2
            className={`articles__title title title-lg ${!search ? 'title--tomato' : 'hidden'}`}
          >
            Find a store
          </h2>
          {!search && (
            <Link
              to="/en/shops"
              className={`map-main__btn map-main__btn--desk btn bg-[#8f5633] hover:bg-[#8f5633]/50 rounded-xl`}
            >
              Search
            </Link>
          )}
        </div>
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            options={{
              styles: darkTheme,
              mapTypeControl: false,
              fullscreenControl: false,
              streetViewControl: false,
              zoomControl: false,
            }}
            zoom={8}
            onLoad={(map) => setMap(map)}
            onUnmount={() => setMap(null)}
          >
            {search && (
              <div className="shops__search">
                <div className="search-map">
                  <div className="search-map__text text-white">
                    Enter the address or city in which you are interested in the
                    store.
                  </div>

                  <div
                    className="dropdown search-map__field"
                    data-dropdown="shops"
                    data-block="dropdown"
                    data-current="dropdown"
                  >
                    <Select
                      options={options}
                      styles={customStyles}
                      onChange={changeStore}
                      placeholder="Search"
                      components={{
                        DropdownIndicator: () => (
                          <span
                            role="img"
                            aria-label="search"
                            style={{ paddingRight: '10px', color: '#ccc' }}
                          >
                            <CiSearch />
                          </span>
                        ),
                        IndicatorSeparator: null,
                      }}
                    ></Select>
                  </div>
                </div>
              </div>
            )}
          </GoogleMap>
        ) : (
          <></>
        )}
      </div>
      {!search && (
        <Link
          to="/en/shops"
          className="map-main__btn map-main__btn--mobile btn bg-[#8f5633] hover:bg-[#8f5633]/50 rounded-xl"
        >
          Search
        </Link>
      )}
    </section>
  );
}
