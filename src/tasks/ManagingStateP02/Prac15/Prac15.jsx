import { useState } from 'react';
import { FlexBox } from 'components';
import ContactList from './ContactList';
import { ChatP14 } from '../intendendComponents';

const contacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' },
];

const Prac15 = () => {
  const [to, setTo] = useState(contacts[0]);

  return (
    <FlexBox direction="column-reverse">
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={contact => setTo(contact)}
      />
      <ChatP14 key={to.id} contact={to} name="Prac15Text" />
    </FlexBox>
  );
};

export default Prac15;
