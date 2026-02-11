import { useState } from 'react';
import { MdChat } from 'react-icons/md';
import { FlexBox, Select2 } from 'components';
import { chatRoom } from 'constants';
import { ChatRoom16 } from '../IntendendComponents';

const Prac16 = () => {
  const [roomId, setRoomId] = useState('general');

  return (
    <>
      <FlexBox>
        <Select2
          label="Choose the chat room: "
          name="ChatP16"
          value={roomId}
          list={chatRoom}
          icon={<MdChat />}
          onChange={e => setRoomId(e.target.value)}
        />
      </FlexBox>
      <hr />
      <ChatRoom16 roomId={roomId} />
    </>
  );
};

export default Prac16;
