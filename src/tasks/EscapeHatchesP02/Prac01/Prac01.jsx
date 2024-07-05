import { useState, useEffect } from 'react';
import { MdChat } from 'react-icons/md';
import { Title, Select, Button, FlexBox } from 'components';
import { chatRoom, createConnection } from 'constants';

const serverUrl = 'https://localhost:1234';

const ChatRoom = ({ roomId }) => {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);

  return <Title level={3} caption={`welcome to the ${roomId} room!`} />;
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

export default Prac01;
