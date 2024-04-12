import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { MapWidget } from './map-widget';

export default function Map({ zoomLevel }) {
  const containerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current === null) {
      mapRef.current = new MapWidget(containerRef.current);
    }

    const map = mapRef.current;
    map.setZoom(zoomLevel);
  }, [zoomLevel]);

  return <div style={{ width: '100%', height: 250 }} ref={containerRef} />;
}

Map.propTypes = {
  zoomLevel: PropTypes.number.isRequired,
};
