import { useState, useEffect } from 'react';
import { CheckBox } from 'components';

const Task06 = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [canMove, setCanMove] = useState(true);

  useEffect(() => {
    const handleMove = e => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('pointerMove', handleMove);
    return () => window.removeEventListener('pointerMove', handleMove);
  }, []);

  return (
    <>
      <CheckBox
        name="canMove06"
        checked={canMove}
        onChange={e => setCanMove(e.target.checked)}
        label="The dot is allowed to move"
      />
      <hr />
      <div
        style={{
          position: 'absolute',
          BackgroundColor: 'pink',
          borderRadius: '50%',
          opacity: 0.6,
          transform: `translite(${position.x}px, ${position.y}px)`,
          pointerEvents: 'none',
          left: -20,
          top: -20,
          width: 40,
          height: 40,
        }}
      />
    </>
  );
};

export default Task06;
