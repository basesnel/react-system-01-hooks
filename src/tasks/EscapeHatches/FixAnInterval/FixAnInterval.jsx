import { useState } from 'react';

import DecoratedButton from 'components/DecoratedButton';
import FlexBox from 'components/FlexBox';

import Counter from './Counter';

export default function FixAnInterval() {
  const [isCounterVisible, setIsCounterVisible] = useState(false);
  return (
    <FlexBox>
      <DecoratedButton
        caption={isCounterVisible ? 'Hide counter' : 'Show counter'}
        onClick={() => setIsCounterVisible(!isCounterVisible)}
      />
      {isCounterVisible && <Counter />}
    </FlexBox>
  );
}
