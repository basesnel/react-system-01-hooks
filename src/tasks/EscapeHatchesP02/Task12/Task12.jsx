import { Title } from 'components';

import { useState, useEffect } from 'react';

const Task12 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('✅ Creating an interval');
    const id = setInterval(() => {
      console.log('⏰ Interval tick');
      setCount(count + 1);
    }, 1000);

    return () => {
      console.log('❌ Clearing an interval');
      clearInterval(id);
    };
  }, [count]);

  return (
    <>
      <Title caption={`Counter: ${count}`} level={2} />
    </>
  );
};

export default Task12;
