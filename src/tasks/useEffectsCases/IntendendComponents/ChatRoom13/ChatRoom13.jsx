import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiServer, FiMessageCircle } from 'react-icons/fi';
import { FlexBox, Input, Caption } from 'components';
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
    <FlexBox>
      <Input
        inputType="text"
        inputName="server"
        inputValue={serverUrl}
        inputLabel="Server URL:"
        handleChange={e => setServerUrl(e.target.value)}
        icon={<FiServer />}
      />
      <Caption text={`Welcome to the ${roomId} room!`} />
      <Input
        inputType="text"
        inputName="message"
        inputValue={message}
        inputLabel="Your message:"
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
