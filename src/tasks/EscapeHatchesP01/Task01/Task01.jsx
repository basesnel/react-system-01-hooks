import { useState, useRef } from 'react';
import { toast } from 'react-toastify';
import { FiEdit } from 'react-icons/fi';
import { TextInput, FlexBox, Button } from 'components';

const Task01 = () => {
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
      <TextInput
        disabled={isSending}
        type="text"
        name="messageT01"
        value={text}
        placeholder="Input message"
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
