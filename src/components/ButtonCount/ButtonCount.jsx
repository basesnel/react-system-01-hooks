import { useState } from 'react';

import { DecoratedButton } from 'components/DecoratedButton/DecoratedButton';

export const ButtonCount = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <DecoratedButton caption={`Clicked ${count} times`} onClick={handleClick} />
  );
};
