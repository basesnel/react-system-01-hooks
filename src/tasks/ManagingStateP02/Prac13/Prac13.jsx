import { useState } from 'react';
import { Button, FlexBox } from 'components';
import { CounterP11 } from '../intendendComponents';

const Prac13 = () => {
  const [isPlayerA, setIsPlayerA] = useState(true);

  return (
    <FlexBox direction="column">
      {isPlayerA ? (
        <CounterP11 key="Taylor" person="Taylor" />
      ) : (
        <CounterP11 key="Sarah" person="Sarah" />
      )}
      <Button
        type="button"
        onClick={() => setIsPlayerA(!isPlayerA)}
        caption="Next player!"
      />
    </FlexBox>
  );
};

export default Prac13;
