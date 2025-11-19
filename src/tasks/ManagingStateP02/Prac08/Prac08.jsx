import { useState } from 'react';
import { Caption, CheckBox, FlexBox } from 'components';
import { CounterP04 } from '../intendendComponents';

const Prac08 = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <>
      <FlexBox>
        {isPaused ? <Caption text="See you later!" /> : <CounterP04 />}
      </FlexBox>
      <CheckBox
        name="Prac08Checkbox"
        checked={isPaused}
        onChange={e => setIsPaused(e.target.checked)}
        label="Take a break"
      />
    </>
  );
};

export default Prac08;
