import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { Link } from 'react-router-dom';
import { darkTheme } from './DarkTheme';

export default function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDBqYL2IhNhB8lffdZwhUzto6X74mA1gIM',
  });

  const [map, setMap] = React.useState(null);
  const containerStyle = {
    width: '100%',
    height: '525px',
    borderRadius: '50px',
    marginTop: '20px',
  };
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);
    setMap(map);
  }, []);
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const center = { lat: 55.765621409256326, lng: -105.89381747975074 };

  const markers = [
    {
      id: 1,
      position: { lat: 55.765621409256326, lng: -105.89381747975074 },
      icon: '/marker.svg',
    },
    {
      id: 2,
      position: { lat: 55.765621409256326, lng: -107.89381747975074 },
      icon: './marker.svg',
    },
    // Додайте більше маркерів за потреби
  ];
  return (
    <section className="map-main">
      <div className="container">
        <div className="map-main__top">
          <h2 className="articles__title title title-lg title--tomato">
            Find a store
          </h2>
          <Link
            to="/en/shops"
            className="map-main__btn map-main__btn--desk btn btn-red"
          >
            Search
          </Link>
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
            onClick={(e) => console.log(e.latLng.lng(), e.latLng.lat())}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            {markers.map((marker) => (
              <Marker key={marker.id} position={marker.position} />
            ))}
          </GoogleMap>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
}
