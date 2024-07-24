import { useState } from 'react';
import { MdChat } from 'react-icons/md';
import { Select, FlexBox } from 'components';
import { chatRoom } from 'constants';
import { ChatRoomP02 } from '../intendendComponents';

const Prac02 = () => {
  const [roomId, setRoomId] = useState('general');

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
      </FlexBox>
      <hr />
      <ChatRoomP02 roomId={roomId} />
    </>
  );
};

export default Prac02;
