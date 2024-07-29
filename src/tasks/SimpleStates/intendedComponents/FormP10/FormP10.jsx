import { useState } from 'react';
import { FiEdit3 } from 'react-icons/fi';
import { Input, Paragraph } from 'components';

const FormP10 = () => {
  const [name, setName] = useState('Taylor');

  return (
    <>
      <Input
        inputType="text"
        inputName="name"
        inputValue={name}
        inputLabel="name"
        handleChange={e => setName(e.target.value)}
        icon={<FiEdit3 />}
      />
      <Paragraph>Hello, {name}.</Paragraph>
    </>
  );
};

export default FormP10;
