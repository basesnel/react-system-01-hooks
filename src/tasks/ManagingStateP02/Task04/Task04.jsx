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
        <Field label="Last name" name="task04fname" />
        <Field label="First name" name="task04fname" />
        {checkbox}
      </>
    );
  } else {
    return (
      <>
        <Field label="First name" name="task04fname" />
        <Field label="Last name" name="task04lname" />
        {checkbox}
      </>
    );
  }
};

const Field = ({ label, name }) => {
  const [text, setText] = useState('');
  return (
    <Input
      label={label}
      name={name}
      value={text}
      onChange={e => setText(e.target.value)}
    />
  );
};

const Input = ({ label, name, value, onChange }) => {
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
