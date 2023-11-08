import { useState, useEffect } from 'react';
import Canvas from 'tasks/useEffectsCases/IntendendComponents/Canvas';

export default function ListeningGlobalEvent() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMove(e) {
      const parent = document.querySelector('[data-box]');
      setPosition({
        x: e.clientX - parent.getBoundingClientRect().x,
        y: e.clientY - parent.getBoundingClientRect().y,
      });
    }

    window.addEventListener('pointermove', handleMove);

    return () => {
      window.removeEventListener('pointermove', handleMove);
    };
  }, []);

  return (
    <Canvas data-box>
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
