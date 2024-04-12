import { useState, useEffect } from 'react';

import FlexBox from 'components/FlexBox';
import Span from 'components/Span';

export default function Prac14() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(c => c + 1);
      // console.log(`setting new ${count}`);
    }, 1000);
    return () => {
      clearInterval(intervalId);
      // console.log(`resetting new ${count}`);
    };
  }, []);

  return (
    <FlexBox>
      <Span>{count}</Span>
    </FlexBox>
  );
}
