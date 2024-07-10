import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Title } from 'components';
import { createConnection } from 'constants';

const serverUrl = 'https://localhost:1234';

const ChatRoom01 = ({ roomId }) => {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);

  return <Title level={3} caption={`welcome to the ${roomId} room!`} />;
};

ChatRoom01.propTypes = {
  roomId: PropTypes.string.isRequired,
};

export default ChatRoom01;
