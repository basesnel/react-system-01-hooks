import { useState } from 'react';

import FlexBox from 'components/FlexBox';
import Button from 'components/Button';
import Title from 'components/Title';

const Prac02 = () => {
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
    <>
      <Title level={3} caption={`Time passed: ${secondPassed.toFixed(3)}`} />
      <FlexBox>
        <Button caption="Start" onClick={handleStart} />
      </FlexBox>
    </>
  );
};

export default Prac02;
