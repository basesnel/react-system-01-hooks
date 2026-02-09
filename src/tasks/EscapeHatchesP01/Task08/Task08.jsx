import { useRef } from 'react';
import { MdSearch } from 'react-icons/md';
import { FlexBox, Input, Button } from 'components';

const Task08 = () => {
  const inputRef = useRef(null);

  return (
    <FlexBox wrapped="wrap">
      <Input
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
