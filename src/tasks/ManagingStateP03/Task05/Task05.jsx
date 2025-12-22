import { useState } from 'react';
import { imageSizeContext } from 'contexts/mpiiiContexts/imageSizeContextT05';
import { ListT05 } from '../IntendendComponents';

const Task05 = () => {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;

  return (
    <imageSizeContext.Provider value={imageSize}>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={e => setIsLarge(e.target.checked)}
        />
        Use large images
      </label>
      <hr />
      <ListT05 />
    </imageSizeContext.Provider>
  );
};

export default Task05;
