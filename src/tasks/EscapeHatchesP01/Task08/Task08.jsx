import { useRef } from 'react';
import { MdSearch } from 'react-icons/md';
import { FlexBox, TextInput, Button } from 'components';

const Task08 = () => {
  const inputRef = useRef(null);

  return (
    <FlexBox wrapped="wrap">
      <TextInput
        name="searchT08"
        placeholder="Lookung for something?"
        icon={<MdSearch />}
        ref={inputRef}
      />
      <Button
        caption="Search"
        onClick={() => {
          inputRef.current.focus();
        }}
      />
    </FlexBox>
  );
};

export default Task08;
