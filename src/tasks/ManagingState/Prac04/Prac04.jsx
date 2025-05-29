import { useState } from 'react';
import { FiUser } from 'react-icons/fi';
import { Form, Input, Paragraph, Span, Title } from 'components';

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
        <Input
          inputType="text"
          inputName="firstNameP04"
          inputValue={firstName}
          inputLabel="Name"
          handleChange={handleFirstNameChange}
          icon={<FiUser />}
        />
        <Input
          inputType="text"
          inputName="lastNameP04"
          inputValue={lastName}
          inputLabel="Name"
          handleChange={handleLastNameChange}
          icon={<FiUser />}
        />
      </Form>
      <Paragraph centered>
        Your ticket will be issued to: <Span weighted>{fullName}</Span>
      </Paragraph>
    </>
  );
};

export default Prac04;
