import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Link } from 'react-router-dom';
import { darkTheme } from './DarkTheme';
import { useEffect, useState } from 'react';
import { getStores } from '../../utils/getStores';
import Select from 'react-select';
import { customStyles } from './CustomStyles';
import { CiSearch } from 'react-icons/ci';

export default function Map({ search }) {
  const [markers, setMarkers] = useState();
  const [options, setOptions] = useState();

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDBqYL2IhNhB8lffdZwhUzto6X74mA1gIM',
  });

  const [map, setMap] = useState(null);
  const containerStyle = {
    width: '100%',
    height: '525px',
    borderRadius: '50px',
    marginTop: '20px',
  };
  const center = { lat: 55.765621409256326, lng: -105.89381747975074 };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getStores();
      let arr = [];
      data.forEach((store) => {
        arr.push({
          value: store.position,
          label: `${store.city}, ${store.address}`,
        });
      });
      setOptions(arr);
      setMarkers(data);
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
          map.setZoom(10);
        });
      });
    }
  }, [map, markers]);

  const changeStore = (e) => {
    map.setCenter(e.value);
    map.setZoom(10);
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
              className={`map-main__btn map-main__btn--desk btn btn-red`}
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
            zoom={6}
            onLoad={(map) => setMap(map)}
            onUnmount={() => setMap(null)}
          >
            {search && (
              <div className="shops__search">
                <div className="search-map">
                  <div className="search-map__text">
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

                    <ul className="dropdown-list" data-list="shops">
                      <li className="hide">
                        <button
                          type="button"
                          className="dropdown-list__link"
                          data-id="10"
                          data-btn="shops"
                        >
                          Wroclaw, Sieradzka, 7
                        </button>{' '}
                      </li>
                      <li className="hide">
                        <button
                          type="button"
                          className="dropdown-list__link"
                          data-id="169"
                          data-btn="shops"
                        >
                          Batumi, Batumi. Vakhtang Gorgasali str. 147
                        </button>{' '}
                      </li>
                    </ul>
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
          className="map-main__btn map-main__btn--mobile btn btn-red"
        >
          Search
        </Link>
      )}
    </section>
  );
}
