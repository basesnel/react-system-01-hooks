import { useState } from 'react';

import { FiUser, FiMail } from 'react-icons/fi';

import FlexBox from 'components/FlexBox';

import Button from 'components/Button';
import DecoratedForm from 'components/DecoratedForm';
import DecoratedInput from 'components/DecoratedInput';

export default function EditContact(props) {
  return <FormContact {...props} key={props.savedContact.id} />;
}

function FormContact({ savedContact, onSave }) {
  const [name, setName] = useState(savedContact.name);
  const [email, setEmail] = useState(savedContact.email);

  return (
    <DecoratedForm onSubmit={onSave}>
      <DecoratedInput
        inputType="text"
        inputName="name"
        inputValue={name}
        inputLabel="Name"
        handleChange={e => setName(e.target.value)}
        icon={<FiUser />}
      />
      <DecoratedInput
        inputType="email"
        inputName="email"
        inputValue={email}
        inputLabel="E-mail"
        handleChange={e => setEmail(e.target.value)}
        icon={<FiMail />}
      />
      <FlexBox>
        <Button
          type="submit"
          caption="Save"
          onClick={e => {
            e.preventDefault();
            const updatedData = {
              id: savedContact.id,
              name: name,
              email: email,
            };
            onSave(updatedData);
          }}
        />
        <Button
          caption="Reset"
          onClick={() => {
            setName(savedContact.name);
            setEmail(savedContact.email);
          }}
        />
      </FlexBox>
    </DecoratedForm>
  );
}
