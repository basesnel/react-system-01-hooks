import { useState, useEffect } from 'react';
import { createConnection, sendMessage } from './chat';
import { MdChat } from 'react-icons/md';
import { FiMessageCircle } from 'react-icons/fi';
import { Select, Button, FlexBox, Title, Input } from 'components';
import { chatRoom } from 'constants';

const serverUrl = 'https://localhost:1234';

const ChatRoom = ({ roomId }) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);

  const handleSendClick = () => {
    sendMessage(message);
  };

  return (
    <FlexBox>
      <Title caption={`Welcome to the ${roomId} room!`} level={2} />
      <Input
        inputType="text"
        inputName="messageP06"
        inputValue={message}
        inputLabel="Your message:"
        handleChange={e => setMessage(e.target.value)}
        icon={<FiMessageCircle />}
      />
      <Button onClick={handleSendClick} caption="Send" />
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
          selectName="ChatP06"
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

export default Prac06;
