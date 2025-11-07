import { useState } from 'react';
import { CheckBox } from 'components';

import styles from './styles.module.css';

const Task03 = () => {
  const [reverse, setReverse] = useState(false);

  if (reverse) {
    return (
      <>
        <Field key="lname" label="Last name" name="task04lname" />
        <Field key="fname" label="First name" name="task04fname" />
        <CheckBox
          name="task04check"
          checked={reverse}
          onChange={e => setReverse(e.target.checked)}
          label="Reverse order"
        />
      </>
    );
  } else {
    return (
      <>
        <Field key="fname" label="First name" name="task04fname" />
        <Field key="lname" label="Last name" name="task04lname" />
        <CheckBox
          name="task04check"
          checked={reverse}
          onChange={e => setReverse(e.target.checked)}
          label="Reverse order"
        />
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
