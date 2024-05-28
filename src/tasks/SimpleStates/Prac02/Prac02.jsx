import { useState } from 'react';

import { FlexBox } from 'components';
import { Button } from 'components';

const Prac02 = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <FlexBox>
      <Button caption={`Clicked ${count} times`} onClick={handleClick} />
      <Button caption={`Clicked ${count} times`} onClick={handleClick} />
    </FlexBox>
  );
};

export default Prac02;
