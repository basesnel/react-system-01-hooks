import { useState } from 'react';

import { FlexBox } from 'components';
import { Button } from 'components';

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
