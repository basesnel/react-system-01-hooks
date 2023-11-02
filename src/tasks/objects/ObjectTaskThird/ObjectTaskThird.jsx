import { useImmer } from 'use-immer';
import { MdOutlineSelectAll } from 'react-icons/md';

import Background from '../IntendendComponents/Background';
import Box from '../IntendendComponents/Box';
import SelectColor from '../IntendendComponents/SelectColor';

import { initialPosition } from 'constants';

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
