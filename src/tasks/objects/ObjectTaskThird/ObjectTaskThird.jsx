import { useImmer } from 'use-immer';
import Background from '../IntendendComponents/Background';
import Box from './Box.jsx';

import { initialPosition } from 'constants';

import css from './ObjectTaskThird.module.css';

export default function ObjectTaskThird() {
  const [shape, updateShape] = useImmer({
    color: 'orange',
    position: initialPosition,
  });

  const handleMove = (dx, dy) => {
    updateShape(draft => {
      draft.position.x += dx;
      draft.position.y += dy;
    });
  };

  const handleColorChange = e => {
    updateShape(draft => {
      draft.color = e.target.value;
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
