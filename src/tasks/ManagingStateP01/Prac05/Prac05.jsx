import { useState } from 'react';
import { Canvas } from 'components';
import { initialPosition } from 'constants';

const Prac05 = () => {
  const [position, setPosition] = useState(initialPosition);

  const moveToCursor = e => {
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
};

export default Prac05;
