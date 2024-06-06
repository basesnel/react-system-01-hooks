import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiMessageCircle } from 'react-icons/fi';
import { Input, Title, FlexBox } from 'components';
import { createConnection } from 'constants';

const serverUrl = 'https://localhost:1234';

const ChatRoom15 = props => {
  const { roomId } = props;

  const [message, setMessage] = useState('');

  useEffect(() => {
    const options = {
      serverUrl: serverUrl,
      roomId: roomId,
    };

    const connection = createConnection(options.serverUrl, options.roomId);
    connection.connect();

    return () => connection.disconnect();
  }, [roomId]);

  return (
    <FlexBox>
      <Title level={3} caption={`Welcome to the ${roomId} room!`} />
      <Input
        inputType="text"
        inputName="obMessage"
        inputValue={message}
        inputLabel="Your message:"
        handleChange={e => setMessage(e.target.value)}
        icon={<FiMessageCircle />}
      />
    </FlexBox>
  );
};

ChatRoom15.propTypes = {
  roomId: PropTypes.string.isRequired,
};

export default ChatRoom15;
