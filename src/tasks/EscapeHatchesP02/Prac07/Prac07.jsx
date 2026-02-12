import { useState } from 'react';
import { MdChat } from 'react-icons/md';
import { FlexBox, Select2, CheckBox } from 'components';
import { chatRoom } from 'constants';
import { ChatRoomP07 } from '../intendendComponents';

const Prac07 = () => {
  const [roomId, setRoomId] = useState('general');
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <FlexBox align="flex-end" wrapped="wrap">
        <Select2
          label="Choose the chat room: "
          name="ChatP07"
          value={roomId}
          list={chatRoom}
          icon={<MdChat />}
          onChange={e => setRoomId(e.target.value)}
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
