import { useState } from 'react';
import { MdChat } from 'react-icons/md';
import { FlexBox, Select, Button } from 'components';
import { chatRoom } from 'constants';
import { ChatRoomP01 } from '../IntendendComponents';

const Prac01 = () => {
  const [roomId, setRoomId] = useState('general');
  const [show, setShow] = useState(false);

  return (
    <>
      <FlexBox align="flex-end">
        <Select
          label="Choose the chat room: "
          name="ChatP01"
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
      {show && <ChatRoomP01 roomId={roomId} />}
    </>
  );
};

export default Prac01;
