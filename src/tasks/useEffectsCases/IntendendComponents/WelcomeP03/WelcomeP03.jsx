import { useEffect, useRef } from 'react';
import { FadeInAnimation } from './animation';

const WelcomeP03 = () => {
  const ref = useRef(null);

  useEffect(() => {
    const animation = new FadeInAnimation(ref.current);
    animation.start(1000);
    return () => {
      animation.stop();
    };
  }, []);

  return (
    <h3
      ref={ref}
      style={{
        opacity: 0,
        color: 'white',
        padding: 50,
        textAlign: 'center',
        fontSize: 50,
        backgroundImage:
          'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',
      }}
    >
      Welcome
    </h3>
  );
};

export default WelcomeP03;
