import { useState } from 'react';
import { Button, CheckBox, Span } from 'components';

import styles from './styles.module.css';

const Prac07 = () => {
  const [isFancy, setIsFancy] = useState(false);

  if (isFancy)
    return (
      <>
        <Counter isFancy={true} />
        <CheckBox
          name="Prac07Checkbox"
          checked={isFancy}
          onChange={e => setIsFancy(e.target.checked)}
          label="Use fancy styling"
        />
      </>
    );

  return (
    <>
      <Counter isFancy={false} />
      <CheckBox
        name="Prac05Checkbox"
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
  let color = isFancy ? '#ff6767' : null;
  if (hover) className += ` ${styles.hover}`;
  if (isFancy) className += ` ${styles.fancy}`;

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <Span weighted color={color}>
        {score}
      </Span>
      <Button caption="Add one" onClick={() => setScore(score + 1)} />
    </div>
  );
};

export default Prac07;
