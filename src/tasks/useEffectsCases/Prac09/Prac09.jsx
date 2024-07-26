import { useState } from 'react';
import { RiZoomInFill, RiZoomOutFill } from 'react-icons/ri';
import { FlexBox, Span, IconButton } from 'components';
import { MapP09 } from '../IntendendComponents';

import styles from './styles.module.css';

const Prac09 = () => {
  const [zoomLevel, setZoomLevel] = useState(0);

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapControls}>
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
      <div className={styles.wrapMap}>
        <MapP09 zoomLevel={zoomLevel} />
      </div>
    </div>
  );
};

export default Prac09;
