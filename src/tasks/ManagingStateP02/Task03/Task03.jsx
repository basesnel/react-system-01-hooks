import { useState } from 'react';
import { MdChat } from 'react-icons/md';
import { Button, P, TextArea } from 'components';

const Task03 = () => {
  const [showHint, setShowHint] = useState(false);

  return (
    <div>
      {showHint && <P>Hint your favorite city?</P>}
      <Form />
      {showHint ? (
        <Button onClick={() => setShowHint(false)} caption="Hide hint" />
      ) : (
        <Button onClick={() => setShowHint(true)} caption="Show hint" />
      )}
    </div>
  );
};

const Form = () => {
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

export default Task03;
