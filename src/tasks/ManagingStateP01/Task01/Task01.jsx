import { useState } from 'react';

import styles from './styles.module.css';

const Task01 = () => {
  const [isActive, setIsActive] = useState(false);

  let backgroundClassName = `${styles.background}`;
  let pictureClassName = `${styles.picture}`;
  if (isActive) {
    pictureClassName += ` ${styles.pictureActive}`;
  } else {
    backgroundClassName += ` ${styles.backgroundActive}`;
  }

  return (
    <div className={backgroundClassName} onClick={() => setIsActive(false)}>
      <img
        className={pictureClassName}
        alt="Rainbow houses in Kampung Pelengi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpg"
        onClick={e => {
          e.stopPropagation();
          setIsActive(true);
        }}
      />
    </div>
  );
};

export default Task01;
