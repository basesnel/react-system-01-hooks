import { useState } from 'react';
import { Button, FlexBox, Span } from 'components';

import styles from './styles.module.css';

const Prac11 = () => {
  const [isPlayerA, setIsPlayerA] = useState(true);

  return (
    <FlexBox>
      {isPlayerA && <Counter person="Taylor" />}
      {!isPlayerA && <Counter person="Sarah" />}
      <Button
        type="button"
        onClick={() => setIsPlayerA(!isPlayerA)}
        caption="Next player!"
      />
    </FlexBox>
  );
};

const Counter = ({ person }) => {
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
      <Span weighted>
        {person}'s score: {score}
      </Span>
      <Button
        type="button"
        caption="Add one"
        onClick={() => setScore(score + 1)}
      />
    </div>
  );
};

export default Prac11;
