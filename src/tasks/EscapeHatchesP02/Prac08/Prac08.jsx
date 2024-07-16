import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MdChat } from 'react-icons/md';
import { Select, FlexBox, Title, CheckBox } from 'components';
import { chatRoom } from 'constants';
import { createConnection } from './chat';
import { showNotification } from './notifications';

const serverUrl = 'https://localhost:1234';

const ChatRoom = ({ roomId, theme }) => {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.on('connected', () => {
      showNotification('Connected!', theme);
    });
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, theme]);

  return <Title caption={`Welcome to the ${roomId} room!`} level={2} />;
};

const Prac08 = () => {
  const [roomId, setRoomId] = useState('general');
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <FlexBox align="flex-end">
        <Select
          selectLabel="Choose the chat room: "
          selectName="ChatP06"
          selected={roomId}
          list={chatRoom}
          icon={<MdChat />}
          onHandleSelect={e => setRoomId(e.target.value)}
        />
        <CheckBox
          name="isDarkP07"
          checked={isDark}
          onChange={e => setIsDark(e.target.checked)}
          label="Use dark theme"
        />
      </FlexBox>
      <hr />
      <ChatRoom roomId={roomId} theme={isDark ? 'dark' : 'light'} />
    </>
  );
};

ChatRoom.propTypes = {
  roomId: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['dark', 'light']),
};

ChatRoom.defaultProps = {
  theme: null,
};

export default Prac08;
