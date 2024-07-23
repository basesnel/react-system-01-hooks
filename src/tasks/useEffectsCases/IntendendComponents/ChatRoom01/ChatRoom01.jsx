import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiServer } from 'react-icons/fi';
import { FlexBox, Input, Caption } from 'components';
import { createConnection } from 'constants';

const ChatRoom01 = props => {
  const { roomId } = props;

  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();

    return () => {
      connection.disconnect();
    };
  }, [roomId, serverUrl]);

  return (
    <FlexBox>
      <Input
        inputType="text"
        inputName="chatroom"
        inputValue={serverUrl}
        inputLabel="Server URL: "
        handleChange={e => setServerUrl(e.target.value)}
        icon={<FiServer />}
      />
      <Caption text={`Welcome to the ${roomId} room!`} />
    </FlexBox>
  );
};

ChatRoom01.propTypes = {
  roomId: PropTypes.string.isRequired,
};

export default ChatRoom01;
