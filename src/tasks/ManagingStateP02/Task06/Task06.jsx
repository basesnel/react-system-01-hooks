import { useState } from 'react';
import { Button, Title, FlexBox } from 'components';
import { trams } from 'constants';

import styles from './styles.module.css';

const Task06 = () => {
  const [index, setIndex] = useState(0);
  const hasNext = index < trams.length - 1;

  const handleClick = () => {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  let image = trams[index];

  return (
    <FlexBox direction="column">
      <Title level={3} caption={`Image ${index + 1} of ${trams.length}`} />
      <figure className={styles.figure}>
        <img
          key={image.src}
          src={image.src}
          alt={image.place}
          className={styles.image}
        />
        <figcaption className={styles.figcaption}>{image.place}</figcaption>
      </figure>
      <Button caption="Next" onClick={handleClick} />
    </FlexBox>
  );
};

export default Task06;
