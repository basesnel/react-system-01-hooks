import { useState } from 'react';

import FlexBox from 'components/FlexBox';
import DecoratedButton from 'components/DecoratedButton';

export default function FixFailingRerender() {
  const [isOne, setIsOne] = useState(false);

  return (
    <FlexBox>
      <DecoratedButton
        caption={isOne ? 'On' : 'Off'}
        onClick={() => {
          setIsOne(!isOne);
        }}
      />
    </FlexBox>
  );
}
