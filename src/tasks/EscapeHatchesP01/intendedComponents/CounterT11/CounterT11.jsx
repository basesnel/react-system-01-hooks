import { useState, useEffect } from 'react';
import { Caption } from 'components';

const CounterT11 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    function onTick() {
      setCount(c => c + 1);
    }

    const intervalID = setInterval(onTick, 1000);

    return () => clearInterval(intervalID);
  }, []);

  return <Caption text={count} />;
};

export default CounterT11;
