import { useState } from 'react';
import { MdChat } from 'react-icons/md';
import { Select, Button, FlexBox } from 'components';
import { chatRoom } from 'constants';
import { ChatRoomP06 } from '../IntendendComponents';

const Prac06 = () => {
  const [roomId, setRoomId] = useState('general');
  const [show, setShow] = useState(false);

  return (
    <>
      <FlexBox align="flex-end">
        <Select
          label="Choose the chat room: "
          name="ChatP06"
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
      {show && <ChatRoomP06 roomId={roomId} />}
    </>
  );
};

export default Prac06;
