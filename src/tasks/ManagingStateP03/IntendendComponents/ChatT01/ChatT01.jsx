import PropTypes from 'prop-types';
import { MdChat } from 'react-icons/md';
import { Form, Textarea, Button } from 'components';

const ChatT01 = ({ contact, message, name, dispatch }) => {
  const handleChatSubmit = event => {
    event.preventDefault();
  };

  return (
    <Form onSubmit={handleChatSubmit}>
      <Textarea
        name={name}
        value={message}
        placeholder={'Chat to ' + contact.name}
        onChange={e => {
          dispatch({
            type: 'edited_message',
            message: e.target.value,
          });
        }}
        icon={<MdChat />}
      />
      <Button type="submit" caption={`Send to ${contact.email}`} />
    </Form>
  );
};

ChatT01.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  message: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default ChatT01;
