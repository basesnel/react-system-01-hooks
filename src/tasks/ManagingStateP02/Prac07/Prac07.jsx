import { useState } from 'react';
import { CheckBox, FlexBox } from 'components';
import { CounterP06 } from '../intendendComponents';

const Prac07 = () => {
  const [isFancy, setIsFancy] = useState(false);

  if (isFancy)
    return (
      <>
        <FlexBox>
          <CounterP06 isFancy={true} />
        </FlexBox>
        <CheckBox
          name="Prac07Checkbox"
          checked={isFancy}
          onChange={e => setIsFancy(e.target.checked)}
          label="Use fancy styling"
        />
      </>
    );

  return (
    <>
      <FlexBox>
        <CounterP06 isFancy={false} />
      </FlexBox>
      <CheckBox
        name="Prac07Checkbox"
        checked={isFancy}
        onChange={e => setIsFancy(e.target.checked)}
        label="Use fancy styling"
      />
    </>
  );
};

export default Prac07;
