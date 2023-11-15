import { useState } from 'react';
import { MdChat } from 'react-icons/md';
import { FiServer } from 'react-icons/fi';
import { useChatRoom } from './UseChatRoom';

import DecoratedInput from 'components/DecoratedInput';
import Title from 'components/Title';
import DecoratedSelect from 'components/DecoratedSelect';
import DecoratedButton from 'components/DecoratedButton';
import FlexBox from 'components/FlexBox';

import { chatRoom } from 'constants';

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useChatRoom({
    roomId: roomId,
    serverUrl: serverUrl,
  });

  return (
    <FlexBox>
      <DecoratedInput
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
}

export default function CustomUseChatRoom() {
  const [roomId, setRoomId] = useState('general');
  const [show, setShow] = useState(false);

  return (
    <>
      <FlexBox align="flex-end">
        <DecoratedSelect
          selectLabel="Choose the chat room: "
          selectName="Chat"
          selected={roomId}
          list={chatRoom}
          icon={<MdChat />}
          onHandleSelect={e => setRoomId(e.target.value)}
        />
        <DecoratedButton
          onClick={() => setShow(!show)}
          caption={show ? 'Close chat' : 'Open Chat'}
        />
      </FlexBox>
      {show && <hr />}
      {show && <ChatRoom roomId={roomId} />}
    </>
  );
}
