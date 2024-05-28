import { useState } from 'react';

import { Caption } from 'components';
import { FlexBox } from 'components';
import { Button } from 'components';

const FixRequestCounter = () => {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending(p => p + 1);
    await delay(3000);
    setPending(p => p - 1);
    setCompleted(c => c + 1);
  }

  return (
    <>
      <Caption text={`Pending: ${pending.toString()}`}></Caption>
      <Caption text={`Completed: ${completed.toString()}`}></Caption>
      <FlexBox>
        <Button onClick={handleClick} caption="Buy" />
      </FlexBox>
    </>
  );
};

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

export default FixRequestCounter;
