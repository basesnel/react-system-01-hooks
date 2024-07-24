import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Caption } from 'components';
import { createConnection } from './chat';
import { showNotification } from 'constants';

const serverUrl = 'https://localhost:1234';

const ChatRoomP07 = ({ roomId, theme }) => {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.on('connected', () => {
      showNotification('Connected!', theme);
    });
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, theme]);

  return <Caption text={`Welcome to the ${roomId} room!`} />;
};

ChatRoomP07.propTypes = {
  roomId: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['dark', 'light']),
};

ChatRoomP07.defaultProps = {
  theme: null,
};

export default ChatRoomP07;
