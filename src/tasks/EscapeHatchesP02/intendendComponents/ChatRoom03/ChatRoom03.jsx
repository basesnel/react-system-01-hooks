import { useEffect } from 'react';
import { Title } from 'components';
import { createConnection } from 'constants';

const serverUrl = 'https://localhost:1234';
const roomId = 'general';

const ChatRoom03 = () => {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, []);

  return <Title level={3} caption={`welcome to the ${roomId} room!`} />;
};

export default ChatRoom03;