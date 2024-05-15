import { useState } from 'react';

import FlexBox from 'components/FlexBox';
import Button from 'components/Button';

const Prac01 = () => {
  return (
    <FlexBox>
      <ButtonCount />
      <ButtonCount />
      <ButtonCount />
      <ButtonCount />
      <ButtonCount />
    </FlexBox>
  );
};

const ButtonCount = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <Button caption={`Clicked ${count} times`} onClick={handleClick} />;
};

export default Prac01;
