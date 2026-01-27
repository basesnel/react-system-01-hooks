import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiServer, FiMessageCircle } from 'react-icons/fi';
import { FlexBox, TextInput, Caption } from 'components';
import { createConnection } from 'constants';

const ChatRoom13 = props => {
  const { roomId } = props;

  const [serverUrl, setServerUrl] = useState('https://localhost:1234');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  });

  return (
    <FlexBox wrapped="wrap">
      <TextInput
        type="text"
        name="serverP13"
        value={serverUrl}
        label="Server URL:"
        handleChange={e => setServerUrl(e.target.value)}
        icon={<FiServer />}
      />
      <Caption text={`Welcome to the ${roomId} room!`} />
      <TextInput
        type="text"
        name="message"
        value={message}
        label="Your message:"
        placeholder="Type"
        handleChange={e => setMessage(e.target.value)}
        icon={<FiMessageCircle />}
      />
    </FlexBox>
  );
};

ChatRoom13.propTypes = {
  roomId: PropTypes.string.isRequired,
};

export default ChatRoom13;
