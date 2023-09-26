import { useState } from 'react';
import Background from './Background.jsx';
import Box from './Box.jsx';

import css from './Canvas.module.css';

const initialPosition = {
  x: 0,
  y: 0,
};

export default function Canvas() {
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
    <>
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
    </>
  );
}
