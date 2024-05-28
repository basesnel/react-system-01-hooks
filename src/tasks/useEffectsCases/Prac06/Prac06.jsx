import { useState } from 'react';

import PropTypes from 'prop-types';

import { MdChat } from 'react-icons/md';
import { FiServer } from 'react-icons/fi';

import { Input } from 'components';
import { Title } from 'components';
import { Select } from 'components';
import { Button } from 'components';
import { FlexBox } from 'components';

import { chatRoom } from 'constants';

import { useChatRoom } from './UseChatRoom';

const ChatRoom = props => {
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
      <Title level={3} caption={`Welcome to the ${roomId} room!`} />
    </FlexBox>
  );
};

const Prac06 = () => {
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

export default Prac06;
