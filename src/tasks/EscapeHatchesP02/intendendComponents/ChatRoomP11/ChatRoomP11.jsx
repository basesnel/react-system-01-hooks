import { useState, useEffect } from 'react';
import { FiMessageCircle } from 'react-icons/fi';
import { FlexBox, Caption, TextInput } from 'components';
import { createConnection } from 'constants';

const createOptions = () => {
  return {
    serverUrl: 'https://localhost:1234',
    roomId: 'music',
  };
};

const ChatRoomP11 = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const options = createOptions();
    const connection = createConnection(options);
    connection.connect();
    return () => connection.disconnect();
  }, []);

  return (
    <FlexBox wrapped="wrap">
      <Caption text={`Welcome to the ${createOptions().roomId} room!`} />
      <TextInput
        type="text"
        name="messageP11"
        value={message}
        label="Your message:"
        placeholder="Type your message..."
        onChange={e => setMessage(e.target.value)}
        icon={<FiMessageCircle />}
      />
    </FlexBox>
  );
};

export default ChatRoomP11;
