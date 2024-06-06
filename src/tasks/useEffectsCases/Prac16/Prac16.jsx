import { useState } from 'react';
import { MdChat } from 'react-icons/md';
import { FlexBox, Select } from 'components';
import { chatRoom } from 'constants';
import { ChatRoom16 } from '../IntendendComponents';

const Prac16 = () => {
  const [roomId, setRoomId] = useState('general');

  return (
    <>
      <FlexBox>
        <Select
          selectLabel="Choose the chat room: "
          selectName="Chat"
          selected={roomId}
          list={chatRoom}
          icon={<MdChat />}
          onHandleSelect={e => setRoomId(e.target.value)}
        />
      </FlexBox>
      <hr />
      <ChatRoom16 roomId={roomId} />
    </>
  );
};

export default Prac16;
