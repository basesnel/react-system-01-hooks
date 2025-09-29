import React, { useRef } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import IconButton from 'components/IconButton';
import styles from './styles.module.css';

const Scroll = ({ children, step = 150 }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollLeft -= step;
  };

  const scrollRight = () => {
    scrollRef.current.scrollLeft += step;
  };

  return (
    <div className={styles.scroll}>
      <IconButton
        icon={<FaArrowAltCircleLeft />}
        caption="left"
        onClick={scrollLeft}
      />
      {React.cloneElement(children, { ref: scrollRef })}
      <IconButton
        icon={<FaArrowAltCircleRight />}
        caption="right"
        onClick={scrollRight}
      />
    </div>
  );
};

export default Scroll;
