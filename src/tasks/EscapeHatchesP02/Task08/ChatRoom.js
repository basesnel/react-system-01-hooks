import { useEffect } from 'react';
import { Title } from 'components';
import {
  createEncryptedConnection,
  createUnencryptedConnection,
} from './chat.js';

const ChatRoom = ({ roomId, isEncrypted }) => {
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

export default ChatRoom;
