import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import { MdChat } from 'react-icons/md';
import { FiMessageCircle } from 'react-icons/fi';

import { FlexBox, Title, Input, Select } from 'components';

import { createConnection, chatRoom } from 'constants';

const serverUrl = 'https://localhost:1234';

const ChatRoom = props => {
  const { roomId } = props;

  const [message, setMessage] = useState('');

  useEffect(() => {
    function createOptions() {
      return {
        serverUrl: serverUrl,
        roomId: roomId,
      };
    }

    const options = createOptions();
    const connection = createConnection(options.serverUrl, options.roomId);
    connection.connect();

    return () => connection.disconnect();
  }, [roomId]);

  return (
    <FlexBox>
      <Title level={3} caption={`Welcome to the ${roomId} room!`} />
      <Input
        inputType="text"
        inputName="funcMessage"
        inputValue={message}
        inputLabel="Your message:"
        handleChange={e => setMessage(e.target.value)}
        icon={<FiMessageCircle />}
      />
    </FlexBox>
  );
};

ChatRoom.propTypes = {
  roomId: PropTypes.string.isRequired,
};

const Prac16 = () => {
  const [roomId, setRoomId] = useState('general');

  return (
    <>
      <FlexBox>
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

export default Prac16;
