import { useState } from 'react';
import { MdChat } from 'react-icons/md';
import { Select, FlexBox } from 'components';
import { chatRoom } from 'constants';
import { ChatRoom15 } from '../IntendendComponents';

const Prac15 = () => {
  const [roomId, setRoomId] = useState('general');

  return (
    <>
      <FlexBox>
        <Select
          label="Choose the chat room: "
          name="ChatP15"
          value={roomId}
          list={chatRoom}
          icon={<MdChat />}
          onChange={e => setRoomId(e.target.value)}
        />
      </FlexBox>
      <hr />
      <ChatRoom15 roomId={roomId} />
    </>
  );
};

export default Prac15;
