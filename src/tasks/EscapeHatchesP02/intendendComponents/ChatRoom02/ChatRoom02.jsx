import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiServer } from 'react-icons/fi';
import { FlexBox, Input, Title } from 'components';
import { createConnection } from 'constants';

const ChatRoom02 = ({ roomId }) => {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, serverUrl]);

  return (
    <FlexBox>
      <Input
        inputType="text"
        inputName="chatroom"
        inputValue={serverUrl}
        inputLabel="Server URL: "
        handleChange={e => setServerUrl(e.target.value)}
        icon={<FiServer />}
      />
      <Title level={3} caption={`Welcome to the ${roomId} room!`} />
    </FlexBox>
  );
};

ChatRoom02.propTypes = {
  roomId: PropTypes.string.isRequired,
};

export default ChatRoom02;
