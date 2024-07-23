import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Caption } from 'components';
import { createConnection } from 'constants';

const serverUrl = 'https://localhost:1234';

const ChatRoom01 = ({ roomId }) => {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);

  return <Caption text={`Welcome to the ${roomId} room!`} />;
};

ChatRoom01.propTypes = {
  roomId: PropTypes.string.isRequired,
};

export default ChatRoom01;
