import { useState } from 'react';

import { FlexBox, Button } from 'components';

import { VideoPlayer } from '../intendedComponents';

import { videoSrc } from 'constants';

const Prac11 = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <FlexBox>
      <VideoPlayer src={videoSrc} isPlaying={isPlaying} />
      <Button
        caption={isPlaying ? 'Pause' : 'Play'}
        onClick={() => setIsPlaying(!isPlaying)}
      />
    </FlexBox>
  );
};

export default Prac11;
