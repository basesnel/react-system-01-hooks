import { useState } from 'react';

// import styles from './styles.module.css';

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
    <form onSubmit={handleFormSubmit}>
      <label>
        First name:
        {isProfileEditing ? (
          <input value={firstName} onChange={handleFirstNameChange} />
        ) : (
          <b>{firstName}</b>
        )}
      </label>
      <label>
        Last name:{' '}
        {isProfileEditing ? (
          <input value={lastName} onChange={handleLastNameChange} />
        ) : (
          <b>{lastName}</b>
        )}
      </label>
      <button type="submit">
        {isProfileEditing ? 'Save' : 'Edit'} Profile
      </button>
      <p>
        <i>{`Hello, ${firstName} ${lastName}!`}</i>
      </p>
    </form>
  );
};

export default Task02;
