import { useState } from 'react';

import { FiEdit3 } from 'react-icons/fi';

import { FlexBox, Button, Input } from 'components';

import { VideoPlayer } from '../intendedComponents';

import { videoSrc } from 'constants';

const Prac12 = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState('');

  return (
    <FlexBox>
      <VideoPlayer isPlaying={isPlaying} src={videoSrc} />
      <Button
        caption={isPlaying ? 'Pause' : 'Play'}
        onClick={() => setIsPlaying(!isPlaying)}
      />
      <Input
        inputType="text"
        inputName="text"
        inputValue={text}
        handleChange={e => setText(e.target.value)}
        icon={<FiEdit3 />}
      />
    </FlexBox>
  );
};

export default Prac12;
