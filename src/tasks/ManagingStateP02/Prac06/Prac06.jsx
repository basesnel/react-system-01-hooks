import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, CheckBox, FlexBox, Span } from 'components';

import styles from './styles.module.css';

const Prac06 = () => {
  const [isFancy, setIsFancy] = useState(false);

  return (
    <>
      <FlexBox>
        {isFancy ? <Counter isFancy={true} /> : <Counter isFancy={false} />}
      </FlexBox>
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

Counter.propTypes = {
  isFancy: PropTypes.bool.isRequired,
};

export default Prac06;
