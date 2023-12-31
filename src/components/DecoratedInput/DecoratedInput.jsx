import PropTypes from 'prop-types';

import css from './DecoratedInput.module.css';

export default function DecoratedInput({
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
  return (
    <label className={css.field}>
      {inputLabel && <span className={css.label}>{inputLabel}</span>}
      <div className={css['wrap-input']}>
        <input
          disabled={isDisabled}
          type={inputType}
          name={inputName}
          value={inputValue}
          autoComplete="off"
          className={css.input}
          placeholder={inputPlaceholder}
          onChange={handleChange}
          ref={inputRef}
        />
        <span className={css.icon}>{icon}</span>
      </div>
    </label>
  );
}

DecoratedInput.propTypes = {
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
