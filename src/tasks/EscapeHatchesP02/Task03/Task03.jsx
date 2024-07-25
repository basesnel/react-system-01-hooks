import { useState } from 'react';
import { initialContacts } from 'constants';
import { ContactListT03, EditContactT03 } from '../intendendComponents';

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
      <ContactListT03
        contacts={contacts}
        selectedId={selectedId}
        onSelect={id => setSelectedId(id)}
      />
      <hr />
      <EditContactT03 savedContact={selectedContact} onSave={handleSave} />
    </div>
  );
};

export default Task03;
