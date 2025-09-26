import { useState, useRef } from 'react';
import { FiEdit } from 'react-icons/fi';
import { FlexBox, Input, Button } from 'components';

const Prac05 = () => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <FlexBox wrapped="wrap">
      <Input
        inputRef={inputRef}
        inputType="text"
        inputName="ref-inputP05"
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
