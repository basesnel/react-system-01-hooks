import { useState } from 'react';
import ModalDialog from './ModalDialog';

import FlexBox from 'components/FlexBox';
import DecoratedButton from 'components/DecoratedButton';

export default function Prac04() {
  const [show, setShow] = useState(false);

  return (
    <>
      <FlexBox>
        <DecoratedButton
          caption="Open dialog"
          onClick={() => {
            setShow(true);
          }}
        />
      </FlexBox>
      <ModalDialog isOpen={show}>
        Hello here!
        <hr />
        <DecoratedButton
          caption="Close"
          onClick={() => {
            setShow(false);
          }}
        />
      </ModalDialog>
    </>
  );
}
