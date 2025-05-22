import { useState } from 'react';

// import styles from './styles.module.css';

const Task02 = () => {
  const [firstName, setFirstName] = useState('Jane');
  const [lastName, setLastName] = useState('Jacobs');
  const [isProfileEditing, setIsProfileEditing] = useState(false);

  const handleFirstNameChange = e => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = e => {
    setLastName(e.target.value);
  };

  return (
    <form>
      <label>
        First name:
        {!isProfileEditing ? (
          <b>{firstName}</b>
        ) : (
          <input value={firstName} onChange={handleFirstNameChange} />
        )}
      </label>
      <label>
        Last name:{' '}
        {!isProfileEditing ? (
          <b>{lastName}</b>
        ) : (
          <input value={lastName} onChange={handleLastNameChange} />
        )}
      </label>
      <button
        type="submit"
        onClick={e => {
          e.preventDefault();
          setIsProfileEditing(!isProfileEditing);
        }}
      >
        {!isProfileEditing ? 'Edit profile' : 'Save profile'}
      </button>
      <p>
        <i>{`Hello, ${firstName} ${lastName}!`}</i>
      </p>
    </form>
  );
};

export default Task02;
