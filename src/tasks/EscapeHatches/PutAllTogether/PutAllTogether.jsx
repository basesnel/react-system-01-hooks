import { useState, useEffect } from 'react';
import { MdTask } from 'react-icons/md';

import DecoratedInput from 'components/DecoratedInput';
import FlexBox from 'components/FlexBox';
import Title from 'components/Title';
import DecoratedButton from 'components/DecoratedButton';

function Playground() {
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
      <DecoratedInput
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
}

export default function PutAllTogether() {
  const [show, setShow] = useState(false);

  return (
    <>
      <FlexBox>
        <DecoratedButton
          caption={`${show ? 'Unmount' : 'Mount'} the component`}
          onClick={() => setShow(!show)}
        />
      </FlexBox>
      {show && <Playground />}
    </>
  );
}
