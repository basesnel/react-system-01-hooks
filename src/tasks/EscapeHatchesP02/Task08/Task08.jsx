import { useState } from 'react';
import { MdChat } from 'react-icons/md';
import { FlexBox, Select, CheckBox } from 'components';
import { chatRoom } from 'constants';
import ChatRoom from './ChatRoom.js';
import {
  createEncryptedConnection,
  createUnencryptedConnection,
} from './chat.js';

const Task08 = () => {
  const [roomId, setRoomId] = useState('general');
  const [isEncrypted, setIsEncrypted] = useState(false);

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
        <CheckBox
          name="isEncrypted08"
          checked={isEncrypted}
          onChange={e => setIsEncrypted(e.target.checked)}
          label="Enable encryption"
        />
      </FlexBox>
      <hr />
      <ChatRoom
        roomId={roomId}
        createConnection={
          isEncrypted ? createEncryptedConnection : createUnencryptedConnection
        }
      />
    </>
  );
};

export default Task08;
