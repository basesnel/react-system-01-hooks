import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MdChat } from 'react-icons/md';
import { FiMessageCircle } from 'react-icons/fi';
import { createConnection } from 'constants';

import DecoratedInput from 'components/DecoratedInput';
import Title from 'components/Title';
import DecoratedSelect from 'components/DecoratedSelect';
import FlexBox from 'components/FlexBox';

import { chatRoom } from 'constants';

const serverUrl = 'https://localhost:1234';

function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const options = {
      serverUrl: serverUrl,
      roomId: roomId,
    };

    const connection = createConnection(options.serverUrl, options.roomId);
    connection.connect();

    return () => connection.disconnect();
  }, [roomId]);

  return (
    <FlexBox>
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

export default function RemovingUnryObjectDep() {
  const [roomId, setRoomId] = useState('general');

  return (
    <>
      <FlexBox>
        <DecoratedSelect
          selectLabel="Choose the chat room: "
          selectName="Chat"
          selected={roomId}
          list={chatRoom}
          icon={<MdChat />}
          onHandleSelect={e => setRoomId(e.target.value)}
        />
      </FlexBox>
      <hr />
      <ChatRoom roomId={roomId} />
    </>
  );
}

ChatRoom.propTypes = {
  roomId: PropTypes.string.isRequired,
};
