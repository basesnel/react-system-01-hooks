import { useState, useEffect, useRef } from 'react';
import { FadeInAnimation } from './animation';

import Button from 'components/Button';
import FlexBox from 'components/FlexBox';

function Welcome() {
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
}

export default function Prac03() {
  const [show, setShow] = useState(false);

  return (
    <>
      <FlexBox>
        <Button
          caption={show ? 'Remove' : 'Show'}
          onClick={() => setShow(!show)}
        />
      </FlexBox>
      {show && <Welcome />}
    </>
  );
}
