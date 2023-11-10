import { useState } from 'react';
import { useWindowListener } from './useWindowListener';
import Canvas from 'tasks/useEffectsCases/IntendendComponents/Canvas';

export default function CustomUseWindowListener() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useWindowListener('pointermove', e => {
    const canvas = document.querySelector('[data-xob]');
    setPosition({
      x: e.clientX - canvas.getBoundingClientRect().x,
      y: e.clientY - canvas.getBoundingClientRect().y,
    });
  });

  return (
    <Canvas data-xob>
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'pink',
          borderRadius: '50%',
          opacity: 0.6,
          transform: `translate(${position.x}px, ${position.y}px)`,
          pointerEvents: 'none',
          left: -20,
          top: -20,
          width: 40,
          height: 40,
        }}
      />
    </Canvas>
  );
}
