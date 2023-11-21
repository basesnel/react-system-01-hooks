import DecoratedButton from 'components/DecoratedButton';
import FlexBox from 'components/FlexBox';
import { forwardRef, useRef } from 'react';

const MyInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
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
