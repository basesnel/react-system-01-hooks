import { useState } from 'react';
import { Button, FlexBox, P } from 'components';
import { FormT03 } from '../intendendComponents';

const Task03 = () => {
  const [showHint, setShowHint] = useState(false);

  return (
    <FlexBox direction="column">
      {showHint && <P>Hint your favorite city?</P>}
      <FormT03 />
      {showHint ? (
        <Button onClick={() => setShowHint(false)} caption="Hide hint" />
      ) : (
        <Button onClick={() => setShowHint(true)} caption="Show hint" />
      )}
    </FlexBox>
  );
};

export default Task03;
