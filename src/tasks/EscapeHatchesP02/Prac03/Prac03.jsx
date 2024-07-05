import { useState, useEffect } from 'react';
import { Button, Title, FlexBox } from 'components';
import { createConnection } from 'constants';

const serverUrl = 'https://localhost:1234';
const roomId = 'general';

const ChatRoom = () => {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, []);

  return <Title level={3} caption={`welcome to the ${roomId} room!`} />;
};

const Prac03 = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <FlexBox>
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

export default Prac03;
