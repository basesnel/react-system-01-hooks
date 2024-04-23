import PropTypes from 'prop-types';

import css from './TextArea.module.css';

export default function TextArea({
  isDisabled,
  textAreaType,
  textAreaName,
  textAreaValue,
  textAreaLabel,
  textAreaPlaceholder,
  handleChange,
  icon,
  textAreaRef,
}) {
  return (
    <div className={css.field}>
      {textAreaLabel && (
        <label className={css.label} htmlFor={textAreaName}>
          {textAreaLabel}
        </label>
      )}
      <div className={css['wrap-input']}>
        <textarea
          disabled={isDisabled}
          type={textAreaType}
          name={textAreaName}
          id={textAreaName}
          value={textAreaValue}
          autoComplete="off"
          className={css.input}
          placeholder={textAreaPlaceholder}
          onChange={handleChange}
          ref={textAreaRef}
        />
        <span className={`${css.icon} ${css['icon-textarea']}`}>{icon}</span>
      </div>
    </div>
  );
}

TextArea.propTypes = {
  isDisabled: PropTypes.bool,
  textAreaType: PropTypes.string,
  textAreaName: PropTypes.string,
  textAreaValue: PropTypes.string,
  textAreaLabel: PropTypes.string,
  textAreaPlaceholder: PropTypes.string,
  handleChange: PropTypes.func,
  icon: PropTypes.node,
  textAreaRef: PropTypes.any,
};
