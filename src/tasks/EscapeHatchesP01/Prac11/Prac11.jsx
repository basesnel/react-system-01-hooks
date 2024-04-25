import { useState, useRef, useEffect } from 'react';

import FlexBox from 'components/FlexBox';
import Button from 'components/Button';

import { videoSrc } from 'constants';

function VideoPlayer({ src, isPlaying }) {
  const playerRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      playerRef.current.play();
    } else {
      playerRef.current.pause();
    }
  });

  return <video ref={playerRef} width="250" src={src} loop playsInline />;
}

export default function Prac11() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <FlexBox>
      <VideoPlayer isPlaying={isPlaying} src={videoSrc} />
      <Button
        caption={isPlaying ? 'Pause' : 'Play'}
        onClick={() => setIsPlaying(!isPlaying)}
      />
    </FlexBox>
  );
}
