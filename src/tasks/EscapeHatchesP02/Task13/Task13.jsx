import { useState } from 'react';
import { FiServer } from 'react-icons/fi';
import { MdChat } from 'react-icons/md';
import { FlexBox, TextInput, Select, Button } from 'components';
import { chatRoom } from 'constants';
import { ChatRoomT13 } from '../intendendComponents';

import styles from './styles.module.css';

const Task13 = () => {
  const [roomId, setRoomId] = useState('general');
  const [isDark, setIsDark] = useState(false);
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  const options = {
    serverUrl: serverUrl,
    roomId: roomId,
  };

  return (
    <div className={isDark ? styles.dark : styles.light}>
      <FlexBox align="flex-end" wrapped="wrap">
        <Button caption="Toggle Theme" onClick={() => setIsDark(!isDark)} />
        <TextInput
          name="serverT13"
          value={serverUrl}
          label="Server URL: "
          placeholder="Type server URL..."
          onChange={e => setServerUrl(e.target.value)}
          icon={<FiServer />}
        />
        <Select
          selectLabel="Choose the chat room: "
          selectName="ChatT13"
          selected={roomId}
          list={chatRoom}
          icon={<MdChat />}
          onHandleSelect={e => setRoomId(e.target.value)}
        />
      </FlexBox>
      <hr />
      <ChatRoomT13 options={options} />
    </div>
  );
};

export default Task13;
