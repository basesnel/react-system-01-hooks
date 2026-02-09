import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { MdChat } from 'react-icons/md';
import { Form, TextArea, Button } from 'components';

const ChatP14 = ({ contact, name }) => {
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
        name={name}
        value={text}
        placeholder={'Chat to ' + contact.name}
        onChange={e => setText(e.target.value)}
        icon={<MdChat />}
      />
      <Button type="submit" caption={`Send to ${contact.email}`} />
    </Form>
  );
};

ChatP14.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
};

export default ChatP14;
