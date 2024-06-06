import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiMessageCircle } from 'react-icons/fi';
import { FlexBox, Title, Input } from 'components';
import { createConnection } from 'constants';

const serverUrl = 'https://localhost:1234';

const ChatRoom16 = props => {
  const { roomId } = props;

  const [message, setMessage] = useState('');

  useEffect(() => {
    function createOptions() {
      return {
        serverUrl: serverUrl,
        roomId: roomId,
      };
    }

    const options = createOptions();
    const connection = createConnection(options.serverUrl, options.roomId);
    connection.connect();

    return () => connection.disconnect();
  }, [roomId]);

  return (
    <FlexBox>
      <Title level={3} caption={`Welcome to the ${roomId} room!`} />
      <Input
        inputType="text"
        inputName="funcMessage"
        inputValue={message}
        inputLabel="Your message:"
        handleChange={e => setMessage(e.target.value)}
        icon={<FiMessageCircle />}
      />
    </FlexBox>
  );
};

ChatRoom16.propTypes = {
  roomId: PropTypes.string.isRequired,
};

export default ChatRoom16;
