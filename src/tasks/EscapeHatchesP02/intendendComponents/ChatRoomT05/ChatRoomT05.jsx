import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiEdit } from 'react-icons/fi';
import { Caption, Input } from 'components';
import { createConnection } from 'constants';

const serverUrl = 'https://localhost:1234';

const ChatRoomT05 = ({ roomId }) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);

  return (
    <>
      <Caption text={`Welcome to the ${roomId} room!`} />
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

ChatRoomT05.propTypes = {
  roomId: PropTypes.string.isRequired,
  selectedServerUrl: PropTypes.string,
};

ChatRoomT05.defaultProps = {
  selectedServerUrl: null,
};

export default ChatRoomT05;
