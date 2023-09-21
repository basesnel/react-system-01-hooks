import { useState } from 'react';

// import css from './Grid.module.css';

export default function FormWithObject() {
  const [person] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com',
  });

  const handleFirstNameChange = e => {
    person.firstName = e.target.value;
  };

  const handleLastNameChange = e => {
    person.lastName = e.target.value;
  };

  const handleEmailChange = e => {
    person.email = e.target.value;
  };

  return (
    <>
      <label>
        First name:
        <input value={person.firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name:
        <input value={person.lastName} onChange={handleLastNameChange} />
      </label>
      <label>
        Email:
        <input value={person.email} onChange={handleEmailChange} />
      </label>
      <p>{`${person.firstName} ${person.lastName} ${person.email}`}</p>
    </>
  );
}
