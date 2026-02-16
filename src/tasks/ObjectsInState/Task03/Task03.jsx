import { useImmer } from 'use-immer';
import { MdOutlineSelectAll } from 'react-icons/md';
import { FlexBox, Select } from 'components';
import { initialPosition, colorOptions } from 'constants';
import {
  WrapperT02T03,
  BackgroundT02T03,
  BoxT02T03,
} from '../IntendendComponents';

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
    <WrapperT02T03>
      <FlexBox>
        <Select
          name="colorT03"
          value={shape.color}
          list={colorOptions}
          icon={<MdOutlineSelectAll />}
          onChange={handleColorChange}
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

export default Task03;
