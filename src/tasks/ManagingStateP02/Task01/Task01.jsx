import { useState } from 'react';
import PropTypes from 'prop-types';
// import { Button, Paragraph, Title } from 'components';

// import styles from './styles.module.css';

const Task01 = () => {
  return (
    <>
      <Input label="First input" />
      <Input label="Second input" />
    </>
  );
};

const Input = ({ label }) => {
  const [text, setText] = useState('');

  const handleChange = e => {
    setText(e.target.value);
  };

  return (
    <label>
      {label} <input value={text} onChange={handleChange} />
    </label>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Task01;
