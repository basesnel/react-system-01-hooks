import { useState } from 'react';
import { FlexBox } from 'components';
import ContactList from './ContactList';
import Chat from './Chat';

const contacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' },
];

const Prac15 = () => {
  const [to, setTo] = useState(contacts[0]);

  return (
    <FlexBox>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={contact => setTo(contact)}
      />
      <Chat key={to.id} contact={to} />
    </FlexBox>
  );
};

export default Prac15;
