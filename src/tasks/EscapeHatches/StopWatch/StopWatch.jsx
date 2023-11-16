import { useState } from 'react';

import FlexBox from 'components/FlexBox';
import DecoratedButton from 'components/DecoratedButton';
import Title from 'components/Title';

export default function StopWatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  let secondPassed = 0;

  if (startTime !== null && now !== null) {
    secondPassed = (now - startTime) / 1000;
  }

  return (
    <FlexBox>
      <Title level={3} caption={`Time passed: ${secondPassed.toFixed(3)}`} />
      <DecoratedButton caption="Start" onClick={handleStart} />
    </FlexBox>
  );
}
