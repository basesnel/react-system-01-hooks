import { useState } from 'react';

import { RiZoomInFill } from 'react-icons/ri';
import { RiZoomOutFill } from 'react-icons/ri';

import Map from './Map';

import FlexBox from 'components/FlexBox';
import Span from 'components/Span';
import IconButton from 'components/IconButton';

export default function Prac09() {
  const [zoomLevel, setZoomLevel] = useState(0);
  return (
    <>
      <FlexBox>
        <Span>Zuum level: {zoomLevel}x</Span>
        <IconButton
          icon={<RiZoomInFill />}
          caption="add"
          onClick={() => {
            setZoomLevel(zoomLevel + 1);
          }}
        />
        <IconButton
          icon={<RiZoomOutFill />}
          caption="subtract"
          onClick={() => {
            setZoomLevel(zoomLevel - 1);
          }}
        />
      </FlexBox>
      <Map zoomLevel={zoomLevel} />
    </>
  );
}
