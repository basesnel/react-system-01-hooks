import { useImmer } from 'use-immer';
import { MdOutlineSelectAll } from 'react-icons/md';

import FlexBox from 'components/FlexBox';
import Select from 'components/Select';

import { Wrapper } from '../IntendendComponents';
import { Background } from '../IntendendComponents';
import { Box } from '../IntendendComponents';

import { initialPosition, colorOptions } from 'constants';

const Task03 = () => {
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
    <Wrapper>
      <FlexBox>
        <Select
          selectName="color"
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
    </Wrapper>
  );
};

export default Task03;
