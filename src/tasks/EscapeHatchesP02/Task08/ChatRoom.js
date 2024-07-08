import { useEffect } from 'react';
import { Title } from 'components';

const ChatRoom = ({ roomId, createConnection }) => {
  useEffect(() => {
    const connection = createConnection(roomId);
    connection.connect();
    return () => connection.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomId]);

  return <Title level={3} caption={`welcome to the ${roomId} room!`} />;
};

export default ChatRoom;
