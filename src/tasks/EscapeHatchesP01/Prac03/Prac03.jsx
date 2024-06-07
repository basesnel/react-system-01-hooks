import { useState, useRef } from 'react';
import { Title, FlexBox, Button } from 'components';

const Prac03 = () => {
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
        <Button caption="Start" onClick={handleStart} />
        <Button caption="Stop" onClick={handleStop} />
      </FlexBox>
    </>
  );
};

export default Prac03;
