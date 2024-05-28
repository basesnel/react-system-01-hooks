import { useState } from 'react';

import { FlexBox } from 'components';
import { Button } from 'components';
import { Caption } from 'components';

const Prac06 = () => {
  const [numberB, setNumberB] = useState(0);

  return (
    <>
      <FlexBox>
        <Button
          caption="Increase the number"
          onClick={() => {
            setNumberB(numberB + 5);
            setNumberB(n => n + 1);
          }}
        />
      </FlexBox>
      <Caption text={`number B: ${numberB.toString()}`} />
    </>
  );
};

export default Prac06;
