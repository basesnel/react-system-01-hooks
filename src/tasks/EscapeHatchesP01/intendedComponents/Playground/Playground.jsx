import { useState, useEffect } from 'react';
import { MdTask } from 'react-icons/md';
import { FlexBox, Input, Title } from 'components';

const Playground = () => {
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
    <FlexBox>
      <Input
        inputLabel="What to log:"
        inputName="shedule"
        inputType="text"
        inputPlaceholder="type a shedule name"
        inputValue={text}
        handleChange={e => setText(e.target.value)}
        icon={<MdTask />}
      />
      <Title level={3} caption={text} />
    </FlexBox>
  );
};

export default Playground;
