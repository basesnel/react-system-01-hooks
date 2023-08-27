import css from './DecoratedInput.module.css';

export const DecoratedInput = ({
  inputName,
  inputValue,
  inputLabel,
  handleChange,
}) => {
  return (
    <label className={css.field}>
      <span className={css.label}>{inputLabel}</span>
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
