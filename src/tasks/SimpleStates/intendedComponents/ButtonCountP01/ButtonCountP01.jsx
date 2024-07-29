import { useState } from 'react';
import { Button } from 'components';

const ButtonCountP01 = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return <Button caption={`Clicked ${count} times`} onClick={handleClick} />;
};

export default ButtonCountP01;
