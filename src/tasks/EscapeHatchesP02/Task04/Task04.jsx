import { useState } from 'react';
import { toast } from 'react-toastify';
import { MdChat } from 'react-icons/md';

import DecoratedButton from 'components/DecoratedButton';
import DecoratedForm from 'components/DecoratedForm';
import FlexBox from 'components/FlexBox';
import TextArea from 'components/TextArea';
import Title from 'components/Title';

export default function Task04() {
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setShowForm(false);
    sendMessage(message);
  }

  if (!showForm) {
    return (
      <>
        <Title level={3} caption="Thanks for using our services!" />
        <FlexBox>
          <DecoratedButton
            type="button"
            caption="Open chat"
            onClick={() => {
              setMessage('');
              setShowForm(true);
            }}
          />
        </FlexBox>
      </>
    );
  }

  return (
    <DecoratedForm onSubmit={handleSubmit}>
      <TextArea
        textAreaName="Task04 message"
        textAreaPlaceholder="Message"
        textAreaValue={message}
        handleChange={e => setMessage(e.target.value)}
        icon={<MdChat />}
      />
      <FlexBox>
        <DecoratedButton
          type="submit"
          disabled={message === ''}
          caption="Send"
        />
      </FlexBox>
    </DecoratedForm>
  );
}

function sendMessage(message) {
  toast.info(`Sending message: ${message}`);
}
