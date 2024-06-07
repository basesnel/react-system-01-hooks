import { useState } from 'react';
import { FlexBox, Button, Caption } from 'components';

const Prac05 = () => {
  const [numberA, setNumberA] = useState(0);

  return (
    <>
      <FlexBox>
        <Button
          caption="+3"
          onClick={() => {
            setNumberA(n => n + 1);
            setNumberA(n => n + 1);
            setNumberA(n => n + 1);
          }}
        />
      </FlexBox>
      <Caption text={`number A: ${numberA.toString()}`} />
    </>
  );
};

export default Prac05;
