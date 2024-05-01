import { forwardRef, useRef, useImperativeHandle } from 'react';

// import { FiEdit3 } from 'react-icons/fi';

import Button from 'components/Button';
import FlexBox from 'components/FlexBox';
// import Input from 'components/Input';

const MyInput = forwardRef((props, ref) => {
  const realInputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus() {
      realInputRef.current.focus();
    },
  }));
  return <input {...props} ref={realInputRef} />;
  // return <Input {...props} icon={<FiEdit3 />} ref={realInputRef} />;
});

export default function Prac08() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <FlexBox>
      <MyInput name="Prac08input" ref={inputRef} />
      <Button caption="Focus the input" onClick={handleClick} />
    </FlexBox>
  );
}
