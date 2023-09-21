import { useState } from 'react';

export default function ObjectInState() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const moveToCursor = e => {
    const parent = document.getElementById('parent');
    setPosition({
      x: e.clientX - parent.getBoundingClientRect().x,
      y: e.clientY - parent.getBoundingClientRect().y,
    });
  };

  return (
    <div
      id="parent"
      onPointerMove={moveToCursor}
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
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
