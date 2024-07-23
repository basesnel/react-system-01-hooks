import { useState, useEffect } from 'react';
import { FlexBox, Caption } from 'components';

const Task12 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('✅ Creating an interval');
    const id = setInterval(() => {
      console.log('⏰ Interval tick');
      setCount(c => c + 1);
    }, 1000);

    return () => {
      console.log('❌ Clearing an interval');
      clearInterval(id);
    };
  }, []);

  return (
    <FlexBox>
      <Caption text={`Counter: ${count}`} />
    </FlexBox>
  );
};

export default Task12;
