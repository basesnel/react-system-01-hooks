import { useState, useEffect } from 'react';
import { FiMessageCircle } from 'react-icons/fi';
import { Caption, TextInput } from 'components';
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
      <TextInput
        type="text"
        name="messageP12"
        value={message}
        label="Your message:"
        placeholder="Type your message..."
        onChange={e => setMessage(e.target.value)}
        icon={<FiMessageCircle />}
      />
    </>
  );
};

export default ChatRoom12;
