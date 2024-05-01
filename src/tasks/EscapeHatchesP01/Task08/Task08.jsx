import { useRef } from 'react';
import { MdSearch } from 'react-icons/md';

import FlexBox from 'components/FlexBox';
import Button from 'components/Button';
import InputWithRef from 'components/InputWithRef';

export default function Task08() {
  const inputRef = useRef(null);
  return (
    <FlexBox>
      <InputWithRef
        inputType="text"
        inputName="search"
        inputPlaceholder="Lookung for something?"
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
}
