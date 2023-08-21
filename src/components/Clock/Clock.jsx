import { useEffect, useState } from 'react';

import { Text } from 'components/Text/Text';

export const Clock = () => {
  const [time, setTime] = useState(() => new Date());

  let intervalId = null;

  useEffect(() => {
    intervalId = setInterval(() => {
      console.log('This interval every 1000ms ' + Date.now());
      setTime(new Date());
    }, 1000);
  }, []);

  const stop = () => {
    clearInterval(intervalId);
  };

  console.log(intervalId);

  return (
    <>
      <Text>Current time: {time.toLocaleTimeString()}</Text>
      <button onClick={stop}>Stop</button>
    </>
  );
};
