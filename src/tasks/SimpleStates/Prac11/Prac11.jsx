import { useState } from 'react';

import Button from 'components/Button';
import FlexBox from 'components/FlexBox';

import CountLabel from './CountLabel';

const Prac11 = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <FlexBox>
        <Button caption="Increment" onClick={() => setCount(count + 1)} />
        <Button caption="Decrement" onClick={() => setCount(count - 1)} />
      </FlexBox>
      <CountLabel count={count} />
    </>
  );
};

export default Prac11;
