import { useState, useEffect } from 'react';
import { FiMessageCircle } from 'react-icons/fi';
import { FlexBox, Title, Input } from 'components';
import { createConnection } from 'constants';

const options = {
  serverUrl: 'https://localhost:1234',
  roomId: 'music',
};

const ChatRoom11 = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const connection = createConnection(options);
    connection.connect();
    return () => connection.disconnect();
  }, []);

  return (
    <FlexBox>
      <Title caption={`Welcome to the ${options.roomId} room!`} level={2} />
      <Input
        inputType="text"
        inputName="messageP10"
        inputValue={message}
        inputLabel="Your message:"
        handleChange={e => setMessage(e.target.value)}
        icon={<FiMessageCircle />}
      />
    </FlexBox>
  );
};

export default ChatRoom11;