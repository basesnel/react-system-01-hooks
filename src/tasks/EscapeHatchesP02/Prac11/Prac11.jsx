import { useState } from 'react';
import { MdChat } from 'react-icons/md';
import { Select, FlexBox } from 'components';
import { chatRoom } from 'constants';
import { ChatRoom12 } from '../intendendComponents';

const Prac11 = () => {
  const [roomId, setRoomId] = useState('general');

  return (
    <>
      <FlexBox align="flex-end">
        <Select
          selectLabel="Choose the chat room: "
          selectName="ChatPrac11"
          selected={roomId}
          list={chatRoom}
          icon={<MdChat />}
          onHandleSelect={e => setRoomId(e.target.value)}
        />
      </FlexBox>
      <hr />
      <ChatRoom12 />
    </>
  );
};

export default Prac11;
