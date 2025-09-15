import { useState } from 'react';
import { Button, CheckBox, Span } from 'components';

import styles from './styles.module.css';

const Prac05 = () => {
  const [showB, setShowB] = useState(true);

  return (
    <>
      <Counter />
      {showB && <Counter />}
      <CheckBox
        name="Prac04Checkbox"
        checked={showB}
        onChange={e => setShowB(e.target.checked)}
        label="Render the second counter"
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

export default Prac05;
