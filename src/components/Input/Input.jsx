import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Input = props => {
  const {
    isDisabled,
    inputType,
    inputName,
    inputValue,
    inputLabel,
    inputPlaceholder,
    handleChange,
    icon,
    inputRef,
  } = props;
  const { field, caption, wrap, input, pictogram } = styles;

  const valueProps = {
    ...(inputValue === null || handleChange === null
      ? { defaultValue: '', readOnly: true }
      : { value: inputValue, onChange: handleChange }),
  };

  return (
    <div className={field}>
      {inputLabel && (
        <label className={caption} htmlFor={inputName}>
          {inputLabel}
        </label>
      )}
      <div className={wrap}>
        <input
          className={input}
          disabled={isDisabled}
          type={inputType}
          name={inputName}
          id={inputName}
          {...valueProps}
          autoComplete="off"
          placeholder={inputPlaceholder}
          ref={inputRef}
        />
        <span className={pictogram}>{icon}</span>
      </div>
    </div>
  );
};

Input.propTypes = {
  isDisabled: PropTypes.bool,
  inputType: PropTypes.oneOf([
    'text',
    'password',
    'file',
    'email',
    'url',
    'tel',
  ]).isRequired,
  inputName: PropTypes.string.isRequired,
  inputValue: PropTypes.string,
  inputLabel: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  handleChange: PropTypes.func,
  icon: PropTypes.node,
  inputRef: PropTypes.any,
};

Input.defaultProps = {
  inputType: 'text',
  isDisabled: null,
  inputValue: null,
  inputLabel: null,
  inputPlaceholder: null,
  handleChange: null,
  icon: null,
  inputRef: null,
};

export default Input;
