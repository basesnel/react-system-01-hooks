import { useState } from 'react';
import { MdChat } from 'react-icons/md';
import { FlexBox, Select } from 'components';
import { chatRoom } from 'constants';
import { ChatRoomP12 } from '../intendendComponents';

const Prac12 = () => {
  const [roomId, setRoomId] = useState('general');

  return (
    <>
      <FlexBox align="flex-end">
        <Select
          label="Choose the chat room: "
          name="ChatPrac12"
          value={roomId}
          list={chatRoom}
          icon={<MdChat />}
          onChange={e => setRoomId(e.target.value)}
        />
      </FlexBox>
      <hr />
      <ChatRoomP12 roomId={roomId} />
    </>
  );
};

export default Prac12;
