import { useState } from 'react';
import { FlexBox, Button } from 'components';
import { FormP10 } from '../intendedComponents';

const Prac10 = () => {
  const [version, setVersion] = useState(0);

  const handleReset = () => {
    setVersion(version + 1);
  };

  return (
    <FlexBox wrapped="wrap">
      <Button caption="Reset" onClick={handleReset} />
      <FormP10 key={version} />
    </FlexBox>
  );
};

export default Prac10;
