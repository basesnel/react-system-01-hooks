import { useState } from 'react';
import { Button, FlexBox, Span } from 'components';

import styles from './styles.module.css';

const Prac04 = () => {
  const counter = <Counter />;
  return (
    <FlexBox>
      {counter}
      {counter}
    </FlexBox>
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

export default Prac04;
