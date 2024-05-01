import { useState, useRef } from 'react';
import { toast } from 'react-toastify';
import { FiEdit } from 'react-icons/fi';

import Input from 'components/Input';
import Button from 'components/Button';
import FlexBox from 'components/FlexBox';

export default function Task01() {
  const [text, setText] = useState('');
  const [isSending, setIsSending] = useState(false);
  const timeoutId = useRef(null);

  function handleSend(e) {
    setIsSending(true);

    timeoutId.current = setTimeout(() => {
      toast.info(`Send text: ${text}`);
      setIsSending(false);
      setText('');
    }, 3000);
  }

  function handleUndo() {
    setIsSending(false);
    clearTimeout(timeoutId.current);
  }

  return (
    <>
      <Input
        isDisabled={isSending}
        inputType="text"
        inputName="Task01message"
        inputValue={text}
        inputPlaceholder="Input message"
        handleChange={e => setText(e.target.value)}
        icon={<FiEdit />}
      />
      <FlexBox>
        <Button
          caption={isSending ? 'Sending...' : 'Send'}
          onClick={handleSend}
          isDisabled={isSending}
        />
        {isSending && <Button caption="Undo" onClick={handleUndo} />}
      </FlexBox>
    </>
  );
}
