import { useState } from 'react';
import { MdChat } from 'react-icons/md';
import { FlexBox, Select2, CheckBox } from 'components';
import { chatRoom } from 'constants';
import { ChatRoomT08 } from '../intendendComponents';

const Task08 = () => {
  const [roomId, setRoomId] = useState('general');
  const [isEncrypted, setIsEncrypted] = useState(false);

  return (
    <>
      <FlexBox wrapped="wrap">
        <Select2
          label="Choose the chat room: "
          name="ChatT08"
          value={roomId}
          list={chatRoom}
          icon={<MdChat />}
          onChange={e => setRoomId(e.target.value)}
        />
        <CheckBox
          name="isEncryptedT08"
          checked={isEncrypted}
          onChange={e => setIsEncrypted(e.target.checked)}
          label="Enable encryption"
        />
      </FlexBox>
      <hr />
      <ChatRoomT08 roomId={roomId} isEncrypted={isEncrypted} />
    </>
  );
};

export default Task08;
