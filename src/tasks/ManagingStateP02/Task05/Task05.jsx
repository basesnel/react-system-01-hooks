import { useState } from 'react';
import { FlexBox } from 'components';
// import ContactList from './ContactList';
import EditContact from './EditContact';
import { initialContacts } from 'constants';
import { ContactListT05 } from '../intendendComponents';

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
      <ContactListT05
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
