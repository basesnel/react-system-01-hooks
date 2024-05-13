import { useState, useRef } from 'react';
import { toast } from 'react-toastify';
import { MdChat } from 'react-icons/md';

import FlexBox from 'components/FlexBox';
import Input from 'components/Input';
import Button from 'components/Button';

const Task04 = () => {
  const [text, setText] = useState('');
  const actualText = useRef(text);

  function handleSend() {
    if (!text.trim().length) return toast.warning('Please, input message!');

    setTimeout(() => {
      toast.info(`Sending: "${actualText.current}"`);
      setText('');
    }, 3000);
  }

  return (
    <FlexBox>
      <Input
        inputType="text"
        inputName="Task04message"
        inputValue={text}
        inputPlaceholder="Input message"
        handleChange={e => {
          setText(e.target.value);
          actualText.current = e.target.value;
        }}
        icon={<MdChat />}
      />
      <Button onClick={handleSend} caption="Send" />
    </FlexBox>
  );
};

export default Task04;
