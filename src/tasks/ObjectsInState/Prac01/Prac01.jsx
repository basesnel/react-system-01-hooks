import { useState } from 'react';

import { FiMail, FiEdit3 } from 'react-icons/fi';

import DecoratedForm from 'components/DecoratedForm';
import Input from 'components/Input';
import Caption from 'components/Caption';

import { initialFirstPerson } from 'constants';

export default function Prac01() {
  const [person, setPerson] = useState(initialFirstPerson);

  const handleChange = e => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  return (
    <>
      <DecoratedForm onSubmit={e => e.preventDefault()}>
        <Input
          inputType="text"
          inputName="firstName"
          inputValue={person.firstName}
          inputLabel="First name"
          handleChange={handleChange}
          icon={<FiEdit3 />}
        />
        <Input
          inputType="text"
          inputName="lastName"
          inputValue={person.lastName}
          inputLabel="Last name"
          handleChange={handleChange}
          icon={<FiEdit3 />}
        />
        <Input
          inputType="email"
          inputName="email"
          inputValue={person.email}
          inputLabel="E-mail"
          handleChange={handleChange}
          icon={<FiMail />}
        />
      </DecoratedForm>
      <Caption
        text={`${person.firstName} ${person.lastName} ${person.email}`}
      />
    </>
  );
}
