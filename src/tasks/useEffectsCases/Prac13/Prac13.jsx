import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import { MdChat } from 'react-icons/md';
import { FiServer, FiMessageCircle } from 'react-icons/fi';

import { FlexBox, Input, Title, Select, Button } from 'components';

import { createConnection, chatRoom } from 'constants';

const ChatRoom = props => {
  const { roomId } = props;

  const [serverUrl, setServerUrl] = useState('https://localhost:1234');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  });

  return (
    <FlexBox>
      <Input
        inputType="text"
        inputName="server"
        inputValue={serverUrl}
        inputLabel="Server URL:"
        handleChange={e => setServerUrl(e.target.value)}
        icon={<FiServer />}
      />
      <Title level={3} caption={`Welcome to the ${roomId} room!`} />
      <Input
        inputType="text"
        inputName="message"
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

const Prac13 = () => {
  const [show, setShow] = useState(false);
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

export default Prac13;
