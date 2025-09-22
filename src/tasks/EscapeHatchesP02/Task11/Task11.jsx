import { useState, useEffect } from 'react';
import { Title, Button, P, FlexBox } from 'components';

const Task11 = () => {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + increment);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [increment]);

  return (
    <>
      <FlexBox>
        <Title caption={`Counter: ${count}`} level={2} />
        <Button onClick={() => setCount(0)} caption="Reset" />
      </FlexBox>
      <hr />
      <P>Every second, increment by:</P>
      <FlexBox>
        <Button
          isDisabled={increment === 0}
          onClick={() => {
            setIncrement(i => i - 1);
          }}
          caption="-"
        />
        <b>{increment}</b>
        <Button
          onClick={() => {
            setIncrement(i => i + 1);
          }}
          caption="+"
        />
      </FlexBox>
    </>
  );
};

export default Task11;
