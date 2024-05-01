import { useState, useRef } from 'react';
import { toast } from 'react-toastify';
import { MdChat } from 'react-icons/md';

import Input from 'components/Input';
import Button from 'components/Button';
import FlexBox from 'components/FlexBox';
// import DecoratedMiniForm from 'components/DecoratedMiniForm';

export default function Task04() {
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
      {/* <DecoratedMiniForm
        onFormSubmit={handleSend}
        filling={`Send ${text}`}
        icon={<RiInsertRowBottom />}
      /> */}
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
}
