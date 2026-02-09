import { useState } from 'react';
import { FiMail, FiUser } from 'react-icons/fi';
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
          name="firstNameP01"
          value={person.firstName}
          label="First name"
          placeholder="Type first name..."
          onChange={handleChange}
          icon={<FiUser />}
        />
        <Input
          name="lastNameP01"
          value={person.lastName}
          label="Last name"
          placeholder="Type last name..."
          onChange={handleChange}
          icon={<FiUser />}
        />
        <Input
          type="email"
          name="emailP01"
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
