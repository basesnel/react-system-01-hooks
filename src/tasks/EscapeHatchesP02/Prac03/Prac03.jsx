import { useState } from 'react';
import { Button, FlexBox } from 'components';
import { ChatRoomP03 } from '../intendendComponents';

const Prac03 = () => {
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
      {show && <ChatRoomP03 />}
    </>
  );
};

export default Prac03;
