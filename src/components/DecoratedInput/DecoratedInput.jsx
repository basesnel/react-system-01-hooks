import PropTypes from 'prop-types';

import css from './DecoratedInput.module.css';

// import { FiLock } from 'react-icons/fi';

export default function DecoratedInput({
  inputName,
  inputValue,
  inputLabel,
  handleChange,
  icon,
}) {
  return (
    <label className={css.field}>
      <span className={css.label}>{inputLabel}</span>
      <div className={css['wrap-input']}>
        <input
          type={inputName}
          name={inputName}
          className={css.input}
          onChange={handleChange}
          value={inputValue}
        />
        {icon}
      </div>
    </label>
  );
}

DecoratedInput.propTypes = {
  inputName: PropTypes.string,
  inputValue: PropTypes.string,
  inputLabel: PropTypes.string,
  handleChange: PropTypes.func,
  icon: PropTypes.node,
};
