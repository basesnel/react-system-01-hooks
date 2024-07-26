import { useState } from 'react';
import { Button, FlexBox } from 'components';
import { WelcomeP03 } from '../IntendendComponents';

const Prac03 = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <FlexBox>
        <Button
          caption={show ? 'Remove' : 'Show'}
          onClick={() => setShow(!show)}
        />
      </FlexBox>
      {show && <WelcomeP03 />}
    </>
  );
};

export default Prac03;
