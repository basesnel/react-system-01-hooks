import { useState } from 'react';
import { Form, Button, P, FlexBox, Span } from 'components';

import styles from './styles.module.css';

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
      <label className={styles.label}>
        <span className={styles.span}>First name:</span>
        {isProfileEditing ? (
          <input
            className={styles.input}
            name="Task02FirstName"
            size={10}
            value={firstName}
            onChange={handleFirstNameChange}
            placeholder="Type first name..."
          />
        ) : (
          <b>{firstName}</b>
        )}
      </label>
      <label className={styles.label}>
        <span className={styles.span}>Last name:</span>
        {isProfileEditing ? (
          <input
            className={styles.input}
            name="Task02LastName"
            size={10}
            value={lastName}
            onChange={handleLastNameChange}
            placeholder="Type last name..."
          />
        ) : (
          <b>{lastName}</b>
        )}
      </label>
      <FlexBox>
        <Button
          type="submit"
          caption={`${isProfileEditing ? 'Save' : 'Edit'} Profile`}
        />
      </FlexBox>
      <P centered>
        Hello,{' '}
        <Span id="helloText" weighted>
          {`${firstName} ${lastName}`}
        </Span>
        !
      </P>
    </Form>
  );
};

export default Task02;
