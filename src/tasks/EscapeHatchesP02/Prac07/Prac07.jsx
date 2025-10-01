import { useState } from 'react';
import { MdChat } from 'react-icons/md';
import { Select, FlexBox, CheckBox } from 'components';
import { chatRoom } from 'constants';
import { ChatRoomP07 } from '../intendendComponents';

const Prac07 = () => {
  const [roomId, setRoomId] = useState('general');
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <FlexBox align="flex-end" wrapped="wrap">
        <Select
          selectLabel="Choose the chat room: "
          selectName="ChatP07"
          selected={roomId}
          list={chatRoom}
          icon={<MdChat />}
          onHandleSelect={e => setRoomId(e.target.value)}
        />
        <CheckBox
          name="isDarkP07"
          checked={isDark}
          onChange={e => setIsDark(e.target.checked)}
          label="Use dark theme"
        />
      </FlexBox>
      <hr />
      <ChatRoomP07 roomId={roomId} theme={isDark ? 'dark' : 'light'} />
    </>
  );
};

export default Prac07;
