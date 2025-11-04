import { useState } from 'react';
import { MdChat } from 'react-icons/md';
import { TextArea, Button, Form } from 'components';

const Chat = ({ contact }) => {
  const [text, setText] = useState('');

  return (
    <Form>
      <TextArea
        textAreaName="Prac14Text"
        textAreaValue={text}
        handleChange={e => setText(e.target.value)}
        textAreaPlaceholder={'Chat to' + contact.name}
        icon={<MdChat />}
      />
      <Button caption={`Send to ${contact.email}`} onClick={() => {}} />
    </Form>
  );
};

export default Chat;
