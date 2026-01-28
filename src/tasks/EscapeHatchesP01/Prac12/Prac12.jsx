import { useState } from 'react';
import { FiEdit3 } from 'react-icons/fi';
import { FlexBox, Button, TextInput } from 'components';
import { videoSrc } from 'constants';
import { VideoPlayer } from '../intendedComponents';

const Prac12 = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState('');

  return (
    <FlexBox wrapped="wrap">
      <VideoPlayer isPlaying={isPlaying} src={videoSrc} />
      <Button
        caption={isPlaying ? 'Pause' : 'Play'}
        onClick={() => setIsPlaying(!isPlaying)}
      />
      <TextInput
        type="text"
        name="textP12"
        value={text}
        placeholder="Type text..."
        onChange={e => setText(e.target.value)}
        icon={<FiEdit3 />}
      />
    </FlexBox>
  );
};

export default Prac12;
