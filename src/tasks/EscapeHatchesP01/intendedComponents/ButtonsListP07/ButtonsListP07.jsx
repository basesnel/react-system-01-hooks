import { forwardRef } from 'react';
import { Button } from 'components';

import styles from './styles.module.css';

const ButtonsListP07 = forwardRef(({ kittens, scrollToId }, ref) => {
  const buttonsList = [];

  for (let i = 0; i < kittens.length; i++) {
    const id = (i + 1).toString().padStart(2, '0');
    buttonsList.push(
      <Button key={i} caption={id} onClick={() => scrollToId(i)} />
    );
  }

  return (
    <div ref={ref} className={styles.buttons}>
      {buttonsList}
    </div>
  );
});

export default ButtonsListP07;
