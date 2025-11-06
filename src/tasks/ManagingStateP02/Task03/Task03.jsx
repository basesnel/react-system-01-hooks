import { useState } from 'react';

const Task03 = () => {
  const [showHint, setShowHint] = useState(false);

  return (
    <div>
      {showHint && (
        <p>
          <i>Hint your favorite city?</i>
        </p>
      )}
      <Form />
      {showHint ? (
        <button onClick={() => setShowHint(false)}>Hide hint</button>
      ) : (
        <button onClick={() => setShowHint(true)}>Hide hint</button>
      )}
    </div>
  );
};

const Form = () => {
  const [text, setText] = useState('');
  return <textarea value={text} onChange={e => setText(e.target.value)} />;
};

export default Task03;
