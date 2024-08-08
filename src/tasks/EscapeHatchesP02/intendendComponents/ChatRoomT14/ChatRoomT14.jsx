import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Caption } from 'components';
import createConnection from './chat.js';

const ChatRoomT14 = ({ roomId, serverUrl }) => {
  useEffect(() => {
    const connection = createConnection({
      roomId: roomId,
      serverUrl: serverUrl,
    });
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, serverUrl]);

  return (
    <>
      <Caption text={`Welcome to the ${roomId} room!`} />
    </>
  );
};

ChatRoomT14.propTypes = {
  options: PropTypes.shape({
    serverUrl: PropTypes.string.isRequired,
    roomId: PropTypes.string.isRequired,
  }).isRequired,
};

export default ChatRoomT14;
