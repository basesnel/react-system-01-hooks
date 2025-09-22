import { useState } from 'react';
import { Button, CheckBox, P, Span } from 'components';

import styles from './styles.module.css';

const Prac08 = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <>
      {isPaused ? <P>See you later!</P> : <Counter />}
      <CheckBox
        name="Prac08Checkbox"
        checked={isPaused}
        onChange={e => setIsPaused(e.target.checked)}
        label="Take a break"
      />
    </>
  );
};

const Counter = () => {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = `${styles.counter}`;
  if (hover) className += ` ${styles.hover}`;

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <Span weighted>{score}</Span>
      <Button caption="Add one" onClick={() => setScore(score + 1)} />
    </div>
  );
};

export default Prac08;
