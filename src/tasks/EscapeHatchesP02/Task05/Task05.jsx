import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MdChat } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import { Title, Select, FlexBox, Input } from 'components';
import { chatRoom, createConnection } from 'constants';

const serverUrl = 'https://localhost:1234';

const ChatRoom = ({ roomId }) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);

  return (
    <>
      <Title level={3} caption={`welcome to the ${roomId} room!`} />
      <Input
        isDisabled={false}
        inputType="text"
        inputName="Task05message"
        inputValue={message}
        inputPlaceholder="Input message"
        handleChange={e => setMessage(e.target.value)}
        icon={<FiEdit />}
      />
    </>
  );
};

const Task05 = () => {
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
  selectedServerUrl: PropTypes.string,
};

ChatRoom.defaultProps = {
  selectedServerUrl: null,
};

export default Task05;
