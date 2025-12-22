import { useState } from 'react';
import { CheckBox } from 'components';
import { imageSizeContext } from 'contexts/mpiiiContexts/imageSizeContextT05';
import { ListT05 } from '../IntendendComponents';

const Task05 = () => {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;

  return (
    <imageSizeContext.Provider value={imageSize}>
      <CheckBox
        name="CheckBoxT05"
        checked={isLarge}
        onChange={e => setIsLarge(e.target.checked)}
        label="Use large images"
      />
      <hr />
      <ListT05 />
    </imageSizeContext.Provider>
  );
};

export default Task05;
