import { useState } from 'react';

import { RiZoomInFill } from 'react-icons/ri';
import { RiZoomOutFill } from 'react-icons/ri';

import FlexBox from 'components/FlexBox';
import Span from 'components/Span';
import IconButton from 'components/IconButton';

import Map from './Map';

import css from './Prac09.module.css';

const Prac09 = () => {
  const { wrapper, wrapControls } = css;

  const [zoomLevel, setZoomLevel] = useState(0);
  return (
    <div className={wrapper}>
      <div className={wrapControls}>
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
      </div>
      <Map zoomLevel={zoomLevel} />
    </div>
  );
};

export default Prac09;
