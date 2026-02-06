import { useState } from 'react';
import { MdChat } from 'react-icons/md';
import { Textarea } from 'components';

const FormT03 = () => {
  const [text, setText] = useState('');
  return (
    <Textarea
      name="Task03Text"
      value={text}
      placeholder="Type something..."
      handleChange={e => setText(e.target.value)}
      icon={<MdChat />}
    />
  );
};

export default FormT03;
