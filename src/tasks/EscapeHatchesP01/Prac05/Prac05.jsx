import { useState, useRef } from 'react';
import { FiEdit } from 'react-icons/fi';
import { FlexBox, TextInput, Button } from 'components';

const Prac05 = () => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <FlexBox wrapped="wrap">
      <TextInput
        name="ref-inputP05"
        value={inputValue}
        placeholder="Input something..."
        onChange={e => setInputValue(e.target.value)}
        icon={<FiEdit />}
        ref={inputRef}
      />
      <Button caption="Focus the input" onClick={handleClick} />
    </FlexBox>
  );
};

export default Prac05;
