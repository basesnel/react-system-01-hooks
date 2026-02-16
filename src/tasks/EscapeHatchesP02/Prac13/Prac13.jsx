import { useState } from 'react';
import { MdChat } from 'react-icons/md';
import { FlexBox, Select } from 'components';
import { chatRoom } from 'constants';
import { ChatRoomP13 } from '../intendendComponents';

const Prac13 = () => {
  const [roomId, setRoomId] = useState('general');

  return (
    <>
      <FlexBox align="flex-end">
        <Select
          label="Choose the chat room: "
          name="ChatPrac13"
          value={roomId}
          list={chatRoom}
          icon={<MdChat />}
          onChange={e => setRoomId(e.target.value)}
        />
      </FlexBox>
      <hr />
      <ChatRoomP13 roomId={roomId} />
    </>
  );
};

export default Prac13;
