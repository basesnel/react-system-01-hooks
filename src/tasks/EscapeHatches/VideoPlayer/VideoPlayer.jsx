import { useState, useRef } from 'react';

import DecoratedButton from 'components/DecoratedButton';
import FlexBox from 'components/FlexBox';

import { videoSrc } from 'constants';

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);
    nextIsPlaying ? videoRef.current.play() : videoRef.current.pause();
  }

  return (
    <FlexBox>
      <video
        width="250"
        ref={videoRef}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <DecoratedButton
        caption={isPlaying ? 'Pause' : 'Play'}
        onClick={handleClick}
      />
    </FlexBox>
  );
}
