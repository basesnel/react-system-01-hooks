import { useState } from 'react';

import { RiZoomInFill, RiZoomOutFill } from 'react-icons/ri';

import { FlexBox, Span, IconButton } from 'components';

import { Map } from '../IntendendComponents';

import css from './Prac09.module.css';

const Prac09 = () => {
  const { wrapper, wrapControls, wrapMap } = css;

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
      <div className={wrapMap}>
        <Map zoomLevel={zoomLevel} />
      </div>
    </div>
  );
};

export default Prac09;
