import { useState } from 'react';

import FlexBox from 'components/FlexBox';
import Button from 'components/Button';

const Task02 = () => {
  const [isOne, setIsOne] = useState(false);

  return (
    <FlexBox>
      <Button
        caption={isOne ? 'On' : 'Off'}
        onClick={() => {
          setIsOne(!isOne);
        }}
      />
    </FlexBox>
  );
};

export default Task02;
