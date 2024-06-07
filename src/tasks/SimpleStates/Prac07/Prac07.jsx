import { useState } from 'react';
import { FlexBox, Button, Caption } from 'components';

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
