import { useState } from 'react';
// import PropTypes from 'prop-types';
// import { CheckBox, Linput } from 'components';
import ContactList from './ContactList';
import EditContact from './EditContact';

const initialContacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' },
];

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
    <div>
      <ContactList
        contacts={contacts}
        selectedId={selectedId}
        onSelect={id => setSelectedId(id)}
      />
      <EditContact initialData={selectedContact} onSave={handleSave} />
    </div>
  );
};

// const Field = ({ label, name }) => {
//   const [text, setText] = useState('');
//   return (
//     <Linput
//       label={label}
//       name={name}
//       value={text}
//       onChange={e => setText(e.target.value)}
//     />
//   );
// };

// Field.propTypes = {
//   label: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
// };

export default Task05;
