import { useState } from 'react';
import { FlexBox, Button } from 'components';
import { PlaygroundP14 } from '../intendedComponents';

const Prac14 = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <FlexBox>
        <Button
          caption={`${show ? 'Unmount' : 'Mount'} the component`}
          onClick={() => setShow(!show)}
        />
      </FlexBox>
      {show && <PlaygroundP14 />}
    </>
  );
};

export default Prac14;
