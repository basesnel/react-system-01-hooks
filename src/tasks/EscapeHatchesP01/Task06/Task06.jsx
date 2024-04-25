import { useRef } from 'react';
import { MdSearch } from 'react-icons/md';

import Button from 'components/Button';
import FlexBox from 'components/FlexBox';
import DecoratedInput from 'components/DecoratedInput';

export default function Task06() {
  const searchRef = useRef(null);

  return (
    <FlexBox>
      <DecoratedInput
        inputRef={searchRef}
        inputType="text"
        inputName="search"
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
