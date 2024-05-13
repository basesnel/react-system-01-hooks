import PropTypes from 'prop-types';

import css from './Input.module.css';

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
  const { field, label, wrapInput, input, iconInput } = css;

  const valueProps = {
    ...(inputValue === null || handleChange === null
      ? { defaultValue: '', readOnly: true }
      : { value: inputValue, onChange: handleChange }),
  };

  return (
    <div className={field}>
      {inputLabel && (
        <label className={label} htmlFor={inputName}>
          {inputLabel}
        </label>
      )}
      <div className={wrapInput}>
        <input
          disabled={isDisabled}
          type={inputType}
          name={inputName}
          id={inputName}
          {...valueProps}
          autoComplete="off"
          className={input}
          placeholder={inputPlaceholder}
          ref={inputRef}
        />
        <span className={iconInput}>{icon}</span>
      </div>
    </div>
  );
};

Input.propTypes = {
  isDisabled: PropTypes.bool,
  inputType: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  inputValue: PropTypes.string,
  inputLabel: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  handleChange: PropTypes.func,
  icon: PropTypes.node,
  inputRef: PropTypes.any,
};

Input.defaultProps = {
  isDisabled: null,
  inputValue: null,
  inputLabel: null,
  inputPlaceholder: null,
  handleChange: null,
  icon: null,
  inputRef: null,
};

export default Input;
