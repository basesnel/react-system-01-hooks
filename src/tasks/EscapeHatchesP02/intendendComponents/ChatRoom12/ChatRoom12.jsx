import { useState, useEffect } from 'react';
import { FiMessageCircle } from 'react-icons/fi';
import { FlexBox, Title, Input } from 'components';
import { createConnection } from 'constants';

const createOptions = () => {
  return {
    serverUrl: 'https://localhost:1234',
    roomId: 'music',
  };
};

const ChatRoom12 = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const options = createOptions();
    const connection = createConnection(options);
    connection.connect();
    return () => connection.disconnect();
  }, []);

  return (
    <FlexBox>
      <Title
        caption={`Welcome to the ${createOptions().roomId} room!`}
        level={2}
      />
      <Input
        inputType="text"
        inputName="messageP11"
        inputValue={message}
        inputLabel="Your message:"
        handleChange={e => setMessage(e.target.value)}
        icon={<FiMessageCircle />}
      />
    </FlexBox>
  );
};

export default ChatRoom12;
