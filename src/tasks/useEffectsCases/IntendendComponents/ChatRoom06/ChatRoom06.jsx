import { useState } from 'react';
import PropTypes from 'prop-types';
import { FiServer } from 'react-icons/fi';
import { Input, Title, FlexBox } from 'components';
import { useChatRoom } from './UseChatRoom';

const ChatRoom06 = props => {
  const { roomId } = props;

  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useChatRoom({
    roomId: roomId,
    serverUrl: serverUrl,
  });

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
      <Title level={3} caption={`Welcome to the ${roomId} room!`} />
    </FlexBox>
  );
};

ChatRoom06.propTypes = {
  roomId: PropTypes.string.isRequired,
};

export default ChatRoom06;
