import { useState, useEffect } from 'react';

import { Paragraph, FlexBox, Button } from 'components';

const Prac03 = () => {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  useEffect(() => {
    const totalCount = counterA + counterB;
    document.title = `You are clicked ${totalCount} times`;
    console.log('useEffect is triggered ' + Date.now());
  }, [counterA, counterB]);

  const handleCounterAIncrement = () => {
    setCounterA(state => state + 1);
  };

  const handleCounterBIncrement = () => {
    setCounterB(state => state + 1);
  };

  return (
    <>
      <Paragraph>Counters with useEffect hook case.</Paragraph>
      <FlexBox>
        <Button
          caption={`pressed the button ${counterA} times`}
          onClick={handleCounterAIncrement}
        />
        <Button
          caption={`pressed the button ${counterB} times`}
          onClick={handleCounterBIncrement}
        />
      </FlexBox>
    </>
  );
};

export default Prac03;
