import { useState, useEffect } from 'react';
import { FiMessageCircle } from 'react-icons/fi';
import { FlexBox, Caption, TextInput } from 'components';
import { createConnection } from 'constants';

const options = {
  serverUrl: 'https://localhost:1234',
  roomId: 'music',
};

const ChatRoomP10 = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const connection = createConnection(options);
    connection.connect();
    return () => connection.disconnect();
  }, []);

  return (
    <FlexBox wrapped="wrap">
      <Caption text={`Welcome to the ${options.roomId} room!`} />
      <TextInput
        type="text"
        name="messageP10"
        value={message}
        label="Your message:"
        placeholder="Type your message..."
        onChange={e => setMessage(e.target.value)}
        icon={<FiMessageCircle />}
      />
    </FlexBox>
  );
};

export default ChatRoomP10;
