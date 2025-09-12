import { useState } from 'react';
import PropTypes from 'prop-types';
// import { Button, Paragraph, Title } from 'components';

// import styles from './styles.module.css';

const Task01 = () => {
  const [text, setText] = useState('');

  const handleChange = e => {
    setText(e.target.value);
  };

  return (
    <>
      <Input label="First input" value={text} onChange={handleChange} />
      <Input label="Second input" value={text} onChange={handleChange} />
    </>
  );
};

const Input = ({ label, value, onChange }) => {
  return (
    <label>
      {label} <input value={value} onChange={onChange} />
    </label>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Task01;
