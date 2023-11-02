import { useState } from 'react';
import { MdOutlineSelectAll } from 'react-icons/md';

import Background from '../IntendendComponents/Background';
import Box from '../IntendendComponents/Box';
import SelectColor from '../IntendendComponents/SelectColor';

import { initialPosition } from 'constants';

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
      <SelectColor
        color={shape.color}
        icon={<MdOutlineSelectAll />}
        onHandleColorChange={handleColorChange}
      />
      <Background position={initialPosition} />
      <Box color={shape.color} position={shape.position} onMove={handleMove}>
        Drag me!
      </Box>
    </div>
  );
}
