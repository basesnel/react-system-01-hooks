import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, FlexBox, Form, Linput } from 'components';

const EditContact = ({ initialData, onSave }) => {
  const [name, setName] = useState(initialData.name);
  const [email, setEmail] = useState(initialData.email);

  const handleSave = e => {
    e.preventDefault();

    const updatedData = { id: initialData.id, name: name, email: email };
    onSave(updatedData);
  };

  const handleReset = () => {
    setName(initialData.name);
    setEmail(initialData.email);
  };

  return (
    <Form onSubmit={handleSave}>
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
      <FlexBox>
        <Button caption="Save" type="submit" />
        <Button caption="Reset" onClick={handleReset} />
      </FlexBox>
    </Form>
  );
};

EditContact.propTypes = {
  initialData: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  onSave: PropTypes.func.isRequired,
};

export default EditContact;
