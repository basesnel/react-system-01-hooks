import { useState } from 'react';
import { MdChat } from 'react-icons/md';
import { TextArea, Button } from 'components';

import styles from './styles.module.css';

const Chat = ({ contact }) => {
  const [text, setText] = useState('');

  return (
    <div className={styles.chat}>
      <TextArea
        textAreaName="Prac14Text"
        textAreaValue={text}
        handleChange={e => setText(e.target.value)}
        textAreaPlaceholder={'Chat to' + contact.name}
        icon={<MdChat />}
      />
      <Button
        // type='button'
        caption={`Send to ${contact.email}`}
        onClick={() => {}}
      />
      {/* <button>Send to {contact.email}</button> */}
    </div>
  );
};

export default Chat;
