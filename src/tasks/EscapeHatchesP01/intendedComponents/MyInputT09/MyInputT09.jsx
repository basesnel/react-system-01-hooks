import { useRef, forwardRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiEdit } from 'react-icons/fi';
// import { TextInput } from 'components';

import styles from './styles.module.css';

const MyInputT09 = props => {
  const { value, onChange } = props;

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) ref.current.focus();
  }, []);

  return (
    <TextInput
      ref={ref}
      type="text"
      name="nameT09"
      value={value}
      label="Enter your name"
      placeholder="Type your name..."
      onChange={onChange}
      icon={<FiEdit />}
    />
  );
};

const TextInput = forwardRef((props, ref) => {
  const { disabled, type, name, value, label, placeholder, onChange, icon } =
    props;

  const { field, caption, wrap, input, pictogram } = styles;

  const valueProps = {
    ...(value === null || onChange === null
      ? { defaultValue: '', readOnly: true }
      : { value: value, onChange: onChange }),
  };

  return (
    <div className={field}>
      {label && (
        <label className={caption} htmlFor={name}>
          {label}
        </label>
      )}
      <div className={wrap}>
        <input
          className={input}
          id={name}
          name={name}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          autoComplete="off"
          {...valueProps}
          ref={ref}
        />
        <span className={pictogram}>{icon}</span>
      </div>
    </div>
  );
});

MyInputT09.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MyInputT09;
