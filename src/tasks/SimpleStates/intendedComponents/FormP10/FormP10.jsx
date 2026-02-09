import { useState } from 'react';
import { FiEdit3 } from 'react-icons/fi';
import { Input, P } from 'components';

const FormP10 = () => {
  const [name, setName] = useState('Taylor');

  return (
    <>
      <Input
        name="nameP10"
        value={name}
        label="name"
        placeholder="Input your name..."
        onChange={e => setName(e.target.value)}
        icon={<FiEdit3 />}
      />
      <P>Hello, {name}.</P>
    </>
  );
};

export default FormP10;
