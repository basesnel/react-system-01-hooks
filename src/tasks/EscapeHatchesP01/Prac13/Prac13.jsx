import { useEffect } from 'react';

import Title from 'components/Title';

import { createConnection } from 'constants';

const serverURL = 'https://localhost:1234';
const roomID = 'general';

export default function Prac13() {
  useEffect(() => {
    const connection = createConnection(serverURL, roomID);
    connection.connect();
    return () => connection.disconnect();
  }, []);

  return <Title level={3} caption="Welcome to the chat!" />;
}
