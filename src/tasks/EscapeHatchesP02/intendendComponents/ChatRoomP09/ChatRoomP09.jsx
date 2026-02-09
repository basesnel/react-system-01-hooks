import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiMessageCircle } from 'react-icons/fi';
import { FlexBox, Caption, Input } from 'components';
import { createConnection } from 'constants';

const serverUrl = 'https://localhost:1234';

const ChatRoomP09 = ({ roomId }) => {
  const [message, setMessage] = useState('');

  // eslint-disable-next-line
  const options = {
    serverUrl: serverUrl,
    roomId: roomId,
  };

  useEffect(() => {
    const connection = createConnection(options);
    connection.connect();
    return () => connection.disconnect();
  }, [options]);

  return (
    <FlexBox wrapped="wrap">
      <Caption text={`Welcome to the ${roomId} room!`} />
      <Input
        name="messageP09"
        value={message}
        label="Your message:"
        placeholder="Type your message..."
        onChange={e => setMessage(e.target.value)}
        icon={<FiMessageCircle />}
      />
    </FlexBox>
  );
};

ChatRoomP09.propTypes = {
  roomId: PropTypes.string.isRequired,
};

export default ChatRoomP09;
