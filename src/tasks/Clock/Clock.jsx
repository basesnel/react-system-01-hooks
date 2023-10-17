import { useEffect, useRef, useState } from 'react';

import FlexBox from 'components/FlexBox';
import DecoratedButton from 'components/DecoratedButton';
import Box from 'components/Box';

import Caption from 'components/Caption';

import css from './Clock.module.css';

export default function Clock() {
  const [time, setTime] = useState(() => new Date());
  const [isTicking, setIsTicking] = useState(true);

  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      console.log('This interval every 1000ms ' + Date.now());
      setTime(new Date());
    }, 1000);

    return () => {
      console.log('This is function for clear to next effect trigger');
      stop();
    };
  }, []);

  // this is example for clear effect by return () => {func}
  // useEffect(() => {
  // setInterval(() => {
  //   console.log('This interval every 3000ms ' + Date.now());
  //   setTime(new Date());
  // }, 3000);

  //   console.log(time);

  //   return () => {
  //     console.log('This is function for clear to next effect trigger');
  //   };
  // }, []);

  const start = () => {
    setIsTicking(true);
    intervalId.current = setInterval(() => {
      console.log('This interval every 1000ms ' + Date.now());
      setTime(new Date());
    }, 1000);
  };

  const stop = () => {
    setIsTicking(false);
    clearInterval(intervalId.current);
  };

  const toggle = () => {
    if (isTicking) {
      stop();
      return;
    }

    start();
    return;
  };

  return (
    <>
      <Box>
        <div className={css['time-wrap']}>
          <span className={css.time}>{time.toLocaleTimeString()}</span>
        </div>
      </Box>
      <Caption text="Current time" />
      <FlexBox>
        <DecoratedButton
          caption={isTicking ? 'stop' : 'start'}
          onClick={toggle}
        />
        {/* <DecoratedButton
          caption="Stop"
          onClick={stop}
          isDisabled={!isTicking}
        /> */}
      </FlexBox>
    </>
  );
}
