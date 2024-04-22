import { useImmer } from 'use-immer';
import { MdOutlineSelectAll } from 'react-icons/md';

import Background from '../IntendendComponents/Background';
import Box from '../IntendendComponents/Box';
import FlexBox from 'components/FlexBox';
import DecoratedSelect from 'components/DecoratedSelect';

import { initialPosition, colorOptions } from 'constants';
import DecoratedWrapper from '../IntendendComponents/DecoratedWrapper';

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
    <DecoratedWrapper>
      <FlexBox>
        <DecoratedSelect
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
    </DecoratedWrapper>
  );
}
