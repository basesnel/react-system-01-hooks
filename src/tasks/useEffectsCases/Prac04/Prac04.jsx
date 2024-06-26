import { useState } from 'react';
import { FlexBox, Button } from 'components';
import { ModalDialog } from '../IntendendComponents';

const Prac04 = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <FlexBox>
        <Button
          caption="Open dialog"
          onClick={() => {
            setShow(true);
          }}
        />
      </FlexBox>
      <ModalDialog isOpen={show}>
        Hello here!
        <hr />
        <Button
          caption="Close"
          onClick={() => {
            setShow(false);
          }}
        />
      </ModalDialog>
    </>
  );
};

export default Prac04;
