import { useRef } from 'react';
import { MdSearch } from 'react-icons/md';

import DecoratedButton from 'components/DecoratedButton';
import FlexBox from 'components/FlexBox';
import DecoratedInput from 'components/DecoratedInput';

export default function FocusingSearch() {
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
      <DecoratedButton
        caption="Search"
        onClick={() => {
          searchRef.current.focus();
        }}
      />
    </FlexBox>
  );
}
