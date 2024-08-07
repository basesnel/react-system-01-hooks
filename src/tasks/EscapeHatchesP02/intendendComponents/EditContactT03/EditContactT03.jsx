import { useState } from 'react';
import PropTypes from 'prop-types';
import { FiUser, FiMail } from 'react-icons/fi';
import { Form, Input, FlexBox, Button } from 'components';

const EditContactT03 = props => {
  return <FormContact {...props} key={props.savedContact.id} />;
};

const FormContact = props => {
  const { savedContact, onSave } = props;

  const [name, setName] = useState(savedContact.name);
  const [email, setEmail] = useState(savedContact.email);

  return (
    <Form onSubmit={onSave}>
      <Input
        inputType="text"
        inputName="nameT03"
        inputValue={name}
        inputLabel="Name"
        handleChange={e => setName(e.target.value)}
        icon={<FiUser />}
      />
      <Input
        inputType="email"
        inputName="emailT03"
        inputValue={email}
        inputLabel="E-mail"
        handleChange={e => setEmail(e.target.value)}
        icon={<FiMail />}
      />
      <FlexBox>
        <Button
          type="submit"
          caption="Save"
          onClick={e => {
            e.preventDefault();
            const updatedData = {
              id: savedContact.id,
              name: name,
              email: email,
            };
            onSave(updatedData);
          }}
        />
        <Button
          caption="Reset"
          onClick={() => {
            setName(savedContact.name);
            setEmail(savedContact.email);
          }}
        />
      </FlexBox>
    </Form>
  );
};

FormContact.propTypes = {
  savedContact: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  onSave: PropTypes.func.isRequired,
};

EditContactT03.propTypes = {
  savedContact: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  onSave: PropTypes.func.isRequired,
};

export default EditContactT03;
