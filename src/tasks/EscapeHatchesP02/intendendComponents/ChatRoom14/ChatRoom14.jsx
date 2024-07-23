import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiMessageCircle } from 'react-icons/fi';
import { FlexBox, Caption, Input } from 'components';
import { createConnection } from 'constants';

const serverUrl = 'https://localhost:1234';

const ChatRoom14 = ({ roomId }) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const createOptions = () => {
      return {
        serverUrl: serverUrl,
        roomId: roomId,
      };
    };

    const options = createOptions();
    const connection = createConnection(options);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);

  return (
    <FlexBox>
      <Caption text={`Welcome to the ${roomId} room!`} />
      <Input
        inputType="text"
        inputName="messageP14"
        inputValue={message}
        inputLabel="Your message:"
        handleChange={e => setMessage(e.target.value)}
        icon={<FiMessageCircle />}
      />
    </FlexBox>
  );
};

ChatRoom14.propTypes = {
  roomId: PropTypes.string.isRequired,
};

export default ChatRoom14;
