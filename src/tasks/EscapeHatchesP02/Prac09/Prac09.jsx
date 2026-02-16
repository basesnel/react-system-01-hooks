import { useState } from 'react';
import { MdChat } from 'react-icons/md';
import { FlexBox, Select } from 'components';
import { chatRoom } from 'constants';
import { ChatRoomP09 } from '../intendendComponents';

const Prac09 = () => {
  const [roomId, setRoomId] = useState('general');

  return (
    <>
      <FlexBox align="flex-end">
        <Select
          label="Choose the chat room: "
          name="ChatPrac09"
          value={roomId}
          list={chatRoom}
          icon={<MdChat />}
          onChange={e => setRoomId(e.target.value)}
        />
      </FlexBox>
      <hr />
      <ChatRoomP09 roomId={roomId} />
    </>
  );
};

export default Prac09;
