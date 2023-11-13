import { useState } from 'react';

import { RiZoomInFill } from 'react-icons/ri';
import { RiZoomOutFill } from 'react-icons/ri';

import Map from './Map';

import FlexBox from 'components/FlexBox';
import Text from 'components/Text';
import DecoratedIconButton from 'components/DecoratedIconButton';

export default function MapWidget() {
  const [zoomLevel, setZoomLevel] = useState(0);
  return (
    <>
      <FlexBox>
        <Text>Zuum level: {zoomLevel}x</Text>
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
