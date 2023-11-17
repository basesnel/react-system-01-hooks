import { useState, useRef } from 'react';
import { toast } from 'react-toastify';
import { FiEdit } from 'react-icons/fi';

import DecoratedInput from 'components/DecoratedInput';
import DecoratedButton from 'components/DecoratedButton';
import FlexBox from 'components/FlexBox';

export default function FixBrockenInput() {
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
      <DecoratedInput
        isDisabled={isSending}
        inputType="text"
        inputName="message"
        inputValue={text}
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
