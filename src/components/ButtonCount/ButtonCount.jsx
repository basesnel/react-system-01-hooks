import { useState } from 'react';

import { DecoratedButton } from 'components/DecoratedButton/DecoratedButton';

export default function ButtonCount() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <DecoratedButton caption={`Clicked ${count} times`} onClick={handleClick} />
  );
}
