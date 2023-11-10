import { useState, useEffect } from 'react';
import { MdChat } from 'react-icons/md';
import { createConnection } from 'constants';

import DecoratedInput from 'components/DecoratedInput';
import Title from 'components/Title';
import DecoratedSelect from 'components/DecoratedSelect';
import DecoratedButton from 'components/DecoratedButton';
import FlexBox from 'components/FlexBox';

import { chatRoom } from 'constants';

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();

    return () => {
      connection.disconnect();
    };
  }, [roomId, serverUrl]);

  return (
    <>
      <DecoratedInput
        inputType="text"
        inputName="chatroom"
        inputValue={serverUrl}
        inputLabel="Server URL: "
        handleChange={e => setServerUrl(e.target.value)}
        icon={<MdChat />}
      />
      <Title level={3} caption={`Welcome to the ${roomId} room!`} />
    </>
  );
}

export default function ChatServer() {
  const [roomId, setRoomId] = useState('general');
  const [show, setShow] = useState(false);

  return (
    <>
      <FlexBox align="flex-end">
        <DecoratedSelect
          inputLabel="Choose the chat room: "
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
