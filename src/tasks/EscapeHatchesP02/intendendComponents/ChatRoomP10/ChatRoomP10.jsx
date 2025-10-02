import { useState, useEffect } from 'react';
import { FiMessageCircle } from 'react-icons/fi';
import { FlexBox, Caption, Input } from 'components';
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

export default ChatRoomP10;
