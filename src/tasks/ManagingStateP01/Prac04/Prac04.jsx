import { useState } from 'react';
import { FiUser } from 'react-icons/fi';
import { Title, Form, TextInput, P, Span } from 'components';

const Prac04 = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const fullName = firstName + ' ' + lastName;

  const handleFirstNameChange = e => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = e => {
    setLastName(e.target.value);
  };

  return (
    <>
      <Title level={3} caption="let's check you in" />
      <Form onSubmit={() => {}}>
        <TextInput
          name="firstNameP04"
          value={firstName}
          label="First name"
          placeholder="Type first name..."
          onChange={handleFirstNameChange}
          icon={<FiUser />}
        />
        <TextInput
          name="lastNameP04"
          value={lastName}
          label="Last name"
          placeholder="Type last name..."
          onChange={handleLastNameChange}
          icon={<FiUser />}
        />
      </Form>
      <P centered>
        Your ticket will be issued to: <Span weighted>{fullName}</Span>
      </P>
    </>
  );
};

export default Prac04;
