import { useState } from 'react';
import ContactList from './ContactList';
import Chat from './Chat';
// import { Button, FlexBox, Span } from 'components';

// import styles from './styles.module.css';

const contacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' },
];

const Prac14 = () => {
  const [to, setTo] = useState(contacts[0]);

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={contact => setTo(contact)}
      />
      <Chat contact={to} />
    </div>
  );
};

export default Prac14;
