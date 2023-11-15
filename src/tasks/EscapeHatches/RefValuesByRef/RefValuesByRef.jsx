import { useRef } from 'react';
import { toast } from 'react-toastify';

import DecoratedButton from 'components/DecoratedButton';
import FlexBox from 'components/FlexBox';

export default function RefValuesByRef() {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    return toast.info('You clicked ' + ref.current + ' times!');
  }

  return (
    <FlexBox>
      <DecoratedButton caption="Click me!" onClick={handleClick} />
    </FlexBox>
  );
}
