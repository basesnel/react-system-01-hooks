import { Button, Title, FlexBox } from 'components';
import { useState } from 'react';
// import PropTypes from 'prop-types';
// import { CheckBox, Linput } from 'components';

import styles from './styles.module.css';

const images = [
  {
    place: 'Penang, Malaysia',
    src: 'https://i.imgur.com/FJeJR8M.jpg',
  },
  {
    place: 'Lisbon, Portugal',
    src: 'https://i.imgur.com/dB2LRbj.jpg',
  },
  {
    place: 'Bilbao, Spain',
    src: 'https://i.imgur.com/z08o2TS.jpg',
  },
  {
    place: 'Valparaíso, Chile',
    src: 'https://i.imgur.com/Y3utgTi.jpg',
  },
  {
    place: 'Schwyz, Switzerland',
    src: 'https://i.imgur.com/JBbMpWY.jpg',
  },
  {
    place: 'Prague, Czechia',
    src: 'https://i.imgur.com/QwUKKmF.jpg',
  },
  {
    place: 'Ljubljana, Slovenia',
    src: 'https://i.imgur.com/3aIiwfm.jpg',
  },
];

const Task06 = () => {
  const [index, setIndex] = useState(0);
  const hasNext = index < images.length - 1;

  const handleClick = () => {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  let image = images[index];

  return (
    <FlexBox direction="column">
      <Title level={3} caption={`Image ${index + 1} of ${images.length}`} />
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
