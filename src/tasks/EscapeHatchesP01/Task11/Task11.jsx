import { useState } from 'react';
import { FlexBox, Button } from 'components';
import { CounterT11 } from '../intendedComponents';

const Task11 = () => {
  const [isCounterVisible, setIsCounterVisible] = useState(false);
  return (
    <FlexBox>
      <Button
        caption={isCounterVisible ? 'Hide counter' : 'Show counter'}
        onClick={() => setIsCounterVisible(!isCounterVisible)}
      />
      {isCounterVisible && <CounterT11 />}
    </FlexBox>
  );
};

export default Task11;
