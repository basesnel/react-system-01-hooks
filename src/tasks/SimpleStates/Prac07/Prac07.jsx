import { useState } from 'react';

import FlexBox from 'components/FlexBox';
import Button from 'components/Button';
import Caption from 'components/Caption';

const Prac07 = () => {
  const [numberC, setNumberC] = useState(0);

  return (
    <>
      <FlexBox>
        <Button
          caption="Increase the number"
          onClick={() => {
            setNumberC(numberC + 5);
            setNumberC(n => n + 1);
            setNumberC(42);
          }}
        />
      </FlexBox>
      <Caption text={`number C: ${numberC.toString()}`} />
    </>
  );
};

export default Prac07;
