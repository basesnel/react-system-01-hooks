import PropTypes from 'prop-types';

import css from './DecoratedInput.module.css';

export default function DecoratedInput({
  inputType,
  inputName,
  inputValue,
  inputLabel,
  handleChange,
  icon,
}) {
  return (
    <label className={css.field}>
      {inputLabel && <span className={css.label}>{inputLabel}</span>}
      <div className={css['wrap-input']}>
        <input
          type={inputType}
          name={inputName}
          className={css.input}
          onChange={handleChange}
          value={inputValue}
          autoComplete="off"
        />
        <span className={css.icon}>{icon}</span>
      </div>
    </label>
  );
}

DecoratedInput.propTypes = {
  inputType: PropTypes.string,
  inputName: PropTypes.string,
  inputValue: PropTypes.string,
  inputLabel: PropTypes.string,
  handleChange: PropTypes.func,
  icon: PropTypes.node,
};
