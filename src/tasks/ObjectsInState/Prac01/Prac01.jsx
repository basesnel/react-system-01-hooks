import { useState } from 'react';
import { FiMail, FiEdit3 } from 'react-icons/fi';
import { Form, TextInput, Caption } from 'components';
import { initialFirstPerson } from 'constants';

const Prac01 = () => {
  const [person, setPerson] = useState(initialFirstPerson);

  const handleChange = e => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Form onSubmit={e => e.preventDefault()}>
        <TextInput
          type="text"
          name="firstName"
          value={person.firstName}
          label="First name"
          placeholder="Type first name..."
          onChange={handleChange}
          icon={<FiEdit3 />}
        />
        <TextInput
          type="text"
          name="lastName"
          value={person.lastName}
          label="Last name"
          placeholder="Type last name..."
          onChange={handleChange}
          icon={<FiEdit3 />}
        />
        <TextInput
          type="email"
          name="email"
          value={person.email}
          label="E-mail"
          placeholder="Type the e-mail..."
          onChange={handleChange}
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
