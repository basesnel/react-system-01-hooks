import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const TextInput = forwardRef((props, ref) => {
  const {
    disabled,
    type,
    name,
    value,
    label,
    placeholder,
    autoComplete,
    onChange,
    icon,
  } = props;

  const { field, caption, input, pictogram } = styles;

  const valueProps = {
    ...(value === null || onChange === null
      ? null
      : { value: value, onChange: onChange }),
  };

  return (
    <div className={field}>
      {label && (
        <label className={caption} htmlFor={name}>
          {label}
        </label>
      )}
      <input
        className={input}
        id={name}
        name={name}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        autoComplete={autoComplete}
        {...valueProps}
        ref={ref}
      />
      <span className={pictogram}>{icon}</span>
    </div>
  );
});

TextInput.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['text', 'password', 'file', 'email', 'url', 'tel'])
    .isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.oneOf(['on', 'off']),
  onChange: PropTypes.func,
  icon: PropTypes.node,
};

TextInput.defaultProps = {
  disabled: null,
  type: 'text',
  value: null,
  label: null,
  placeholder: null,
  autoComplete: 'off',
  onChange: null,
  icon: null,
};

export default TextInput;
