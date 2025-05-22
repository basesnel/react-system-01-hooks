import PropTypes from 'prop-types';

import styles from './styles.module.css';

const TextArea = props => {
  const {
    isDisabled,
    textAreaName,
    textAreaValue,
    textAreaLabel,
    textAreaPlaceholder,
    handleChange,
    icon,
    textAreaRef,
  } = props;

  const valueProps = {
    ...(textAreaValue === null || handleChange === null
      ? { defaultValue: '', readOnly: true }
      : { value: textAreaValue, onChange: handleChange }),
  };

  return (
    <div className={styles.field}>
      {textAreaLabel && (
        <label className={styles.label} htmlFor={textAreaName}>
          {textAreaLabel}
        </label>
      )}
      <div className={styles.wrap}>
        <textarea
          disabled={isDisabled}
          id={textAreaName}
          {...valueProps}
          autoComplete="off"
          className={styles.input}
          placeholder={textAreaPlaceholder}
          ref={textAreaRef}
        />
        <span className={`${styles.icon} ${styles.iconTextarea}`}>{icon}</span>
      </div>
    </div>
  );
};

TextArea.propTypes = {
  isDisabled: PropTypes.bool,
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
  textAreaName: null,
  textAreaValue: null,
  textAreaLabel: null,
  textAreaPlaceholder: null,
  handleChange: null,
  icon: null,
  textAreaRef: null,
};

export default TextArea;
