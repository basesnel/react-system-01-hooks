import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

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

TextInput.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['text', 'password', 'file', 'email', 'url', 'tel'])
    .isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  icon: PropTypes.node,
};

TextInput.defaultProps = {
  disabled: null,
  type: 'text',
  value: null,
  label: null,
  placeholder: null,
  onChange: null,
  icon: null,
};

export default TextInput;
