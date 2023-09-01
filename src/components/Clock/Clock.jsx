import { useEffect, useRef, useState } from 'react';

import Grid from 'components/Grid';
import DecoratedButton from 'components/DecoratedButton';
import Box from 'components/Box';

import css from './Clock.module.css';
import Caption from 'components/Caption';

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
  // console.log(intervalId.current);

  return (
    <>
      <Box>
        <span className={css.time}>{time.toLocaleTimeString()}</span>
      </Box>
      <Caption text="Current time" />
      <Grid>
        <DecoratedButton
          caption="Start"
          onClick={start}
          isDisabled={isTicking}
        />
        <DecoratedButton
          caption="Stop"
          onClick={stop}
          isDisabled={!isTicking}
        />
      </Grid>
    </>
  );
}
