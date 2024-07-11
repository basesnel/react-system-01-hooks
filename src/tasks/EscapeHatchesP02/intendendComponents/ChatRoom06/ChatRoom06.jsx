import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiEdit } from 'react-icons/fi';
import { Title, Input } from 'components';
import { createConnection } from 'constants';

const serverUrl = 'https://localhost:1234';

const ChatRoom06 = ({ roomId }) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);

  return (
    <>
      <Title level={3} caption={`welcome to the ${roomId} room!`} />
      <Input
        isDisabled={false}
        inputType="text"
        inputName="Task05message"
        inputValue={message}
        inputPlaceholder="Input message"
        handleChange={e => setMessage(e.target.value)}
        icon={<FiEdit />}
      />
    </>
  );
};

ChatRoom06.propTypes = {
  roomId: PropTypes.string.isRequired,
  selectedServerUrl: PropTypes.string,
};

ChatRoom06.defaultProps = {
  selectedServerUrl: null,
};

export default ChatRoom06;
