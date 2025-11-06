import { useState } from 'react';

import styles from './styles.module.css';

const Task03 = () => {
  const [reverse, setReverse] = useState(false);
  let checkbox = (
    <label>
      <input
        type="checkbox"
        checked={reverse}
        onChange={e => setReverse(e.target.checked)}
      />{' '}
      Reverse order
    </label>
  );

  if (reverse) {
    return (
      <>
        <Field label="Last name" />
        <Field label="First name" />
        {checkbox}
      </>
    );
  } else {
    return (
      <>
        <Field label="First name" />
        <Field label="Last name" />
        {checkbox}
      </>
    );
  }
};

// const Field = ({ label }) => {
//   const [text, setText] = useState('');
//   return (
//     <label>
//       {label}:{' '}
//       <input
//         type="text"
//         value={text}
//         placeholder={label}
//         onChange={e => setText(e.target.value)}
//       />
//     </label>
//   );
// };

const Field = ({ label, name, value, onChange }) => {
  return (
    <label className={styles.label}>
      <span className={styles.span}>{label}: </span>
      <input
        className={styles.input}
        name={name}
        size={10}
        value={value}
        onChange={onChange}
        placeholder={label}
      />
    </label>
  );
};

export default Task03;
