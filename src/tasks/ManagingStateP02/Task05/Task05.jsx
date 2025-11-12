import { useState } from 'react';
import { FlexBox } from 'components';
import ContactList from './ContactList';
import EditContact from './EditContact';
import { initialContacts } from 'constants';

// const initialContacts = [
//   { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
//   { id: 1, name: 'Alice', email: 'alice@mail.com' },
//   { id: 2, name: 'Bob', email: 'bob@mail.com' },
// ];

const Task05 = () => {
  const [contacts, setContacts] = useState(initialContacts);
  const [selectedId, setSelectedId] = useState(0);

  const selectedContact = contacts.find(c => c.id === selectedId);

  const handleSave = updatedData => {
    const nextContacts = contacts.map(c => {
      if (c.id === updatedData.id) {
        return updatedData;
      } else {
        return c;
      }
    });
    setContacts(nextContacts);
  };

  return (
    <FlexBox direction="column-reverse">
      <ContactList
        contacts={contacts}
        selectedId={selectedId}
        onSelect={id => setSelectedId(id)}
      />
      <EditContact
        key={selectedId}
        initialData={selectedContact}
        onSave={handleSave}
      />
    </FlexBox>
  );
};

export default Task05;
