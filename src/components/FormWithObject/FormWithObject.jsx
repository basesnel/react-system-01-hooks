import { useState } from 'react';

import { FiMail, FiEdit3 } from 'react-icons/fi';

import DecoratedForm from 'components/DecoratedForm';
import DecoratedInput from 'components/DecoratedInput';
import Caption from 'components/Caption';

import css from './FormWithObject.module.css';

export default function FormWithObject() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com',
  });

  const handleChange = e => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  return (
    <DecoratedForm onSubmit={() => null}>
      <DecoratedInput
        inputName="firstName"
        inputValue={person.firstName}
        inputLabel="First name"
        handleChange={handleChange}
        icon={<FiEdit3 className={css.icon} />}
      />
      <DecoratedInput
        inputName="lastName"
        inputValue={person.lastName}
        inputLabel="Last name"
        handleChange={handleChange}
        icon={<FiEdit3 className={css.icon} />}
      />
      <DecoratedInput
        inputName="email"
        inputValue={person.email}
        inputLabel="E-mail"
        handleChange={handleChange}
        icon={<FiMail className={css.icon} />}
      />
      <Caption
        text={`${person.firstName} ${person.lastName} ${person.email}`}
      />
    </DecoratedForm>
  );
}
