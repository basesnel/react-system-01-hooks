import { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Task01 = () => {
  const [text, setText] = useState('');

  const handleChange = e => {
    setText(e.target.value);
  };

  return (
    <>
      <Input
        label="First input"
        name="Task01first input"
        value={text}
        onChange={handleChange}
      />
      <Input
        label="Second input"
        name="Task01second input"
        value={text}
        onChange={handleChange}
      />
    </>
  );
};

const Input = ({ label, name, value, onChange }) => {
  return (
    <label className={styles.label}>
      <span className={styles.span}>{label}</span>
      <input
        className={styles.input}
        name={name}
        size={10}
        value={value}
        onChange={onChange}
        placeholder="Type any text..."
      />
    </label>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Task01;
