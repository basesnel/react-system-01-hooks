import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Span } from 'components';

import styles from './styles.module.css';

const CounterP11 = ({ person }) => {
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

CounterP11.propTypes = {
  person: PropTypes.string.isRequired,
};

export default CounterP11;
