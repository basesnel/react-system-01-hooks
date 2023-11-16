import { useState, useRef } from 'react';

import DecoratedButton from 'components/DecoratedButton';
import FlexBox from 'components/FlexBox';

export default function CounterRef() {
  const [counterState, setCounterState] = useState(0);
  const counterRef = useRef(0);

  function handleStateClick() {
    setCounterState(counterState + 1);
  }

  function handleRefClick() {
    counterRef.current = counterRef.current + 1;
  }

  return (
    <FlexBox>
      <DecoratedButton
        caption={`You clicked on state-button ${counterState} times`}
        onClick={handleStateClick}
      />
      <DecoratedButton
        caption={`You clicked on ref-button ${counterRef.current} times`}
        onClick={handleRefClick}
      />
    </FlexBox>
  );
}
