import { useState } from 'react';

const Task03 = () => {
  const [showHint, setShowHint] = useState(false);

  if (showHint)
    return (
      <div>
        <p>
          <i>Hint your favorite city?</i>
        </p>
        <Form />
        <button onClick={() => setShowHint(false)}>Hide hint</button>
      </div>
    );

  return (
    <div>
      <Form />
      <button onClick={() => setShowHint(true)}>Show hint</button>
    </div>
  );
};

const Form = () => {
  const [text, setText] = useState('');
  return <textarea value={text} onChange={e => setText(e.target.value)} />;
};

export default Task03;
