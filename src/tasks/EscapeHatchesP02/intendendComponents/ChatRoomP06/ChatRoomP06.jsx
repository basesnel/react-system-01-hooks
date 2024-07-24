import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiMessageCircle } from 'react-icons/fi';
import { Button, FlexBox, Caption, Input } from 'components';
import { createConnection, sendMessage } from 'constants';

const serverUrl = 'https://localhost:1234';

const ChatRoomP06 = ({ roomId }) => {
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
      <Caption text={`Welcome to the ${roomId} room!`} />
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

ChatRoomP06.propTypes = {
  roomId: PropTypes.string.isRequired,
};

export default ChatRoomP06;
