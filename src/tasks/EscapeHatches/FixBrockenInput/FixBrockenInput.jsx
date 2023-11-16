import { useState, useRef } from 'react';
import { toast } from 'react-toastify';
import { FiEdit } from 'react-icons/fi';

import DecoratedButton from 'components/DecoratedButton';
import DecoratedInput from 'components/DecoratedInput';
import FlexBox from 'components/FlexBox';

export default function FixBrockenInput() {
  const [text, setText] = useState('');
  const [isSending, setIsSending] = useState(false);
  const timeoutId = useRef(null);

  function handleSend() {
    setIsSending(true);
    timeoutId.current = setTimeout(() => {
      setIsSending(false);
      return toast.info(`Send text: ${text}`);
    }, 3000);
  }

  function handleUndo() {
    setIsSending(false);
    clearTimeout(timeoutId.current);
  }

  return (
    <>
      <DecoratedInput
        isDisabled={isSending}
        inputType="text"
        inputName="message"
        value={text}
        handleChange={e => setText(e.target.value)}
        icon={<FiEdit />}
      />
      <FlexBox>
        <DecoratedButton
          caption={isSending ? 'Sending...' : 'Send'}
          onClick={handleSend}
          isDisabled={isSending}
        />
        {isSending && <DecoratedButton caption="Undo" onClick={handleUndo} />}
      </FlexBox>
    </>
  );
}
