import { useEffect } from 'react';
import { Caption } from 'components';
import { createConnection } from 'constants';

const serverUrl = 'https://localhost:1234';
const roomId = 'general';

const ChatRoom03 = () => {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, []);

  return <Caption text={`Welcome to the ${roomId} room!`} />;
};

export default ChatRoom03;
