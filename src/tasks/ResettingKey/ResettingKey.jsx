import { useState } from 'react';

import { FiEdit3 } from 'react-icons/fi';

import FlexBox from 'components/FlexBox';
import DecoratedButton from 'components/DecoratedButton';
import Text from 'components/Text';
import DecoratedInput from 'components/DecoratedInput';

export default function ResettingKey() {
  const [version, setVersion] = useState(0);

  function handleReset() {
    setVersion(version + 1);
  }

  return (
    <FlexBox>
      <DecoratedButton caption="Reset" onClick={handleReset} />
      <Form key={version} />
    </FlexBox>
  );

  function Form() {
    const [name, setName] = useState('Taylor');

    return (
      <>
        <DecoratedInput
          inputType="text"
          inputName="name"
          inputValue={name}
          inputLabel="name"
          handleChange={e => setName(e.target.value)}
          icon={<FiEdit3 />}
        />
        <Text>Hello, {name}.</Text>
      </>
    );
  }
}
