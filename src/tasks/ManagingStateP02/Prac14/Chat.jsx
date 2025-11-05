import { useState } from 'react';
import { toast } from 'react-toastify';
import { MdChat } from 'react-icons/md';
import { TextArea, Button, Form } from 'components';

const Chat = ({ contact }) => {
  const [text, setText] = useState('');

  const handleChatSubmit = event => {
    event.preventDefault();
    setText('');

    if (!text.trim().length) {
      return toast.error(`Text-field is empty - please, enter it!`);
    }

    return toast.success(`${text} sent!`);
  };

  return (
    <Form onSubmit={handleChatSubmit}>
      <TextArea
        textAreaName="Prac14Text"
        textAreaValue={text}
        handleChange={e => setText(e.target.value)}
        textAreaPlaceholder={'Chat to' + contact.name}
        icon={<MdChat />}
      />
      <Button type="submit" caption={`Send to ${contact.email}`} />
    </Form>
  );
};

export default Chat;
