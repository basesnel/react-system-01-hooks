import { useEffect, useRef } from 'react';

const Box = () => {
  const ref = useRef(null);

  useEffect(() => {
    const div = ref.current;
    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          div.parentElement.style.backgroundColor = 'black';
          div.parentElement.style.color = 'white';
          for (const child of div.parentElement.querySelectorAll(
            'li div, span'
          )) {
            child.style.backgroundColor = 'black';
            child.style.color = 'white';
          }
        } else {
          div.parentElement.style.backgroundColor = 'white';
          div.parentElement.style.color = 'black';
          for (const child of div.parentElement.querySelectorAll(
            'li div, span'
          )) {
            child.style.backgroundColor = null;
            child.style.color = null;
          }
        }
      },
      {
        threshold: 1.0,
      }
    );
    observer.observe(div);
    return () => {
      observer.disconnect();
    };
  }, []);

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
}

export default Box;