import { useState } from 'react';
import PropTypes from 'prop-types';
import { FiServer } from 'react-icons/fi';
import { Input, Caption, FlexBox } from 'components';
import { useChatRoom } from 'hooks';

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
      <Caption text={`Welcome to the ${roomId} room!`} />
    </FlexBox>
  );
};

ChatRoom06.propTypes = {
  roomId: PropTypes.string.isRequired,
};

export default ChatRoom06;
