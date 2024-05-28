import { useRef } from 'react';
import { toast } from 'react-toastify';

import { Button } from 'components';
import { FlexBox } from 'components';

const Prac01 = () => {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    return toast.info('You clicked ' + ref.current + ' times!');
  }

  return (
    <FlexBox>
      <Button caption="Click me!" onClick={handleClick} />
    </FlexBox>
  );
};

export default Prac01;
