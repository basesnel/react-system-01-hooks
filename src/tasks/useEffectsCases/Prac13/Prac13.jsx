import { useState } from 'react';
import { MdChat } from 'react-icons/md';
import { FlexBox, Select, Button } from 'components';
import { chatRoom } from 'constants';
import { ChatRoom13 } from '../IntendendComponents';

const Prac13 = () => {
  const [show, setShow] = useState(false);
  const [roomId, setRoomId] = useState('general');

  return (
    <>
      <FlexBox align="flex-end">
        <Select
          selectLabel="Choose the chat room: "
          selectName="Chat"
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
      {show && <ChatRoom13 roomId={roomId} />}
    </>
  );
};

export default Prac13;
