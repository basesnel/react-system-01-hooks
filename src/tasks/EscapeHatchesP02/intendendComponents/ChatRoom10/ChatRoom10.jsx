import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiMessageCircle } from 'react-icons/fi';
import { FlexBox, Caption, Input } from 'components';
import { createConnection } from 'constants';

const serverUrl = 'https://localhost:1234';

const ChatRoom10 = ({ roomId }) => {
  const [message, setMessage] = useState('');

  // eslint-disable-next-line
  const options = {
    serverUrl: serverUrl,
    roomId: roomId,
  };

  useEffect(() => {
    const connection = createConnection(options);
    connection.connect();
    return () => connection.disconnect();
  }, [options]);

  return (
    <FlexBox>
      <Caption text={`Welcome to the ${roomId} room!`} />
      <Input
        inputType="text"
        inputName="messageP09"
        inputValue={message}
        inputLabel="Your message:"
        handleChange={e => setMessage(e.target.value)}
        icon={<FiMessageCircle />}
      />
    </FlexBox>
  );
};

ChatRoom10.propTypes = {
  roomId: PropTypes.string.isRequired,
};

export default ChatRoom10;
