import { useState } from 'react';
import { MdChat } from 'react-icons/md';
import { Select, FlexBox } from 'components';
import { chatRoom } from 'constants';
import { ChatRoomT05 } from '../intendendComponents';

const Task05 = () => {
  const [roomId, setRoomId] = useState('general');

  return (
    <>
      <FlexBox align="flex-end">
        <Select
          label="Choose the chat room: "
          name="Chat"
          value={roomId}
          list={chatRoom}
          icon={<MdChat />}
          onChange={e => setRoomId(e.target.value)}
        />
      </FlexBox>
      <hr />
      <ChatRoomT05 roomId={roomId} />
    </>
  );
};

export default Task05;
