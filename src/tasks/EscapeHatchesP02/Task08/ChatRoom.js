import { useEffect } from 'react';
import { Title } from 'components';

const ChatRoom = ({ roomId, createConnection }) => {
  useEffect(() => {
    const connection = createConnection(roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, createConnection]);

  return <Title level={3} caption={`welcome to the ${roomId} room!`} />;
};

export default ChatRoom;
