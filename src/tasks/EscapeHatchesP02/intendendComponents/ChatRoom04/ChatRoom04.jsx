import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Caption } from 'components';
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

  return <Caption text={`Welcome to the ${roomId} room!`} />;
};

ChatRoom04.propTypes = {
  roomId: PropTypes.string.isRequired,
};

export default ChatRoom04;
