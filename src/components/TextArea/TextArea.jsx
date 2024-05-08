import PropTypes from 'prop-types';

import css from './TextArea.module.css';

export default function TextArea(props) {
  const {
    isDisabled,
    textAreaType,
    textAreaName,
    textAreaValue,
    textAreaLabel,
    textAreaPlaceholder,
    handleChange,
    icon,
    textAreaRef,
  } = props;
  const { field, label, wrapInput, input, iconInput, iconTextarea } = css;

  return (
    <div className={field}>
      {textAreaLabel && (
        <label className={label} htmlFor={textAreaName}>
          {textAreaLabel}
        </label>
      )}
      <div className={wrapInput}>
        <textarea
          disabled={isDisabled}
          type={textAreaType}
          name={textAreaName}
          id={textAreaName}
          value={textAreaValue}
          autoComplete="off"
          className={input}
          placeholder={textAreaPlaceholder}
          onChange={handleChange}
          ref={textAreaRef}
        />
        <span className={`${iconInput} ${iconTextarea}`}>{icon}</span>
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

TextArea.defaultProps = {
  isDisabled: null,
  textAreaType: null,
  textAreaName: null,
  textAreaValue: null,
  textAreaLabel: null,
  textAreaPlaceholder: null,
  handleChange: null,
  icon: null,
  textAreaRef: null,
};
