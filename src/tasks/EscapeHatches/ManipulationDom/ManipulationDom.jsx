import { useState, useRef } from 'react';

import DecoratedButton from 'components/DecoratedButton';
import Paragraph from 'components/Paragraph';
import FlexBox from 'components/FlexBox';

export default function ManipulationDom() {
  const [show, setShow] = useState(true);
  const [isBlocked, setIsBlocked] = useState(false);
  const ref = useRef(null);

  return (
    <>
      <FlexBox>
        <DecoratedButton
          caption="Toggle with state"
          onClick={() => {
            setShow(!show);
          }}
          isDisabled={isBlocked}
        />
        <DecoratedButton
          caption="Remove from the DOM"
          onClick={() => {
            setIsBlocked(true);
            ref.current.remove();
          }}
          isDisabled={!show || isBlocked}
        />
      </FlexBox>
      {show && (
        <Paragraph centered={true} paragraphRef={ref}>
          Hello world
        </Paragraph>
      )}
    </>
  );
}
