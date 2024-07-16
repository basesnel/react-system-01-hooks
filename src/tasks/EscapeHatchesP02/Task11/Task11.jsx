import { useState, useEffect } from 'react';
import { Title, Button, Paragraph } from 'components';

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
      <Title caption={`Counter: ${count}`} level={2} />
      <Button onClick={() => setCount(0)} caption="Reset" />
      <hr />
      <Paragraph>Every second, increment by:</Paragraph>
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
    </>
  );
};

export default Task11;
