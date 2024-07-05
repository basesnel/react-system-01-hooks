import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MdChat } from 'react-icons/md';
import { FiServer } from 'react-icons/fi';
import { Input, Title, Select, FlexBox } from 'components';
import { chatRoom, createConnection } from 'constants';

const ChatRoom = ({ roomId }) => {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
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
      <Title level={3} caption={`Welcome to the ${roomId} room!`} />
    </FlexBox>
  );
};

const Prac02 = () => {
  const [roomId, setRoomId] = useState('general');

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
      </FlexBox>
      <hr />
      <ChatRoom roomId={roomId} />
    </>
  );
};

ChatRoom.propTypes = {
  roomId: PropTypes.string.isRequired,
};

export default Prac02;
