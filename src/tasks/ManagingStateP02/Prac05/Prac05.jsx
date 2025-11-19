import { useState } from 'react';
import { CheckBox, FlexBox } from 'components';
import { CounterP04 } from '../intendendComponents';

const Prac05 = () => {
  const [showB, setShowB] = useState(true);

  return (
    <>
      <FlexBox>
        <CounterP04 />
        {showB && <CounterP04 />}
      </FlexBox>
      <CheckBox
        name="Prac05Checkbox"
        checked={showB}
        onChange={e => setShowB(e.target.checked)}
        label="Render the second counter"
      />
    </>
  );
};

export default Prac05;
