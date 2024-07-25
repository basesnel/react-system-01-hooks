import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Caption } from 'components';
import {
  createEncryptedConnection,
  createUnencryptedConnection,
} from 'constants';

const ChatRoomT08 = ({ roomId, isEncrypted }) => {
  useEffect(() => {
    const createConnection = isEncrypted
      ? createEncryptedConnection
      : createUnencryptedConnection;
    const connection = createConnection(roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, isEncrypted]);

  return <Caption text={`Welcome to the ${roomId} room!`} />;
};

ChatRoomT08.propTypes = {
  roomId: PropTypes.string.isRequired,
  isEncrypted: PropTypes.bool.isRequired,
};

export default ChatRoomT08;
