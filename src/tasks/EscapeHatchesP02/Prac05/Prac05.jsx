import { useState } from 'react';
import { MdChat } from 'react-icons/md';
import { Select, Button, FlexBox } from 'components';
import { chatRoom } from 'constants';
import { ChatRoomP05 } from '../intendendComponents';

const Prac05 = () => {
  const [roomId, setRoomId] = useState('general');
  const [show, setShow] = useState(false);

  return (
    <>
      <FlexBox align="flex-end">
        <Select
          selectLabel="Choose the chat room: "
          selectName="ChatP05"
          selected={roomId}
          list={chatRoom}
          icon={<MdChat />}
          onHandleSelect={e => setRoomId(e.target.value)}
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
