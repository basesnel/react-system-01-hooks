import { useState } from 'react';

import Canvas from '../IntendendComponents/Canvas';

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
    <Canvas data-box onPointerMove={moveToCursor}>
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
    </Canvas>
  );
}
