import { useState } from 'react';
import { MdChat } from 'react-icons/md';
import { TextArea } from 'components';

const FormT03 = () => {
  const [text, setText] = useState('');
  return (
    <TextArea
      name="Task03Text"
      value={text}
      placeholder="Type something..."
      handleChange={e => setText(e.target.value)}
      icon={<MdChat />}
    />
  );
};

export default FormT03;
