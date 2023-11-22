import { useRef } from 'react';
import { MdSearch } from 'react-icons/md';

import FlexBox from 'components/FlexBox';
import DecoratedButton from 'components/DecoratedButton';
import DecoratedInputWithRef from 'components/DecoratedInputWithRef';

export default function ForwardSepComp() {
  const inputRef = useRef(null);
  return (
    <FlexBox>
      <DecoratedButton
        caption="Search"
        onClick={() => {
          inputRef.current.focus();
        }}
      />
      <DecoratedInputWithRef
        inputType="text"
        inputName="search"
        inputPlaceholder="Lookung for something?"
        icon={<MdSearch />}
        ref={inputRef}
      />
    </FlexBox>
  );
}
