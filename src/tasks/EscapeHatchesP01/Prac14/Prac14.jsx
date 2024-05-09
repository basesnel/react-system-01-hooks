import { useState, useEffect } from 'react';
import { MdTask } from 'react-icons/md';

import FlexBox from 'components/FlexBox';
import Input from 'components/Input';
import Title from 'components/Title';
import Button from 'components/Button';

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
}

export default function Prac14() {
  const [show, setShow] = useState(false);

  return (
    <>
      <FlexBox>
        <Button
          caption={`${show ? 'Unmount' : 'Mount'} the component`}
          onClick={() => setShow(!show)}
        />
      </FlexBox>
      {show && <Playground />}
    </>
  );
}
