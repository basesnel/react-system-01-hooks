import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiMessageCircle } from 'react-icons/fi';
import { TextInput, Caption, FlexBox } from 'components';
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
    <FlexBox wrapped="wrap">
      <Caption text={`Welcome to the ${roomId} room!`} />
      <TextInput
        name="messageP16"
        value={message}
        label="Your message:"
        placeholder="Type your message..."
        onChange={e => setMessage(e.target.value)}
        icon={<FiMessageCircle />}
      />
    </FlexBox>
  );
};

ChatRoom16.propTypes = {
  roomId: PropTypes.string.isRequired,
};

export default ChatRoom16;
