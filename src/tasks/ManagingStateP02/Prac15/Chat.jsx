import { useState } from 'react';

import styles from './styles.module.css';

const Chat = ({ contact }) => {
  const [text, setText] = useState('');

  return (
    <div className={styles.chat}>
      <textarea
        value={text}
        placeholder={'Chat to' + contact.name}
        onChange={e => setText(e.target.value)}
      />
      <br />
      <button>Send to {contact.name}</button>
    </div>
  );
};

export default Chat;
