import { useState, useRef } from 'react';
import { MdSearch } from 'react-icons/md';
import { FlexBox, Input, Button } from 'components';

const Task06 = () => {
  const [inputValue, setInputValue] = useState('');
  const searchRef = useRef(null);

  return (
    <FlexBox wrapped="wrap">
      <Input
        inputRef={searchRef}
        inputType="text"
        inputName="searchT06"
        inputValue={inputValue}
        handleChange={e => setInputValue(e.target.value)}
        inputPlaceholder="Lookung for something?"
        icon={<MdSearch />}
      />
      <Button
        caption="Search"
        onClick={() => {
          searchRef.current.focus();
        }}
      />
    </FlexBox>
  );
};

export default Task06;
