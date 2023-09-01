import { useEffect, useRef, useState } from 'react';

import { Text } from 'components/Text/Text';
import { Grid } from 'components/Grid/Grid';
import DecoratedButton from 'components/DecoratedButton';
import Box from 'components/Box';

import css from './Clock.module.css';

export default function Clock() {
  const [time, setTime] = useState(() => new Date());

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

  const stop = () => {
    clearInterval(intervalId.current);
  };

  // console.log(intervalId.current);

  return (
    <>
      <Text centered={true}>Current time:</Text>
      <Box>
        <span className={css.time}>{time.toLocaleTimeString()}</span>
      </Box>
      <Grid>
        <DecoratedButton
          caption="Update time state"
          onClick={() => setTime(new Date())}
        />
        <DecoratedButton caption="Stop" onClick={stop} />
      </Grid>
    </>
  );
}
