import { useState } from 'react';
import { MdChat } from 'react-icons/md';
import { FlexBox, Select2, Button } from 'components';
import { chatRoom } from 'constants';
import { ChatRoomP05 } from '../intendendComponents';

const Prac05 = () => {
  const [roomId, setRoomId] = useState('general');
  const [show, setShow] = useState(false);

  return (
    <>
      <FlexBox align="flex-end">
        <Select2
          label="Choose the chat room: "
          name="ChatP05"
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
      {show && <ChatRoomP05 roomId={roomId} />}
    </>
  );
};

export default Prac05;
