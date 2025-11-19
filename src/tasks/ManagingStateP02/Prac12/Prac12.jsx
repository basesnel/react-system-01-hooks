import { useState } from 'react';
import { Button, FlexBox } from 'components';
import { CounterP11 } from '../intendendComponents';

const Prac11 = () => {
  const [isPlayerA, setIsPlayerA] = useState(true);

  return (
    <FlexBox direction="column">
      {isPlayerA && <CounterP11 person="Taylor" />}
      {!isPlayerA && <CounterP11 person="Sarah" />}
      <Button
        type="button"
        onClick={() => setIsPlayerA(!isPlayerA)}
        caption="Next player!"
      />
    </FlexBox>
  );
};

export default Prac11;
