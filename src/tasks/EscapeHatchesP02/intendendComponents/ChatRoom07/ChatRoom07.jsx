import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Title } from 'components';
import {
  createEncryptedConnection,
  createUnencryptedConnection,
} from 'constants';

const ChatRoom07 = ({ roomId, isEncrypted }) => {
  useEffect(() => {
    const createConnection = isEncrypted
      ? createEncryptedConnection
      : createUnencryptedConnection;
    const connection = createConnection(roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, isEncrypted]);

  return <Title level={3} caption={`welcome to the ${roomId} room!`} />;
};

ChatRoom07.propTypes = {
  roomId: PropTypes.string.isRequired,
  isEncrypted: PropTypes.bool.isRequired,
};

export default ChatRoom07;
