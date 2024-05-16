import { useState, useEffect } from 'react';

import FlexBox from 'components/FlexBox';
import Span from 'components/Span';

const Prac14 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <FlexBox>
      <Span>{count}</Span>
    </FlexBox>
  );
};

export default Prac14;
