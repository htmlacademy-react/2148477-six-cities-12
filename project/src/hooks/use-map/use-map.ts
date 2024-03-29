import leaflet, { Map } from 'leaflet';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { Location } from '../../types/offer/offer';

const TileLayer = {
  MAP: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png',
  ATTRIBUTION: [
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    'contributors',
    '&copy; <a href="https://carto.com/attributions">CARTO</a>'
  ],
};

export default function useMap(mapRef: MutableRefObject<null>, location: Location): leaflet.Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: location.latitude,
          lng: location.longitude,
        },
        zoom: location.zoom,
      });

      leaflet
        .tileLayer(
          TileLayer.MAP,
          {
            attribution: TileLayer.ATTRIBUTION.join(' '),
          },
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef]);

  return map;
}
