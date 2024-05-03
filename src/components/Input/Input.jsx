import PropTypes from 'prop-types';

import css from './Input.module.css';

export default function Input({
  isDisabled,
  inputType,
  inputName,
  inputValue,
  inputLabel,
  inputPlaceholder,
  handleChange,
  icon,
  inputRef,
}) {
  const valueProps = {
    ...(inputValue === null || handleChange === null
      ? { defaultValue: '', readOnly: true }
      : { value: inputValue, onChange: handleChange }),
  };

  return (
    <div className={css.field}>
      {inputLabel && (
        <label className={css.label} htmlFor={inputName}>
          {inputLabel}
        </label>
      )}
      <div className={css['wrap-input']}>
        <input
          disabled={isDisabled}
          type={inputType}
          name={inputName}
          id={inputName}
          {...valueProps}
          autoComplete="off"
          className={css.input}
          placeholder={inputPlaceholder}
          ref={inputRef}
        />
        <span className={css.icon}>{icon}</span>
      </div>
    </div>
  );
}

Input.propTypes = {
  isDisabled: PropTypes.bool,
  inputType: PropTypes.string,
  inputName: PropTypes.string,
  inputValue: PropTypes.string,
  inputLabel: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  handleChange: PropTypes.func,
  icon: PropTypes.node,
  inputRef: PropTypes.any,
};

Input.defaultProps = {
  isDisabled: null,
  inputType: null,
  inputName: null,
  inputValue: null,
  inputLabel: null,
  inputPlaceholder: null,
  handleChange: null,
  icon: null,
  inputRef: null,
};
