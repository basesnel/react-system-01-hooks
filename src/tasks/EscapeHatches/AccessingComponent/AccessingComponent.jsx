import { forwardRef, useRef, useImperativeHandle } from 'react';

import DecoratedButton from 'components/DecoratedButton';
import FlexBox from 'components/FlexBox';

const MyInput = forwardRef((props, ref) => {
  const realInputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus() {
      realInputRef.current.focus();
    },
  }));
  return <input {...props} ref={realInputRef} />;
});

export default function AccessingComponent() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <FlexBox>
      <MyInput ref={inputRef} />
      <DecoratedButton caption="Focus the input" onClick={handleClick} />
    </FlexBox>
  );
}
