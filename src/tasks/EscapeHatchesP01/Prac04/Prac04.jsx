import { useState, useRef } from 'react';
import { FlexBox, Button } from 'components';

const Prac04 = () => {
  const [counterState, setCounterState] = useState(0);
  const counterRef = useRef(0);

  function handleStateClick() {
    setCounterState(counterState + 1);
  }

  function handleRefClick() {
    counterRef.current = counterRef.current + 1;
  }

  return (
    <FlexBox wrapped="wrap">
      <Button
        caption={`You clicked on state-button ${counterState} times`}
        onClick={handleStateClick}
      />
      <Button
        caption={`You clicked on ref-button ${counterRef.current} times`}
        onClick={handleRefClick}
      />
    </FlexBox>
  );
};

export default Prac04;
