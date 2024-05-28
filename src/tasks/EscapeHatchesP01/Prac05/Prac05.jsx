import { useState, useRef } from 'react';

import { FiEdit } from 'react-icons/fi';

import { FlexBox } from 'components';
import { Button } from 'components';
import { Input } from 'components';

const Prac05 = () => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <FlexBox>
      <Input
        inputRef={inputRef}
        inputType="text"
        inputName="ref-input"
        inputValue={inputValue}
        handleChange={e => setInputValue(e.target.value)}
        inputPlaceholder="Input something"
        icon={<FiEdit />}
      />
      <Button caption="Focus the input" onClick={handleClick} />
    </FlexBox>
  );
};

export default Prac05;
