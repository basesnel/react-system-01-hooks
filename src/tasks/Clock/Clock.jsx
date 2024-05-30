import { useEffect, useRef, useState } from 'react';

import { FlexBox, Caption, Button, Box } from 'components';

import css from './Clock.module.css';

const Clock = () => {
  const { timeDisplay, timeWrap } = css;

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
        <div className={timeWrap}>
          <span className={timeDisplay}>{time.toLocaleTimeString()}</span>
        </div>
      </Box>
      <Caption text="Current time" />
      <FlexBox>
        <Button caption={isTicking ? 'stop' : 'start'} onClick={toggle} />
      </FlexBox>
    </>
  );
};

export default Clock;
