import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiServer } from 'react-icons/fi';
import { FlexBox, TextInput, Caption } from 'components';
import { createConnection } from 'constants';

const ChatRoomP01 = props => {
  const { roomId } = props;

  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();

    return () => {
      connection.disconnect();
    };
  }, [roomId, serverUrl]);

  return (
    <FlexBox wrapped="wrap">
      <TextInput
        type="text"
        name="chatroomP01"
        value={serverUrl}
        label="Server URL:"
        placeholder="Type server URL..."
        onChange={e => setServerUrl(e.target.value)}
        icon={<FiServer />}
      />
      <Caption text={`Welcome to the ${roomId} room!`} />
    </FlexBox>
  );
};

ChatRoomP01.propTypes = {
  roomId: PropTypes.string.isRequired,
};

export default ChatRoomP01;
