import { useState } from 'react';
import { MdChat } from 'react-icons/md';
import { FlexBox, Select, Button } from 'components';
import { chatRoom } from 'constants';
import { ChatRoom11 } from '../IntendendComponents';

const Prac11 = () => {
  const [show, setShow] = useState(false);
  const [roomId, setRoomId] = useState('general');

  return (
    <>
      <FlexBox align="flex-end">
        <Select
          label="Choose the chat room: "
          name="ChatP11"
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
      {show && <ChatRoom11 roomId={roomId} />}
    </>
  );
};

export default Prac11;
