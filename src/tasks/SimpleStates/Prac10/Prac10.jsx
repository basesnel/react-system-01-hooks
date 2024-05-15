import { useState } from 'react';

import { FiEdit3 } from 'react-icons/fi';

import FlexBox from 'components/FlexBox';
import Button from 'components/Button';
import Paragraph from 'components/Paragraph';
import Input from 'components/Input';

const Prac10 = () => {
  const [version, setVersion] = useState(0);

  const handleReset = () => {
    setVersion(version + 1);
  };

  const Form = () => {
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

  return (
    <FlexBox>
      <Button caption="Reset" onClick={handleReset} />
      <Form key={version} />
    </FlexBox>
  );
};

export default Prac10;
