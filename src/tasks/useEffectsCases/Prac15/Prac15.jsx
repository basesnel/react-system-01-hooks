import PropTypes from 'prop-types';

import { useState, useEffect } from 'react';
import { MdChat } from 'react-icons/md';
import { FiMessageCircle } from 'react-icons/fi';

import Input from 'components/Input';
import Title from 'components/Title';
import Select from 'components/Select';
import FlexBox from 'components/FlexBox';

import { createConnection } from 'constants';
import { chatRoom } from 'constants';

const serverUrl = 'https://localhost:1234';

const ChatRoom = props => {
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

ChatRoom.propTypes = {
  roomId: PropTypes.string.isRequired,
};

const Prac15 = () => {
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

export default Prac15;
