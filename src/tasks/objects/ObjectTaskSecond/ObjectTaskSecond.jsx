import { useState } from 'react';

import Background from '../IntendendComponents/Background';
import Box from './Box.jsx';

import { initialPosition } from 'constants';

import css from './ObjectTaskSecond.module.css';

const initPosition = { ...initialPosition };

export default function ObjectTaskSecond() {
  const [shape, setShape] = useState({
    color: 'orange',
    position: initPosition,
  });

  const handleMove = (dx, dy) => {
    setShape({
      ...shape,
      position: { x: (shape.position.x += dx), y: (shape.position.y += dy) },
    });
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
