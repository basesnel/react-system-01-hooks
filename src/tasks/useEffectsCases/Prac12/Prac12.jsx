import { useState, useEffect } from 'react';
import { FiMessageCircle } from 'react-icons/fi';
import { createConnection } from 'constants';

import DecoratedInput from 'components/DecoratedInput';
import Title from 'components/Title';
import Button from 'components/Button';

import FlexBox from 'components/FlexBox';

const serverUrl = 'http://localhost:1234';
const roomId = 'music';

function ChatRoom() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, []);

  return (
    <>
      <Title level={3} caption={`Welcome to the ${roomId} room!`} />
      <DecoratedInput
        inputType="text"
        inputName="message"
        inputValue={message}
        inputLabel="Your message:"
        handleChange={e => setMessage(e.target.value)}
        icon={<FiMessageCircle />}
      />
    </>
  );
}

export default function Prac12() {
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
      {show && <ChatRoom />}
    </>
  );
}
