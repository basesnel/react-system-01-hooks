import { Linput } from 'components';
import { useState } from 'react';
// import PropTypes from 'prop-types';
// import { toast } from 'react-toastify';
// import { MdChat } from 'react-icons/md';
// import { TextArea, Button, Form } from 'components';

const EditContact = ({ initialData, onSave }) => {
  const [name, setName] = useState(initialData.name);
  const [email, setEmail] = useState(initialData.email);

  return (
    <section>
      <Linput
        label="Name"
        name="task05Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <Linput
        label="Email"
        name="task05Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button
        onClick={() => {
          const updatedData = { id: initialData, name: name, email: email };
          onSave(updatedData);
        }}
      >
        Save
      </button>
      <button
        onClick={() => {
          setName(initialData.name);
          setEmail(initialData.email);
        }}
      >
        Reset
      </button>
    </section>
  );
};

// EditContact.propTypes = {
//   contact: PropTypes.shape({
//     id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//     name: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default EditContact;
