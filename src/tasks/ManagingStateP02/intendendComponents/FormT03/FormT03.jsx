import { useState } from 'react';
import { MdChat } from 'react-icons/md';
import { TextArea } from 'components';

const FormT03 = () => {
  const [text, setText] = useState('');
  return (
    <TextArea
      textAreaName="Task03Text"
      textAreaValue={text}
      handleChange={e => setText(e.target.value)}
      icon={<MdChat />}
    />
  );
};

export default FormT03;
