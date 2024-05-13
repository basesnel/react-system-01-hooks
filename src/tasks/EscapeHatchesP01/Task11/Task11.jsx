import { useState } from 'react';

import Button from 'components/Button';
import FlexBox from 'components/FlexBox';

import Counter from './Counter';

const Task11 = () => {
  const [isCounterVisible, setIsCounterVisible] = useState(false);
  return (
    <FlexBox>
      <Button
        caption={isCounterVisible ? 'Hide counter' : 'Show counter'}
        onClick={() => setIsCounterVisible(!isCounterVisible)}
      />
      {isCounterVisible && <Counter />}
    </FlexBox>
  );
};

export default Task11;
