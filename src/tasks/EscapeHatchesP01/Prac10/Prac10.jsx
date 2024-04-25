import { useState, useRef } from 'react';

import Button from 'components/Button';
import Paragraph from 'components/Paragraph';
import FlexBox from 'components/FlexBox';

export default function Prac10() {
  const [show, setShow] = useState(true);
  const [isBlocked, setIsBlocked] = useState(false);
  const ref = useRef(null);

  return (
    <>
      <FlexBox>
        <Button
          caption="Toggle with state"
          onClick={() => {
            setShow(!show);
          }}
          isDisabled={isBlocked}
        />
        <Button
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
