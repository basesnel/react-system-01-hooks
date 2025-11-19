import { useState } from 'react';
import { CheckBox, FlexBox } from 'components';
import { CounterP06 } from '../intendendComponents';

const Prac06 = () => {
  const [isFancy, setIsFancy] = useState(false);

  return (
    <>
      <FlexBox>
        {isFancy ? (
          <CounterP06 isFancy={true} />
        ) : (
          <CounterP06 isFancy={false} />
        )}
      </FlexBox>
      <CheckBox
        name="Prac06Checkbox"
        checked={isFancy}
        onChange={e => setIsFancy(e.target.checked)}
        label="Use fancy styling"
      />
    </>
  );
};

export default Prac06;
