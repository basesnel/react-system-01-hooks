import { useState } from 'react';
import { FiEdit3 } from 'react-icons/fi';
import { Form, Input, Button, Paragraph, FlexBox } from 'components';

const Task02 = () => {
  const [firstName, setFirstName] = useState('Jane');
  const [lastName, setLastName] = useState('Jacobs');
  const [isProfileEditing, setIsProfileEditing] = useState(false);

  const handleFormSubmit = e => {
    e.preventDefault();
    setIsProfileEditing(!isProfileEditing);
  };

  const handleFirstNameChange = e => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = e => {
    setLastName(e.target.value);
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <FlexBox align="flex-start">
        First name:
        {isProfileEditing ? (
          <Input
            inputName="Task02FirstName"
            inputValue={firstName}
            inputType="text"
            handleChange={handleFirstNameChange}
            icon={<FiEdit3 />}
          />
        ) : (
          <b>{firstName}</b>
        )}
      </FlexBox>
      <FlexBox align="flex-start">
        Last name:{' '}
        {isProfileEditing ? (
          <Input
            inputName="Task02LarstName"
            inputValue={lastName}
            inputType="text"
            handleChange={handleLastNameChange}
            icon={<FiEdit3 />}
          />
        ) : (
          <b>{lastName}</b>
        )}
      </FlexBox>
      <FlexBox>
        <Button
          type="submit"
          caption={`${isProfileEditing ? 'Save' : 'Edit'} Profile`}
        />
      </FlexBox>
      <Paragraph>
        <i>{`Hello, ${firstName} ${lastName}!`}</i>
      </Paragraph>
    </Form>
  );
};

export default Task02;
