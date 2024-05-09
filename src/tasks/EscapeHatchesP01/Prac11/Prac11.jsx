import { useState } from 'react';

import FlexBox from 'components/FlexBox';
import Button from 'components/Button';

import VideoPlayer from '../intendedComponents/VideoPlayer';

import { videoSrc } from 'constants';

export default function Prac11() {
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
}
