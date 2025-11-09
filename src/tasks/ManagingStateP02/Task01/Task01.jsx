import { useState } from 'react';
import { Linput } from 'components';

const Task01 = () => {
  const [text, setText] = useState('');

  const handleChange = e => {
    setText(e.target.value);
  };

  return (
    <>
      <Linput
        label="First input"
        name="Task01first input"
        value={text}
        onChange={handleChange}
      />
      <Linput
        label="Second input"
        name="Task01second input"
        value={text}
        onChange={handleChange}
      />
    </>
  );
};

export default Task01;
