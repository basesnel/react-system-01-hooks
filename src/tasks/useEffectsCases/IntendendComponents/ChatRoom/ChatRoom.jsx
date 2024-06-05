import { useState, useEffect } from 'react';

import { FiMessageCircle } from 'react-icons/fi';

import { Input, Title } from 'components';

import { createConnection } from 'constants';

const serverUrl = 'http://localhost:1234';
const roomId = 'music';

const ChatRoom = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();

    return () => connection.disconnect();
  }, []);

  return (
    <>
      <Title level={3} caption={`Welcome to the ${roomId} room!`} />
      <Input
        inputType="text"
        inputName="message"
        inputValue={message}
        inputLabel="Your message:"
        handleChange={e => setMessage(e.target.value)}
        icon={<FiMessageCircle />}
      />
    </>
  );
};

export default ChatRoom;
