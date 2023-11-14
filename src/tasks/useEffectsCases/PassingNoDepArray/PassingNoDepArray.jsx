import { useState, useEffect } from 'react';
import { MdChat } from 'react-icons/md';
import { FiServer } from 'react-icons/fi';
import { FiMessageCircle } from 'react-icons/fi';
import { createConnection } from 'constants';

import FlexBox from 'components/FlexBox';
import DecoratedInput from 'components/DecoratedInput';
import Title from 'components/Title';
import DecoratedSelect from 'components/DecoratedSelect';
import DecoratedButton from 'components/DecoratedButton';

import { chatRoom } from 'constants';

function ChatRoom({ roomId }) {
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
      <DecoratedInput
        inputType="text"
        inputName="server"
        inputValue={serverUrl}
        inputLabel="Server URL:"
        handleChange={e => setServerUrl(e.target.value)}
        icon={<FiServer />}
      />
      <Title level={3} caption={`Welcome to the ${roomId} room!`} />
      <DecoratedInput
        inputType="text"
        inputName="message"
        inputValue={message}
        inputLabel="Your message:"
        handleChange={e => setMessage(e.target.value)}
        icon={<FiMessageCircle />}
      />
    </FlexBox>
  );
}

export default function PassingNoDepArray() {
  const [show, setShow] = useState(false);
  const [roomId, setRoomId] = useState('general');

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
