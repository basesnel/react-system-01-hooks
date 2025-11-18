import { useState } from 'react';
import { CheckBox, FlexBox } from 'components';
import { CounterP04 } from '../intendendComponents';

// import styles from './styles.module.css';

const Prac05 = () => {
  const [showB, setShowB] = useState(true);

  return (
    <>
      <FlexBox>
        <CounterP04 />
        {showB && <CounterP04 />}
      </FlexBox>
      <CheckBox
        name="Prac05Checkbox"
        checked={showB}
        onChange={e => setShowB(e.target.checked)}
        label="Render the second counter"
      />
    </>
  );
};

// const Counter = () => {
//   const [score, setScore] = useState(0);
//   const [hover, setHover] = useState(false);

//   let className = `${styles.counter}`;
//   if (hover) className += ` ${styles.hover}`;

//   return (
//     <div
//       className={className}
//       onPointerEnter={() => setHover(true)}
//       onPointerLeave={() => setHover(false)}
//     >
//       <Span weighted>{score}</Span>
//       <Button caption="Add one" onClick={() => setScore(score + 1)} />
//     </div>
//   );
// };

export default Prac05;
