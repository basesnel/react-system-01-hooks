import { useState } from 'react';
import { FlexBox, Button } from 'components';
import { videoSrc } from 'constants';
import { VideoPlayer } from '../intendedComponents';

const Prac11 = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <FlexBox wrapped="wrap">
      <VideoPlayer src={videoSrc} isPlaying={isPlaying} />
      <Button
        caption={isPlaying ? 'Pause' : 'Play'}
        onClick={() => setIsPlaying(!isPlaying)}
      />
    </FlexBox>
  );
};

export default Prac11;
