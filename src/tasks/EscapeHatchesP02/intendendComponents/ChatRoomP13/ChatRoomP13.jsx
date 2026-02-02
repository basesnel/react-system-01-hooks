import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiMessageCircle } from 'react-icons/fi';
import { FlexBox, Caption, TextInput } from 'components';
import { createConnection } from 'constants';

const serverUrl = 'https://localhost:1234';

const ChatRoomP13 = ({ roomId }) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const createOptions = () => {
      return {
        serverUrl: serverUrl,
        roomId: roomId,
      };
    };

    const options = createOptions();
    const connection = createConnection(options);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);

  return (
    <FlexBox wrapped="wrap">
      <Caption text={`Welcome to the ${roomId} room!`} />
      <TextInput
        name="messageP14"
        value={message}
        label="Your message:"
        placeholder="Type your message..."
        onChange={e => setMessage(e.target.value)}
        icon={<FiMessageCircle />}
      />
    </FlexBox>
  );
};

ChatRoomP13.propTypes = {
  roomId: PropTypes.string.isRequired,
};

export default ChatRoomP13;
