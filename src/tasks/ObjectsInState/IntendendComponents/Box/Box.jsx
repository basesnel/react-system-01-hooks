import { useState } from 'react';

import PropTypes from 'prop-types';

const Box = props => {
  const { children, color, position, onMove } = props;

  const [lastCoordinates, setLastCoordinates] = useState(null);

  const handlePointerDown = e => {
    e.target.setPointerCapture(e.pointerId);
    setLastCoordinates({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handlePointerMove = e => {
    if (lastCoordinates) {
      setLastCoordinates({
        x: e.clientX,
        y: e.clientY,
      });
      const dx = e.clientX - lastCoordinates.x;
      const dy = e.clientY - lastCoordinates.y;
      onMove(dx, dy);
    }
  };

  const handlePointerUp = e => {
    setLastCoordinates(null);
  };

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={{
        width: 100,
        height: 100,
        cursor: 'grab',
        backgroundColor: color,
        position: 'absolute',
        border: '1px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      {children}
    </div>
  );
};

Box.propTypes = {
  children: PropTypes.any.isRequired,
  color: PropTypes.string.isRequired,
  position: PropTypes.shape({ x: PropTypes.number, y: PropTypes.number })
    .isRequired,
  onMove: PropTypes.func.isRequired,
};

export default Box;
