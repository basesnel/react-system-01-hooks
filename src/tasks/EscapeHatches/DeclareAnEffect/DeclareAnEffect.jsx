import { useState, useRef, useEffect } from 'react';

import FlexBox from 'components/FlexBox';
import DecoratedButton from 'components/DecoratedButton';

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

export default function DeclareAnEffect() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <FlexBox>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
      <DecoratedButton
        caption={isPlaying ? 'Pause' : 'Play'}
        onClick={() => setIsPlaying(!isPlaying)}
      />
    </FlexBox>
  );
}
