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
      {/* <FiLock className={css.icon} /> */}
      <input
        type={inputName}
        name={inputName}
        className={css.input}
        onChange={handleChange}
        value={inputValue}
      />
      {icon}
    </label>
  );
}

DecoratedInput.propTypes = {
  inputName: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  inputLabel: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  icon: PropTypes.node,
};
