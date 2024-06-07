import { useEffect } from 'react';

import { createConnection } from 'constants';

const useChatRoom = ({ serverUrl, roomId }) => {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();

    return () => {
      connection.disconnect();
    };
  }, [roomId, serverUrl]);
};

export { useChatRoom };
