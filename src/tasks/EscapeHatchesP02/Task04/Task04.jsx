import DecoratedButton from 'components/DecoratedButton';
import DecoratedForm from 'components/DecoratedForm';
import FlexBox from 'components/FlexBox';
import Title from 'components/Title';
import { useState } from 'react';

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
      <textarea
        name="Task04 message"
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
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
  console.log('Sending message: ' + message);
}
