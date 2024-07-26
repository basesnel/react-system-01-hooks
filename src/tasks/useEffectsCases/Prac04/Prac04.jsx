import { useState } from 'react';
import { FlexBox, Button } from 'components';
import { ModalDialogP04 } from '../IntendendComponents';

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
      <ModalDialogP04 isOpen={show}>
        Hello here!
        <hr />
        <Button
          caption="Close"
          onClick={() => {
            setShow(false);
          }}
        />
      </ModalDialogP04>
    </>
  );
};

export default Prac04;
