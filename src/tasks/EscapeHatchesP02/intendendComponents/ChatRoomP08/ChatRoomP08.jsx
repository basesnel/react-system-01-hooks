import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Caption } from 'components';
import { createConnection } from 'constants';

const serverUrl = 'https://localhost:1234';
const roomId = 'music';

const ChatRoomP08 = () => {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, []);

  return <Caption text={`Welcome to the ${roomId} room!`} />;
};

ChatRoomP08.propTypes = {
  roomId: PropTypes.string.isRequired,
};

export default ChatRoomP08;
