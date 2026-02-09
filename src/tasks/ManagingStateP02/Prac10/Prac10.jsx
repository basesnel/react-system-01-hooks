import { useState } from 'react';
import { FiEdit3 } from 'react-icons/fi';
import { Button, FlexBox, Input } from 'components';

const Prac10 = () => {
  const [counter, setCounter] = useState(0);

  const MyTextField = () => {
    const [text, setText] = useState('');

    return (
      <Input
        name="inputP10"
        value={text}
        placeholder="Type something..."
        onChange={e => setText(e.target.value)}
        icon={<FiEdit3 />}
      />
    );
  };

  return (
    <FlexBox wrapped="wrap">
      <MyTextField />
      <Button
        type="button"
        caption={`Clicked ${counter} times`}
        onClick={() => setCounter(counter + 1)}
      />
    </FlexBox>
  );
};

export default Prac10;
