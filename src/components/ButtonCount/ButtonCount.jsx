import { useState } from 'react';

import css from './ButtonCount.module.css';

export const ButtonCount = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button className={css.btnCount} onClick={handleClick}>
      Clicked {count} times
    </button>
  );
};
