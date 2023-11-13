import { useState } from 'react';

import { RiZoomInFill } from 'react-icons/ri';
import { RiZoomOutFill } from 'react-icons/ri';

import Map from './Map';

import FlexBox from 'components/FlexBox';
import Span from 'components/Span';
import DecoratedIconButton from 'components/DecoratedIconButton';

export default function MapWidget() {
  const [zoomLevel, setZoomLevel] = useState(0);
  return (
    <>
      <FlexBox>
        <Span>Zuum level: {zoomLevel}x</Span>
        <DecoratedIconButton
          icon={<RiZoomInFill />}
          caption="add"
          onClick={() => {
            setZoomLevel(zoomLevel + 1);
          }}
        />
        <DecoratedIconButton
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
