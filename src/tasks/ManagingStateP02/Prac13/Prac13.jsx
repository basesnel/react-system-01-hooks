import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, FlexBox, Span } from 'components';

import styles from './styles.module.css';

const Prac13 = () => {
  const [isPlayerA, setIsPlayerA] = useState(true);

  return (
    <FlexBox direction="column">
      {isPlayerA ? (
        <Counter key="Taylor" person="Taylor" />
      ) : (
        <Counter key="Sarah" person="Sarah" />
      )}
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

Counter.propTypes = {
  person: PropTypes.string.isRequired,
};

export default Prac13;
