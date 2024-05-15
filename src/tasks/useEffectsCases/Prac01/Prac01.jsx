import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import { MdChat } from 'react-icons/md';
import { FiServer } from 'react-icons/fi';

import Input from 'components/Input';
import Title from 'components/Title';
import Select from 'components/Select';
import Button from 'components/Button';
import FlexBox from 'components/FlexBox';

import { createConnection } from 'constants';
import { chatRoom } from 'constants';

const ChatRoom = props => {
  const { roomId } = props;

  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();

    return () => {
      connection.disconnect();
    };
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

const Prac01 = () => {
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
};

export default Prac01;
