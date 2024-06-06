import { useState } from 'react';
import { FlexBox, Button } from 'components';
import { ChatRoom12 } from '../IntendendComponents';

const Prac12 = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <FlexBox>
        <Button
          onClick={() => setShow(!show)}
          caption={show ? 'Close chat' : 'Open Chat'}
        />
      </FlexBox>
      {show && <hr />}
      {show && <ChatRoom12 />}
    </>
  );
};

export default Prac12;
