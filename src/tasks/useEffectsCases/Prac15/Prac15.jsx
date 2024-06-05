import { useState } from 'react';

import { MdChat } from 'react-icons/md';

import { Select, FlexBox } from 'components';

import { chatRoom } from 'constants';

import { ChatRoom15 } from '../IntendendComponents';

const Prac15 = () => {
  const [roomId, setRoomId] = useState('general');

  return (
    <>
      <FlexBox>
        <Select
          selectLabel="Choose the chat room: "
          selectName="Chat"
          selected={roomId}
          list={chatRoom}
          icon={<MdChat />}
          onHandleSelect={e => setRoomId(e.target.value)}
        />
      </FlexBox>
      <hr />
      <ChatRoom15 roomId={roomId} />
    </>
  );
};

export default Prac15;
