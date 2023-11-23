import { useEffect } from 'react';

import { createConnection } from 'constants';
import Title from 'components/Title';

const serverURL = 'https://localhost:1234';
const roomID = 'general';

export default function AddCleanup() {
  useEffect(() => {
    const connection = createConnection(serverURL, roomID);
    connection.connect();
    return () => connection.disconnect();
  }, []);

  return <Title level={3} caption="Welcome to the chat!" />;
}
