import { useRef } from 'react';
import { FiEdit } from 'react-icons/fi';

import FlexBox from 'components/FlexBox';
import Button from 'components/Button';
import Input from 'components/Input';

export default function Prac05() {
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
        inputPlaceholder="Input something"
        icon={<FiEdit />}
      />
      <Button caption="Focus the input" onClick={handleClick} />
    </FlexBox>
  );
}
