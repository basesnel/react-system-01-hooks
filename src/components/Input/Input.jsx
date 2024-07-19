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

  const valueProps = {
    ...(inputValue === null || handleChange === null
      ? { defaultValue: '', readOnly: true }
      : { value: inputValue, onChange: handleChange }),
  };

  return (
    <div className={styles.field}>
      {inputLabel && (
        <label className={styles.label} htmlFor={inputName}>
          {inputLabel}
        </label>
      )}
      <div className={styles.wrapInput}>
        <input
          disabled={isDisabled}
          type={inputType}
          name={inputName}
          id={inputName}
          {...valueProps}
          autoComplete="off"
          className={styles.input}
          placeholder={inputPlaceholder}
          ref={inputRef}
        />
        <span className={styles.iconInput}>{icon}</span>
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
