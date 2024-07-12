import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Title } from 'components';
import { createConnection } from 'constants';

const ChatRoom04 = ({ roomId }) => {
  const [serverUrl] = useState('https://localhost:1234');
  // const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
    // avoid it:
    // eslint-disable-next-line
  }, []);

  return <Title level={3} caption={`welcome to the ${roomId} room!`} />;
};

ChatRoom04.propTypes = {
  roomId: PropTypes.string.isRequired,
};

export default ChatRoom04;