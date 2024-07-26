import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MapWidget } from './map-widget';

const MapP09 = props => {
  const { zoomLevel } = props;
  const containerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current === null) {
      mapRef.current = new MapWidget(containerRef.current);
    }

    const map = mapRef.current;
    map.setZoom(zoomLevel);
  }, [zoomLevel]);

  return (
    <div
      style={{ width: '100%', minHeight: 200, height: '100%' }}
      ref={containerRef}
    />
  );
};

MapP09.propTypes = {
  zoomLevel: PropTypes.number.isRequired,
};

export default MapP09;
