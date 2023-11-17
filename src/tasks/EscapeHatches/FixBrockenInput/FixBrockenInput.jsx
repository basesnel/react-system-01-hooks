import { useState, useRef } from 'react';
import { toast } from 'react-toastify';
import { FiEdit } from 'react-icons/fi';

import DecoratedForm from 'components/DecoratedForm';
import DecoratedInput from 'components/DecoratedInput';
import DecoratedSubmit from 'components/DecoratedSubmit';
import DecoratedButton from 'components/DecoratedButton';
import FlexBox from 'components/FlexBox';

export default function FixBrockenInput() {
  const [text, setText] = useState('');
  const [isSending, setIsSending] = useState(false);
  const timeoutId = useRef(null);

  function handleSend(e) {
    e.preventDefault();

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
    <DecoratedForm onSubmit={handleSend}>
      <DecoratedInput
        isDisabled={isSending}
        inputType="text"
        inputName="message"
        inputValue={text}
        handleChange={e => setText(e.target.value)}
        icon={<FiEdit />}
      />
      <DecoratedSubmit
        caption={isSending ? 'Sending...' : 'Send'}
        isDisabled={isSending}
      />
      {isSending && (
        <FlexBox>
          <DecoratedButton caption="Undo" onClick={handleUndo} />
        </FlexBox>
      )}
    </DecoratedForm>
  );
}
