import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MdChat } from 'react-icons/md';
import { Title, Select, Button, FlexBox } from 'components';
import { chatRoom, createConnection } from 'constants';

const ChatRoom = ({ roomId, selectedServerUrl }) => {
  const [defaultServerUrl] = useState('https://localhost:1234');
  const serverUrl = selectedServerUrl ?? defaultServerUrl;

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [serverUrl, roomId]);

  return <Title level={3} caption={`welcome to the ${roomId} room!`} />;
};

const Prac05 = () => {
  const [roomId, setRoomId] = useState('general');
  const [show, setShow] = useState(false);

  return (
    <>
      <FlexBox align="flex-end">
        <Select
          selectLabel="Choose the chat room: "
          selectName="Chat"
          selected={roomId}
          list={chatRoom}
          icon={<MdChat />}
          onHandleSelect={e => setRoomId(e.target.value)}
        />
        <Button
          onClick={() => setShow(!show)}
          caption={show ? 'Close chat' : 'Open Chat'}
        />
      </FlexBox>
      {show && <hr />}
      {show && <ChatRoom roomId={roomId} />}
    </>
  );
};

ChatRoom.propTypes = {
  roomId: PropTypes.string.isRequired,
  selectedServerUrl: PropTypes.string,
};

ChatRoom.defaultProps = {
  selectedServerUrl: null,
};

export default Prac05;
