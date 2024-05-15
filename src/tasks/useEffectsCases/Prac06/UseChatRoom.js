import { useEffect } from 'react';
import { createConnection } from 'constants';

export const useChatRoom = ({ serverUrl, roomId }) => {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();

    return () => {
      connection.disconnect();
    };
  }, [roomId, serverUrl]);
};
