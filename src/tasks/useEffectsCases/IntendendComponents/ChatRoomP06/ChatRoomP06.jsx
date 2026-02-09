import { useState } from 'react';
import PropTypes from 'prop-types';
import { FiServer } from 'react-icons/fi';
import { FlexBox, Caption, Input } from 'components';
import { useChatRoom } from 'hooks';

const ChatRoomP06 = props => {
  const { roomId } = props;

  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useChatRoom({
    roomId: roomId,
    serverUrl: serverUrl,
  });

  return (
    <FlexBox wrapped="wrap">
      <Input
        name="chatroomP06"
        value={serverUrl}
        label="Server URL:"
        placeholder="Type server URL..."
        onChange={e => setServerUrl(e.target.value)}
        icon={<FiServer />}
      />
      <Caption text={`Welcome to the ${roomId} room!`} />
    </FlexBox>
  );
};

ChatRoomP06.propTypes = {
  roomId: PropTypes.string.isRequired,
};

export default ChatRoomP06;
