import { useState } from 'react';
import { FlexBox, Button } from 'components';
import { Form } from '../intendedComponents';

const Prac10 = () => {
  const [version, setVersion] = useState(0);

  const handleReset = () => {
    setVersion(version + 1);
  };

  return (
    <FlexBox>
      <Button caption="Reset" onClick={handleReset} />
      <Form key={version} />
    </FlexBox>
  );
};

export default Prac10;
