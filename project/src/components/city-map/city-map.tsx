import classNames from 'classnames';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { useEffect, useRef } from 'react';
import { Offer } from '../../types/offer/offer';
import useMap from '../../hooks/use-map/use-map';

type CityMapProps = {
  mapClasses: string[];
  offers: Offer[];
  currentOfferId: number | null;
}

export default function CityMap ({mapClasses, offers, currentOfferId}: CityMapProps): JSX.Element {
  const mapRef = useRef(null);

  const map = useMap(mapRef, offers[0].location);

  useEffect(() => {
    if (map) {
      map.setView(
        {
          lat: offers[0].city.location.latitude,
          lng: offers[0].city.location.longitude,
        },
        offers[0].city.location.zoom,
      );
    }
  }, [map, offers]);

  useEffect(() => {
    const markersLayer = leaflet.layerGroup([]);

    const defaultCustomIcon = leaflet.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [27, 39],
      iconAnchor: [14, 39],
    });

    const currentCustomIcon = leaflet.icon({
      iconUrl: 'img/pin-active.svg',
      iconSize: [27, 39],
      iconAnchor: [14, 39],
    });

    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.city.location.latitude,
            lng: offer.city.location.longitude,
          }, {
            icon:
              offer.id === currentOfferId
                ? currentCustomIcon
                : defaultCustomIcon,
          })
          .addTo(markersLayer);
      });
      markersLayer.addTo(map);

      return () => {
        map.removeLayer(markersLayer);
      };
    }
  }, [map, offers, currentOfferId]);

  return (
    <section className={classNames('map', mapClasses)} ref={mapRef}>
    </section>
  );
}
