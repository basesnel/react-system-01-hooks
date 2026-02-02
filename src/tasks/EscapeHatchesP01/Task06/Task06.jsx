import { useState, useRef } from 'react';
import { MdSearch } from 'react-icons/md';
import { FlexBox, TextInput, Button } from 'components';

const Task06 = () => {
  const [inputValue, setInputValue] = useState('');
  const searchRef = useRef(null);

  return (
    <FlexBox wrapped="wrap">
      <TextInput
        inputRef={searchRef}
        name="searchT06"
        value={inputValue}
        placeholder="Lookung for something?"
        onChange={e => setInputValue(e.target.value)}
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
