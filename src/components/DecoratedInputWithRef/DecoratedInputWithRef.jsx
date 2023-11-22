import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import css from './DecoratedInputWithRef.module.css';

const DecoratedInputWithRef = forwardRef((props, ref) => {
  const {
    isDisabled,
    inputType,
    inputName,
    inputValue,
    inputLabel,
    inputPlaceholder,
    handleChange,
    icon,
  } = props;

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
          ref={ref}
        />
        <span className={css.icon}>{icon}</span>
      </div>
    </label>
  );
});

export default DecoratedInputWithRef;

DecoratedInputWithRef.propTypes = {
  isDisabled: PropTypes.bool,
  inputType: PropTypes.string,
  inputName: PropTypes.string,
  inputValue: PropTypes.string,
  inputLabel: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  handleChange: PropTypes.func,
  icon: PropTypes.node,
};
