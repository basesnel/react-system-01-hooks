import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Title } from 'components';
import { createConnection } from 'constants';

const serverUrl = 'https://localhost:1234';
const roomId = 'music';

const ChatRoom09 = () => {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, []);

  return <Title level={3} caption={`welcome to the ${roomId} room!`} />;
};

ChatRoom09.propTypes = {
  roomId: PropTypes.string.isRequired,
};

export default ChatRoom09;