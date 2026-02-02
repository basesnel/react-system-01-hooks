import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiServer } from 'react-icons/fi';
import { FlexBox, TextInput, Caption } from 'components';
import { createConnection } from 'constants';

const ChatRoomP02 = ({ roomId }) => {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, serverUrl]);

  return (
    <FlexBox wrapped="wrap">
      <TextInput
        name="serverP02"
        value={serverUrl}
        label="Server URL: "
        placeholder="Type server URL..."
        onChange={e => setServerUrl(e.target.value)}
        icon={<FiServer />}
      />
      <Caption text={`Welcome to the ${roomId} room!`} />
    </FlexBox>
  );
};

ChatRoomP02.propTypes = {
  roomId: PropTypes.string.isRequired,
};

export default ChatRoomP02;
