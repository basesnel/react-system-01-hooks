import { useState } from 'react';

import { FlexBox, Button } from 'components';

import { ChatRoom } from '../IntendendComponents';

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
      {show && <ChatRoom />}
    </>
  );
};

export default Prac12;
