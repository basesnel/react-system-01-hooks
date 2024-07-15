import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiMessageCircle } from 'react-icons/fi';
import { Button, FlexBox, Title, Input } from 'components';
import { createConnection, sendMessage } from 'constants';

const serverUrl = 'https://localhost:1234';

const ChatRoom08 = ({ roomId }) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);

  const handleSendClick = () => {
    sendMessage(message);
  };

  return (
    <FlexBox>
      <Title caption={`Welcome to the ${roomId} room!`} level={2} />
      <Input
        inputType="text"
        inputName="messageP06"
        inputValue={message}
        inputLabel="Your message:"
        handleChange={e => setMessage(e.target.value)}
        icon={<FiMessageCircle />}
      />
      <Button onClick={handleSendClick} caption="Send" />
    </FlexBox>
  );
};

ChatRoom08.propTypes = {
  roomId: PropTypes.string.isRequired,
};

export default ChatRoom08;
