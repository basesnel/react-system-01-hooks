import { useState } from 'react';
import { FlexBox, Button } from 'components';
import { Counter } from '../intendedComponents';

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
