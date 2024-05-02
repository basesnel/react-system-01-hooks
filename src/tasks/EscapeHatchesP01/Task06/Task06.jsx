import { useState, useRef } from 'react';
import { MdSearch } from 'react-icons/md';

import Button from 'components/Button';
import FlexBox from 'components/FlexBox';
import Input from 'components/Input';

export default function Task06() {
  const [inputValue, setInputValue] = useState('');
  const searchRef = useRef(null);

  return (
    <FlexBox>
      <Input
        inputRef={searchRef}
        inputType="text"
        inputName="search"
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
}
