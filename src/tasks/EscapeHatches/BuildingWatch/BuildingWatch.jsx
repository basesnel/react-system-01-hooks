import { useState, useRef } from 'react';

import FlexBox from 'components/FlexBox';
import DecoratedButton from 'components/DecoratedButton';
import Title from 'components/Title';

export default function BuildingWatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondPassed = 0;

  if (startTime !== null && now !== null) {
    secondPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <Title level={3} caption={`Time passed: ${secondPassed.toFixed(3)}`} />
      <FlexBox>
        <DecoratedButton caption="Start" onClick={handleStart} />
        <DecoratedButton caption="Stop" onClick={handleStop} />
      </FlexBox>
    </>
  );
}
