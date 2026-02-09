import { useState } from 'react';
import { FiEdit3 } from 'react-icons/fi';
import { Button, FlexBox, Form, P, TextArea } from 'components';

const Prac06 = () => {
  const [text, setText] = useState('');
  const [status, setStatus] = useState('typing');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    await sendMessage(text);
    setStatus('sent');
  }

  const isSending = status === 'sending';
  const isSent = status === 'sent';

  if (isSent)
    return (
      <P centered succeeded>
        Thanks for feedback!
      </P>
    );

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <TextArea
          disabled={isSending}
          name="textareaP06"
          value={text}
          label="Your feedback:"
          placeholder="Type your feedback..."
          onChange={e => setText(e.target.value)}
          icon={<FiEdit3 />}
        />
        <FlexBox>
          <Button type="submit" isDisabled={isSending} caption="Send" />
        </FlexBox>
      </Form>
    </>
  );
};

function sendMessage(text) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  });
}

export default Prac06;
