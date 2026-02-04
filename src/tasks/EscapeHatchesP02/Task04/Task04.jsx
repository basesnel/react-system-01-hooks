import { useState } from 'react';
import { toast } from 'react-toastify';
import { MdChat } from 'react-icons/md';
import { Form, Textarea, Button, Title, FlexBox } from 'components';

const Task04 = () => {
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
          <Button
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
    <Form onSubmit={handleSubmit}>
      <Textarea
        name="messageT04"
        placeholder="Type a message..."
        value={message}
        onChange={e => setMessage(e.target.value)}
        icon={<MdChat />}
      />
      <FlexBox>
        <Button type="submit" disabled={message === ''} caption="Send" />
      </FlexBox>
    </Form>
  );
};

function sendMessage(message) {
  toast.info(`Sending message: ${message}`);
}

export default Task04;
