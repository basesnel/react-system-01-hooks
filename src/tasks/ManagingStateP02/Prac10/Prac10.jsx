import { useState } from 'react';
// import { Button, CheckBox, Span } from 'components';

// import styles from './styles.module.css';

const Prac10 = () => {
  const [counter, setCounter] = useState(0);

  const MyTextField = () => {
    const [text, setText] = useState('');

    return <input value={text} onChange={e => setText(e.target.value)} />;
  };

  return (
    <>
      <MyTextField />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Clicked {counter} times
      </button>
    </>
  );
};

export default Prac10;
