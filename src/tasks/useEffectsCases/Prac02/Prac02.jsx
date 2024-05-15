import { useState, useEffect } from 'react';
import Canvas from 'components/Canvas';

export default function Prac02() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = document.querySelector('[data-box]');

    function handleMove(e) {
      setPosition({
        x: e.clientX - canvas.getBoundingClientRect().x,
        y: e.clientY - canvas.getBoundingClientRect().y,
      });
    }

    canvas.addEventListener('pointermove', handleMove);

    return () => {
      canvas.removeEventListener('pointermove', handleMove);
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
