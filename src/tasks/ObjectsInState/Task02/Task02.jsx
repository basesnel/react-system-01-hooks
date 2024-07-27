import { useState } from 'react';
import { MdOutlineSelectAll } from 'react-icons/md';
import { FlexBox, Select } from 'components';
import { initialPosition, colorOptions } from 'constants';
import {
  WrapperT02T03,
  BackgroundT02T03,
  BoxT02T03,
} from '../IntendendComponents';

const initPosition = { ...initialPosition };

const Task02 = () => {
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
    <WrapperT02T03>
      <FlexBox>
        <Select
          selectName="Color"
          selected={shape.color}
          list={colorOptions}
          icon={<MdOutlineSelectAll />}
          onHandleSelect={handleColorChange}
        />
      </FlexBox>
      <BackgroundT02T03 position={initialPosition} />
      <BoxT02T03
        color={shape.color}
        position={shape.position}
        onMove={handleMove}
      >
        Drag me!
      </BoxT02T03>
    </WrapperT02T03>
  );
};

export default Task02;
