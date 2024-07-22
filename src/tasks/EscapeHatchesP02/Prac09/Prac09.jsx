import { useState } from 'react';
import { MdChat } from 'react-icons/md';
import { Select, FlexBox } from 'components';
import { chatRoom } from 'constants';
import { ChatRoom10 } from '../intendendComponents';

const Prac09 = () => {
  const [roomId, setRoomId] = useState('general');

  return (
    <>
      <FlexBox align="flex-end">
        <Select
          selectLabel="Choose the chat room: "
          selectName="ChatPrac09"
          selected={roomId}
          list={chatRoom}
          icon={<MdChat />}
          onHandleSelect={e => setRoomId(e.target.value)}
        />
      </FlexBox>
      <hr />
      <ChatRoom10 roomId={roomId} />
    </>
  );
};

export default Prac09;
