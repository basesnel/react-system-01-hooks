import { useState, useRef, useEffect } from 'react';
import { FiEdit3 } from 'react-icons/fi';

import DecoratedButton from 'components/DecoratedButton';
import DecoratedInput from 'components/DecoratedInput';
import FlexBox from 'components/FlexBox';
import { videoSrc } from 'constants';

function VideoPlayer({ src, isPlaying }) {
  const playerRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      console.log('Calling video.play()');
      playerRef.current.play();
    } else {
      console.log('Calling video.pause()');
      playerRef.current.pause();
    }
  }, [isPlaying]);

  return <video ref={playerRef} width="250" src={src} loop playsInline />;
}

export default function Prac12() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState('');

  return (
    <FlexBox>
      <VideoPlayer isPlaying={isPlaying} src={videoSrc} />
      <DecoratedButton
        caption={isPlaying ? 'Pause' : 'Play'}
        onClick={() => setIsPlaying(!isPlaying)}
      />
      <DecoratedInput
        inputType="text"
        inputName="text"
        inputValue={text}
        handleChange={e => setText(e.target.value)}
        icon={<FiEdit3 />}
      />
    </FlexBox>
  );
}
