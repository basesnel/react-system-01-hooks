import { useState } from 'react';
import { Button, CheckBox, Span } from 'components';

import styles from './styles.module.css';

const Prac06 = () => {
  const [isFancy, setIsFancy] = useState(false);

  return (
    <>
      {isFancy ? <Counter isFancy={true} /> : <Counter isFancy={false} />}
      <CheckBox
        name="Prac06Checkbox"
        checked={isFancy}
        onChange={e => setIsFancy(e.target.checked)}
        label="Use fancy styling"
      />
    </>
  );
};

const Counter = ({ isFancy }) => {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = `${styles.counter}`;
  let color = '#ff6767';
  if (hover) className += ` ${styles.hover}`;
  if (isFancy) className += ` ${styles.fancy}`;

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <Span weighted color={isFancy ? color : null}>
        {score}
      </Span>
      <Button caption="Add one" onClick={() => setScore(score + 1)} />
    </div>
  );
};

export default Prac06;
