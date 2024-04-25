import { useState } from 'react';
import ModalDialog from './ModalDialog';

import FlexBox from 'components/FlexBox';
import Button from 'components/Button';

export default function Prac04() {
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
}
