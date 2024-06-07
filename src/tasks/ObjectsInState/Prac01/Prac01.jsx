import { useState } from 'react';
import { FiMail, FiEdit3 } from 'react-icons/fi';
import { Form, Input, Caption } from 'components';
import { initialFirstPerson } from 'constants';

const Prac01 = () => {
  const [person, setPerson] = useState(initialFirstPerson);

  const handleChange = e => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Form onSubmit={e => e.preventDefault()}>
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
      </Form>
      <Caption
        text={`${person.firstName} ${person.lastName} ${person.email}`}
      />
    </>
  );
};

export default Prac01;
