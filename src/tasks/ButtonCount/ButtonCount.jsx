import { useState } from 'react';

import Button from 'components/Button';

export default function ButtonCount() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <Button caption={`Clicked ${count} times`} onClick={handleClick} />;
}
