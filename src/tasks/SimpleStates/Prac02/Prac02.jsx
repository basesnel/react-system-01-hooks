import { useState } from 'react';
import { FlexBox, Button } from 'components';

const Prac02 = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <FlexBox>
      <Button caption={`Clicked ${count} times`} onClick={handleClick} />
      <Button caption={`Clicked ${count} times`} onClick={handleClick} />
    </FlexBox>
  );
};

export default Prac02;
