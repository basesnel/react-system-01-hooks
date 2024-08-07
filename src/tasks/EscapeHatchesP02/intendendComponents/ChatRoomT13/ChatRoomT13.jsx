import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Caption } from 'components';
import createConnection from './chat.js';

const ChatRoomT13 = ({ options }) => {
  const { roomId, serverUrl } = options;

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
      <Caption text={`Welcome to the ${options.roomId} room!`} />
    </>
  );
};

ChatRoomT13.propTypes = {
  options: PropTypes.shape({
    serverUrl: PropTypes.string.isRequired,
    roomId: PropTypes.string.isRequired,
  }).isRequired,
};

export default ChatRoomT13;
