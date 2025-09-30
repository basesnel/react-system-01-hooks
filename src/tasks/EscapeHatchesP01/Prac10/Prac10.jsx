import { useState, useRef } from 'react';
import { FlexBox, Button, P } from 'components';

const Prac10 = () => {
  const [show, setShow] = useState(true);
  const [isBlocked, setIsBlocked] = useState(false);
  const ref = useRef(null);

  return (
    <>
      <FlexBox wrapped="wrap">
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
        <P centered={true} paragraphRef={ref}>
          Hello world
        </P>
      )}
    </>
  );
};

export default Prac10;
