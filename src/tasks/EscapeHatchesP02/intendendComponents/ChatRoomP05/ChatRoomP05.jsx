import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Caption } from 'components';
import { createConnection } from 'constants';

const ChatRoomP05 = ({ roomId, selectedServerUrl }) => {
  const [defaultServerUrl] = useState('https://localhost:1234');
  const serverUrl = selectedServerUrl ?? defaultServerUrl;

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [serverUrl, roomId]);

  return <Caption text={`Welcome to the ${roomId} room!`} />;
};

ChatRoomP05.propTypes = {
  roomId: PropTypes.string.isRequired,
  selectedServerUrl: PropTypes.string,
};

ChatRoomP05.defaultProps = {
  selectedServerUrl: null,
};

export default ChatRoomP05;
