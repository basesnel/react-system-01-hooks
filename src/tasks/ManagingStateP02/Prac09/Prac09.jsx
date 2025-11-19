import { useState } from 'react';
import { CheckBox, FlexBox } from 'components';
import { CounterP06 } from '../intendendComponents';

import styles from './styles.module.css';

const Prac09 = () => {
  const [isFancy, setIsFancy] = useState(false);

  return (
    <>
      {isFancy ? (
        <FlexBox>
          <CounterP06 isFancy={true} />
        </FlexBox>
      ) : (
        <section className={styles.flexed}>
          <CounterP06 isFancy={false} />
        </section>
      )}
      <CheckBox
        name="Prac09Checkbox"
        checked={isFancy}
        onChange={e => setIsFancy(e.target.checked)}
        label="Use fancy styling"
      />
    </>
  );
};

export default Prac09;
