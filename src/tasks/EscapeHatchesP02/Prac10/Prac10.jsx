import { useState } from 'react';
import { MdChat } from 'react-icons/md';
import { FlexBox, Select2 } from 'components';
import { chatRoom } from 'constants';
import { ChatRoomP10 } from '../intendendComponents';

const Prac10 = () => {
  const [roomId, setRoomId] = useState('general');

  return (
    <>
      <FlexBox align="flex-end">
        <Select2
          label="Choose the chat room: "
          name="ChatP10"
          value={roomId}
          list={chatRoom}
          icon={<MdChat />}
          onChange={e => setRoomId(e.target.value)}
        />
      </FlexBox>
      <hr />
      <ChatRoomP10 />
    </>
  );
};

export default Prac10;
