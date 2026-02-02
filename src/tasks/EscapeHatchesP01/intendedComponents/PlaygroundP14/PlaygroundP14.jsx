import { useState, useEffect } from 'react';
import { MdTask } from 'react-icons/md';
import { FlexBox, TextInput, H } from 'components';

const PlaygroundP14 = () => {
  const [text, setText] = useState('a');

  useEffect(() => {
    function onTimeout() {
      console.log('⏰ ' + text);
    }

    console.log('🔵 Shedule "' + text + '" log');
    const timeoutId = setTimeout(onTimeout, 3000);

    return () => {
      console.log('🟡 Cancel "' + text + '" log');
      clearTimeout(timeoutId);
    };
  }, [text]);

  return (
    <FlexBox wrapped="wrap">
      <TextInput
        name="sheduleP14"
        value={text}
        label="What to log:"
        placeholder="Type a shedule name..."
        onChange={e => setText(e.target.value)}
        icon={<MdTask />}
      />
      <H level={3}>{text}</H>
    </FlexBox>
  );
};

export default PlaygroundP14;
