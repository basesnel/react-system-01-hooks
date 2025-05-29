import { useState } from 'react';
import { FiEdit3 } from 'react-icons/fi';
import { Button, FlexBox, Form, Paragraph, TextArea } from 'components';

const Prac06 = () => {
  const [text, setText] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSending(true);
    await sendMessage(text);
    setIsSending(false);
    setIsSent(true);
  }

  if (isSent)
    return (
      <Paragraph centered succeeded>
        Thanks for feedback!
      </Paragraph>
    );

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <TextArea
          isDisabled={isSending}
          textAreaName="textareaP06"
          textAreaValue={text}
          textAreaLabel="Your feedback:"
          textAreaPlaceholder="Type your feedback..."
          handleChange={e => setText(e.target.value)}
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
