import { useState } from 'react';
import { FlexBox, Button } from 'components';
import { CountLabelP11 } from '../intendedComponents';

const Prac11 = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <FlexBox>
        <Button caption="Increment" onClick={() => setCount(count + 1)} />
        <Button caption="Decrement" onClick={() => setCount(count - 1)} />
      </FlexBox>
      <CountLabelP11 count={count} />
    </>
  );
};

export default Prac11;
