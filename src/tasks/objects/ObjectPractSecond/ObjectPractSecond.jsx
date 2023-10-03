import { useState } from 'react';

import { initialPosition } from 'constants';

export default function ObjectPractSecond() {
  const [position, setPosition] = useState(initialPosition);

  const moveToCursor = e => {
    // const parent = document.getElementById('parent');
    const parent = document.querySelector('[data-box]');
    setPosition({
      x: e.clientX - parent.getBoundingClientRect().x,
      y: e.clientY - parent.getBoundingClientRect().y,
    });
  };

  return (
    <div
      data-box
      onPointerMove={moveToCursor}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        borderRadius: '10px',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'red',
          borderRadius: '50%',
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
}
