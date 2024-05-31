import { useEffect, useRef } from 'react';

import { useIntersectionObserver } from './useIntersectionObserver';

const InterBox = () => {
  const ref = useRef(null);
  const isIntersecting = useIntersectionObserver(ref);

  useEffect(() => {
    const div = ref.current;
    if (isIntersecting) {
      div.parentElement.style.backgroundColor = 'black';
      div.parentElement.style.color = 'white';
      for (const child of div.parentElement.querySelectorAll('li div, span')) {
        child.style.backgroundColor = 'black';
        child.style.color = 'white';
      }
    } else {
      div.parentElement.style.backgroundColor = 'white';
      div.parentElement.style.color = 'black';
      for (const child of div.parentElement.querySelectorAll('li div, span')) {
        child.style.backgroundColor = null;
        child.style.color = null;
      }
    }
  }, [isIntersecting]);

  return (
    <div
      ref={ref}
      style={{
        margin: 20,
        width: 100,
        height: 100,
        border: '2px solid black',
        background: 'blue',
      }}
    />
  );
};

export default InterBox;
