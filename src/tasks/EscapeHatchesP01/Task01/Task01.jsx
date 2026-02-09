import { useState, useRef } from 'react';
import { toast } from 'react-toastify';
import { FiEdit } from 'react-icons/fi';
import { Input, FlexBox, Button } from 'components';

const Task01 = () => {
  const [text, setText] = useState('');
  const [isSending, setIsSending] = useState(false);
  const timeoutId = useRef(null);

  function handleSend(e) {
    if (!text.trim().length) return toast.warning('Please, input message!');

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
        disabled={isSending}
        name="messageT01"
        value={text}
        placeholder="Input message..."
        onChange={e => setText(e.target.value)}
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
};

export default Task01;
