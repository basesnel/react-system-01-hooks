import { useState } from 'react';
import { MdOutlineSelectAll } from 'react-icons/md';

import DecoratedWrapper from '../IntendendComponents/DecoratedWrapper';
import Background from '../IntendendComponents/Background';
import Box from '../IntendendComponents/Box';
import FlexBox from 'components/FlexBox';
import DecoratedSelect from 'components/DecoratedSelect';

import { initialPosition, colorOptions } from 'constants';

const initPosition = { ...initialPosition };

export default function Task02() {
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
    <DecoratedWrapper>
      <FlexBox>
        <DecoratedSelect
          selectName="Color"
          selected={shape.color}
          list={colorOptions}
          icon={<MdOutlineSelectAll />}
          onHandleSelect={handleColorChange}
        />
      </FlexBox>
      <Background position={initialPosition} />
      <Box color={shape.color} position={shape.position} onMove={handleMove}>
        Drag me!
      </Box>
    </DecoratedWrapper>
  );
}
