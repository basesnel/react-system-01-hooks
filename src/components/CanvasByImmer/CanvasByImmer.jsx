import { useState } from 'react';
// import { useImmer } from 'use-immer';
import Background from './Background.jsx';
import Box from './Box.jsx';

import css from './CanvasByImmer.module.css';

const initialPosition = {
  x: 0,
  y: 0,
};

export default function CanvasByImmer() {
  const [shape, setShape] = useState({
    color: 'orange',
    position: initialPosition,
  });

  const handleMove = (dx, dy) => {
    shape.position.x += dx;
    shape.position.y += dy;
  };

  const handleColorChange = e => {
    setShape({
      ...shape,
      color: e.target.value,
    });
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '300px' }}>
      <select
        value={shape.color}
        onChange={handleColorChange}
        className={css.option}
      >
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>
      </select>
      <Background position={initialPosition} />
      <Box color={shape.color} position={shape.position} onMove={handleMove}>
        Drag me!
      </Box>
    </div>
  );
}
