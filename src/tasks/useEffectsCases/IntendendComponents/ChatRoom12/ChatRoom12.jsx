import { useState, useEffect } from 'react';
import { FiMessageCircle } from 'react-icons/fi';
import { Input, Caption } from 'components';
import { createConnection } from 'constants';

const serverUrl = 'http://localhost:1234';
const roomId = 'music';

const ChatRoom12 = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();

    return () => connection.disconnect();
  }, []);

  return (
    <>
      <Caption text={`Welcome to the ${roomId} room!`} />
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

export default ChatRoom12;
