import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Span } from 'components';

import styles from './styles.module.css';

const CounterP06 = ({ isFancy }) => {
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

CounterP06.propTypes = {
  isFancy: PropTypes.bool.isRequired,
};

export default CounterP06;
