import { useState } from 'react';

export default function Box({ children, color, position, onMove }) {
  const [lastCoordinates, setLastCoordinates] = useState(null);

  const handlePointerDown = e => {
    e.target.setPointerCapture(e.pointerId);
    setLastCoordinates({
      x: e.clientX,
      y: e.clientY,
    });
    const dx = e.clientX - lastCoordinates.x;
    const dy = e.clientY - lastCoordinates.y;
    onMove(dx, dy);
  };

  const handlePointerUp = e => {
    setLastCoordinates(null);
  };

  return <div></div>;
}
