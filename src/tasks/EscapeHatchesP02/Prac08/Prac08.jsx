import { useState } from 'react';
import { MdChat } from 'react-icons/md';
import { FlexBox, Select, Button } from 'components';
import { chatRoom } from 'constants';
import { ChatRoomP08 } from '../intendendComponents';

const Prac08 = () => {
  const [roomId, setRoomId] = useState('general');
  const [show, setShow] = useState(false);

  return (
    <>
      <FlexBox align="flex-end">
        <Select
          label="Choose the chat room: "
          name="ChatPrac08"
          value={roomId}
          list={chatRoom}
          icon={<MdChat />}
          onChange={e => setRoomId(e.target.value)}
        />
        <Button
          onClick={() => setShow(!show)}
          caption={show ? 'Close chat' : 'Open Chat'}
        />
      </FlexBox>
      {show && <hr />}
      {show && <ChatRoomP08 roomId={roomId} />}
    </>
  );
};

export default Prac08;
