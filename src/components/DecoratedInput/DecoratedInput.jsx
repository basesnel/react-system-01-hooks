import css from './DecoratedInput.module.css';

// import { FiLock } from 'react-icons/fi';

export const DecoratedInput = ({
  inputName,
  inputValue,
  inputLabel,
  handleChange,
  icon,
}) => {
  return (
    <label className={css.field}>
      <span className={css.label}>{inputLabel}</span>
      {icon}
      {/* <FiLock className={css.icon} /> */}
      <input
        type={inputName}
        name={inputName}
        className={css.input}
        onChange={handleChange}
        value={inputValue}
      />
    </label>
  );
};
