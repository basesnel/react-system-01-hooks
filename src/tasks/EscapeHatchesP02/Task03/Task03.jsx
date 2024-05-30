import { useState } from 'react';

import { initialContacts } from 'constants';

import { ContactList, EditContact } from '../intendendComponents';

const Task03 = () => {
  const [contacts, setContacts] = useState(initialContacts);
  const [selectedId, setSelectedId] = useState(0);

  const selectedContact = contacts.find(c => c.id === selectedId);

  function handleSave(updatedData) {
    const nextContacts = contacts.map(c => {
      if (c.id === updatedData.id) {
        return updatedData;
      } else {
        return c;
      }
    });
    setContacts(nextContacts);
  }

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={selectedId}
        onSelect={id => setSelectedId(id)}
      />
      <hr />
      <EditContact savedContact={selectedContact} onSave={handleSave} />
    </div>
  );
};

export default Task03;
