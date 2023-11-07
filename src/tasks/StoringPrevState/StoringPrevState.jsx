import { useState } from 'react';

import DecoratedButton from 'components/DecoratedButton';
import FlexBox from 'components/FlexBox';
import CountLabel from './CountLabel';

export default function StoringPrevState() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FlexBox>
        <DecoratedButton
          caption="Increment"
          onClick={() => setCount(count + 1)}
        />
        <DecoratedButton
          caption="Decrement"
          onClick={() => setCount(count - 1)}
        />
      </FlexBox>
      <CountLabel count={count} />
    </>
  );
}
